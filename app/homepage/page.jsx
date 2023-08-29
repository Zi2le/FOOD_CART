import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imag1 from '../../public/images/image1.png'
import imag2 from '../../public/images/image2.png'
import imag3 from '../../public/images/image3.png'
import imag4 from '../../public/images/image4.png'
const page = () => {
  return (
        // Correction page
    <div className='bg-[#EFB60E] flex flex-col  min-w-[100%] h-screen relative pt-1'>
      <div className='flex flex-col h-[30%] bg-red-800'>
        <div>
                <Image src={imag1}  alt='aptech logo'/>
        </div>
        <div>
                <p>
                    Food For 
                </p>
                <p>
                    Everyone
                </p>
        </div>
        </div>
        <div className='h-[50%] bg-black'>

        </div>
        <div className='h-[20%] bg-green-500'>

        </div>
    </div>
  )
}

export default page