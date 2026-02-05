import { Youtube } from "lucide-react"
import IconButton from "../buttoncn/icon-button"

const SocialButtonPreview=()=>{
    return(
        <IconButton />
    )
}


const SocialButtonPreviewIcon=()=>{
    return(
        <IconButton icon={<Youtube/>}
        
        />
    )
}



const SocialButtonPreviewGradient=()=>{
    return(
        <IconButton gradient={["#eeff00ff", "#CC0000"]}/>
    )
}



const SocialButtonPreviewDirectionAngle=()=>{
    return(
        <IconButton gradient={["#eeff00ff", "#CC0000"]} gradientDirection={180}/>
    )
}

const SocialButtonPreviewDirectionValue=()=>{
    return(
        <IconButton gradient={["#eeff00ff", "#CC0000"]} gradientDirection={"top"}/>
    )
}


export {SocialButtonPreview,SocialButtonPreviewIcon,SocialButtonPreviewGradient,SocialButtonPreviewDirectionAngle,SocialButtonPreviewDirectionValue}
