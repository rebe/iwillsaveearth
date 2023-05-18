import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

import { Construct } from 'constructs';

// import * as sqs from 'aws-cdk-lib/aws-sqs';


interface BucketProps {
  bucketName: string;
  landingPagePath: string;
  logbucketname: string;
  isPublic: boolean
}

export class LandinginfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Bucket properties for development and production
    const devBucketProps: BucketProps = {
      bucketName: 'dev.iwillsave.earth', // Customize the bucket name for development
      landingPagePath: '<dev-landing-page-directory>', // Specify the path to the development landing page directory,
      logbucketname: 'dev.iwillsave.-logbucket', // logbucket for dev landinpage
      isPublic: false
    };

    const prodBucketProps: BucketProps = {
      bucketName: 'iwillsave.earth', // Customize the bucket name for production
      landingPagePath: '<prod-landing-page-directory>', // Specify the path to the production landing page directory,
      logbucketname: 'iwillsave.-logbucket', // logbucket for official landingpage
      isPublic: false
    };

    // Create development bucket
    const devBucket = this.createBucket(devBucketProps);

    // Create production bucket
    const prodBucket = this.createBucket(prodBucketProps);

    // Output the bucket URLs
    new cdk.CfnOutput(this, 'DevBucketURL', {
      value: devBucket.bucketWebsiteUrl,
    });

    new cdk.CfnOutput(this, 'ProdBucketURL', {
      value: prodBucket.bucketWebsiteUrl,
    });
  }

  private createBucket(props: BucketProps): s3.Bucket {
    const bucket = new s3.Bucket(this, props.bucketName, {
      bucketName: props.bucketName,
      websiteIndexDocument: 'index.html',
      blockPublicAccess: props.isPublic? undefined: s3.BlockPublicAccess.BLOCK_ALL,
      accessControl: props.isPublic? s3.BucketAccessControl.PUBLIC_READ: s3.BucketAccessControl.PRIVATE,
      //serverAccessLogsBucket: '<access-logs-bucket-name>', // Specify the bucket name for access logs
      serverAccessLogsPrefix: `${props.bucketName}-access-logs/`, // Customize the prefix for access logs
    });

    // skip for now
    /*new s3deploy.BucketDeployment(this, `${props.bucketName}-DeployWebsite`, {
      sources: [s3deploy.Source.asset(props.landingPagePath)],
      destinationBucket: bucket,
    });*/

    return bucket;
  }
}
