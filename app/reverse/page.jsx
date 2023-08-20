'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {LuChevronLeft} from 'react-icons/lu'

const reverse = (props) => {
const router = useRouter()
// const history=()=> {
// router.back()

  return (
    <div>
        <button onClick={() => router.back()} className='cursor-pointer'>
                <LuChevronLeft className='h-[24px] w-10 flex-shrink-0 ' style={props.Style} />
        </button>
    </div>
  )
}

export default reverse