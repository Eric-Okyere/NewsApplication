import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({data}) => {
  return (
    <div className='flex items-center py-4 overflow-auto whitespace-nowrap'>
        {data.map((item, index)=>(
            <div key={index} className='text-black opacity-50 text-sm md:text-sm font-serif'>
                <Link to={item.link} >
                    {item.name}
                </Link>
                {index !== data.lenght -1 && <span className='px-3'>/</span>}
            </div>
        ))}
        </div>
  )
}

export default BreadCrumbs