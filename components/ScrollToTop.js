"use client"

import React, { useEffect } from 'react';


const scrollToTop = () => {
    const handlescrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
    }
    
    useEffect(() => {
        window.addEventListener('click', handlescrollToTop);
    
        return () => {
          window.removeEventListener('click', handlescrollToTop);
        };
      }, []);

    return (
        <>
            <div className={"w-[99.1vw] flex justify-center items-center mt-[3vh]"}>
                <button type="button" className="w-[150px] px-1 py-2 bg-[#464646] rounded-lg justify-self-center hover:bg-[#585858]">Scroll back up?</button>
            </div>
        </>
    )
}

export default scrollToTop