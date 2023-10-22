'use client'
import React, { useState } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FiShoppingCart} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import { LuChevronLeft} from 'react-icons/lu'
import {LiaCartArrowDownSolid} from 'react-icons/lia'
import {MdOutlineLocalOffer, MdOutlineStickyNote2} from 'react-icons/md'
import {IoShieldHalf} from 'react-icons/io5'
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link'
const bars = () => {
  const [ismenu, setIsmenu] = useState(false)
  const open = () => {
   setIsmenu(!ismenu)
  }
  const xan ={
   transition: 'transform 0.5s ease-in-out',
   transform: ismenu ? '' : 'translateX(-100%)'
  }
  const close ={
   transition: 'transform 0.5s ease-in-out',
   transform: ismenu ? '' : 'translateY(-100%)'
  }
  return (
    <div>
      <div className={`${ismenu ? ' xan ' : 'opacity-0'} h-full w-[70%]  bg-[#FFC83A] absolute top-0 z-20 flex flex-col justify-between  pl-3`} style={xan}>
    <div className='pt-10 pl-4'>
    <LuChevronLeft className={` ${ismenu ? 'close' : ''}flex-shrink-0 w-[24px] h-[24px] `} onClick={open} style={close}/>
    </div>
<div className='flex justify-between flex-col space-y-12 mb-16 w-[70%] md:w-[50%]'>
<div className='flex items-center border-b-[1.5px] border-black space-x-3 pb-3 '>
<CgProfile className='w-[24px] h-[24px] flex-shrink-0 ' />
<h3 className='text-[#060606] text-[17px] font-semibold'>
  profile
  </h3>
  {/* <span className='border-b-[1.5px] border-black pt-5 w-[312px]'></span> */}
</div>
<div className='flex items-center border-b-[1.5px] border-black space-x-3 pb-3'>
<LiaCartArrowDownSolid className='w-[24px] h-[24px] flex-shrink-0 ' />
<h3 className='text-[#060606] text-[17px] font-semibold'>
  orders
</h3>
</div>
<div className='flex items-center border-b-[1.5px] border-black space-x-3 pb-3'>
<MdOutlineLocalOffer className='w-[24px] h-[24px] flex-shrink-0' />
<h3 className='text-[#060606] text-[17px] font-semibold'>
offer and promo
</h3>
</div>
<div className='flex items-center border-b-[1.5px] border-black space-x-3 pb-3'>
<MdOutlineStickyNote2 className='w-[24px] h-[24px] flex-shrink-0'/>
<h3 className='text-[#060606] text-[17px] font-semibold'>
  Privacy policy
  </h3>
</div>
<div className='flex items-center border-b-[1.5px] border-black space-x-3 pb-3'>
<IoShieldHalf className='w-[24px] h-[24px] flex-shrink-0'/>
<h3 className='text-[#060606] text-[17px] font-semibold'>
  Security
  </h3>
</div>
</div>
<div className='flex items-center mb-16'>
<p className='text-[#060606] text-[17px] font-semibold'>
  Sign-out
</p>
<BsArrowRight className='w-[22px] flex-shrink-0' />
</div>
</div>
<div className='flex justify-between pt-5 px-7 '>
    <RxHamburgerMenu className='w-[23.5px] h-[23.5px] md:h-[28px] md:w-[28px]' onClick={open}/> 
    <div className='flex'>
      <Link href='/cart'>
      <div>
    <FiShoppingCart className='relative  opacity-30 w-[23.5px] h-[23.5px] md:h-[28px] md:w-[28px] '/>
    </div>
    </Link>
      {/* <div className=''>{cart.length}</div> */}
    </div>
   </div>
</div>
  )
}

export default bars