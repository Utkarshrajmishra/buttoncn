import ShadowPopButton from "../buttoncn/shadow-pop-button"

const ShadowPopButtonPreview=()=>{
    return(
        <ShadowPopButton>Shadow Pop Button</ShadowPopButton>
    )
}

const ShadowPopButtonPreviewShadowColors=()=>{
    return(
        <ShadowPopButton shadowColors={["#366ff4ff", "#d45f00ff"]}>Shadow Pop Button</ShadowPopButton>
    )
}

export {ShadowPopButtonPreview,ShadowPopButtonPreviewShadowColors}