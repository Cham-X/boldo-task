"use client"

import Image from 'next/image'
import React,{useState} from 'react'
import { BiChevronDown,BiChevronUp  } from 'react-icons/bi'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


const data = [
    {
        comment: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
        name: "Albus Dumbledore",
        role: "Manager @ Howarts",
        image:"/assets/Images/Ellipse 4 (2).png"
    },
    {
        comment: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
        name: "Severus Snape",
        role: "Manager @ Slytherin",
        image:"/assets/Images/Ellipse 4.png"
    },
    {
        comment: "“Release facebook responsive web design business model canvas seed money monetization.”",
        name: "Harry Potter",
        role: "Team Leader @ Gryffindor",
        image:"/assets/Images/Ellipse 4 (1).png"
    },
]

const CompanyTemplate = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
    {
      question: "We connect our customers with the best?",
      answer: "Yes, we offer exceptional connections tailored to our customers' needs.",
    },
    {
      question: "Android research & development rockstar?",
      answer: "Our team specializes in cutting-edge Android R&D services.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section className='flex flex-col w-full'>
 <div className="flex flex-col items-center justify-between gap-8 bg-darkgray text-white py-8 px-6 lg:px-20">
        
             <div className='flex flex-col md:flex-row items-center md:items-start justify-between w-full animate-fadeIn'>

          <h1 className='text-3xl md:text-5xl leading-tight text-center md:text-left max-w-full md:max-w-[50%] animate-slideIn'>
            An enterprise template to ramp up your company website
          </h1>
          <div className='flex items-center justify-center gap-4'>
            <BsArrowLeft className='text-darkgray bg-white text-4xl rounded-full p-2'/>
            <BsArrowRight className='text-darkgray bg-white text-4xl rounded-full p-2'/>
          </div>      
        </div>

        <div className='flex flex-col md:flex-row gap-4 justify-between items-start w-full'>
          {data.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-md text-black max-w-[350px] flex flex-col gap-4 p-4 animate-fadeInUp'
            >
              <p className='text-2xl'>{item.comment}</p>
              <div className='flex gap-4 items-center'>
                <Image src={item.image} alt={item.name} width={58} height={58} className='rounded-full'/>
                <div className='text-darkgray'>
                  <h4 className='text-base font-bold'>{item.name}</h4>
                  <p className='text-sm'>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
          <div
              className="flex flex-col items-center justify-between gap-8 py-12 px-6 lg:px-20">
              <div
                  className='flex items-center justify-center w-full h-[405px] overflow-hidden relative rounded-md'
              >
                      <Image
                  src="/assets/Images/Image.png"
                  alt="Company Template"
                    layout="fill"
              objectFit="cover"
                  className="absolute top-0 left-0"
              />
              </div>

      <div className="flex flex-col gap-8 lg:flex-row items-center justify-between w-full px-6 py-8">
      <h1 className="text-3xl md:text-5xl leading-tight text-center md:text-left md:max-w-[50%] max-w-full">
        We connect our customers with the best, and help them keep up-and stay open.
      </h1>

      <div className="flex flex-col gap-6 w-full lg:w-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full md:w-[500px]">
            <div
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-xl w-[90%]">{faq.question}</p>
              {activeIndex === index ? (
                <BiChevronUp className="bg-darkgray text-white text-4xl rounded-full p-1" />
              ) : (
                <BiChevronDown className="bg-darkgray text-white text-4xl rounded-full p-1" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-2 p-4 text-gray-700 text-base bg-gray-50 rounded-lg shadow-inner">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
        </div>
    </section>
  )
}

export default CompanyTemplate
