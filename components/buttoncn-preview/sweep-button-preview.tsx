import SweepButton from "../buttoncn/sweep-button"

const SweepButtonPreview=()=>{
    return(
        <SweepButton >Hover Me</SweepButton>
    )
}

const SweepButtonPreviewSweepColor=()=>{
    return(
        <SweepButton sweepColor="#a1f78dff" >Hover Me</SweepButton>
    )
}

const SweepButtonPreviewBackgroundColor=()=>{
    return(
        <SweepButton backgroundColor="#4e2d0eff" >Hover Me</SweepButton>
    )
}


export {SweepButtonPreview,SweepButtonPreviewSweepColor,SweepButtonPreviewBackgroundColor}