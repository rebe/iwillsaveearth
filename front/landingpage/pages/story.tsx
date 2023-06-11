import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import React, { useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout'
import Main from '../components/Main';
import MainFeaturedPost from '../components/MainFeaturedPost';
import { ReactElement } from 'react';
import Sidebar from '../components/Sidebar';
//import frontendpage from '../data/log_chat_28_05_2023_frontend.md'
import infrapage from '../data/log_chat_18_05_2023_infra.md'
import startpage from '../data/log_chat_13_05_2023_start.md'

const staticbuild = process.env.STATIC_BUILD;
const links = [
  startpage,
  infrapage,
//  frontendpage
];



const mainFeaturedPost = {
  title: 'Story',
  description: 'At the moment the project is at it\'s very beginning. I am the only developer and I am working with ChatGPT. Yes, as cracy as it sounds we are a good team.\
   Take a look at the discussion we have had, and perhaps you can also have an idea how AI can be used in pretty much everywhere.',
  image: 'environmental-protection_1920.jpg',
  imageText: 'Nature',
  linkText: 'Back to main page.',
  linkTarget: staticbuild?'../index.html':'/',
};
const StoryPage = () => {
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

  const handleLinkClick = (index: number) => {
    setSelectedLinkIndex(index);
  };
  const sidebar = {
    title: 'Quicklinks',
    description:
      'Quickly jump into discussions happened during building the site. Contains also instructions how to build parts of this site.',
    archives: [
      { title: 'Project startup', url: '', linkId: 0 },
      { title: 'Building infra', url: '', linkId: 1 },
//      { title: 'Building frontend', url: '', linkId: 2 },
    ],
    linkCallback: handleLinkClick,
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      //{ name: 'Twitter', icon: TwitterIcon },
      //{ name: 'Facebook', icon: FacebookIcon },
    ],
  };
  // Define the options
  const markdownOptions: MarkdownToJSX.Options = {
    disableParsingRawHTML: true,
  };

  return (
      <div>
        <div>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Discussion with AI" posts={[links[selectedLinkIndex]]} />
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
