import Layout from '../components/Layout'
import Link from 'next/link'
import content from '../locales/index_content.json'
import style from '../styles/BGContainer.module.css'

const IndexPage = () => (

  <Layout title="{content.title}">
    <div className={style.backgroundContainer}>
      <h2>{content.title}</h2>
      <div>
        <h3>Welcome to the IWillSave.earth project!</h3>
        <p>
          We are a passionate community dedicated to combating climate change and protecting our planet. Our mission is to inspire and empower individuals to take action, reduce their carbon footprint, and contribute towards a sustainable future for all.
        </p>
        <p>
          By sharing ideas, best practices, and practical solutions, we aim to create a collaborative space where individuals can learn, engage, and make a positive impact. Together, we believe that every small step counts towards making a significant difference in the fight against climate change.
        </p>
        <p>
          Join us in this collective effort to save the Earth. Whether you're an environmental enthusiast, a sustainability advocate, or simply someone who wants to contribute, we welcome you to become a part of our community. Let's work together and demonstrate that through individual actions, we can create a greener and healthier planet for future generations.
        </p>
        <Link href="/contribute">How to contribute?</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
