import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [isLogin , setIsLogin] = useState(true)
return (
    <div className='min-h-screen flex justify-center items-center'>
    <div className='w-[70vh] h-[80vh] sm:w-[70vh] sm:h-[80vh] border border-black rounded-lg'>
        <div className='flex justify-between p-4'>
            <button className={`text-3xl sm:text-xl md:text-4xl font-semibold border border-black rounded-xl p-3 cursor-pointer hover:bg-rose-300 hover:text-white ${isLogin? 'bg-blue-300': 'bg-white'}`} onClick={() => setIsLogin(true)}>Login</button>
            <button className={`text-3xl sm:text-xl md:text-4xl font-semibold border border-black rounded-xl p-3 cursor-pointer hover:bg-rose-300 hover:text-white ${!isLogin? 'bg-blue-300': 'bg-white'}`} onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>
        {isLogin? <>
        <div className='p-4'>
        <div className='flex flex-col items-center justify-between bg-blue-400 rounded-lg p-2'>
        <h2 className='text-2xl font-semibold'>Login Form</h2>
        </div>
        <input type="email" placeholder='Email' className='w-full p-3 border border-b-amber-50 mt-10 rounded-lg' />
        <input type="password" placeholder='Password' className='w-full p-3 border border-b-amber-50 mt-10 rounded-lg' />
        <div className='w-full flex justify-end mt-2'>
        <a href="#" className='text-blue-500 mr-1'>Forgot Password</a> </div>
        <div className='w-full flex p-3 justify-center items-center'>
        <button className='rounded-lg bg-blue-500 p-3 w-[40%] cursor-pointer hover:bg-rose-400 hover:text-white' >Login</button>
        </div>
        <div className='w-full flex justify-center items-center'><p>Not One of us? <a href="#" className='text-xl text-blue-500 cursor-pointer hover:text-rose-400' onClick={() => setIsLogin(false)}>Become One</a></p></div>
        </div> 


        </>:
        <div className='p-4'>
        <div className='flex flex-col items-center justify-between bg-blue-400 rounded-lg p-2'>
        <h2 className='text-2xl font-semibold'>Sign In form</h2>
        </div>
        <input type="email" placeholder='Email' className='w-full p-3 border border-b-amber-50 mt-5 rounded-lg' />
        <input type="password" placeholder='Password' className='w-full p-3 border border-b-amber-50 mt-5 rounded-lg' />
        <input type="password" placeholder=' Confirm Password' className='w-full p-3 border border-b-amber-50 mt-5 rounded-lg' />
        <div className='w-full flex p-3 justify-center items-center'>
        <button className='rounded-lg bg-blue-500 p-3 w-[40%] cursor-pointer hover:bg-rose-400 hover:text-white' >SignUp</button>
        </div>
        <div className='w-full flex justify-center items-center'><p>One of us? <a href="#" className='text-xl text-blue-500 cursor-pointer hover:text-rose-400' onClick={() => setIsLogin(true)}>Get In</a></p></div>
        </div>  }

        </div>
    </div>
)
}

export default Login
