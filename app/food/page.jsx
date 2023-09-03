'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FiShoppingCart, FiHeart, FiUser} from 'react-icons/fi'
import {LuSearch} from 'react-icons/lu'
import {TiHome} from 'react-icons/ti'
import {MdHistory} from 'react-icons/md'
import food from '../menufoods/food.json'
import Link from 'next/link'
import Navbar from '../swipe/page'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

export let foodJson = []
foodJson = food.slice()
const fmenu = () => {

  const [random, setRandom] = useState([])
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
    // const randomItems = () =>{
    //   const Plain = JSON.parse(food)
    //    const randoms = [...Plain]
    //    let r 
    //    for (let i = randoms.length - 1; i >= 0; i--){
    //     r = Math.floor(Math.random()* (i + 1))
    //    [randoms[i], randoms[r]] = [randoms[r], randoms[i]] 
    //    }
    //    setRandom(randoms)
    //  }
    // useEffect(() =>{
    //   randomItems()
    // }, [])
  
 
    
  const dow ={
    boxShadow: '0px 6px 20px 0px rgba(215, 56, 0, 0.40)',
  }
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
   
  const foods = food.map(food => (
    <Link href={`foodsdetails/${food.id}`}>
    <Fragment key={food.id}>
     <div className='bg-[#FFF] mb-20 rounded-[30px] w-[225px] h-[270px] md:w-[350px] md:h-[360px] items flex-shrink-0 relative mt-16 swiper-slide' style={{ ...hadow, width: '235px', height: '280px' }}>
      <div className='relative bottom-[50px] flex justify-center '>
        <Image src={food.img} width={189.773}  height={175} alt='pictures of food from different sites and a little from ris' className='rounded-full  border-[18px] md:h-[205px] md:w-[210px] w-[189.773px] h-[175px] ' placeholder='blur' blurDataURL={food.blurImage}/>
        </div>
       <div className='flex flex-col  mb-24'>
        <p className='capitalize opacity-90 font-semibold text-center text-[15px]'>{food.name}</p>
        <p className='mt-3 text-center text-[#FFC83A] font-semibold text-[12px]'>{food.price}</p>
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
    {/* <RxHamburgerMenu className='relative left-14 w-[22px] h-[14.667px]'/>
    <FiShoppingCart className='relative right-14 w-[24px] h-[24px] opacity-30'/> */}
   </div>
   <div className='mt-10 ml-14 md:mt-[110px]'>
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
   <div className='flex flex-col justify-evenly md:h-[60vh]'>
   <div className='flex space-x-16 mt-10  justify-center text-[#9A9A9D] text-[13px] w-full'>
   <Link href='/food'><p className='text-[#FFC83A] cursor-pointer border-b-[2.4px] border-[#FFC83A] pb-2 w-[68px] text-center '>Foods</p></Link>
   <Link href='/drinks'><p>Drinks</p></Link>
   <Link href='/snacks'><p>Snacks</p></Link> 
   </div>
   {/* <p className=' text-end mr-10 opacity-80 '>see more</p> */}
   <div className='swiper-container flex flex-col mt-10 overflow-auto overflow-x-auto'>
   <div className='mt-[45px] space-x-10 flex container swiper-wrapper ml-10'>{foods}</div> 
   </div>
<div className='mt-10 flex absolute bottom-4  w-full h-[40px]'>
  <div className='w-[25%] flex justify-center'>
<TiHome className='w-[37px] h-[37px] text-[#FFC83A]  rounded-[20px]' style={dow}/>
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

export default fmenu
