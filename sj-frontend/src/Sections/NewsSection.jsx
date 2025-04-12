import React from 'react'
import { useRef } from 'react';
import {useGSAP} from "@gsap/react" 
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

const NewsSection = () => {
    const boxRef = useRef();
    
    
  return (
    <div className='container'>
      <div className="circle h-[200px] w-[200px] rounded-full bg-amber-300 flex items-center justify-center" ref={boxRef}>
        <div className="BOX h-[100px] w-[100px] bg-black"></div>
      </div>
    </div>
  )
}

export default NewsSection
