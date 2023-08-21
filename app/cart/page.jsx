import React from 'react'
import Link from 'next/link'
import Reverse from '../reverse/page'



const pcart = () => {

  return (
    <div className='min-w-[100%] min-h-screen px-10 pt-10'>
        <div className='flex w-[100%] justify-center items-center'>
                <div>
                <Reverse/>  
                </div>
                <div className='flex justify-center items-center w-[80%]'>
                  <h5 className='text-center text-[18px] leading-normal font-semibold'>Cart</h5>      
                </div>
        </div>
        {console.log(breads.name)}
        {/* {cart.map ((breads) =>( */}
        {/* <div key={breads.id}>
          <div>
            <div>
             <Image src={breads.img} width={116.412} height={77.208} className='w-[116.412px] h-[77.208px]' />
            </div>
            <div>
              <p>{breads.name}</p>
              <p>{breads.price}</p>
            </div>
          </div>
        </div> */}
        {/* ))} */}
    </div>
  )
}
export default pcart
