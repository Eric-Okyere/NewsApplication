import React from "react";

import  images from "../../../assets/Option.jpg";
import {useForm} from "react-hook-form"


const Options = () => {
    const {register, trigger, 
        formState:{errors}}= useForm();
       
        const onSubmit = async(e)=>{
        const isValid = await trigger();
        if(!isValid)
        e.preventDefault();
       }

       const inputStyles = `w-full my-2 rounded-lg px-5 py-1 placeholder-black`




  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#b1b2b3"
        />
      </svg>

      <section className="relative bg-[#b1b2b3] px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
            <form
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/97079774f3d729bedb3fa33cf5c60feb"
                >
              
                <input 
                placeholder="Add Your Name"
                className={inputStyles}
                type="text"
                {...register("name",{
                    required:true,
                    maxLength:100,

                } )}
                />
                {errors.name && (
                    <p className="mt-1 text-black">
                        {errors.name.type==="required" && "Please add your name."}
                        {errors.name.type==="maxLength" && "You have reached the limited character."}
                    </p>
                )}
                
                <input 
                placeholder="Add Your Email"
                className={inputStyles}
                type="text"
                {...register("email",{
                    required:true,
                    pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

                } )}
                />
                {errors.email && (
                    <p className="mt-1 text-black">
                        {errors.email.type==="required" && "Please add your email."}
                        {errors.email.type==="pattern" && "Invalid email address."}
                    </p>
                )}
               

               <textarea
                placeholder="Please briefly tell us what you want"
                className={inputStyles}
                rows={4}
                cols={50}
                {...register("message",{
                    required:true,
                    maxLength:2000,

                } )}
                />
                {errors.message && (
                    <p className="mt-1 text-black">
                        {errors.message.type==="required" && "Please briefly tell us what you want."}
                        {errors.message.type==="maxLength" && "You have reached the limited character."}
                    </p>
                )}
                <button
                type="submit"
                className="mt-2 bg-black text-white px-12 py-1 rounded-full
                 hover:bg-blue-600 flex items-center"
                >Submit</button>
                </form>
            </div>
            <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#4c85e0] md:not-italic md:font-normal md:text-dark-light">
                Get a response tomorrow
              </span>{" "}
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
          </div>
          <div className="col-span-12 hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-white rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                <img
                  src={images}
                  alt="title"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
                    Future of Work
                  </h2>
                  <p className="text-dark-light mt-3 text-sm md:text-lg">
                    Majority of peole will work in jobs that don’t exist today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Options;
