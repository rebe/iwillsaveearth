import GitHubIcon from '@mui/icons-material/GitHub';
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

const ContributePage = () => (
    <div>
      <div>
      <MainFeaturedPost post={mainFeaturedPost} />
        <p>
        <strong>We have generated you a top 10 list to fight climate change:</strong>
        </p>
        <ul>
          <li><Link href='#testachor'>Go to anchor</Link></li>
          <li>Reduce enehomelinkrgy consumption: Conserve energy by using energy-efficient appliances, turning off lights and electronics when not in use, and optimizing home heating and cooling.</li>
          <li>Transition to clean energy: Switch to renewable energy sources such as solar or wind power for electricity generation, and consider electric vehicles as an alternative to fossil fuel-powered cars.</li>
          <li>Conserve water: Conserve water at home by fixing leaks, using water-efficient fixtures, and practicing mindful water usage habits.</li>
          <li>Practice sustainable transportation: Opt for walking, cycling, or using public transportation whenever possible. If driving is necessary, carpooling or using fuel-efficient vehicles can help reduce emissions.</li>
          <li>Reduce, reuse, and recycle: Minimize waste generation by reducing consumption, reusing items, and recycling materials to reduce the strain on natural resources and decrease landfill waste.</li>
          <li>Eat a plant-based diet: Decrease meat consumption and incorporate more plant-based meals into your diet. Animal agriculture is a significant contributor to greenhouse gas emissions.</li>
          <li>Support sustainable businesses: Choose products and services from companies that prioritize sustainability and environmental responsibility. Look for certifications like Fair Trade, Organic, or Energy Star.</li>
          <li>Plant trees and support reforestation: Trees absorb carbon dioxide and help mitigate climate change. Participate in tree-planting initiatives or support organizations that work towards reforestation efforts.</li>
          <li>Advocate for policy changes: Engage in climate activism by supporting policies and initiatives that promote renewable energy, conservation, and sustainable practices. Contact your elected representatives and voice your concerns.</li>
          <li>Educate and raise awareness: Spread knowledge about climate change, its impacts, and the importance of taking action. Share information with friends, family, and your community to encourage collective efforts in fighting climate change.</li>
          <li>Remember, even small actions can make a difference when done collectively. Every step towards a more sustainable lifestyle contributes to a healthier planet.</li>
        </ul>

       <h2 id="testanchor">Blaa</h2>
        <p>
            <Link href="https://github.com/rebe/iwillsaveearth" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="small" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
            Please disagree, discuss or raise more topics on our github page.
          </Link>

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
