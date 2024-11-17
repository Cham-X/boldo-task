import Image from 'next/image'
import React from 'react'

const teams = [
    { image: "/assets/Images/Rectangle 1270 (3).png", name: "Michael Scott", role: "General Manager" },
    { image: "/assets/Images/Rectangle 1270 (3).png", name: "Michael Scott", role: "General Manager" },
    { image: "/assets/Images/Rectangle 1270 (3).png", name: "Michael Scott", role: "General Manager" }, 
]

const values = [
    {
        Image: "/assets/Images/Rectangle 1270.png",
        header: "we are commited",
        paragraph:"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
    },
    {
        Image: "/assets/Images/Rectangle 1270.png",
        header: "we are commited",
        paragraph:"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
    },
    {
        Image: "/assets/Images/Rectangle 1270.png",
        header: "we are commited",
        paragraph:"Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
    },
]

const OurTeam = () => {
    return (
      <>
    <div className="flex flex-col items-center justify-between gap-8 text-xl py-16 px-6 lg:px-20 text-gray">
         <div className="flex flex-col gap-6 items-start w-full md:max-w-[80%] ">
              <p className='text-left'>Our team</p>
                  <h1 className='text-center text-black text-3xl md:text-5xl max-w-[70%]'>The leadership team</h1>
              <p>
                Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus.
              </p>
          </div>
          <div className='flex flex-wrap items-center justify-center w-full gap-4'>
             { teams.map((team,index) => (
                 <article
                     key={index}
                     className='flex flex-col items-start gap-3'
                 >
                     <Image
                         src={team.image}
                         alt='team meber'
                         width={300 }
                         height={354}
                     />
                     <h2 className='text-3xl text-black'>{team.name}</h2>
                     <p className='text-xl'>{team.role }</p>
              </article>
              ))}
          </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-12 bg-darkgray text-xl text-white py-16 px-6 lg:px-20">
         <div className="flex flex-col gap-6 items-start w-full md:max-w-[80%] ">
                    <p>Our values</p>
                     <h1 className='text-cente text-3xl md:text-5xl max-w-[70%]'>Things in we believe</h1>
                    <p>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. </p>
                </div>   
                              <div className='flex flex-col items-start justify-center w-full gap-4'>
                    {values.map((value,index) => (
                        <article
                            key={index}
                            className='flex flex-wrap gap-8 items-start justify-center'
                        >
                            <Image
                                src={value.Image}
                                height={151}
                                width={150 }
                                alt='image'
                            />
                            <div className='flex flex-col gap-4 max-w-[600px]'>
                                <h3>{value.header}</h3>
                                <p>{ value.paragraph}</p>
                            </div>
                    </article>
))}
                </div>
            </div>
      </>
  )
}

export default OurTeam
