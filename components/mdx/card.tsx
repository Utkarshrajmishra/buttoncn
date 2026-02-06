import { div, section } from "framer-motion/client"

interface CardProps{
    text:string
}

const Card=({text}:CardProps)=>{
    return(
        <section className="bg-neutral-800 py-6 w-full tracking-tight">
            <p>{text}</p>
        </section>
    )
}


export default Card