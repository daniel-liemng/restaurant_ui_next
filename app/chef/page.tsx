import AboutHero from '@/components/AboutHero';
import ChefInfo from '@/components/ChefInfo';
import Parallax from '@/components/Parallax';
import ContactForm from '@/components/ContactForm';

const ChefPage = () => {
  return (
    <>
      <AboutHero
        title='Ted Nasso, The Architect Of Cuisine'
        imgUrl='/pic-7.jpg'
        text1='The food is arranged on the plate in an aesthetically pleasing way'
        imgUrl1='/pic-6.jpg'
        text2='Typically sourced from local farmers and markets to ensure their freshness and quality'
        imgUrl2='/pic-9.jpg'
      />

      <Parallax />

      <ChefInfo
        name='Nicolas Bart'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
        pic='/chef-1.jpg'
      />

      <ChefInfo
        reverse
        name='Marie Lengt'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
        pic='/chef-2.jpg'
      />

      <ChefInfo
        name='Jino Shoji'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
        pic='/chef-3.jpg'
      />

      <ChefInfo
        reverse
        name='Daniel Lee'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
        pic='/chef-4.jpg'
      />

      <ContactForm />
    </>
  );
};

export default ChefPage;
