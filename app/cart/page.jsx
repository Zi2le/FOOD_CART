'use client'
import React, { useState } from 'react'
import Reverse from '../reverse/page'
import Image from 'next/image'
const cart = () => {
  const RetrieveCartitems = JSON.parse(localStorage.getItem("cart")) || []
  const [count, setCount] = useState(1) 
  const [price, setPrice] = useState(0)

  const increment = () => {
   setCount(prevCount => prevCount + 1)
  }
  const decreament = () => {
   setCount(prevCount => prevCount - 1)
  }
//         const [items, setItems] = useState({})
//  useEffect(() =>{
//         const RetrieveCartitems = JSON.parse(sessionStorage.getItem('items'))
//         setItems(RetrieveCartitems || {})
//  },[])
  return (
    <div className='h-screen bg-[#F5F5F8] relative'>
      <div className='h-[90%] '>
      <div className='flex w-[100%] justify-center items-center fixed'>
    <div>
    <Reverse/>  
    </div>
    <div className='flex justify-center items-center w-[80%] '>
      <h3 className='text-center text-[18px] leading-normal font-semibold'>Cart</h3>      
    </div>
</div>
<div className='h-[100%] overflow-y-scroll pt-[28px] pb-1'>
      {RetrieveCartitems.map((item, index) =>(
         <div key={index} className='flex flex-col rounded-[20px] w-full mt-4 justify-center items-center'>
          <div className='flex w-[90%] h-[102px] bg-[#FFF]'>
                {console.log(item.name)}
                <div className='w-[30%]'>
              <Image  src={item.img} width={300} height={300} alt={item.name} className=' rounded-full w-[100px] h-[100px] flex-shrink-0 pl-1'/>  
              </div>
              <div className='flex flex-col justify-center w-[52%]  pl-2'>
       <p className=' text-[17px] font-semibold leading-normal'>{item.name}</p>
       <p className='text-[15px] text-[#FFC83A] font-semibold leading-normal'> {price}</p>
        </div>
        <div className=' w-[18%] flex items-end pr-1'>
          <div className='bg-[#FFC83A] rounded-[30px] flex h-[25%] justify-evenly w-[97%]'>
          <button type="button" onClick={decreament}>-</button>
          <p >{count}</p>
          <button type="button" onClick={increment}>+</button>
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