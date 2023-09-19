"use client"

import { useState,useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';


const ScrollButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
        className="btn-scrollTop bg-gray-200 opacity-70 shadow drop-shadow-2xl hover:bg-primary"
        style={{ display: isVisible ? 'block' : 'none' }}
        onClick={goTop}
      >
        <IoIosArrowUp className="text-black" />
      </button>
    );
}

export default ScrollButton;