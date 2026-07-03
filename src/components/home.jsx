import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function Home(){
    useGSAP(()=>{
        const titleSplit= new SplitText('.title',{type:'chars,words'});
        const textSplit=new SplitText('.text', {type:'words,lines'});
        gsap.from(titleSplit.chars,
            {
            yPercent: 100,
            duration: 1.8,
            ease:'expo.out',
            stagger:0.06
            }
        );
        gsap.from(textSplit.words,{
            opacity:0,
            yPercent:100,
            duration:2,
            ease:'expo.out',
            stagger:0.06

        })
    },[]);
    return(
        <section id="hero">
            <h1 className="title">DOSA DOSE</h1>
            <div className="body">
                    {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
                
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Hot. Crisp. Classic.</p>
                            <p className="text">
                                Bite the Spirit <br /> of TELUGU Tiffins
                            </p>
                        </div>
                        
                        <div className="view-tiffins">
                            <p className="text text-foreground">
                                Every tiffin on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.
                            </p>
                            <a href="#tiffins">View Tiffins</a>
                        </div>
                    </div>
                </div>
        </section>
    )
}