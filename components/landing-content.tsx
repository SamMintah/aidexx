'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Joel',
    avatar: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    name: 'Otis',
    avatar: 'O',
    title: 'Software Engineer',
    description:
      'Best application in the market, great tool for developers and creatives!'
  },
  {
    name: 'Thom',
    avatar: 'T',
    title: 'CTO',
    description:
      'This app has changed my life, cannot imagine working without it!'
  },
  {
    name: 'Mary',
    avatar: 'M',
    title: 'CFO',
    description: 'The best in class, definitely worth the premium subscription!'
  }
];
const Products = [
  {
    image: '/desktop.png',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    image: '/desktop.png',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    image: '/desktop.png',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    image: '/desktop.png',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  }
];
const Updates = [
  {
    image: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    image: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    image: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  },
  {
    image: 'J',
    title: 'Software Engineer',
    description: "This is the best application I've ever used!"
  }
];

export const LandingContent = () => {
  return (
    <div className="container mx-auto max-w-screen-lg px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 mb-10">
        <div className="relative h-96 w-full md:w-2/3">
          <Image fill alt="desk" src="/desktop.png" />
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-center text-5xl text-white font-extrabold mb-10">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        </div>{' '}
      </section>

      <section className="mb-16">
        <h2 className="text-center text-5xl text-white font-extrabold mb-10">
          Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>{' '}
      </section>

      <section className="mb-16">
        <div className='flex flex-col'>
          <h2 className="text-center text-5xl text-white font-extrabold mb-10">
            Careers at aidexx
          </h2>
          <p className="text-center text-sm md:text-2l font-light text-white  mb-10">
            Developing safe and beneficial AI requires people from a wide range
            of disciplines and backgrounds.{' '}
          </p>
          <Button
            variant="default"
            className="md:text-lg items-center rounded-full font-semibold"
          >
            View Career
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16 mb-10">
          <div className="relative h-96 w-full md:w-2/3">
            <Image fill alt="desk" src="/career.jpg" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-center text-5xl text-white font-extrabold mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card
              key={item.description}
              className="bg-[#192339] border-none text-white"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <div className="md:px-20 md:m-10 h-10"></div>
    </div>
  );
};
