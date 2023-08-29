import React from 'react'
import {MdOutlineEventNote} from 'react-icons/md'
import Reverse from '../reverse/page'

const history = () => {
  return (
    <div className='min-w-[100%] h-screen relative '>
         <div className='flex w-[100%] justify-center items-center pt-7'>
                <div>
                <Reverse/>  
                </div>
                <div className='flex justify-center items-center w-[80%]'>
                  <h3 className='text-center text-[18px] leading-normal font-semibold'>History</h3>      
                </div>
        </div>
        <div >
        <div className='flex flex-col justify-center  h-[70vh]  items-center mt-10'>
                <div>
                <MdOutlineEventNote className='h-[118.333px] w-[120.5px] flex-shrink-0 fill-[#C7C7C7] ' />  
                </div>
                <div className='flex flex-col justify-between  items-center'>
                        <p className='text-[28px] font-semibold leading-normal '>
                        No history yet
                        </p>
                        <p className=' opacity-[0.57] leading-normal text-[17px] font-normal '>
                        Hit the orange button down
                        </p>
                        <p className='opacity-[0.57] leading-normal text-[17px] font-normal'>
                        below to Create an order
                        </p>
                </div>
        </div>
        <div className='pb-3 flex justify-center md:min-h-[19vh] h-[15vh] items-end '>
                <button className='w-[314px] h-[70px]  flex-shrink-0 rounded-[30px] bg-[#FFC83A] text-center text-[17px] font-semibold leading-normal '>
                        Start ordering
                </button>
        </div>
        </div>
        </div>
  )
}

export default history

