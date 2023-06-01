import Layout from '../components/Layout'
import MainFeaturedPost from '../components/MainFeaturedPost';
import content from '../locales/index_content.json'

const mainFeaturedPost = {
  title: 'IWillSave.earth community',
  description: 'We are a passionate community dedicated to combating climate change and protecting our planet. \
  Our mission is to inspire and empower individuals to take action, reduce their carbon footprint, and contribute towards a sustainable future for all.',
  image: 'sunrise_1920.jpg',
  imageText: 'Sunrise',
  linkText: 'How to contribute…',
  linkTarget: 'contribute.html',
};

const IndexPage = () => (

  <Layout title={content.title}>
    <div >
      <MainFeaturedPost post={mainFeaturedPost} />
      <div>
        <h3>Welcome to the {content.title} project!</h3>
        <p>
          We are a passionate community dedicated to combating climate change and protecting our planet. Our mission is to inspire and empower individuals to take action, reduce their carbon footprint, and contribute towards a sustainable future for all.
        </p>
        <p>
          By sharing ideas, best practices, and practical solutions, we aim to create a collaborative space where individuals can learn, engage, and make a positive impact. Together, we believe that every small step counts towards making a significant difference in the fight against climate change.
        </p>
        <p>
          Join us in this collective effort to save the Earth. Whether you&pos;re an environmental enthusiast, a sustainability advocate, or simply someone who wants to contribute, we welcome you to become a part of our community. Let&pos;s work together and demonstrate that through individual actions, we can create a greener and healthier planet for future generations.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
