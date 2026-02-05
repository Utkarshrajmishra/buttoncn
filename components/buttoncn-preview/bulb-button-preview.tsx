import PixelButton from "../buttoncn/pixel-button"

const PixelButtonPreview = () => {
    return (
        <PixelButton>
             Click Me 
        </PixelButton>
    )
}

const PixelButtonPreviewButtonColor = () => {
    return (
        <PixelButton buttonColor="#15fab5ff">
             Click Me 
        </PixelButton>
    )
}

const PixelButtonPreviewButtonShadowColor = () => {
    return (
        <PixelButton shadowColor="#15fab5ff">
             Click Me 
        </PixelButton>
    )
}

const PixelButtonPreviewButtonOutlineColor = () => {
    return (
        <PixelButton outlineColor="#15fab5ff">
             Click Me 
        </PixelButton>
    )
}

const PixelButtonPreviewButtonBorderColor = () => {
    return (
        <PixelButton borderColor="#15fab5ff">
             Click Me 
        </PixelButton>
    )
}

const PixelButtonPreviewButtonDotColor = () => {
    return (
        <PixelButton dotColor="#15fab5ff">
             Click Me 
        </PixelButton>
    )
}

const PixelButtonPreviewButtonShadowLayers = () => {
    return (
        <PixelButton shadowLayers={10}>
             Click Me 
        </PixelButton>
    )
}

export {PixelButtonPreview,PixelButtonPreviewButtonColor,PixelButtonPreviewButtonShadowColor,PixelButtonPreviewButtonOutlineColor,PixelButtonPreviewButtonBorderColor,PixelButtonPreviewButtonDotColor,PixelButtonPreviewButtonShadowLayers}