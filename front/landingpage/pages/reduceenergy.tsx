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
  title: '10 tips to reduce energy consumption',
  date: '1',
  description:
    'The reduction in carbon footprint from implementing energy-saving practices can vary depending on individual circumstances, energy usage patterns, and the specific actions taken. However, various studies and data provide estimates on how much these energy-saving practices can contribute to reducing carbon emissions',
  image: 'john-cameron-F_EooJ3-uTs-unsplash.jpg',
  imageText: 'Photo by <a href="https://unsplash.com/@john_cameron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Cameron</a> on <a href="https://unsplash.com/s/photos/Reduce-energy-consumption?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  linkText: 'What else can I do?',
  linkTarget: routes.actions,
};
const featuredPosts = [
    {
      title: 'LED Bulbs',
      date: '1',
      description:
        'LED bulbs use up to 80% less energy than incandescent bulbs. Replacing a single incandescent bulb with an LED can save around 1,000 pounds (450kg) of CO2 emissions over the LED\'s lifetime.',
      image: 'grant-durr-xawSFqyrymM-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@grant_durr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Grant Durr</a> on <a href="https://unsplash.com/s/photos/led-light?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
      title: 'Unplug Devices',
      date: '2',
      description:
          '"Phantom energy" can account for up to 10% of residential energy use. By unplugging devices and using power strips, you can reduce this wasted energy significantly.',
      image: 'kelly-sikkema-7alo7OJVNVw-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/unplug-devices?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      title: 'Adjust Thermostat',
      date: '3',
      description:
        'Lowering the thermostat by 1°C (1.8°F) can reduce heating-related energy consumption by about 6%. Similarly, raising the thermostat by 1°C during cooling season can lead to similar energy savings.',
      image: 'will-Xst4N6JnlvU-unsplash.jpg',
      imageLabel:'Photo by <a href="https://unsplash.com/@cashoyboy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Will</a> on <a href="https://unsplash.com/s/photos/adjust-thermostat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
      title: 'Air Dry Clothes',
      date: '4',
      description:
        'On average, a clothes dryer accounts for about 6% of a household\'s energy use. Air drying clothes can eliminate this energy consumption.',
      image: 'erik-witsoe-SBA1rEduVOk-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@ewitsoe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik Witsoe</a> on <a href="https://unsplash.com/s/photos/Air-Dry-Clothes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
      title: 'Limit Hot Water Usage',
      date: '5',
      description:
        'Water heating can account for 15-20% of a home\'s energy use. Using cold water for laundry and taking shorter showers can lead to substantial energy savings.',
      image: 'amritanshu-sikdar-LoGnr-w1D8E-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@da_sikka_x?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Amritanshu Sikdar</a> on <a href="https://unsplash.com/s/photos/Conserve-water?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      title: 'Seal Home Drafts',
      date: '6',
      description:
        'Sealing drafts can save up to 20% of heating and cooling energy consumption, depending on the size and condition of the home.',
      image: 'mari-madriz-FRsmwVdIBOg-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@marimadriz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mari Madriz</a> on <a href="https://unsplash.com/s/photos/old-window?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      title: 'Optimize Fridge Settings',
      date: '7',
      description:
      'Keeping the refrigerator and freezer at optimal settings can reduce energy consumption by 20-30%.',
      image: 'darrien-staton-ZUhM8LE_HGc-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@darestaton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Darrien Staton</a> on <a href="https://unsplash.com/s/photos/fridge?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      title: 'Power Strips',
      date: '8',
      description:
        'Using power strips and turning off electronics when not in use can save around 10% of household energy consumption.',
      image: 'kelly-sikkema-7alo7OJVNVw-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/unplug-devices?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      title: 'Cook Efficiently',
      date: '9',
      description:
        'Cooking efficiently can save up to 10-20% of energy used for cooking, depending on cooking habits.',
      image: 'edgar-castrejon-s6BrlKXy7e0-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/es/@edgarraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar Castrejon</a> on <a href="https://unsplash.com/s/photos/cook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
    {
      title: 'Insulate Your Home',
      date: '10',
      description:
        'Proper insulation can reduce heating and cooling energy usage by 20-50%, depending on the existing insulation and climate.',
      image: 'erik-mclean-aCshJn3y93s-unsplash.jpg',
      imageLabel: 'Photo by <a href="https://unsplash.com/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erik Mclean</a> on <a href="https://unsplash.com/s/photos/insulate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
    },
]



const ReduceEnergyPage = () => (
    <div>
      <div>
      <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>
          <p>
          It's important to note that the actual impact of these actions will depend on factors such as the size of the household, energy sources, climate, and local energy costs. However, the collective effort of individuals adopting these practices can have a significant positive impact on reducing overall carbon emissions and promoting sustainability.
          </p>
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

ReduceEnergyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={mainFeaturedPost.title}>
      {page}
    </Layout>
  );
};

export default ReduceEnergyPage
