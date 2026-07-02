import { navLinks } from "../..";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center p-4 font-bold">
            <a href="#home" className="flex items center justify-between">
                DOSA DOSE
            </a>
            <ul>
                {
                navLinks.map((i)=>(
                    <li key={i.id}>
                        <a href={`#${i.id}`}>{i.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}