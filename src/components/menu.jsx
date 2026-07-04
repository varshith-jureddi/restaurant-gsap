import { useState,useRef } from "react";
import { menuItems } from "../..";

export default function Menu(){
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);


    const totalItems = menuItems.length;    
    const getItemAt = (indexOffset) => {
        return menuItems[(currentIndex + indexOffset + totalItems) % totalItems]
    }
 

    const currentItem = getItemAt(0);
    const prevItem = getItemAt(-1);
    const nextItem= getItemAt(1);
    
    return (
        <section id="menu" aria-labelledby="menu-heading">
        
        <h2 id="menu-heading" className="sr-only">
            Our Tiffin Menu
        </h2>
        
        <nav className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto" aria-label="Cocktail Navigation">
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
            <div className="flex items-center justify-between w-full absolute">
            <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                <span>{prevItem.name}</span>
                <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
            </button>
            
            <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                <span>{nextItem.name}</span>
                <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
            </button>
            </div>
            
            <div className="flex-center mt-10">
            <img src={currentItem.image} className="object-contain h-[60vh]"/>
            </div>
            
            <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
            <div ref={contentRef} className="space-y-4 lg:translate-y-20">
                <p>Recipe for:</p>
                <p id="font-modern-negra md:text-6xl text-3xl text-yellow max-w-40">{currentItem.name}</p>
            </div>
            
            <div className="space-y-5 md:max-w-md text-left">
                <h2 className="md:text-5xl text-3xl font-serif">{currentItem.title}</h2>
                <p className="md:text-lg pe-5">{currentItem.description}</p>
            </div>
            </div>
        </div>
        </section>
    )
}