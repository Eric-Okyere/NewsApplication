import React,{useEffect} from 'react'
import MainLayout from '../components/MainLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { signup } from '../services/index/user'
import toast from "react-hot-toast"
import {useDispatch, useSelector} from "react-redux"
import { userActions } from '../store/reducers/userReducers'



const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);

const {mutate, isLoading}= useMutation({
    mutationFn:({name, email, password})=>{
        return signup({name, email, password})
    },
    onSuccess: (data) =>{
        dispatch(userActions.setUserInfo(data));
        localStorage.setItem("account", JSON.stringify(data))

    },
    onError:(error)=>{
        toast.error(error.message)
        console.log(error)
    }
})

    useEffect(()=>{
        if(userState.userInfo){
            navigate("/")
        }
    },[navigate, userState.userInfo]);

    const {register, handleSubmit, formState:{errors, isValid},
    watch,    
}= useForm({
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confirmpassword:"",
        },
        mode:"onChange"
    } )

    const submitHandler =( data)=>{
        const {name, email, password}=data;
        mutate({name, email, password})
    }

    const password = watch("password");


  return (
   <MainLayout>
    <section className='container mx-auto px-10 py-[100px]'>
       <div className='w-full rounded-lg bg-gray-100 p-5 max-w-xs mx-auto '>
        <h1 className='text-2xl font-bold text-center text-blue-600 mb-8'>
            Register with us</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
            <div className=' flex flex-col w-full mb-6'>
                <label htmlFor='name' 
                className='font-semibold block'>
                    Name</label>
                <input 
                 type='text' id='name' placeholder='Enter name'
                 {...register("name",
                 {minLength:{
                    value:3,
                    message:"Name must be atleast three characters"
                }, 
                required:{
                    value:true,
                    message:"Name is require"
                }
            }
                 )
                 
                 }
                className={`rounded-full px-6 outline-none border p-2 ${errors.name ? "border-red-500": ""}`}/>
                {errors.name?.message && (
                    <p className='text-red-500 text-sm mt-1'>
                        {errors.name?.message}
                    </p>
                )}
            </div>
            <div className=' flex flex-col w-full mb-6'>
                <label htmlFor='email' className='font-semibold block'>
                    Email</label>
                <input   type='email' id='email' placeholder='Enter email'
                {...register("email",
                {
                    pattern:{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                    },
               required:{
                   value:true,
                   message:"Email is require"
               }
           }
                )
                
                }
               className={`rounded-full px-6 outline-none border p-2 ${errors.name ? "border-red-500": ""}`}/>
               {errors.email?.message && (
                   <p className='text-red-500 text-sm mt-1'>
                       {errors.email?.message}
                   </p>
               )}
                
            </div>
            <div className=' flex flex-col w-full mb-6'>
                <label htmlFor='password' className='font-semibold block'>
                    Password</label>
                <input  
                {...register("password",
                {
                    minLength:{
                        value:6,
                        message:"Password length must be atleast 6 characters"
                    }
                    ,
               required:{
                   value:true,
                   message:"Password is require"
               }
           }
                )
                
                }
                type='password' id='password' placeholder='Enter password'
               className={`rounded-full px-6 outline-none border p-2 ${errors.name ? "border-red-500": ""}`}/>
               {errors.password?.message && (
                   <p className='text-red-500 text-sm mt-1'>
                       {errors.password?.message}
                   </p>
               )}
                
                
            </div>
            <div className=' flex flex-col w-full mb-6'>
                <label htmlFor='confirmpassword' className='font-semibold block'>
                    Confirm Password</label>
                <input type='password' id='confirmpassword' placeholder='Enter password'
               
               {...register("confirmpassword",
                {
               required:{
                   value:true,
                   message:"Please confirm your password"
               },
               validate:(value)=>{
                if(value !== password){
                return "Password does not match"
                }
               }
           })}
               
               className={`rounded-full px-6 outline-none border p-2 ${errors.name ? "border-red-500": ""}`}/>
               {errors.confirmpassword?.message && (
                   <p className='text-red-500 text-sm mt-1'>
                       {errors.confirmpassword?.message}
                   </p>
               )}
               
            </div>

            <Link to="/forget-password" className='text-sm font-semibold text-blue-500 '>
                Forgot Password
                </Link>

            <button type='submit' className='bg-blue-600 text-white font-bold
            text-lg py-2 px-8 w-full rounded-full my-6 disabled:opacity-10 disabled:cursor-not-allowed'
            disabled={!isValid || isLoading}
            >
                Register
                </button>
            <div className='flex justify-between'>
            <p>Already have an account? </p>
                <Link to="/login" className='text-blue-500'>Login</Link>
            </div>
                
            </form>
       </div>
    </section>
   </MainLayout>
  )
}

export default RegisterPage