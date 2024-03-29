import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imag1 from '../public/images/image1.png'
import imag2 from '../public/images/image2.png'
import imag3 from '../public/images/image3.png'
import imag4 from '../public/images/image4.png'

const packard = () => {
  return (
  <div >
    <div className='bg-[#EFB60E] flex flex-col justify-evenly min-w-[100%] h-[auto] relative  '>
    <div className='flex flex-col justify-center md:items-center h-[40vh] '>
      <div className='ml-[14%] h-[30vh]'>
   <Image src={imag1} alt='aptech logo '/>
   </div>
   <div className='flex flex-col justify-center items-center h-[50vh]'>
   <h2 className='text-[40px] md:text-[80px] text-justify text-[#FFFFFF] font-extrabold'>Food for</h2>
   <h2 className='text-[40px] md:text-[80px] text-justify text-[#FFFFFF] font-extrabold'>Everyone</h2>
   </div>
 </div>
  <div className='relative  md:flex  h-[54vh] flex flex-col justify-center items-center  md:w-full'>
    <div className='flex ml-6'>
    <div className='flex flex-col md:w-[50vh] md:justify-center md:items-center'>
    <div className='mt-20 ml-16'>
   <Image src={imag3} width={175} height={144} alt="pizza" className='w-[175px] h-[auto]' />
   </div>
   <div className='ml-16' >
   <Image src={imag2} alt="burger"/>
   </div> 
   </div>
   <div className='flex relative md:w-[50vh]'>
   <div className=' mr-6 mb-3 md:flex md:justify-end md:items-end '>
   <Image src={imag4} width={175} height={204} alt='boy' className='w-[235px] h-[330px] md:w-[315px] md:h-[370px]' />
   </div>
   {/* <div className='bg-[#EFB60E] bg-opacity-80 backdrop-filter backdrop-blur-[2px] z-10 h-[90px] w-full absolute bottom-[4px] border-black border-2'></div> */}

   <div className='z-10 h-[100px] w-full absolute bottom-[6px] lin-grad'></div>
   </div>
   </div>
   </div>
   </div>
     <div className='flex  bottom-0  w-full justify-center items-center mt-2'>
     <Link href='/sign-up'>
   <p className='text-[rgb(255,199,56)]  md:text-[28px] text-[20px] w-full'>
      Get started
    </p> 
    </Link>
    </div>
  </div>
  )
}

export default packard