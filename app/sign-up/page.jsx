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
    <div className='relative min-w-[100%] min-h-screen bg-[#F2F2F2]'>
        <div className=' relative h-[329px] w-full rounded-b-[30px] bg-[#FFFFFF] shadow-2xl shadow-white'>
     <div className='flex flex-col justify-center items-center'>
        <div className='mt-20'>
                <Image src={img6} height={331} width={250} alt='aptech logo'/>
        </div>
        <div className='flex absolute  bottom-0 space-x-20 '>
          <Link href='/login'><p className='  py-3 w-[134px] text-center text-lg font-semibold'>Login</p></Link> 
           <Link href='/sign-up'><p className='border-b-[#EFB60E] border-b-[3px] py-3 w-[134px] text-center text-lg font-semibold'>Sign-up</p></Link> 
        </div>
     </div>
        </div>
        <form  className='md:mt-40'>
        <div  className='flex flex-col  items-center ml-10 mt-16 space-y-8 md:mr-5 '>
                <div className='flex flex-col space-y-2'>
                <label htmlFor="email" className='text-[15px] font-semibold opacity-[0.4] '>Full name</label>
                <input type="text" name="full" id="full" className='outline-none bg-transparent w-[290px] placeholder:text-[black] text-[17px] md:w-[314px] md border-b border-black py-2'placeholder='onaopemipoojedokun'  onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='flex flex-col justify-center space-y-2'>
                        <label htmlFor="mail">Email</label>
                        <input type="email" name="mail" id="mail" className='outline-none bg-transparent text-[17px] placeholder:text-[black] w-[290px]  md:w-[314px] border-black border-b py-2' placeholder='onaopemipoojedokun@gmail.com'  onChange={(e) => setEmail(e.target.value)} />

                </div>
                    <div className='flex flex-col'>
                        <label htmlFor="pass" className='text-[15px] font-semibold opacity-[0.4] '>Password</label>
                        <input className='outline-none bg-transparent text-[17px] placeholder:text-[black] w-[290px] border-black border-b py-2  md:w-[314px]' type="password" name="pass" id="pass" placeholder='********'  onChange={(e) => setPassword(e.target.value)} />
                        </div>
                </div>
       
          <div className='flex items-center mt-24 justify-center'>
            <Link href='/login'><button type="submit" className='rounded-[30px] bg-[#FFC83A] w-[314px] h-[70px] ' onClick={handleSignUp}>Sign up</button></Link>    
          </div>
        </form>
        </div>
  )
}

export default signuppage