'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import Divider from '@/components/Divider';
import Parallax from '@/components/Parallax';
import ContactForm from '@/components/ContactForm';
import {
  alcoholicData,
  breakfastData,
  dinnerData,
  lunchData,
  softDrinkData,
} from '@/data/menu';

const MenuItem = ({
  name,
  slug,
  desc,
  price,
}: {
  name: string;
  slug: string;
  desc: string;
  price: string;
}) => {
  return (
    <div className='flex flex-wrap gap-1 mb-6'>
      <div className='md:flex-1'>
        <Link
          href={`/menu/${slug}`}
          className='text-4xl font-title font-semibold hover:underline'
        >
          {name}
        </Link>
        <p className='text-xl mt-4'>{desc}</p>
      </div>
      <div>
        <h4 className='text-2xl font-semibold font-title'>{price}</h4>
      </div>
    </div>
  );
};

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('meal');

  return (
    <section className='mt-10'>
      <div className='container mx-auto px-12'>
        <h1 className='my-12 text-8xl font-title text-center text-gray-700 tracking-tighter'>
          Restaurant Menu
        </h1>

        <div className='my-10 flex gap-4 justify-center'>
          <button
            onClick={() => setSelectedMenu('meal')}
            className={`px-6 py-2  text-lg uppercase font-extrabold text-gray-700 ${
              selectedMenu === 'meal' ? 'bg-orange-200' : null
            }`}
          >
            Meals
          </button>
          <button
            onClick={() => setSelectedMenu('drink')}
            className={`px-6 py-2  text-lg uppercase font-extrabold text-gray-700 ${
              selectedMenu === 'drink' ? 'bg-orange-200' : null
            }`}
          >
            Drinks
          </button>
        </div>

        <Divider />

        {selectedMenu === 'meal' && (
          <div className='my-8 grid grid-cols-12 gap-14'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className='col-span-12 md:col-span-6'
            >
              <h3 className='text-3xl font-semibold mb-6 text-gray-700'>
                Breakfast
              </h3>
              {breakfastData.map((item) => (
                <MenuItem
                  name={item.name}
                  slug={item.slug}
                  desc={item.desc}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className='col-span-12 md:col-span-6'
            >
              <h3 className='text-3xl font-semibold mb-6 text-gray-700'>
                Lunch
              </h3>
              {lunchData.map((item) => (
                <MenuItem
                  name={item.name}
                  slug={item.slug}
                  desc={item.desc}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className='col-span-12 md:col-span-6'
            >
              <h3 className='text-3xl font-semibold mb-6 text-gray-700'>
                Dinner
              </h3>
              {dinnerData.map((item) => (
                <MenuItem
                  name={item.name}
                  slug={item.slug}
                  desc={item.desc}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </motion.div>
          </div>
        )}

        {selectedMenu === 'drink' && (
          <div className='my-8 grid grid-cols-12 gap-14'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className='col-span-12 md:col-span-6'
            >
              <h3 className='text-3xl font-semibold mb-6 text-gray-700'>
                Soft Drinks
              </h3>
              {softDrinkData.map((item) => (
                <MenuItem
                  name={item.name}
                  slug={item.slug}
                  desc={item.desc}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className='col-span-12 md:col-span-6'
            >
              <h3 className='text-3xl font-semibold mb-6 text-gray-700'>
                Alcoholic
              </h3>
              {alcoholicData.map((item) => (
                <MenuItem
                  name={item.name}
                  slug={item.slug}
                  desc={item.desc}
                  price={item.price}
                  key={item.id}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>

      <Parallax />

      <ContactForm />
    </section>
  );
};

export default MenuPage;
