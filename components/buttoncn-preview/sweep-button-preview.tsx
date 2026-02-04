import SweepButton from "../buttoncn/sweep-button"

const SweepButtonPreview=()=>{
    return(
        <SweepButton >Sweep Button</SweepButton>
    )
}

const SweepButtonPreviewSweepColor=()=>{
    return(
        <SweepButton sweepColor="#a1f78dff" >Sweep Button</SweepButton>
    )
}

const SweepButtonPreviewBackgroundColor=()=>{
    return(
        <SweepButton backgroundColor="#4e2d0eff" >Sweep Button</SweepButton>
    )
}


export {SweepButtonPreview,SweepButtonPreviewSweepColor,SweepButtonPreviewBackgroundColor}