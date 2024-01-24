import React from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import Image from "../../assets/Option.jpg"
import { Link, useParams } from 'react-router-dom'
import LatestPost from './container/LatestPost'
import CommentContainer from '../../components/comments/CommentContainer'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useQueries } from '@tanstack/react-query'
import Page from '../../assets/Data';
const Data =[
    {name: "Home", link:"/"},
    {name: "Blog", link:"/blog"},
    {name: "Article Title", link:"/blog/1"}
]

const postData = [
    {
    _id:"1",
    image:Image,
    title:"Help children get better education",
    createdAt:"2023-01-28"

},
    {
    _id:"1",
    image:Image,
    title:"Help children get better education",
    createdAt:"2023-01-28"

},
    {
    _id:"1",
    image:Image,
    title:"Help children get better education",
    createdAt:"2023-01-28"

},
    {
    _id:"1",
    image:Image,
    title:"Help children get better education",
    createdAt:"2023-01-28"

},
]

const tagsdata = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education"
]




const Detail = () => {

    const { id } = useParams();
    
    // Find the card data based on the id
    const card = Page.find((item) => item._id === id);
  
    if (!card) {
      // Handle the case where the card is not found
      return <div>Card not found</div>;
    }
    
  return (
    <MainLayout>
    <section className='container mx-auto max-w-5xl flex flex-col px-5 py-10 lg:flex-row lg:gap-x-20 
    lg:items-start  '>
        <article className='flex-1  mt-10'>
           <BreadCrumbs data={Data} />

           <img className='rounded-xl w-full '
           src={ card.image } alt='image' />

           <Link to='/blog?category=selectedCategory' 
           className='text-blue-400 text-sm font-serif inline-block mt-4 md:text-base md:text-[26px]'>
           EDUCATION
           </Link>

           <h1 className='text-xl font-medium font-serif mt-4 text
           lg:text-2xl'>{card.title}</h1>
           
           <div className='mt-4 '>
           <p className='leading-7 font-serif lg:text-xl text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum illo mollitia numquam
             pariatur facere quae. Iste odio commodi possimus, ipsam eos, quod quidem tenetur rerum id sunt 
             ut aliquam fugiat!
           </p>
           </div>

           {/* Comment Container */}
           <CommentContainer className="mt-10" logginedUserId="a" />
            </article> 

        <div>
            <LatestPost header="Latest Post" posts={postData} Tags={tagsdata} 
            className="lg:-mt-7 lg:max-w-sm"
            />
            </div>

            <div className='mt-7 md:mt-10'>
            <h2 className=' font-medium mb-4 md:text-xl'>Share on:</h2>
           
           <SocialShareButtons
           url={encodeURI(
            "https://console.cloudinary.com/console/c-08bc97d36f3126fbd95db150186a87/media_library/search?q="
           )}

           title={encodeURIComponent(
            "News of Ghana economic status"
           )}
           />
            </div>
       
    </section>
    </MainLayout>
  )
}

export default Detail