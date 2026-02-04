import { Instagram } from "lucide-react"
import SlideIconButton from "../buttoncn/slide-icon-button"

const SlideIconButtonPreview=()=>{
    return(
        <SlideIconButton >Hover Me</SlideIconButton>
    )
}

const SlideIconButtonIcon=()=>{
    return(
        <SlideIconButton icon={<Instagram/>}>Instagram</SlideIconButton>
    )
}


const SlideIconButtonPreviewDirection=()=>{
    return(
        <SlideIconButton direction="right">Hover Me</SlideIconButton>
    )
}

const SlideIconButtonSlideColor=()=>{
    return(
        <SlideIconButton slideColor="#f87070ff">Hover Me</SlideIconButton>
    )
}

export {SlideIconButtonPreview,SlideIconButtonIcon,SlideIconButtonPreviewDirection,SlideIconButtonSlideColor}