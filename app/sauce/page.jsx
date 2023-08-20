'use client'
import React, { Fragment, useEffect, useRef } from 'react';
import Image from 'next/image';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';
import { TiHome } from 'react-icons/ti';
import { MdHistory } from 'react-icons/md';
import menu from '../menufoods/menu.json';
import Link from 'next/link';

const Sauce = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperContainerRef.current, {
      // Swiper options here
      slidesPerView: 4,

    });
  }, []);

  const menus = menu.map((menu) => (
    <Fragment key={menu.id}>
      <div className='flex-shrink-0' style={{ width: '245px', height: '290px' }}>
        <div className='swiper-slide'>
          <Image src={menu.img} width={170} height={170} alt='pictures of food from different sites and a little from ris' />
        </div>
        <div>
          <p className='capitalize opacity-90 font-semibold text-center text-[15px]'>{menu.name}</p>
          <p className='mt-3 text-center text-[#FFC83A] font-semibold text-[12px]'>{menu.price}</p>
        </div>
      </div>
    </Fragment>
  ));

  return (
    <div>
      <div className='swiper-container py-11 overflow-x-auto bg-black'  ref={swiperContainerRef}>
        <div className='swiper-wrapper space-x-10 '>{menus}</div>
      </div>
    </div>
  );
};

export default Sauce;
