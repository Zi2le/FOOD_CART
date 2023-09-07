'use client'
import React, { useEffect, useState } from 'react'
import Reverse from '../reverse/page'
import Image from 'next/image'
import {LuChevronRight} from 'react-icons/lu'
import alex from '../../public/images/black.jpg'

const profile = () => {
        const [userInfo, setUserInfo] = useState({})

        useEffect(() => {
                // Retrieve user info (for this example, use session storage)
    const storedUserInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    setUserInfo(storedUserInfo || {})

        },[])

const shade = {
boxShadow : '0px 10px 40px 0px rgba(0, 0, 0, 0.03)'
}       

  return (
    <div className='px-10 bg-[#F5F5F8] min-w-[100%] h-screen'>
        <div className='pt-10'>
        <Reverse/>
        </div>
        <h2 className='mt-10 text-[34px] font-semibold leading-normal'>My profile</h2>
        <div className='flex justify-between leading-normal mt-8'>
                <p className='text-[18px] font-semibold'>
                        Personal details
                </p>
                <p className='mr-7 text-[15px] font-normal'>
                        change
                </p>
        </div>
        <div className=' flex  w-full justify-center' >
                <div className='flex justify-center space-y-4 items-center  bg-[#FFF] h-[197px] rounded-[20px] space-x-2 w-[95%]' style={shade}>
                <div className=' pl-3  '>
                        <div className='border-2 bg-zinc-800 w-[97px] h-[97px] rounded-[10px] flex justify-center'>
                        <Image src={alex} alt='Alexander'  width={92} height={92} className='w-[92px] h-[92px] flex-shrink-0 rounded-full  '/>
                        </div>

                </div>
                <div>
                        <div>
                        <p className='text-[18px] font-semibold'>
                        {userInfo.name}
                        </p>
                        </div>
                        <div>
                        <input type="email" name="email" id="email" placeholder={userInfo.email}  className='text-[11px] font-normal leading-normal opacity-50 border-b-[0.5px] border-black outline-none bg-transparent'/>
                        </div>
                        <div>
                        <input type="tel" name="tel" id="tel" className='text-[15px] font-normal leading-normal opacity-50 border-b-[0.5px] border-black outline-none bg-transparent w-[165px]' />
                        </div>
                        <div>
                        <input type="text" name="text" id="text" className='text-[15px] font-normal leading-normal opacity-50 border-b-[0.5px] border-black outline-none bg-transparent w-[165px]'/>
                        </div>
                </div>
                </div>
        </div>
        <div className='flex flex-col min-h-[44vh] justify-evenly items-center '>    
                <div className=' h-[60px] bg-[#FFF] rounded-[20px] flex  justify-between items-center px-3 im w-[90%]' style={shade}>
                <p className='text-[18px] font-semibold leading-normal'>
                Orders
                </p>
                <LuChevronRight className='w-[24px] h-[24px] ' />
                </div>
                <div className=' h-[60px] bg-[#FFF] rounded-[20px] flex justify-between items-center px-3 im w-[90%]' style={shade}>
                <p className='text-[18px] font-semibold leading-normal'>
                Pending reviews
                </p>
                <LuChevronRight  className='w-[24px] h-[24px] ' />
                </div>
                <div className='w-[90%] h-[60px] bg-[#FFF] rounded-[20px] flex justify-between items-center px-3 im' style={shade}>
                <p className='text-[18px] font-semibold leading-normal'>
                Faq
                </p>
                <LuChevronRight className='w-[24px] h-[24px]'  />
                </div>
                <div className='w-[90%] h-[60px] bg-[#FFF] rounded-[20px] flex justify-between items-center px-3 im ' style={shade}>
                <p className='text-[18px] font-semibold leading-normal'>
                Help
                </p>
                <LuChevronRight className='w-[24px] h-[24px]' />
                </div>
               
               
        </div>

    </div>
  )
}

export default profile