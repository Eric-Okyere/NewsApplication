import React from 'react'
import { Link } from 'react-router-dom'

const LatestPost = ({className, header, posts = [], Tags }) => {
  return (
    <div className={`w-full lg:mt-2  ${className}`}>
       <h2 className='font-serif font-bold mt-10 md:text-xl'>
        {header}
        </h2>
       {/* Render Latest Post */}
       <div className='grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1'>
        {posts.map((item, index)=>(
            <div key={index} className='flex space-x-3 flex-nowrap items-center'>
        <img className='aspect-square object-cover rounded-lg w-[20%] ' 
        src={item.image}  alt='latestNews'/>
           
           <div >
        <h3 className='text-xl font-serif md:text-base lg:text-xl'>
            {item.title}</h3> 

            <span className='font-serif text-sm text-gray-400'>
                {new Date(item.createdAt).toDateString()}</span>
            </div>
            </div>
        ))}
       </div>


{/* Render Tags  */}
       <h2 className=' font-serif font-medium mt-9 md:text-xl'>
        Tags</h2>
        <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
            {Tags.map((item, index)=>(
        <Link key={index} to="/"  className='inline-block rounded-md px-3 py-2 bg-sky-600 
        font-serif  '>
            {item}</Link>
            ))}
        </div>
       </div>
  )
}

export default LatestPost
