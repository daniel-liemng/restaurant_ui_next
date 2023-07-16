'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const NewsDetailsPage = () => {
  return (
    <section className='my-16'>
      <div className='container mx-auto px-12'>
        <h2 className='my-12 text-3xl font-title text-center text-gray-700 tracking-tighter'>
          February 14, 2023
        </h2>
        <h1 className='my-12 text-8xl font-title text-center text-gray-700 tracking-tighter'>
          Our Restaurant's Guide to Hosting Memorable Events
        </h1>

        <h6 className='text-2xl text-center my-6'>
          Voluptatem laboriosam repellendus. Eaque exercitationem et sed quis at
          corporis eaque commodi asperiores. Aliquam autem suscipit occaecati
          magni ut veniam eos. Corrupti omnis ea. Rerum numquam perferendis.
          Laudantium neque odio reiciendis sed itaque quod enim autem cumque.
        </h6>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            src='/pic-12.jpg'
            alt='pic'
            className='h-[500px] w-full object-cover'
            width={900}
            height={900}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
        </motion.div>

        <p className='text-xl my-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem quia voluptas pariatur nemo. Laudantium vero, nihil
          sunt totam libero dignissimos minima. Numquam distinctio corporis
          dolorum! Molestiae nihil rem atque ducimus, tempore reiciendis unde
          nobis distinctio nostrum! Amet modi harum quam deleniti, tenetur
          reprehenderit culpa quibusdam laboriosam vero nihil repellendus!
          Debitis!
        </p>
        <p className='text-xl my-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem quia voluptas pariatur nemo. Laudantium vero, nihil
          sunt totam libero dignissimos minima. Numquam distinctio corporis
          dolorum! Molestiae nihil rem atque ducimus, tempore reiciendis unde
          nobis distinctio nostrum! Amet modi harum quam deleniti, tenetur
          reprehenderit culpa quibusdam laboriosam vero nihil repellendus!
          Debitis!
        </p>
        <p className='text-xl my-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem quia voluptas pariatur nemo. Laudantium vero, nihil
          sunt totam libero dignissimos minima. Numquam distinctio corporis
          dolorum! Molestiae nihil rem atque ducimus, tempore reiciendis unde
          nobis distinctio nostrum! Amet modi harum quam deleniti, tenetur
          reprehenderit culpa quibusdam laboriosam vero nihil repellendus!
          Debitis!
        </p>
      </div>
    </section>
  );
};

export default NewsDetailsPage;
