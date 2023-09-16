import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imag1 from '../public/images/image1.png'
import imag2 from '../public/images/image2.png'
import imag3 from '../public/images/image3.png'
import imag4 from '../public/images/image4.png'

const packard = () => {
  return (
  <div className='bg-[#EFB60E] flex flex-col justify-evenly min-w-[100%] h-screen relative pt-[1.5px]  z-10'>
    <div className='flex flex-col justify-center md:items-center md:mb-16 h-[30%] '>
      <div className='ml-[14%]'>
   <Image src={imag1} alt='aptech logo ' placeholder='blur'/>
   </div>
   <div className='flex flex-col justify-center items-center -mt-8 '>
   <h2 className='text-[60px] md:text-[90px] text-justify text-[#FFFFFF] font-extrabold'>Food for <br /> </h2>
   <h2 className='text-[60px] md:text-[90px] text-justify text-[#FFFFFF] font-extrabold'>Everyone</h2>
   </div>
 </div>
  <div className='relative  md:flex  h-[50%] flex flex-col justify-center md:justify-normal md:w-full'>
    <div className='flex ml-6'>
    <div className='flex flex-col md:w-[50%] md:justify-center md:items-center'>
    <div className='mt-20 ml-16'>
   <Image src={imag3} width={175} height={144} alt="pizza" placeholder='blur'/>
   </div>
   <div className='mt-5 ml-16' >
   <Image src={imag2} alt="burger" placeholder='blur'/>
   </div> 
   </div>
   <div className='flex relative md:w-[50%]'>
   <div className=' mr-6 mb-2 md:flex md:justify-end md:items-end '>
   <Image src={imag4} alt='boy' placeholder='blur'/>
   </div>
   {/* <div className='bg-[#EFB60E] bg-opacity-80 backdrop-filter backdrop-blur-[2px] z-10 h-[90px] w-full absolute bottom-[4px] border-black border-2'></div> */}

   <div className='z-10 h-[100px] w-full absolute bottom-[0px] lin-grad'></div>
   </div>
   </div>
   </div>
  
    <div className='fixed bottom-1 w-full  h-[20%]  flex flex-col justify-end items-center z-20'>
    <Link href='/sign-up'> <button className='py-[20px] text-[rgb(255,199,56)] rounded-[30px] md:h-[10px] px-[100px] md:px-[200px] md:py-[40px] md:text-[24px]  text-justify bg-[#FFFFFF]'>
      Get started
    </button> </Link>
    </div>
  </div>
  )
}

export default packard