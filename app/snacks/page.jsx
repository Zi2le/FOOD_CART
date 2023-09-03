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
  const hadow = {
    boxShadow: '0px 30px 60px 0px rgba(57, 57, 57, 0.10)'

  }
  const text = {
    textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'black',
    }
  const snacks = snack.map(snack => (
    <Link href={`snackdetails/${snack.id}`}>
    <Fragment key={snack.id}>
     <div className='bg-[#FFF] mb-20 rounded-[30px] w-[180px] h-[200px] items flex-shrink-0 relative mt-16 swiper-slide' style={{ ...hadow, width: '235px', height: '262px' }}>
      <div className='relative bottom-[50px] flex justify-center '>
        <Image src={snack.img} width={130}  height={130} alt='pictures of food from different sites and a little from ris' className='rounded-full  border-[10px] h-[130px] w-[130px] md:w-[165px] md:h-[175px] ' placeholder='blur' blurDataURL={snack.blurImage}/>
        </div>
       <div className='flex flex-col items-center justify-center'>
        <p className=' capitalize opacity-90 font-semibold text-center text-[15px]'>{snack.name}</p>
        <p className=' text-center  text-[#FFC83A] font-semiboldtext-[12px]'>{snack.price}</p>
      </div>
     </div>
    </Fragment>
    </Link>
  ))
  return (
    <div className=' min-w-[100%] min-h-screen bg-[#F2F2F2] relative'>
       <div className='md:min-h-[90vh]'>
   <div>
    <Navbar/>
   </div>
   <div className='mt-10 ml-14 md:mt-[80px]'>
    <h2 className=' text-4xl font-bold' style={text}>
      Delicious 
    </h2>
    <h2 className=' text-4xl font-bold' style={text}> food for you</h2>
   </div>
   <Link href='/search'>
   <div className='flex justify-center md:mt-[56px]'>
   <div className='relative flex mt-7 flex-row-reverse items-center w-[365px] h-[60px] bg-[#EFEEEE] space-x-5  backdrop-filter backdrop:blur-xl rounded-[30px]'style={shadow}>
    <div className=' mr-[230px]'>
    <button type="submit" className='relative border py-4 px-3 text-[17px] font-semibold opacity-50' >Search</button>
    </div>
    <div>
   <LuSearch  className=' h-[18px] w-[18px]  text-[#000000] text-center'/>
   </div>
   </div>
   </div>
   </Link>
   <div className='flex flex-col justify-evenly  md:h-[60vh] '>
   <div className='flex space-x-16 mt-10  justify-center text-[#9A9A9D] text-[13px] '>
   <Link href='/food'> <p>Foods</p></Link>
   <Link href='/drinks'><p>Drinks</p></Link>
<Link href='/snacks'><p className='text-[#FFC83A] cursor-pointer border-b-[2.6px] border-[#FFC83A] pb-2 w-[68px] text-center'>Snacks</p></Link> 
   </div>
   {/* <p className=' text-end mr-10 opacity-80 '>see more</p> */}
   <div className='swiper-container flex flex-col overflow-auto overflow-x-auto mt-6'>
   <div className='mt-[45px] space-x-10 flex container swiper-wrapper ml-10 md:mt-[89px]'>{snacks}</div> 
   </div>
<div  className='mt-10 flex absolute bottom-4  w-full h-[40px]'>
  <div className='w-[25%] flex justify-center'>
<TiHome className='w-[37px] h-[37px] text-[#FFC83A]'/>
</div>
<div className='w-[25%] flex justify-center'>
<FiHeart className='w-[29px] h-[29px] opacity-30' />
</div>
<div className='w-[25%] flex justify-center'>
<FiUser className='w-[29px] h-[29px] opacity-30'/>
</div>
<div className='w-[25%] flex justify-center'>
<MdHistory  className='w-[38px] h-[33px] opacity-30'/>
</div>
</div>
</div>
</div> 
    </div>
  )
}

export default pmenu
