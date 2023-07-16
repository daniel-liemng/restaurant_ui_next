import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import React from 'react';

const ReservationPage = () => {
  return (
    <>
      <ContactHero title='Reservation' imgUrl='/hero_2.jpg' />
      <ContactForm />
    </>
  );
};

export default ReservationPage;
