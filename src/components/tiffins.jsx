import { useGSAP } from "@gsap/react";
import { snackList, tiffinList } from "../..";
import gsap from "gsap";


export default function Tiffins(){

    useGSAP(()=>{
        const trigg = gsap.timeline({
            scrollTrigger:{
                trigger:"#tiffins",
                start:"top 30%",
                end: "bottom 80%",
                scrub:true
            }
        });

        trigg.from("#t-left-leaf",{x:-200,y:200})
             .from('#t-right-leaf', {x:200,y:200},.01)

    },[]);

    return(
        
        <>
        <section id="tiffins" className="noisy">
        <img src="/images/tiffins-left-leaf.png" alt="left-leaf" id="t-left-leaf" className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"/>
        <img src="/images/tiffins-right-leaf.png" alt="right-leaf" id="t-right-leaf" className="absolute right-0 md:bottom-0 md:top-auto -bottom-20 md:w-fit w-1/3"/>


            <div className="list">
                <div className="popular">
                    <h2>Most Popular Tiffins</h2>
                    <ul>
                        {
                            tiffinList.map((i) => (
                                <li key={i.name}>
                                <div className="md:me-28">
                                    <h3>{i.name}</h3>
                                    <p>{i.detail}</p>
                                </div>
                                <span>- {i.price}</span>
                                
                            </li>
                            )
                        )
                    }
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Popular Snacks</h2>
                    <ul>
                        {
                            snackList.map((i) => (
                                <li key={i.name}>
                                <div className="md:me-28">
                                    <h3>{i.name}</h3>
                                    <p>{i.detail}</p>
                                </div>
                                <span>- {i.price}</span>
                                
                            </li>
                            )
                        )
                    }
                    </ul>
                </div>
            </div>
        </section>
        </>
    
    )
}