import AnimatedLogos from '@/components/AnimaedLogos';
import Button from '@/components/ReUsableButton';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='text-white bg-darkgray min-h-screen flex flex-col items-center px-6 py-8 md:px-12 lg:px-20 pt-[10rem]'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full'>
        <div className=' flex flex-col gap-4 text-center md:text-left'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight '>
            Save time by building <br className='hidden md:block' /> fast with Boldo Template
          </h1>
          <p className='text-md md:text-lg'>
            Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
          </p>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <Button
              content='Buy template'
              className=' text-darkgray px-6 py-2 bg-bggreen'
            />
            <Button
              content='Explore'
              className='border-white border-2 bg-transparent text-white px-6 py-2'
            />
          </div>
        </div>

        <div className='w-full max-w-xs md:max-w-md lg:max-w-lg flex justify-center'>
          <Image
            src="/assets/icons/hero graphics.svg"
            height={423}
            width={494}
            alt='Hero Image'
            className='w-full h-auto'
          />
        </div>
      </div>

      <AnimatedLogos/>
    </div>
  );
};

export default Hero;
