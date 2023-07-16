import AboutHero from '@/components/AboutHero';
import Parallax from '@/components/Parallax';
import ContactForm from '@/components/ContactForm';
import AboutInfo from '@/components/AboutInfo';

const AboutPage = () => {
  return (
    <div>
      <AboutHero
        title='Our Story, A Culinary Journey'
        imgUrl='/pic-11.jpg'
        text1='The food is arranged on the plate in an aesthetically pleasing way'
        imgUrl1='/hero-1.jpg'
        text2='Typically sourced from local farmers and markets to ensure their freshness and quality'
        imgUrl2='/hero-3.jpg'
      />

      <Parallax />

      <AboutInfo />

      <ContactForm />
    </div>
  );
};

export default AboutPage;
