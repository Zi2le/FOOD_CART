'use client'
import React, { useEffect, useState } from 'react'
import Reverse from '../reverse/page'
import Image from 'next/image'
const cart = () => {
  // const [cartNo, setCartNo] = useState([]) 
  // const [price, setPrice] = useState(0)
  // useEffect(() => {
    const retrieveCartitems = (typeof window !== 'undefined' && JSON.parse(localStorage.getItem("cart"))) || [];
//  setCartNo(retrieveCartitems)
  // const increment = () => {
  //  setCount(prevCount => prevCount + 1)
  // }
  // const decrement = () => {
  //  setCount(prevCount => prevCount - 1)
  // }
//         const [items, setItems] = useState({})
//  useEffect(() =>{
//         const RetrieveCartitems = JSON.parse(sessionStorage.getItem('items'))
//         setItems(RetrieveCartitems || {})
//  },[])
  return (
    <div className='h-screen bg-[#F5F5F8] relative'>
      <div className='h-[90%] '>
      <div className='flex w-[100%] justify-center items-center fixed bg-[#E8EDF3]  h-[10%]'>
    <div>
    <Reverse/>  
    </div>
    <div className='flex justify-center items-center w-[80%]'>
      <h3 className='text-center text-[18px] leading-normal font-semibold'>Cart</h3>      
    </div>
</div>
<div className='h-[100%] overflow-y-scroll pt-[20%] pb-2'>
      {retrieveCartitems.map((item, index) =>(
         <div key={index} className='flex flex-col rounded-[20px] w-full mt-4 justify-center items-center'>
          <div className='flex w-[90%] h-[102px] bg-[#FFF]'>
                {console.log(item.name)}
                <div className='w-[30%]'>
              <Image  src={item.img} width={300} height={300} alt={item.name} className=' rounded-full w-[100px] h-[100px] flex-shrink-0 pl-1'/>  
              </div>
              <div className='flex flex-col justify-center w-[52%]  pl-3'>
       <p className=' md:text-[17px] text-[12.7px] font-semibold leading-normal'>{item.name}</p>
       <p className='text-[15px] text-[#FFC83A] font-semibold leading-normal'></p>
        </div>
        <div className=' w-[18%] flex items-end pr-1 pb-2'>
          <div className='bg-[#FFC83A] rounded-[30px] flex h-[25%] justify-evenly w-[97%] items-center'>
          <button type="button">-</button>
          <p className='text-[11.7px] md:text-[14px]'>fujn</p>
          <button type="button">+</button>
          </div>
        </div>
        </div>
        </div> 
))}
        </div>
</div>
<div className='fixed bottom-0 w-full h-[10%] flex justify-center items-end'>
  <button type="submit" className='bg-[#FFC83A] w-[40%] h-[70px] rounded-[30px] font-semibold text-[17px]'>Order now</button>
</div>
    </div>
  )
}

export default cart