'use client';

import { motion } from 'framer-motion';
import Divider from './Divider';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='my-8 h-[75vh]'>
      <h1 className='text-9xl text-center text-gray-700 tracking-tighter'>
        Welcome to Silver Spoon
      </h1>

      <div className='h-full grid grid-cols-4 px-14 py-10 gap-14'>
        <div className='h-full col-span-4 md:col-span-1'>
          <div className='h-full flex flex-col justify-end items-center'>
            <Divider />
            <p className='p-5'>
              From 2007 Silver Spoon provides a unique dining experience
            </p>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className='w-full'
            >
              <Image
                src='/hero-1.jpg'
                alt='hero1'
                className='w-full h-[300px] object-cover'
                width={300}
                height={300}
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          className=' h-[70vh] w-full col-span-4 md:col-span-2'
        >
          <Image
            src='/hero-2.jpg'
            alt='hero2'
            className='h-[70vh] w-full object-cover'
            width={1000}
            height={1000}
          />
        </motion.div>

        <div className='h-full col-span-4 md:col-span-1'>
          <div className='h-full flex flex-col-reverse justify-end items-center'>
            <Divider />
            <p className='p-5'>
              From 2007 Silver Spoon provides a unique dining experience
            </p>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
              className='w-full'
            >
              <Image
                src='/hero-3.jpg'
                alt='hero3'
                className='w-full h-[300px] object-cover'
                width={300}
                height={300}
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
