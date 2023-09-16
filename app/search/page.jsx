'use client'
import React, { Fragment, useEffect, useState } from 'react'
import menu from '../menufoods/menu.json'
import Image from 'next/image'
import Link from 'next/link'
import {LuSearch} from 'react-icons/lu'
import Reverse from '../reverse/page'
export let menuJson = []
menuJson = menu.slice()
const search = () => {
  const [search, setSearch] = useState('')
  function handleChange(e) {
  setSearch(e.target.value)
  }
  // const history=()=> {
  //   history.back()
  // }
  
  const hadow = {
    boxShadow: '0px 30px 60px 0px rgba(57, 57, 57, 0.10)'

  }

  const Allmenus = menu.filter((menu) => {
    const searchTerm = search.toLowerCase()
    return searchTerm === '' ? true : menu.name.toLowerCase().includes(searchTerm)
  }).map(menu => (
    <Link href={`productdetails/${menu.id}`}>
    <Fragment key ={menu.id}>
  <div className='bg-[#FFF] mb-20 rounded-[30px] w-[160px] h-[237px]  md:w-[250px] md:h-[280px] items flex-shrink-0 relative mt-16 ' style={hadow }>
    <div className='relative bottom-[50px] flex justify-center '>
      <Image src={menu.img} width={110.773}  height={110.773} alt='pictures of food from different sites and a little from ris' className='rounded-full  border-[18px] md:w-[200px] md:h-[200px] w-[130px] h-[130px]'/>
      </div>
     <div className='flex flex-col  mb-24'>
      <p className=' capitalize opacity-90 font-semibold text-center text-[15px]'>{menu.name}</p>
      <p className='mt-3 text-center text-[#FFC83A] font-semiboldtext-[12px]'>Rs {menu.price}</p>
    </div>
   </div>
      </Fragment>
       </Link>
  ))
  return (
    <div className='min-w-[100%] min-h-screen bg-[#F5F5F8]'>
      
     <div className={`bg-white w-full h-[85px] flex  items-center pt-10  justify-evenly pr-12 fixed z-20`}>
     <div>
     <Reverse className='h-[24px] w-10 '  />
     </div>
     <div>
     <input type="text" name="search" id="search"  value={search} onChange={handleChange} className='w-[180px] h-[29px] bg-[#F5F5F8]  text-center' placeholder='Search'/>
     </div>
     </div>
     <div className='min-h-[90vh] rounded-t-[30px] w-full'>
      {/* {Allmenus.length === 0 &&(
         <div className='flex flex-col items-center justify-center'>
          <div>
          <LuSearch className='w-[122px] h-[122px] text-[#C7C7C7]'/>
          </div>
          <div>
          <h4 className='text-[28px] font-semibold'>Item not found</h4>
          </div>
          <div>
          <p className='opacity-60 font-normal text-[17px]'>Try searching the item with</p>
          <p className='opacity-60 font-normal text-[17px] text-center'> a different keyword.</p>
          </div>
        </div> */}
        
      
      <div className='flex justify-center pt-7'>
        <div className={`${search === '' ?'opacity-0':'opacity-100' } text-[28px] font-bold`}>
          {Allmenus.length === 0 ? 
          <div className='flex flex-col items-center justify-center mt-44 md:mt-[270px]'>
          <div>
          <LuSearch className='w-[122px] h-[122px] text-[#C7C7C7]'/>
          </div>
          <div>
          <h4 className='text-[28px] font-semibold'>Item not found</h4>
          </div>
          <div>
          <p className='opacity-60 font-normal text-[17px]'>Try searching the item with</p>
          <p className='opacity-60 font-normal text-[17px] text-center'> a different keyword.</p>
          </div>
        </div> : Allmenus.length === 1 ? `Found ${Allmenus.length} result` : `Found ${Allmenus.length}  results`}

        </div>
      </div>
      <div className=' flex justify-evenly flex-wrap gap-6 z-10 mt-7'>
        {Allmenus}
      </div>
     </div>
    </div>
      
  )
}

export default search
