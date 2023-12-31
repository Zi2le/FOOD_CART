'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img6 from '../../public/images/image1.png'
import { useRouter } from 'next/navigation'

const loginpage = () => {

const router = useRouter()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const handleLogin = () =>{
const userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
userInfo && userInfo.email === email && userInfo.password === password ? router.push('/profile') : alert('Login failed')
}

function handleSubmit(e){
    e.preventDefault() 
 }

  return (
    <div className=' min-w-[100%] h-auto bg-[#F2F2F2]'>
        <div className='relative  w-full rounded-b-[30px]  bg-[#FFFFFF] shadow-2xl shadow-white h-[25%] flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
                <Image src={img6} height={331} width={250} alt='aptech logo' />
        </div>
        <div className='flex justify-evenly md:justify-evenly md:items-end'>
               <Link href='/login'><p className=' border-b-[#EFB60E] border-b-[3px] py-3 w-[134px] text-center text-lg font-semibold md:w-[200px]'>Login</p></Link>
              <Link href='/sign-up'><p className=' py-3 w-[134px] text-center text-lg font-semibold md:w-[200px]'>Sign-up</p></Link>
        </div>
        </div>
        <div className=' w-full flex  justify-center items-center mt-5 h-[50vh] '>
        <form className=' flex flex-col justify-center items-center  space-y-8 md:mr-5 h-[85%] md:space-y-20'>
                <div className='flex flex-col space-y-2'>
                        <label htmlFor="email" className='text-[15px] font-semibold opacity-[0.4] md:text-[22px]'>Email address</label>
                        <input className='outline-none bg-transparent w-[314px] placeholder:text-[black] text-[17px] md:placeholder:text-[20px]  border-b border-black py-2  md:w-[500px]' autoComplete="email" type="email" name="em" id="email" placeholder='onaopemipoojedokun@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col space-y-2'>
                        <label htmlFor="pass" className='text-[15px] font-semibold opacity-[0.4] md:text-[22px]'>Password</label>
                        <input className='outline-none bg-transparent text-[17px] placeholder:text-[black] w-[314px] border-black md:placeholder:text-[20px] border-b py-2  md:w-[500px]' autoComplete="off" type="password" name="pass" id="pass" placeholder='********' onChange={(e) => setPassword(e.target.value)}  />
                        <div  className='pt-3 '>
                      <p className='text-[#FF0000] text-base text-semibold'>
                        Forgot password ?
                       </p>
          </div>
                </div>
        
     
        <div className='flex items-center pb-[1.5px] justify-center w-full fixed bottom-0'>
            <Link href='/menu'><button type="submit" className='rounded-[30px] font-semibold bg-[#FFC83A] w-[314px] h-[70px] md:text-[22px] ' onClick={handleLogin}>Login</button></Link>    
          </div>
        </form>
        </div>
        </div>
  )
}

export default loginpage