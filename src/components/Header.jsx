import React from 'react';
import video from "../assets/running.mp4";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { motion } from 'framer-motion';
import '../index.css';

function Header() {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src={video} type='video/mp4' />
      </video>

      {/* Overlay hiệu ứng tối màu */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Nội dung Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="font-sansjp text-xl md:text-3xl font-bold">
          "1マイルでもマラソンでも、たどり着く方法は同じです、<br />一歩ずつ。人生も同じです"
        </h1>
        <p className="font-sansjp text-2xl mt-4">Baylor Barbee</p>
      </div>

      {/* Icon Scroll Down với hiệu ứng animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 15, 0] }} // Di chuyển lên xuống
        transition={{ repeat: Infinity, duration: 1.5 }} // Lặp lại vô tận với thời gian 1.5 giây
      >
        <HiChevronDoubleDown size={32} />
      </motion.div>
    </div>
  );
}

export default Header;
