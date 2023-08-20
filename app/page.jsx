import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imag1 from '../public/images/image1.png'
import imag2 from '../public/images/image2.png'
import imag3 from '../public/images/image3.png'
import imag4 from '../public/images/image4.png'

const packard = () => {
  return (
  <div className='bg-[#EFB60E] flex flex-col justify-center min-w-[100%] min-h-screen relative'>
    <div className='md:min-h-[90vh]'>
    <div className='flex flex-col justify-center md:items-center md:mb-16'>
      <div className='ml-20 mt-7'>
   <Image src={imag1} alt='aptech logo '/>
   </div>
   <div className='text-center -mt-8'>
   <h2 className=' text-[65px] text-[#FFFFFF] font-extrabold'>Food for <br /> <span className='ml-10'>Everyone</span></h2>
   </div>
 </div>
  <div className='relative mt-14 md:flex md:justify-evenly'>
    <div className='flex ml-6'>
    <div className='flex flex-col'>
    <div className='mt-20 ml-16'>
   <Image src={imag3} width={175} height={144} alt="pizza"/>
   </div>
   <div className='mt-5 ml-16' >
   <Image src={imag2} alt="burger"/>
   </div> 
   </div>
   <div className='flex relative'>
   <div className=' mr-6 mb-2'>
   <Image src={imag4} alt='boy'/>
   </div>
   {/* <div className='bg-[#EFB60E] bg-opacity-80 backdrop-filter backdrop-blur-[2px] z-10 h-[90px] w-full absolute bottom-[4px] border-black border-2'></div> */}

   <div className='z-10 h-[100px] w-full absolute bottom-[0px] lin-grad'></div>
   </div>
   </div>
   </div>
  
    <div className='mt-7 pb-3 flex justify-center md:min-h-[15vh] md:items-end'>
    <Link href='/login'> <button className='bg-[#FFFFFF] py-4 px-32 rounded-[30px] text-[rgb(255,199,56)]'>
      Get started
    </button> </Link>
    </div>
   </div>
  </div>
  )
}

export default packard