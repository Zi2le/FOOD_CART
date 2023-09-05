'use client'
import React, { useState } from 'react'
import Reverse from '../../reverse/page'
import {FiHeart} from 'react-icons/fi'
import { snackJson } from '../../snacks/page'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'


// function  fooddetails(params){
  // const params = useParams()
  // const foods = foodJson.find((food) => food.id === params.slug)
 
//   return foods
// }
const ris={
  left: "50%",
  transform:"translateY(-50%)"
}
const page = () => {
 const router = useRouter()

 const params = useParams()
 //  console.log(params)
 const breads = snackJson.find((bread) => bread.id == params.slug)
 


const AddToCart = () =>{
const newItems = {
  name:breads.name, 
  img:breads.img,
  price:breads.price,
}

  const cart = JSON.parse(localStorage.getItem("cart")) || []
cart.push(newItems)
localStorage.setItem("cart", JSON.stringify(cart))

router.push("/cart")
}
 
 
  return (
<div className='min-w-[100%] min-h-screen px-14 pt-8 text-[#000000] relative'>
<div className='md:min-h-[90vh]'>
 <div className='flex justify-between items-center min-w-[100%]'>
<div>
<Reverse/>    
</div>
<div>
<FiHeart />
</div>
</div>
<div className='flex flex-col justify-between  '>
<div>
<div className='flex justify-center items-center flex-col'>
<div className='flex justify-center flex-shrink-0 mt-10 md:mt-[70px]'>
<Image src={breads.img} width={215} height={215} alt={breads.name} className='h-[215px] w-[215px]  md:w-[300px] md:h-[300px]  rounded-full'/> 
</div>
<div className='font-semibold flex justify-center items-center flex-col space-y-3 mt-5 md:mt-10'>
<p className='text-[18px] capitalize  md:text-[28px] text-center'>{breads.name}</p>
<p className='text-[#FFC83A] text-[14px] md:text-[22px]'>Rs {breads.price}</p>
</div>
<div className='text-[17px] font-semibold space-y-14 mt-10 md:mt-[120px] md:flex md:flex-col md:justify-center md:items-center '>
<div className='mt-10 md:w-[60%]'>
  <h5>
    Delivery info
    </h5>
  <p className=' opacity-50 text-[15px] leading-[20.825px] font-normal mt-2  '>
    Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
    </p>
</div>
<div className='md:w-[60%]'>
  <h5>
  Return policy
  </h5>
  <p className='opacity-50 text-[15px] leading-[20.825px] font-normal mt-2 md:flex md:flex-col md:justify-center  '> 
  All our foods are double checked before leaving our stores so by any case  you found a broken food please contact our hotline immediately. 
  </p>
</div>
</div> 
</div>
</div>
<Link href='/cart'>
<div className='mt-10 pb-3 flex justify-center md:min-h-[22vh] md:items-end'>
  <button className='w-[314px] h-[70px] rounded-[30px] bg-[#FFC83A] ' onClick={AddToCart}>
  Add to cart
  </button>
</div>
</Link>
  </div> 
  </div> 
</div>
  )
}

export  default page

{/* <div>
creating a box stack (very small,minute test)
  <ul className='border bg-red'>
    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>
    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>

    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>

    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>

    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>

    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>
    <li className=' border-b-2 py-7 text-center'>dsjdjdiewdsn</li>


  </ul>
</div> */}