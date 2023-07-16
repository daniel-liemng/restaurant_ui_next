'use client';

import Divider from '@/components/Divider';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ContactHeroProps {
  title: string;
  imgUrl: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, imgUrl }) => {
  return (
    <div className='mt-8 h-fit container mx-auto'>
      <h1 className='my-12 text-8xl text-center text-gray-700 tracking-tighter'>
        {title}
      </h1>

      <div className='h-full grid grid-cols-4 py-10 gap-32'>
        <div className='h-full col-span-4 md:col-span-1'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            className='h-full flex flex-col-reverse justify-end'
          >
            <Divider />
            <p className='p-5'>
              65 King Street,
              <br />
              New York, NY, 25013 USA
            </p>
            <h4 className='px-5 text-4xl font-semibold text-gray-700'>
              Our Location
            </h4>
          </motion.div>
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
          className=' h-full w-full col-span-4 md:col-span-2'
        >
          <Image
            src={imgUrl}
            alt='hero2'
            className='h-[500px] w-full object-cover'
            width={500}
            height={500}
          />
        </motion.div>

        <div className='h-full col-span-4 md:col-span-1'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className='h-full flex flex-col justify-start'
          >
            <Divider />
            <p className='p-5'>
              Monday to Saturday
              <br />
              From 11:30 - 16:00
              <br />
              From 18:30 - 22:30
            </p>
            <h4 className='px-5 text-4xl font-semibold text-gray-700'>
              Opening Hours
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
