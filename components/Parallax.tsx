import Link from 'next/link';
import React from 'react';

const Parallax = () => {
  return (
    <section className='mt-40 relative'>
      <div className="absolute w-full h-[700px] top-0 left-0 bg-cover bg-center bg-no-repeat opacity-1 bg-fixed bg-[url('/pic-5.jpg')] bg-black/95"></div>
      <div className='relative h-[700px] w-full text-center'>
        <h1 className='text-white text-center display-2 text-[250px]'>
          Fresh Dishes
        </h1>
        <Link
          href='menu'
          className='px-4 py-2 bg-transparent border-[3px] border-gold text-3xl text-gold mx-auto'
        >
          View Menus
        </Link>
      </div>
    </section>
  );
};

export default Parallax;
