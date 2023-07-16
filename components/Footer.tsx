import React from 'react';
import Divider from './Divider';

const Footer = () => {
  return (
    <footer className='bg-[#dcc390] w-full pb-10'>
      <Divider />
      <div className='pt-16 flex gap-4 flex-wrap container mx-auto'>
        <div className='flex-1'>
          <h2 className='text-4xl font-title font-semibold uppercase'>
            Silver Spoon
          </h2>
          <p className='mt-6 text-lg'>
            Expert cooking techniques to bring out the best flavors and textures
            in the ingredients
          </p>
        </div>

        <div className='flex-1'>
          <h4 className='text-xl uppercase font-semibold mb-4'>Home</h4>
          <h6 className='text-lg font-semibold mb-2'>News</h6>
          <h6 className='text-lg font-semibold mb-2'>About</h6>
          <h6 className='text-lg font-semibold mb-2'>Contact</h6>
        </div>

        <div className='flex-1'>
          <h4 className='text-xl uppercase font-semibold mb-4'>Pages</h4>
          <h6 className='text-lg font-semibold mb-2'>Chef</h6>
          <h6 className='text-lg font-semibold mb-2'>Menu</h6>
          <h6 className='text-lg font-semibold mb-2'>Reservation</h6>
        </div>

        <div className='flex-1'>
          <h4 className='text-xl uppercase font-semibold mb-4'>Socials</h4>
          <h6 className='text-lg font-semibold mb-2'>Instagram</h6>
          <h6 className='text-lg font-semibold mb-2'>Twitter</h6>
          <h6 className='text-lg font-semibold mb-2'>Linkedin</h6>
        </div>

        <div className='flex-1'>
          <h4 className='text-xl uppercase font-semibold mb-4'>Product Link</h4>
          <h6 className='text-lg font-semibold mb-2'>Instruction</h6>
          <h6 className='text-lg font-semibold mb-2'>Style Guide</h6>
          <h6 className='text-lg font-semibold mb-2'>Licensing</h6>
          <h6 className='text-lg font-semibold mb-2'>Changelog</h6>
        </div>
      </div>

      <h6 className='my-4 text-center text-2xl font-normal'>
        &copy; {new Date().getFullYear()} - All Right Reserved
      </h6>
    </footer>
  );
};

export default Footer;
