import { InstagramIcon } from "lucide-react"
import ExpandButton from "../buttoncn/expand-button"

const ExpandButtonIcon=()=>{
    return(
        <ExpandButton icon={<InstagramIcon/>}>Instagram</ExpandButton>
    )
}

const ExpandButtonColor=()=>{
    return(
        <ExpandButton buttonColor="#f75336ff">Expand Button</ExpandButton>
    )
}

const ExpandButtonPreviewShowSpinner=()=>{
    return(
        <ExpandButton showSpinner={false}>Expand Button</ExpandButton>
    )
}


const ExpandButtonPreview=()=>{
    return(
        <ExpandButton>Expand Button</ExpandButton>
    )
}
export  {ExpandButtonPreview,ExpandButtonIcon,ExpandButtonColor,ExpandButtonPreviewShowSpinner}