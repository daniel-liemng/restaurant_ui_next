'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

const Testimonial = () => {
  return (
    <section className='container mx-auto w-2/3 my-36'>
      <div className='flex gap-5'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className='flex flex-col gap-4'
          >
            <h4 className='text-xl font-light'>WHAT THEY THINK</h4>
            <h2 className='text-6xl font-bold font-title'>Testimonials</h2>
            <BiSolidQuoteAltRight fontSize={60} />
          </motion.div>
        </div>
        <div className='flex-1'>
          <div className='grid grid-cols-6 gap-4'>
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className='col-span-3 border border-slate-600 p-10'
            >
              <div className='flex gap-2 items-center'>
                <div>
                  <Image
                    src='/person-1.jpg'
                    alt='person'
                    width={50}
                    height={50}
                    className='w-[70px] h-[70px] rounded-full'
                  />
                </div>
                <div>
                  <h5 className='text-lg font-semibold'>James Doe</h5>
                  <h5 className='text-lg'>Customer</h5>
                </div>
              </div>

              <h4 className='mt-6 text-xl font-bold'>
                "Each dish is thoughtfully prepared and beautifully presented."
              </h4>
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
              className='col-span-3 border border-slate-600 p-10'
            >
              <div className='flex gap-2 items-center'>
                <div>
                  <Image
                    src='/person-1.jpg'
                    alt='person'
                    width={50}
                    height={50}
                    className='w-[70px] h-[70px] rounded-full'
                  />
                </div>
                <div>
                  <h5 className='text-lg font-semibold'>James Doe</h5>
                  <h5 className='text-lg'>Customer</h5>
                </div>
              </div>

              <h4 className='mt-6 text-xl font-bold'>
                "Each dish is thoughtfully prepared and beautifully presented."
              </h4>
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
              className='col-span-3 border border-slate-600 p-10'
            >
              <div className='flex gap-2 items-center'>
                <div>
                  <Image
                    src='/person-1.jpg'
                    alt='person'
                    width={50}
                    height={50}
                    className='w-[70px] h-[70px] rounded-full'
                  />
                </div>
                <div>
                  <h5 className='text-lg font-semibold'>James Doe</h5>
                  <h5 className='text-lg'>Customer</h5>
                </div>
              </div>

              <h4 className='mt-6 text-xl font-bold'>
                "Each dish is thoughtfully prepared and beautifully presented."
              </h4>
            </motion.div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
              variants={{
                hidden: { opacity: 0, x: 150 },
                visible: { opacity: 1, x: 0 },
              }}
              className='col-span-3 border border-slate-600 p-10'
            >
              <div className='flex gap-2 items-center'>
                <div>
                  <Image
                    src='/person-1.jpg'
                    alt='person'
                    width={50}
                    height={50}
                    className='w-[70px] h-[70px] rounded-full'
                  />
                </div>
                <div>
                  <h5 className='text-lg font-semibold'>James Doe</h5>
                  <h5 className='text-lg'>Customer</h5>
                </div>
              </div>

              <h4 className='mt-6 text-xl font-bold'>
                "Each dish is thoughtfully prepared and beautifully presented."
              </h4>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
