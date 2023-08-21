'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FiShoppingCart, FiHeart, FiUser} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import {LuSearch, LuChevronLeft} from 'react-icons/lu'
import {TiHome} from 'react-icons/ti'
import {LiaCartArrowDownSolid} from 'react-icons/lia'
import {MdHistory, MdOutlineLocalOffer, MdOutlineStickyNote2} from 'react-icons/md'
import {IoShieldHalf} from 'react-icons/io5'
import {BsArrowRight} from 'react-icons/bs'
import  menu  from '../menufoods/menu.json'
import Link from 'next/link'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
export let menuJson = []
menuJson = menu.slice()

const menupage = () => {

  // const [random, setRandom] = useState([''])


    // const randomItems = () =>{
    //   const Plain = JSON.parse(menu)
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
    
  const dow ={
    filter: 'drop-shadow(0px 6px 20px rgba(215, 56, 0, 0.40))',
  }
  const shadow = {
  boxShadow : '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  }
  const containerStyle = {
    backgroundColor: '#F9F9F9',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };
  const text = {
    textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    color: 'black',
    }
   
  const menus = menu.map(menu => (
    <SwiperSlide key={menu.id}>
    <Link href={`productdetails/${menu.id}`}>
     <div className=' bg-[#FFF] mb-20 rounded-[30px]  items md:w-[345px] md:h-[360px] flex-shrink-0 relative mt-16 border-[#EFEEEE] border-[1.5px] w-full h-[300px]' style={containerStyle }>
      <div className='relative bottom-[50px] flex justify-center '>
        <Image src={menu.img} width={270}  height={270} alt='pictures of food from different sites and a little from ris' className='rounded-full w-[200px] h-[200px] border-[13px]' placeholder='blur' blurDataURL={menu.blurImage}/>
        </div>
       <div className='flex flex-col  mb-24'>
        <p className=' capitalize opacity-90 font-semibold text-center text-[15px]'>{menu.name}</p>
        <p className='mt-3 text-center text-[#FFC83A] font-semiboldtext-[12px]'>{menu.price}</p>
      </div>
     </div>
     </Link>
     </SwiperSlide>
  ))
  return (
    <div className='min-w-[100%] min-h-screen  relative z-10 '> 
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
   <div className='flex justify-between pt-10 px-7'>
    <RxHamburgerMenu className='w-[22px] h-[14.667px]' onClick={open}/> 
    <div className='flex'>
      <div>
    <FiShoppingCart className='relative w-[24px] h-[24px] opacity-30 '/>
    </div>
      {/* <div className=''>{cart.length}</div> */}
    </div>
   </div>
   <div className='mt-10 ml-14 md:mt-[110px] ms:mt-2 '>
    <h2 className=' text-4xl font-bold' style={text}>
      Delicious 
    </h2>
    <h2 className=' text-4xl font-bold' style={text}> food for you</h2>
   </div>
   <Link href='/search'>
   <div className='flex justify-center md:mt-[56px]'>
   <div className='relative flex mt-7 flex-row-reverse items-center w-[365px] h-[60px] bg-[#EFEEEE] space-x-5  backdrop-filter backdrop:blur-xl rounded-[30px]'>
    <div className='mr-[230px]'>
    <button type="submit" className='relative border py-4 px-3 text-[17px] font-semibold opacity-50'>Search</button>
    </div>
    <div>
   <LuSearch  className=' h-[18px] w-[18px]  text-[#000000] text-center'/>
   </div>
   </div>
   </div>
   </Link>
   <div className='flex flex-col justify-evenly md:h-[60vh] '>
   <div className='flex space-x-16 mt-10 justify-center text-[#9A9A9D] text-[13px] items-center'>
   <Link href='/food'><p>Foods</p></Link>
   <Link href='/drinks'><p>Drinks</p></Link>
   <Link href='/snacks'><p>Snacks</p></Link> 
    <Link href='/sauce'><p>Sauce</p></Link>
   </div>
   {/* <p className=' text-end mr-10 opacity-80 '>see more</p> */}
   <div className='mt-[45px] space-x-10 flex md:ml-10'>
   <Swiper
   spaceBetween={40}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      {menus}
    </Swiper>
    </div> 

<div className='mt-10 flex absolute bottom-4  w-full h-[40px] z-20'>
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
    </div>
  )
}

export default menupage
