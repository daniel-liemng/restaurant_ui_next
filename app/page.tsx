import Contact from '@/components/ContactForm';
import Divider from '@/components/Divider';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Parallax from '@/components/Parallax';
import Testimonial from '@/components/Testimonial';

const HomePage = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='h-screen'>
          <Hero />
        </div>
        <Divider custom='my-20' />
        <Info />
      </div>
      <Parallax />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default HomePage;
