'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ChefInfoProps {
  name: string;
  desc: string;
  pic: string;
  reverse?: boolean;
}

const ChefInfo: React.FC<ChefInfoProps> = ({ name, desc, pic, reverse }) => {
  return (
    <div className='my-12 container mx-auto px-24'>
      <div className={reverse ? 'flex flex-row-reverse gap-16' : 'flex gap-16'}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex-1 flex flex-col justify-center'
        >
          <h2 className='text-6xl mb-6'>{name}</h2>
          <p>{desc}</p>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className='flex-1'
        >
          <Image
            src={pic}
            alt='chef'
            className='h-[450px] w-full object-cover'
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ChefInfo;
