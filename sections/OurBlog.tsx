import BlogCard from '@/components/BlogCard'
import Button from '@/components/ReUsableButton'
import React from 'react'

const data = [
  {
    mainImageUrl:"/assets/Images/Rectangle 1270.png",
    body:"Pitch termsheet backing validation focus release.",
    date:"November 22, 2021",
    authorImage:"/assets/Images/Ellipse 4.png",
    authorName:"Chandler Bing"
  },
  {
    mainImageUrl:"/assets/Images/Rectangle 1270.png",
    body:"Pitch termsheet backing validation focus release.",
    date:"November 22, 2021",
    authorImage:"/assets/Images/Ellipse 4.png",
    authorName:"Chandler Bing"
  },
  {
    mainImageUrl:"/assets/Images/Rectangle 1270.png",
    body:"Pitch termsheet backing validation focus release.",
    date:"November 22, 2021",
    authorImage:"/assets/Images/Ellipse 4.png",
    authorName:"Chandler Bing"
  },
]

const OurBlog = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 px-6 lg:px-20">
      <div className='flex flex-col gap-2 items-center justify-center'>
           <h3 className='text-gray text-xl'>Our Blog</h3>
      <h1 className='text-3xl md:text-5xl leading-tight text-center md:w-[80%] '>Value proposition accelerator product management venture</h1> 
      </div>
      <div>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-4 w-full'>
          {data.map((blog,index) => {
            return (
              <BlogCard
                key={index}
                {...blog}
              />
            )
          })}
        </div>
        <div className='mt-12 flex items-center justify-center'>
        <Button
          content='Load More'
          className='font-bold border-2 border-darkgray bg-inherit text-darkgray text-xl'
        />
        </div>
      </div> 
    </section>
  )
}

export default OurBlog
