import React from 'react'
import ArticlesCard from '../../../components/ArticlesCard'
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {getAllPosts} from "../../../services/index/posts"
import {useQuery} from "@tanstack/react-query"


const Articles = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["post"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <section className='flex flex-wrap container mx-auto px-5 bottom-16 md:gap-x-5 gap-y-5 '>
       <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {/* {!isLoading && !isError && data.map((post)=>( */}
        <ArticlesCard 
        // key={post._id}
        // post={post}
        className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
{/* 
         ))}
        */}
        </div>

        <button onClick={()=>alert("ji")}
         className='flex gap-9 mx-auto font-bold font-serife hover:text-blue-500'>
          <span>Read More</span>
          <BsFillArrowRightCircleFill className='w-16 h-6' />
        </button>
    </section>
  )
}

export default Articles