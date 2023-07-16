import Link from 'next/link';

const leftMenu = [
  { name: 'chef', link: '/chef' },
  { name: 'menu', link: '/menu' },
  { name: 'reservation', link: '/reservation' },
];
const rightMenu = [
  { name: 'news', link: '/news' },
  { name: 'about', link: '/about' },
  { name: 'contact', link: '/contact' },
];

const Header = () => {
  return (
    <div className='container mx-auto w-full h-24 flex justify-between items-center bg-gold text-gray-700'>
      <div className='flex items-center gap-6'>
        {leftMenu.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className='text-lg uppercase font-semibold hover:underline transition'
          >
            {item.name}
          </Link>
        ))}
      </div>

      <Link
        href='/'
        className='text-4xl font-semibold tracking-tight capitalize text-gray-700'
      >
        Silver Spoon
      </Link>

      <div className='flex items-center gap-6'>
        {rightMenu.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className='text-lg uppercase font-semibold hover:underline transition'
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
