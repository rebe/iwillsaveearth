import FeaturedPost from '../components/FeaturedPost';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@mui/material';
import Layout from '../components/Layout'
import Link from 'next/link'
import MainFeaturedPost from '../components/MainFeaturedPost';
import { ReactElement } from 'react';
import routes from '../routes';

const homelink = routes.home

const mainFeaturedPost = {
  title: 'What can I do?',
  description: 'Here are some activites listed on what you can do in order to protect our planet.',
  image: 'vitor-monthay-EkEdHarUPTs-unsplash.jpg',
  imageText: 'Photo by <a href="https://unsplash.com/pt-br/@vitormonthay?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vitor Monthay</a> on <a href="https://unsplash.com/s/photos/plant-a-tree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  linkText: 'Join us in contibuting...',
  linkTarget: routes.contribute,
};

const featuredPosts = [
  {
    title: 'Reduce energy consumption',
    date: '1',
    description:
      'Conserve energy by using energy-efficient appliances, turning off lights and electronics when not in use, and optimizing home heating and cooling.',
    image: 'john-cameron-F_EooJ3-uTs-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Cameron</a> on <a href="https://unsplash.com/s/photos/Reduce-energy-consumption?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Transition to clean energy',
    date: '2',
    description:
      ' Switch to renewable energy sources such as solar or wind power for electricity generation, and consider electric vehicles as an alternative to fossil fuel-powered cars.',
    image: 'appolinary-kalashnikova-WYGhTLym344-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@appolinary_kalashnikova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Appolinary Kalashnikova</a> on <a href="https://unsplash.com/s/photos/Transition-to-clean-energy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Conserve water',
    date: '3',
    description:
      'Conserve water at home by fixing leaks, using water-efficient fixtures, and practicing mindful water usage habits.',
    image: 'amritanshu-sikdar-LoGnr-w1D8E-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@da_sikka_x?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Amritanshu Sikdar</a> on <a href="https://unsplash.com/s/photos/Conserve-water?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Practice sustainable transportation',
    date: '4',
    description:
      'Opt for walking, cycling, or using public transportation whenever possible. If driving is necessary, carpooling or using fuel-efficient vehicles can help reduce emissions.',
    image: 'viktor-forgacs-PNv0pESh9Uk-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/s/photos/Practice-sustainable-transportation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Reduce, reuse, and recycle',
    date: '5',
    description:
      'Minimize waste generation by reducing consumption, reusing items, and recycling materials to reduce the strain on natural resources and decrease landfill waste.',
    image: 'joshua-lawrence-E_ZJ6moimKE-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@orangetiephotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Lawrence</a> on <a href="https://unsplash.com/s/photos/Reduce%2C-reuse%2C-and-recycle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Eat a plant-based diet',
    date: '6',
    description:
      'Decrease meat consumption and incorporate more plant-based meals into your diet. Animal agriculture is a significant contributor to greenhouse gas emissions.',
    image: 'mike-von-BbnvyqctrSw-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@thevoncomplex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Von</a> on <a href="https://unsplash.com/s/photos/Eat-a-plant-based-diet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Support sustainable businesses',
    date: '7',
    description:
      'Choose products and services from companies that prioritize sustainability and environmental responsibility. Look for certifications like Fair Trade, Organic, or Energy Star.',
    image: 'marc-buddha-beans-coffee-co-zyo0R49UKaw-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@buddhabeans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marc Buddha Beans Coffee Co.</a> on <a href="https://unsplash.com/s/photos/fair-trade?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Plant trees and support reforestation',
    date: '8',
    description:
      ' Trees absorb carbon dioxide and help mitigate climate change. Participate in tree-planting initiatives or support organizations that work towards reforestation efforts.',
    image: 'noah-buscher-x8ZStukS2PM-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@noahbuscher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Noah Buscher</a> on <a href="https://unsplash.com/s/photos/Support-sustainable-businesses?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },  {
    title: 'Advocate for policy changes',
    date: '9',
    description:
      ' Engage in climate activism by supporting policies and initiatives that promote renewable energy, conservation, and sustainable practices. Contact your elected representatives and voice your concerns.',
    image: 'ma-ti-4MjU7ckn3DY-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@masplashti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ma Ti</a> on <a href="https://unsplash.com/s/photos/Advocate-for-policy-changes%27?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    title: 'Educate and raise awareness',
    date: '10',
    description:
      'Spread knowledge about climate change, its impacts, and the importance of taking action. Share information with friends, family, and your community to encourage collective efforts in fighting climate change.',
    image: 'clay-banks-GX8KBbVmC6c-unsplash.jpg',
    imageLabel: 'Photo by <a href="https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clay Banks</a> on <a href="https://unsplash.com/s/photos/Educate-and-raise-awareness?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
];

const ContributePage = () => (
    <div>
      <div>
      <MainFeaturedPost post={mainFeaturedPost} />
        <p>
        <strong>We have generated you a top 10 list to fight climate change:</strong>
        <br></br>
        Remember, even small actions can make a difference when done collectively. Every step towards a more sustainable lifestyle contributes to a healthier planet.
        </p>
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        <p>
            <Link href="https://github.com/rebe/iwillsaveearth" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
            Please disagree, discuss or raise more topics on our github page.
          </Link>
          <br></br>
          <br></br>
          <Link href={homelink}>Go to mainpage</Link>
        </p>
      </div>
    </div>
)

ContributePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={mainFeaturedPost.title}>
      {page}
    </Layout>
  );
};

export default ContributePage
