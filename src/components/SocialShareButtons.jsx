import React from 'react'
import {FaFacebookSquare,FaWhatsappSquare, FaTwitterSquare, FaRedditSquare} from "react-icons/fa"

const SocialShareButtons = ({url}) => {
  return (
    <div className=' w-full flex justify-between lg:justify-between'>
        <a   href='/'>
            <FaFacebookSquare className='text-blue-500 w-8 h-auto' />
        </a>
        <a href='/'>
            <FaTwitterSquare className='text-[#00acee] w-8 h-auto' />
        </a>
        <a href='/'>
            <FaRedditSquare className='text-red-500 w-8 h-auto'/>
        </a>
        <a target='_blank' rel='noreferrer' 
        href={`https://api.whatsapp.com/send/?text=${url}`}>
            <FaWhatsappSquare className='text-green-500 w-8 h-auto'
            />
        </a>
    </div>
  )
}

export default SocialShareButtons