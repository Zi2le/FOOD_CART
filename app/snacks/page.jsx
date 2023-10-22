'use client'
import React, { Fragment, useEffect } from 'react'
import Image from 'next/image'
import {FiHeart, FiUser} from 'react-icons/fi'
import {LuSearch} from 'react-icons/lu'
import {TiHome} from 'react-icons/ti'
import {MdHistory} from 'react-icons/md'
import snack from '../menufoods/snacks/snacks.json'
import Link from 'next/link'
import Navbar from '../swipe/page'
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper'
export let snackJson = []
snackJson = snack.slice()


const pmenu = () => {

    useEffect(() => {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    }, [])
  const shadow = {
  boxShadow : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  }
  const dow ={
    boxShadow: '0px 6px 20px 0px rgba(215, 56, 0, 0.40)',
  }
  const hadow = {
    boxShadow: '0px 30px 60px 0px rgba(57, 57, 57, 0.10)'

  }
  const text = {
    textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'black',
    }
  const snacks = snack.map(snack => (
    <Link href={`snackdetails/${snack.id}`}>
 <div className='rounded-[30px]  relative  border-[#EFEEEE] border-[1.5px] bg-[#FFF] h-[220px] w-[210px] md:h-[350px] md:w-[330px]  flex flex-col md:justify-between' key={snack.id} id={snack.id}>
      <div className='relative bottom-[50px] flex justify-center  w-full h-[200px] '>
        <Image src={snack.img} width={270}  height={270}
         alt='pictures of food from different sites and a little from ris'
         priority
          className='rounded-full  border-[13px]  flex-shrink-0 w-[140px] h-[140px] md:h-[230px] md:w-[200px] ' placeholder='blur' blurDataURL={snack.blurImage}/>
        </div>
       <div className='flex flex-col  mb-10 '>
        <p className=' capitalize opacity-60 font-semibold  text-center text-[12px] md:text-[20px]'>{snack.name}</p>
        <p className='text-center text-[#FFC83A] font-semibold text-[10px] md:text-[18px]'>{snack.price}</p>
      </div>
     </div>
    </Link>
  ))
  return (
    <div className=' min-w-[100%] h-[95vh] bg-[#F2F2F2] relative '> 
    <div className='h-[10%]'>
     <Navbar/>
     {/* <RxHamburgerMenu className='relative left-14 w-[22px] h-[14.667px]'/>
     <FiShoppingCart className='relative right-14 w-[24px] h-[24px] opacity-30'/> */}
    </div>
    <div className='h-[35%] w-full '>
    <div className='flex justify-center flex-col h-[37%] px-7' >
     <h2 className='text-3xl md:text-6xl font-bold' style={text}>
       Delicious 
     </h2>
     <h2 className='text-3xl font-bold md:text-6xl ' style={text}> food for you</h2>
    </div>
   <div className='w-full  h-[45%] flex justify-center items-center'>
     <div className='flex w-[365px] md:w-[65%] md:h-[40%] h-[60px] bg-[#EFEEEE]  backdrop-filter backdrop:blur-xl rounded-[30px]' style={shadow}>
       <div className='flex justify-center items-center w-[40%] '>
       <div className='mr-2 md:mr-5 '>
         <LuSearch className='h-[18px] w-[18px] md:h-[25px]  md:w-[25px] text-[#000000]'/>
       </div>
      <div>
           <p className='text-[17px] md:text-[23px] font-semibold opacity-50'>Search</p>
      </div>
      </div>
     </div>
   </div>
   <div className=' h-[23%] flex justify-between items-center w-full text-[#9A9A9D] text-[13px]'>
     <div className='flex space-x-16 justify-center text-[#9A9A9D] text-[15px] md:text-2xl  items-center w-full h-[60%]'>
     <Link href='/food'><p>Foods</p></Link>
    <Link href='/drinks'><p className='text-[#FFC83A] cursor-pointer border-b-[2px] border-[#FFC83A] pb-2 w-[60px] text-center '>Drinks</p></Link>
    <Link href='/snacks'><p>Snacks</p></Link> 
    </div>
    </div>
    </div> 
    
    {/* <div className='flex space-x-16 mt-10  justify-center text-[#9A9A9D] text-[13px] w-full'>
    <Link href='/food'><p className='text-[#FFC83A] cursor-pointer border-b-[2.4px] border-[#FFC83A] pb-2 w-[68px] text-center '>Foods</p></Link>
    <Link href='/drinks'><p>Drinks</p></Link>
    <Link href='/snacks'><p>Snacks</p></Link> 
    </div> */}
    {/* <p className=' text-end mr-10 opacity-80 '>see more</p> */}
    <div className=' swiper-container space-x-8  h-[50%] flex-shrink-0 w-full flex  items-center overflow-x-scroll pt-[10%]'>
    {snacks}
     </div> 
 <div className='flex fixed bottom-3  w-full justify-center items-center'>
  <div className='w-[25%] flex justify-center'>
 <TiHome className='w-[37px] h-[37px] text-[#FFC83A]  rounded-[20px] ' style={dow}/>
  </div>
 
   <div className='w-[25%] flex justify-center'>
 <FiHeart className='w-[29px] h-[29px] opacity-30' />
   </div>
 
 <div className='w-[25%] flex justify-center'>
   <Link href='/profile'>
 <FiUser className='w-[29px] h-[29px] opacity-30'/>
 </Link>
 </div>
 
 <div className='w-[25%] flex justify-center'>  
 <Link href='/history'>
 <MdHistory  className='w-[38px] h-[33px] opacity-30'/>
 </Link>
 </div>
 </div>
    </div>
  )
}

export default pmenu
