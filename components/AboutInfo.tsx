'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutInfo = () => {
  return (
    <section className='container mx-auto px-24 py-32'>
      <h2 className='text-6xl font-semibold font-title text-center'>
        From Farm to Table, The Sustainable Dining Experience
      </h2>

      <div className='grid grid-cols-12 gap-4 mt-24 px-24'>
        <div className='col-span-6'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className='w-full h-full flex justify-center'
          >
            <Image
              src='/pic-2.jpg'
              alt='pic2'
              width={500}
              height={700}
              style={{ width: '400px', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
        <div className='col-span-6 flex justify-center'>
          <div>
            <p className='mb-12 text-xl leading-7'>
              Home design, inside and out, carries confidence and energy, so we
              design our houses like we were moving in. More paragraph with
              something snappy.
            </p>
            <p className='mb-12 text-xl leading-7'>
              Home design, inside and out, carries confidence and energy, so we
              design our houses like we were moving in. More paragraph with
              something snappy.
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
              className='w-full h-full flex justify-center'
            >
              <Image
                src='/pic-4.jpg'
                alt='pic4'
                width={500}
                height={500}
                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
