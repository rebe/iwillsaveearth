import Layout from '../components/Layout'
import Link from 'next/link'
import MainFeaturedPost from '../components/MainFeaturedPost';

const mainFeaturedPost = {
  title: 'How to contribute?',
  description: 'Thank you for your interest in contributing to the IWillSave.earth project!\n\
  We welcome contributions from anyone who is passionate about fighting climate change and reducing our environmental footprint. There are multiple ways you can contribute to the project, whether you have technical skills or not.',
  image: 'earth_1920.jpg',
  imageText: 'Earth',
  linkText: 'Who are we?',
  linkTarget: '/gpt',
};

const ContributePage = () => (
  <Layout title="Contribute">
    <div>
      <div>
      <MainFeaturedPost post={mainFeaturedPost} />
        <p>
           </p>
        <p>
        <strong>Development:</strong> If you have programming skills, you can contribute by improving the website&apos;s functionality, adding new features, or fixing bugs. To get started with development, follow these steps:
        </p>
        <ul>
          <li>Fork the project repository on GitHub.</li>
          <li>Clone the forked repository to your local machine.</li>
          <li>Set up the development environment by following the instructions in the project&apos;s README file.</li>
          <li>Make your desired changes or additions.</li>
          <li>Test your changes locally to ensure they work as expected.</li>
          <li>Commit your changes and push them to your forked repository.</li>
          <li>Submit a pull request to the main project repository, describing the changes you&apos;ve made and why they are valuable.</li>
        </ul>

        <p>
        <strong>Content Contribution:</strong> Even if you don&apos;t have programming skills, you can still contribute valuable content to the project. You can suggest new ideas, provide feedback, or report issues by creating tickets in the project&apos;s GitHub repository. To contribute content:
        </p>
        <ul>
          <li>Visit the project&apos;s GitHub repository.</li>
          <li>Click on the &quot;Issues&quot; tab.</li>
          <li>Create a new issue to suggest an idea, provide feedback, or report an issue you&apos;ve encountered.</li>
          <li>Clearly explain your suggestion or feedback, providing any relevant details or examples.</li>
        </ul>

        <p>
          <strong>Share on Social Media:</strong> Help us spread the word about the project by sharing it on your social media channels. By sharing the project, you can raise awareness and inspire others to join our community. You can share the project&apos;s GitHub repository link, the website link, or any specific updates or achievements you find noteworthy. Don&apos;t forget to use relevant hashtags to reach a wider audience.
        </p>
        <p>
          Remember, collaboration and community engagement are at the core of our project. We value and appreciate contributions from individuals with diverse backgrounds and perspectives.
          <br />
          We look forward to your contributions and appreciate your efforts in helping us combat climate change and protect our planet. Together, we can make a difference!
          <br />
          If you have any questions or need further assistance, feel free to reach out to us on the project&apos;s GitHub repository or any other communication channel provided.
          <br />
          Happy contributing and sharing!
        </p>
        <p>
          <Link href="/">Go home</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default ContributePage
