import { PulseButton } from "../buttoncn/pluse-button"

const PluseButtonPreview = () => {
    return (
        <PulseButton pulseColor="#fffff">
            Pulse Button
        </PulseButton>
    )
}

const PluseButtonSeondary=()=>{
    return(
        <PulseButton variant="secondary">
            Pulse Button
        </PulseButton>
    )
}

const PluseButtonOutline=()=>{
    return(
        <PulseButton variant="outline">
            Pulse Button
        </PulseButton>
    )
}

const PluseButtonGhost=()=>{
    return(
        <PulseButton variant="ghost">
            Pulse Button
        </PulseButton>
    )
}

const PluseButtonDestructive=()=>{
    return(
        <PulseButton variant="destructive">
            Pulse Button
        </PulseButton>
    )
}



const PluseButtonPluseColor=()=>{
    return(
        <PulseButton pulseColor="#fffff" className="bg-green-800 hover:bg-green-900">
            Pulse Button
        </PulseButton>
    )
}




export  {PluseButtonPreview,PluseButtonSeondary,PluseButtonOutline,PluseButtonGhost,PluseButtonDestructive,PluseButtonPluseColor}