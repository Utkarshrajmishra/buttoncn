import MarchButton from "../buttoncn/march-button"

const MarchButtonPreview=()=>{
    return(
        <MarchButton >Hover Me</MarchButton>
    )
}

const MarchButtonPreviewMarchColor=()=>{
    return(
        <MarchButton marchColor={["#582424ff", "#e9bfbfff", "#9B5DE5", "#00BBF9", "#FEE440"]}>Hover Me</MarchButton>
    )
}


export  {MarchButtonPreview,MarchButtonPreviewMarchColor}