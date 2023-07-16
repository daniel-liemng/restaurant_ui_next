// 'use client';

import ContactForm from '@/components/ContactForm';
import ContactHero from '@/components/ContactHero';

const ContactPage = () => {
  return (
    <>
      <ContactHero title='Contact Us' imgUrl='/hero_2.jpg' />

      <ContactForm />
    </>
  );
};

export default ContactPage;
