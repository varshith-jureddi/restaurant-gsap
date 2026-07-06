import { openingHours,socials } from "../.."
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {  SplitText } from "gsap/all"

export default function Contact(){

    useGSAP(()=>{
        const textSplit = new SplitText('.content h2',{type:'words'});
        const trigg=gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',
            
            },
            ease:'power1.inOut'
        });

        trigg
            .from(textSplit.words,{opacity:0,yPercent:100,stagger:0.04})
            .from('#contact h3,#contact p',{opacity:0,yPercent:100,stagger:0.04})
    })


    return(
        <footer id="contact" className="min-h-screen flex justify-center items-center mx-auto ">
        
        <div className="content text-center text-2xl font-medium mb-5 flex flex-col gap-10">
            <h2 className="font-modern-negra text-5xl font-bold mb-20">Where to Find Us</h2>
            
            <div className="">
            <h3 className="font-bold uppercase mb-4">Visit Our Restaurant</h3>
            <p>MIG - 86, Hyderabad</p>
            </div>
            
            <div className="">
            <h3 className="font-bold uppercase mb-4">Contact Us</h3>
            <p>+91 12345 67890</p>
            <p>dosa@dosa.com</p>
            </div>
            
            <div>
            <h3 className="font-bold uppercase mb-4">Open Every Day</h3>
            {openingHours.map((time) => (
                <p key={time.day}>
                {time.day} : {time.time}
                </p>
            ))}
            </div>
            
            <div>
            <h3 className="font-bold uppercase mb-4">Socials</h3>
            
            <div className="flex-center gap-5 text-foreground">
                {socials.map((social) => (
                <a className="brightness-0"
                    // className="filter-[invert(19%)_sepia(21%)_saturate(2256%)_hue_rotate(131deg)_brightness(93%)_contrast(93%)]"
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                >
                    <img src={social.icon} />
                </a>
                ))}
            </div>
            </div>
        </div>
        </footer>
    )
}