import Link from 'next/link';

import Divider from '@/components/Divider';
import { news } from '@/data/news';
import ContactForm from '@/components/ContactForm';

const NewsItem = ({
  name,
  date,
  desc,
  slug,
}: {
  name: string;
  date: string;
  desc: string;
  slug: string;
}) => (
  <div className='grid grid-cols-12 gap-5 my-10'>
    <div className='col-span-2'>
      <h2 className='text-3xl text-gray-700'>{date}</h2>
    </div>
    <div className='col-span-1'>
      <div className='border-l w-1 h-[80px] border-gray-700' />
    </div>

    <div className='col-span-9'>
      <Link href={`/news/${slug}`} className='text-4xl mb-4 hover:underline'>
        {name}
      </Link>
      <p>{desc}</p>
    </div>
  </div>
);

const NewsPage = () => {
  return (
    <section className='mt-16'>
      <div className='container mx-auto px-36'>
        <h1 className='my-12 text-8xl font-title text-center text-gray-700 tracking-tighter'>
          Latest News
        </h1>

        <Divider />

        <div className='my-16'>
          {news.map((item) => (
            <NewsItem {...item} key={item.id} />
          ))}
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default NewsPage;
