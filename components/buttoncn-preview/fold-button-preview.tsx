import FoldButton from "../buttoncn/fold-button"

const FoldButtonPreview = () => {
    return (
    <FoldButton>Hover Me</FoldButton>
)
}


const FoldButtonPreviewFoldColor=()=>{
    return(
        <FoldButton foldColor="#d53713ff" className="bg-red-400">Hover Me</FoldButton>
    )
}

export {FoldButtonPreview,FoldButtonPreviewFoldColor}