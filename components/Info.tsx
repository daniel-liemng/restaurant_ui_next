'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Info = () => {
  return (
    <section className='w-full px-8'>
      <div className='w-[60%] mx-auto mt-8'>
        <h2 className='font-title text-5xl text-center'>
          With a menu featuring an array of fresh, locally sourced ingredients,
          we aim to provide you with an exceptional dining experience that will
          leave you coming back for more. Come and savor the flavors of our food
          and the warmth of our hospitality at our restaurant.
        </h2>
      </div>

      <div className='container mx-auto flex justify-between items-center flex-wrap gap-10 mt-20 h-full w-full'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex-1 flex flex-col gap-8'
        >
          <h2 className='text-7xl mb-8'>Chef</h2>
          <h4 className='text-xl mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            porro magni minima voluptatem minus. Placeat consequatur quos iure
            accusamus maxime?
          </h4>
          <Link
            href='/chef'
            className='text-lg uppercase font-normal hover:underline'
          >
            View More
          </Link>
        </motion.div>

        <div className='border-l border-slate-500 h-[550px] w-1' />

        <div className='flex-1 h-[550px] w-full justify-center items-center md:flex'>
          <div className='container mx-auto w-1/2 relative'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='w-full h-full rounded-full'
            >
              <Image
                src='/pic-2.jpg'
                alt='pic2'
                width={400}
                height={400}
                className='w-[400px] h-[400px] rounded-full object-cover'
              />
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='absolute top-[60%] -right-[30%]'
            >
              <Image
                src='/pic-1.jpg'
                alt='pic1'
                width={350}
                height={350}
                className='w-[300px] h-[300px] object-cover'
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SECTION */}
      <div className='container mx-auto flex justify-between items-center gap-10 mt-20 h-full'>
        <div className='flex-1 h-[550px] w-full flex justify-center items-center'>
          <div className='container mx-auto w-1/2 relative'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='w-full h-full rounded-full'
            >
              <Image
                src='/pic-4.jpg'
                alt='pic4'
                width={400}
                height={400}
                className='w-[400px] h-[400px] object-cover'
              />
            </motion.div>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className='absolute top-[60%] -right-[30%]'
            >
              <Image
                src='/pic-3.jpg'
                alt='pic3'
                width={350}
                height={350}
                className='w-[350px] h-[350px] rounded-full object-cover'
              />
            </motion.div>
          </div>
        </div>

        <div className='border-r border-slate-500 h-[650px] w-1' />

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex-1 flex flex-col gap-8 container w-2/3 mx-auto'
        >
          <h2 className='text-7xl mb-8'>New Dish</h2>
          <h4 className='text-xl mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            porro magni minima voluptatem minus. Placeat consequatur quos iure
            accusamus maxime?
          </h4>
          <Link
            href='/chef'
            className='text-lg uppercase font-normal hover:underline'
          >
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
