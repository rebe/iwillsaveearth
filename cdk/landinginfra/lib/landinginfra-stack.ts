import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cdk from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as targets from 'aws-cdk-lib/aws-route53-targets';

import { Construct } from 'constructs';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

// TODO retentionpolicies

interface BucketProps {
  createBucket: boolean;
  bucketName: string;
  landingPagePath: string;
  logbucketfolderprefix: string;
  isPublic: boolean;
  deploy: boolean;
  staticprefix: string;
}

export class LandinginfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Bucket properties for development and production
    const devBucketProps: BucketProps = {
      createBucket: false,
      bucketName: 'dev.iwillsave.earth', // Customize the bucket name for development
      landingPagePath: '../../front/landingpage/out', // Specify the path to the development landing page directory,
      logbucketfolderprefix: 'dev-logbucket', // logbucket for dev landinpage
      isPublic: true,
      deploy: false,
      staticprefix: '/'
    };

    const prodBucketProps: BucketProps = {
      createBucket: false,
      bucketName: 'www.iwillsave.earth', // Customize the bucket name for production
      landingPagePath: '../../front/landingpage/out', // Specify the path to the production landing page directory,
      logbucketfolderprefix: 'prod-logbucket', // logbucket for official landingpage
      isPublic: true,
      deploy: true,
      staticprefix: '/'
    };

    const logbucket = s3.Bucket.fromBucketName(this, "iwillsave.earth-logbucket", "iwillsave.earth-logbucket");
    // Originally created development bucket, but deleting them with stack fails, so better to use pregenerated.
    const devBucket = this.createBucket(devBucketProps, logbucket);

    // Create production bucket
    const prodBucket = this.createBucket(prodBucketProps, logbucket);

    // Created a hosted zone in Route 53 but deleting it with stack fails so now we will use it from ID. (pregenerated)
    //const hostedZone = route53.HostedZone.fromHostedZoneId(this, 'IWillSave.earth', 'Z07573044AO0T687P3MV');

    // Cert also needed to be created in us-east-1 Virginia 
    const certificate = acm.Certificate.fromCertificateArn(this, '29382453-1923-4028-b54a-8919e6437fc2',
    'arn:aws:acm:us-east-1:020118621954:certificate/29382453-1923-4028-b54a-8919e6437fc2');

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'OriginAccessIdentity');
    prodBucket.grantRead(originAccessIdentity);
    logbucket.grantReadWrite(originAccessIdentity);


    const publicDistProbs: cloudfront.DistributionProps = {
      defaultBehavior: {
        origin: new origins.S3Origin(prodBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
      },
      domainNames:[prodBucket.bucketName],
      certificate: certificate,
      enableLogging: true,
      logBucket: logbucket,
      logFilePrefix: 'cf-iwillsave.earth-logs',
      logIncludesCookies: true,
      defaultRootObject: "index.html"
    }
    // public web bucket cloud dist
    const publicDist = new cloudfront.Distribution(this,'publicDist', publicDistProbs)
    if (prodBucketProps.deploy) {
      const bucketDeplProps: s3deploy.BucketDeploymentProps ={
        sources: [s3deploy.Source.asset(prodBucketProps.landingPagePath)],
        destinationBucket: prodBucket,
        destinationKeyPrefix: prodBucketProps.staticprefix, // optional prefix in destination bucket
        accessControl: s3.BucketAccessControl.PUBLIC_READ,
        distribution: publicDist,
        distributionPaths: ['/'],
        logRetention: RetentionDays.ONE_MONTH,
      }
      new s3deploy.BucketDeployment(this, `${prodBucket.bucketName}-DeployWebsite`, bucketDeplProps);
    }
    // Output the bucket URLs
    new cdk.CfnOutput(this, 'DevBucketURL', {
      value: devBucket.bucketWebsiteUrl,
    });

    new cdk.CfnOutput(this, 'ProdBucketURL', {
      value: prodBucket.bucketWebsiteUrl,
    });
  }

  private createBucket(props: BucketProps, logbucket: s3.IBucket): s3.IBucket {
    /*const blockPublicAccess = new s3.BlockPublicAccess({
      blockPublicAcls: false,
      ignorePublicAcls: false,
      blockPublicPolicy: false,
      restrictPublicBuckets: false,
    });*/
    let bucket: s3.IBucket;
    if (props.createBucket) {
      // This is the original generated bucket
      bucket = new s3.Bucket(this, props.bucketName, {
        bucketName: props.bucketName,
        websiteIndexDocument: 'index.html',
        websiteErrorDocument: '404.html',
        publicReadAccess: props.isPublic,
        encryption: s3.BucketEncryption.S3_MANAGED,
        removalPolicy: cdk.RemovalPolicy.RETAIN,
        objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
        serverAccessLogsBucket: logbucket, // Specify the bucket name for access logs
        serverAccessLogsPrefix: props.logbucketfolderprefix, // Customize the prefix for access logs
      });
    } else {
      bucket = s3.Bucket.fromBucketName(this, props.bucketName, props.bucketName);
    }

    return bucket;
  }
}
