'use client'

import { useState,useRef } from "react";
import { menuItems } from "../..";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Menu(){
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const textSplit = new SplitText('#desc', {type:'lines'}); 

    useGSAP(()=>{
        // gsap.fromTo(textSplit.words,{opacity:0},{opacity:1,ease:"bounce.inOut", duration:.5,stagger:.4});
        gsap.fromTo('#name',{opacity:0,yPercent:100},{opacity:1,yPercent:0,duration:1});
        gsap.fromTo('.desc',{opacity:0},{opacity:1,duration:1});
        gsap.fromTo('.item',{opacity:0,xPercent:-100},{opacity:1,xPercent:0,duration:1,ease:'bounce.out'});

    },[currentIndex]);

     const goToSlide = (index) => {
        const newIndex = (index + totalItems) % totalItems;
        
        setCurrentIndex(newIndex);
    }

    const totalItems = menuItems.length;    
    const getItemAt = (indexOffset) => {
        return menuItems[(currentIndex + indexOffset + totalItems) % totalItems]
    }
 

    const currentItem = getItemAt(0);
    const prevItem = getItemAt(-1);
    const nextItem= getItemAt(1);
    
    return (
        <section id="menu" aria-labelledby="menu-heading" className="min-h-screen overflow-y-hidden p-8 px-8 mx-auto mb-10 bg-[url('/images/leaf-bg-1.jpg')]">
        {/* <img src="/images/leaf-bg.png" alt="" /> */}
        <h2 id="menu-heading" className="text-6xl text-white text-center font-modern-negra mb-8">
            Our Tiffin Menu
        </h2>
        
        <nav className="grid text-4xl md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto font-modern-negra" aria-label="Cocktail Navigation">
            {menuItems.map((tiffin, index) => {
            const isActive = index === currentIndex;
            
            return (
                <button key={tiffin.id} className={`
                    ${isActive
                    ? 'text-white border-white'
                    : 'text-white/50 border-white/50'}
                `}	onClick={() => goToSlide(index)}
                >
                {tiffin.name }
                </button>
            )
            })}
        </nav>
        
        <div className="flex flex-col justify-between items-center container mx-auto relative">
            <div className="flex items-center justify-between w-full absolute font-modern-negra">
            <button className="text-left text-3xl text-white" onClick={() => goToSlide(currentIndex - 1)}>
                <span>{prevItem.name}</span>
                <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
            </button>
            
            <button className="text-right text-3xl text-white" onClick={() => goToSlide(currentIndex + 1)}>
                <span>{nextItem.name}</span>
                <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" className="ml-auto"/>
            </button>
            </div>
            
            <div className="item flex-center mt-10">
            <img src={currentItem.image} className="object-contain h-[60vh]"/>
            </div>
            
            <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
            <div ref={contentRef} className="space-y-4 pb-20 lg:translate-y-20">
                {/* <p>Recipe for:</p> */}
                <p id="name" className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40">{currentItem.name}</p>
            </div>
            
            <div id="" className="desc space-y-5 p-4 pb-8 font-modern-negra text-white md:max-w-md text-left">
                <h2 className="md:text-5xl text-3xl font-serif">{currentItem.title}</h2>
                <p className="md:text-lg pe-5">{currentItem.description}</p>
            </div>
            </div>
        </div>
        </section>
    )
}