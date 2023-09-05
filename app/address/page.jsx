import React from 'react'
import Reverse from '../reverse/page'
const page = () => {
  return (
    <div className='h-screen'>    
        <div className='flex w-[100%] justify-center items-center pt-7'>
               <div>
                        <Reverse/>  
                </div>
                        <div className='flex justify-center items-center w-[80%]'>
                                <h3 className='text-center text-[18px] leading-normal font-semibold'>Address</h3>      
                        </div>
        </div>
        <p>Delivery</p>
        <div>
                <h3 className='capitalize'> address details</h3>
                <h4>change</h4>
        </div>
</div>
  )
}

export default page