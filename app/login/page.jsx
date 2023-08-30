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
    <div className='  relative min-w-[100%] h-screen bg-[#F2F2F2]'>
        <div className='relative  w-full rounded-b-[30px]  bg-[#FFFFFF] shadow-2xl shadow-white h-[25%%] flex flex-col justify-between'>
        <div className='flex justify-center items-center'>
                <Image src={img6} height={331} width={250} alt='aptech logo' />
        </div>
        <div className='flex justify-evenly md:justify-evenly md:items-end'>
               <Link href='/login'><p className=' border-b-[#EFB60E] border-b-[3px] py-3 w-[134px] text-center text-lg font-semibold md:w-[200px]'>Login</p></Link>
              <Link href='/sign-up'><p className=' py-3 w-[134px] text-center text-lg font-semibold md:w-[200px]'>Sign-up</p></Link>
        </div>
        </div>
        <form  className=' pb-4 w-full flex flex-col justify-center mt-5  md:h-[50vh]'>
        <div  className='flex flex-col justify-center items-center  mt-16 space-y-8 md:mr-5 h-[65%] md:space-y-20'>
                <div className='flex flex-col space-y-2'>
                        <label htmlFor="email" className='text-[15px] font-semibold opacity-[0.4]  md:text-[25px]'>Email address</label>
                        <input className='outline-none bg-transparent w-[314px] placeholder:text-[black] text-[17px] md:placeholder:text-[22px]  border-b border-black py-2  md:w-[500px]' type="email" name="em" id="email" placeholder='onaopemipoojedokun@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col space-y-2'>
                        <label htmlFor="pass" className='text-[15px] font-semibold opacity-[0.4] md:text-[25px]'>Password</label>
                        <input className='outline-none bg-transparent text-[17px] placeholder:text-[black] w-[314px] border-black md:placeholder:text-[22px] border-b py-2  md:w-[500px]' type="password" name="pass" id="pass" placeholder='********' onChange={(e) => setPassword(e.target.value)}  />
                        <div  className='pt-3 '>
                      <p className='text-[#FF0000] text-base text-semibold'>
                        Forgot password ?
                       </p>
          </div>
                </div>
        </div>
     
        <div className='flex items-center pb-3 justify-center w-full absolute bottom-3'>
            <Link href='/menu'><button type="submit" className='rounded-[30px] bg-[#FFC83A] w-[314px] h-[70px] md:text-[22px] ' onClick={handleLogin}>Login</button></Link>    
          </div>
        </form>
        </div>
  )
}

export default loginpage