import React, { useRef, useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout'
import MainFeaturedPost from '../components/MainFeaturedPost';
import PartialHTML from '../components/PartialHTML';
import { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
import routes from '../routes';

const staticbuild = process.env.STATIC_BUILD;

const mainFeaturedPost = {
  title: 'Story',
  description: 'At the moment the project is at it\'s very beginning. I am the only developer and I am working with ChatGPT. Yes, as cracy as it sounds we are a good team.\
   Take a look at the discussion we have had, and perhaps you can also have an idea how AI can be used in pretty much everywhere.',
  image: 'environmental-protection_1920.jpg',
  imageText: 'Nature',
  linkText: 'Back to main page.',
  linkTarget: routes.home,
};
const StoryPage = () => {

  const partialPageRef = useRef<any>(null);
  // Function to set the active component from outside
  const setActiveComponentFromOutside = (componentNumber: number) => {
    partialPageRef.current?.setActiveComponent(componentNumber);
  };

  const handleLinkClick = (index: number) => {
    console.log("handleLinkClick", index);
    setActiveComponentFromOutside(index);
  };
  const sidebar = {
    title: 'Blog links',
    description:
      'Jump into project history. See what I have been discussing with ChatGPT. Contains also instructions how to build parts of this site. To be continued...',
    archives: [
      { title: '2023 05 Project startup', url: '', linkId: 0 },
      { title: '2023 06 First content', url: '', linkId: 1 },
//      { title: 'Building frontend', url: '', linkId: 2 },
    ],
    linkCallback: handleLinkClick,
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      //{ name: 'Twitter', icon: TwitterIcon },
      //{ name: 'Facebook', icon: FacebookIcon },
    ],
  };

  return (
      <div>
        <div>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <PartialHTML ref={partialPageRef}></PartialHTML>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              linkCallback={sidebar.linkCallback}
            />
          </Grid>
        </div>
      </div>
  )
  };

StoryPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={mainFeaturedPost.title}>
      {page}
    </Layout>
  );
};
export default StoryPage
