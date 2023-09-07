'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img6 from '../../public/images/image1.png'

const signuppage = () => {
function haubmit(e){
 e.preventDefault() 
 }
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')


 
 const handleSignUp = () => {
        // Save user info to some storage (e.g., session storage or API)
        // For this example, we'll use session storage
        const userInfo = {name, email, password}
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      };
  return (
    <div className='relative min-w-[100%] h-screen bg-[#F2F2F2]'>
        <div className=' relative  w-full rounded-b-[30px]  bg-[#FFFFFF] shadow-2xl shadow-white h-[30%] flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
                <Image src={img6} height={331} width={250} alt='aptech logo'/>
        </div>
        <div className='flex  justify-evenly md:justify-evenly md:items-end'>
          <Link href='/login'><p className='  py-3 w-[100px] text-center text-lg font-semibold md:text-[25px] md:w-[200px]'>Login</p></Link> 
           <Link href='/sign-up'><p className='border-b-[#EFB60E] border-b-[3px] py-3 w-[100px] md:w-[200px] text-center text-lg font-semibold md:text-[25px]'>Sign-up</p></Link> 
        </div>
        </div>
        <form  className='md:mt-32 pb-4 w-full'>
        <div  className='flex flex-col  items-center  mt-10 space-y-8 md:mr-5  h-[55%] md:space-y-6'>
                <div className='flex flex-col space-y-2'>
                <label htmlFor="email" className='text-[15px] font-semibold opacity-[0.4] md:text-[21px] '>Full name</label>
                <input type="text" name="full" id="full" className='outline-none bg-transparent w-[290px] placeholder:text-[black] md:placeholder:text-[20px] text-[17px] md:w-[500px] md border-b border-black py-2'placeholder='onaopemipoojedokun'  onChange={(e) => setName(e.target.value)} autocomplete="given-name"/>
                </div>

                <div className='flex flex-col justify-center space-y-2'>
                        <label htmlFor="mail">Email</label>
                        <input type="email" name="mail" id="mail" className='outline-none bg-transparent text-[17px] placeholder:text-[black] w-[290px] md:placeholder:text-[20px]  md:w-[500px] border-black border-b py-2' placeholder='onaopemipoojedokun@gmail.com'  onChange={(e) => setEmail(e.target.value)}autocomplete="off" />

                </div>
                    <div className='flex flex-col'>
                        <label htmlFor="pass" className='text-[15px] font-semibold opacity-[0.4] '>Password</label>
                        <input className='outline-none bg-transparent text-[17px] placeholder:text-[black] w-[290px] border-black border-b py-2  md:w-[500px] md:placeholder:text-[20px]' type="password" name="pass" id="pass" placeholder='********'  onChange={(e) => setPassword(e.target.value)} autocomplete="email" />
                        </div>
                </div>
       
          <div className='flex items-center justify-center bottom-0 fixed w-full'>
            <Link href='/login'><button type="submit" className='rounded-[30px] bg-[#FFC83A] w-[314px] h-[70px]  md:rounded-[56px] md:text-[22px] font-semibold' onClick={handleSignUp}>Sign up</button></Link>    
          </div>
        </form>
        </div>
  )
}

export default signuppage