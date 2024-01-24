import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../assets/Data';

const HomeScreen = ({className}) => {
  return (
    <div className={`container mx-auto mt-10 `}>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Data.map((item) => (
          <div key={item._id} className="col">
            <Link to={`/blog/${item._id}`} className="text-decoration-none">
              <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mb-4`}>
                <img className='w-full object-cover object-center h-52 md:h-52 lg:h-48 xl:h-60' src={item.image} alt='Read article' />
                <div className='p-5'>
                  <h2 className='font-serif font-bold text-xl'>
                    {item.title}
                  </h2>
                  <p className='text-gray-400 mt-3 text-lg sm:text-xl lg:text-xl md:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa velit saepe quam commodi, obcaecati et, animi accusantium modi sequi sint, est aperiam. 
                  </p>
                  <div className='flex justify-between flex-nowrap items-center mt-6'>
                    <div className='flex items-center gap-x-2'>
                      {/* <img src={ProfileImg}  alt='profile picture' /> */}
                      <div className='flex flex-col'>
                        <h4 className='font-bold font-serif'>
                          Eric Okyere
                        </h4>
                        <div>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <span className="font-bold font-serif text-dark-light italic text-sm md:text-base">02 Nov</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};



export default HomeScreen;
