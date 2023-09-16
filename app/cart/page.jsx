'use client'
import React, { useEffect, useState } from 'react'
import Reverse from '../reverse/page'
import {FaRegHeart} from 'react-icons/fa'
import {RiDeleteBin3Line} from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import { CgShoppingCart } from 'react-icons/cg'
const cart = () => {
  // const [cartNo, setCartNo] = useState([]) 
  // const [price, setPrice] = useState(0)
  // useEffect(() => {
    const retrieveCartitems = (typeof window !== 'undefined' && JSON.parse(localStorage.getItem("cart"))) || [];
//  setCartNo(retrieveCartitems)
//   const increment = () => {
//    setCount(prevCount => prevCount + 1)
//   }
//   const decrement = () => {
//    setCount(prevCount => prevCount - 1)
//   }
//         const [items, setItems] = useState({})
//  useEffect(() =>{
//         const RetrieveCartitems = JSON.parse(sessionStorage.getItem('items'))
//         setItems(RetrieveCartitems || {})
//  },[])
const removeFromCart = (id) =>{
const remove = cart.filter((carts) => id !== cart.id)
  
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.push(newItems)
  localStorage.setItem("cart", JSON.stringify(cart))
  
  router.push("/menu")
  }
  function deleteTask(id){
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }
  return (
    <div>
    {retrieveCartitems.length > 0 ? (
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
         <div key={index} className='flex  rounded-[20px] w-full mt-4 space-x-10 items-center pl-[10%] swiper-container overflow-x-scroll'>
          <div className='flex w-[90%] h-[102px] bg-[#FFF] flex-shrink-0'>
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
        <div className='flex w-[35%] space-x-2 flex-shrink-0 justify-center h-[102px] items-center bg-[#E8EDF3] pl-[10%]'>
          <div  className='flex justify-center bg-[#FFC83A] h-[30px] w-[30px] rounded-full items-center'>
          <FaRegHeart className='w-[16px] h-[14px]' />
          </div>
          <div className='flex justify-center bg-[#FFC83A] h-[30px] w-[30px] rounded-full items-center'>
          <RiDeleteBin3Line  className='w-[16px] h-[14px]'/>
          </div>
        </div>
        </div> 
))}
        </div>
</div>
<div className='fixed bottom-0 w-full h-[10%] flex justify-center items-end'>
  <button type="submit" className='bg-[#FFC83A] w-[314px] h-[65px] rounded-[30px] font-semibold text-[17px]'>Order now</button>
</div>
    </div>
    ):(
    <div className='min-w-[100%] h-screen relative '>
         <div className='flex w-[100%] justify-center items-center pt-7'>
                <div>
                <Reverse/>  
                </div>
                <div className='flex justify-center items-center w-[80%]'>
                  <h3 className='text-center text-[18px] leading-normal font-semibold'>Orders</h3>      
                </div>
        </div>
        <div >
        <div className='flex flex-col justify-center  h-[70vh]  items-center mt-10'>
                <div>
                < CgShoppingCart className='h-[107.986px] w-[113.128px] flex-shrink-0  text-[#C7C7C7]' />  
                </div>
                <div className='flex flex-col justify-between  items-center'>
                        <p className='text-[28px] font-semibold leading-normal '>
                        No orders yet
                        </p>
                        <p className=' opacity-[0.57] leading-normal text-[17px] font-normal '>
                        Hit the orange button down
                        </p>
                        <p className='opacity-[0.57] leading-normal text-[17px] font-normal'>
                        below to Create an order
                        </p>
                </div>
        </div>
        <div className='pb-3 flex justify-center md:min-h-[19vh] h-[15vh] items-end fixed w-full '>
          <Link href='/menu'>
                <button className='w-[314px] h-[70px]  flex-shrink-0 rounded-[30px] bg-[#FFC83A] text-center text-[17px] font-semibold leading-normal '>
                        Start ordering
                </button>
                </Link>
        </div>
        </div>
        </div>
    )
      }
      </div>
  )
}

export default cart