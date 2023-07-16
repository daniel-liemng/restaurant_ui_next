'use client';

import Divider from '@/components/Divider';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AboutHeroProps {
  title: string;
  text1: string;
  text2: string;
  imgUrl: string;
  imgUrl1: string;
  imgUrl2: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  text1,
  text2,
  imgUrl,
  imgUrl1,
  imgUrl2,
}) => {
  return (
    <div className='mt-8 h-fit container mx-auto'>
      <h1 className='my-12 text-8xl text-center text-gray-700 tracking-tighter'>
        {title}
      </h1>

      <div className='h-full grid grid-cols-4 py-10 gap-32'>
        <div className='h-full col-span-1'>
          <div className='h-full flex flex-col-reverse justify-end'>
            <Divider />
            <p className='p-5'>{text1}</p>
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
                src={imgUrl1}
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
          className=' h-full w-full col-span-2'
        >
          <Image
            src={imgUrl}
            alt='hero2'
            className='h-[500px] w-full object-cover'
            width={500}
            height={500}
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </motion.div>

        <div className='h-full col-span-1'>
          <div className='h-full flex flex-col justify-start'>
            <Divider />
            <p className='p-5'>{text2}</p>
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
                src={imgUrl2}
                alt='hero1'
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

export default AboutHero;
