import React from 'react';

const leftMenu = ['chef', 'menu', 'reservation'];
const rightMenu = ['news', 'about', 'contact'];

const Header = () => {
  return (
    <div className='w-full h-24 px-8 flex justify-between items-center bg-gold text-gray-700'>
      <div className='flex items-center gap-6'>
        {leftMenu.map((item) => (
          <h4 className='text-lg uppercase font-semibold'>{item}</h4>
        ))}
      </div>

      <h3 className='text-4xl font-semibold tracking-tight capitalize text-gray-700'>
        Silver Spoon
      </h3>

      <div className='flex items-center gap-6'>
        {rightMenu.map((item) => (
          <h4 className='text-lg uppercase font-semibold'>{item}</h4>
        ))}
      </div>
    </div>
  );
};

export default Header;
