'use client';

import { BsTelephoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='pt-36 bg-[#dcc390]'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        className='container mx-auto w-2/3 py-24 px-16'
      >
        <h1 className='text-6xl font-bold text-center'>Make a reservation</h1>

        <form className='w-full mt-16'>
          <div className='grid grid-cols-12 gap-10'>
            <div className='col-span-12 md:col-span-6'>
              <div className='border-b border-gold py-2'>
                <input
                  className='appearance-none bg-transparent border-none w-full text-gray-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none font-title placeholder:text-gray-700'
                  type='text'
                  placeholder='FULL NAME'
                />
              </div>
            </div>

            <div className='col-span-12 md:col-span-6'>
              <div className='border-b border-gold py-2'>
                <input
                  className='appearance-none bg-transparent border-none w-full text-gray-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none font-title placeholder:text-gray-700'
                  type='text'
                  placeholder='EMAIL ADDRESS'
                />
              </div>
            </div>

            <div className='col-span-12'>
              <div className='border-b border-gold py-2'>
                <textarea
                  className='appearance-none bg-transparent border-none w-full text-gray-700 text-xl mr-3 py-1 px-2 leading-tight focus:outline-none font-title placeholder:text-gray-700'
                  rows={5}
                  placeholder='MESSAGE AND PHONE NUMBER'
                />
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              type='submit'
              className='mt-12 px-14 py-3 border border-gold text-center uppercase text-xl font-semibold hover:bg-black hover:text-gold transition'
            >
              Send
            </button>
          </div>
        </form>

        <h1 className='text-6xl font-semibold font-title mt-12 text-center'>
          ...or reach out directly
        </h1>

        <div className='mt-12 flex justify-center items-center gap-8'>
          <BsTelephoneFill fontSize={40} />
          <h2 className='text-2xl font-bold font-title'>1-647-897-7415</h2>
        </div>

        <div className='mt-12 flex justify-center items-center gap-8'>
          <BsFillEnvelopeFill fontSize={40} />
          <h2 className='text-2xl font-bold font-title'>
            restaurant@gmail.com
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
