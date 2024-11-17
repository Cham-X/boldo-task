import Button from '@/components/ReUsableButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from 'react-icons/ti';

const data = [
  {
    title: "Cool feature title.",
        image: "/assets/Images/Rectangle 1270 (1).png",
     content: "Learning curve network effects return on investment."
  },
  {
    title: "Cool feature title,",
        image: "/assets/Images/Rectangle 1270 (2).png",
     content: "Learning curve network effects return on investment."
  },
  {
    title: "Cool feature title",
        image: "/assets/Images/Rectangle 1270 (3).png",
     content: "Learning curve network effects return on investment."
  }
];

const OurService = () => {
  return (
    <section className="flex flex-col items-center px-6 py-4 md:px-12 lg:px-20 pt-24 gap-8 bg-gray-50">
      <h3 className="text-gray text-xl">Our Services</h3>
      <h1 className="text-4xl md:text-5xl text-center max-w-5xl mb-4 leading-tight">
        Handshake infographic mass market crowdfunding iteration.
      </h1>

    <div className="flex flex-wrap justify-center gap-8 w-full">
        {data.map((item) => (
          <Card key={item.title} {...item} />
        ))}
    </div>
          
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full py-12 px-4 lg:px-20 bg-gray-50">
              <Image
                  src="/assets/Images/Group 216.png"
                  alt="image"
                      width={494}
          height={506} 
                  className="rounded-lg"
              />
     <div className="flex flex-col gap-8 items-center lg:items-start justify-center max-w-lg text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-loose">
          We connect our customers with the best, and help them keep up—and stay open.
        </h3>

        <div className="flex flex-col gap-4 text-lg sm:text-xl">
          {[
            'We connect our customers with the best.',
            'Advisor success customer launch party.',
            'Business-to-consumer long tail.',
          ].map((text, index) => (
            <div key={index} className="flex gap-3 items-center">
              <span className="text-white text-xl bg-darkgray rounded-full p-2 transition-transform duration-300 transform hover:scale-110">
                <TiTick />
              </span>
              <span>{text}</span>
            </div>
          ))}
                  </div>
                  <Button
                      className='bg-darkgray text-white'
                      content='Start now'
                  />
              </div>
      </div>
      
 <div className="flex flex-col md:flex-row items-center justify-between gap-8  px-6 lg:px-20">
      <div className="flex flex-col gap-6 items-start justify-center w-full md:max-w-[50%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug lg:leading-tight text-center md:text-left animate-fadeInUp">
          We connect our customers with the best, and help them keep up-and stay open.
        </h1>

        <div className="flex flex-col gap-4 items-start justify-center">
          <div className="flex items-center p-4 rounded-md gap-3 bg-darkgray text-white text-lg md:text-xl transition-transform transform hover:scale-105">
            <span className="animate-fadeIn">
              <Image src="/assets/icons/feather.svg" width={28} height={28} alt="feather icon" />
            </span>
            We connect our customers with the best.
          </div>

          <div className="flex items-center p-4 rounded-md gap-3 bg-white text-darkgray text-lg md:text-xl transition-transform transform hover:scale-105 shadow-md animate-fadeIn">
            <span>
              <Image src="/assets/icons/eye.svg" width={28} height={28} alt="eye icon" />
            </span>
            Advisor success customer launch party.
          </div>

          <div className="flex items-center p-4 rounded-md gap-3 bg-white text-darkgray text-lg md:text-xl transition-transform transform hover:scale-105 shadow-md animate-fadeIn">
            <span>
              <Image src="/assets/icons/sun.svg" width={28} height={28} alt="sun icon" />
            </span>
            Business-to-consumer long tail.
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-[45%] animate-slideInRight transition-transform transform hover:scale-105">
        <Image
          src="/assets/Images/Group 281.png"
          width={444}
          height={692}
          alt="Illustration"
        />
      </div>
      </div>
      
    </section>
  );
};

const Card = ({ image, title, content }: { image: string; title: string; content: string }) => {
  return (
      <div className="flex flex-col items-start justify-center gap-4 bg-inherit rounded-lg  overflow-hidden max-w-xs transition transform hover:scale-105 duration-300">
          <div className='flex items-center justify-center w-[300px] h-[354px] overflow-hidden relative'> 
               <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
                  className="absolute top-0 left-0"
              />
          </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600 mt-2">{content}</p>

              <Link href="/" className="flex flex-col items-start gap-2 text-xl font-semibold text-darkgray mt-4 group w-[50%]">
                  <span className='flex items-center gap-2 whitespace-nowrap'>
                                         Explore page
          <span>
            <FaArrowRight className="transition-transform transform group-hover:translate-x-1 duration-300" />
          </span>
                  </span>
          <span className="block h-0.5 bg-darkgray w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
        </Link>
      </div>
    </div>
  );
};

export default OurService;
