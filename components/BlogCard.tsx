import Image from 'next/image'
import React from 'react'

const BlogCard = (
    { mainImageUrl, body, date, authorImage, authorName
    }: {
        mainImageUrl: string, body: string, date:string, authorImage: string, authorName: string
    }) => {
    
  return (
     <article className="max-w-[300px] flex flex-col gap-4">
      <div className="flex items-center justify-center bg-gray-400 w-[300px] h-[209px] overflow-hidden relative rounded-3xl">
        <Image
          src={mainImageUrl}
          alt="blog post"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0" />
          </div>
          <div className='flex gap-4 items-center justify-start text-base'>
              <p className='font-bold text-darkgray'>category</p>
          <p className='text-gray'>{date}</p>
          </div>
           <p className='text-xl'>{body}</p>
          <div className='flex gap-4 items-center justify-start'>
               <div className="w-[32px] h-[32px]">
            <Image
              src={authorImage}
              width={32}
              height={32}
              alt="avatar"
              className="rounded-[50%]"
            />
          </div>
          <p className="text-base">{authorName}</p>
</div>
    </article>
  )
}

export default BlogCard
