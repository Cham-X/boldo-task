import Image from 'next/image'
import React from 'react'
import Button from './ReUsableButton';

const Footer = () => {
  const footerNav = [
    {
      title: 'Landings',
      links: ['Home', 'Products', 'Services'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Services'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Products', 'Services'],
    },
    {
      title: 'Contact',
      links: ['Email', 'Support', 'Live Chat'],
    },
  ];

  return (
    <div className='px-6 py-12 md:px-12'>
      <div className="bg-darkgray p-6 md:p-12 rounded-lg flex flex-col text-white items-center justify-center gap-8 md:gap-12 mb-8">

  <h1 className="text-2xl md:text-5xl leading-tight text-center max-w-[90%] md:w-[65%]">
          An enterprise template to ramp up your company website</h1>
  <form className="flex items-center justify-center gap-4 flex-wrap w-full">
          <input
            placeholder='Your email address'
               className="text-lg md:text-xl text-black outline-none placeholder:text-black placeholder:font-semibold rounded-full p-3 md:p-4 w-full lg:w-[400px]"
          />
          <Button
            content='Start now'
      className="bg-bggreen text-darkgray text-lg md:text-xl font-bold "
          />
        </form>
      </div>
    <footer className="flex flex-col lg:flex-row items-start justify-between w-full  text-gray gap-8">
      <div className="flex flex-col items-start justify-between flex-1 gap-4 min-h-[200px] w-full md:max-w-[30%]">
        <Image
          src="/assets/icons/footer-logo.svg"
          alt="logo"
          width={156}
          height={41}
        />
        <p className="text-sm md:text-base leading-relaxed">
          Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
        </p>
        <p className="text-sm md:text-base">All rights reserved.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 w-full">
        {footerNav.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-between gap-4 min-h-[200px] max-w-[30%]"
          >
            <h3 className="text-lg font-bold text-darkgray">{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <p
                key={linkIndex}
                className="hover:text-white cursor-pointer whitespace-nowrap"
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
    </div>
  );
};

export default Footer;
