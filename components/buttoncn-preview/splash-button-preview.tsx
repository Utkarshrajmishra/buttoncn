import { SplashButton } from "../buttoncn/splash-button";

const SplashButtonPreview = () => {
    return (
        <div>
            <SplashButton >
                Hover Me
            </SplashButton>
        </div>
    );
};


const SplashButtonPreviewPrimary = () => {
    return (
        <div>
            <SplashButton variant="primary" >
                Hover Me
            </SplashButton>
        </div>
    );
};


const SplashButtonPreviewSecondary=()=>{
    return(
        <div>
            <SplashButton variant="secondary" >
                Hover Me
            </SplashButton>
        </div>
    )
}


const SplashButtonPreviewOutline=()=>{
    return(
        <div>
            <SplashButton variant="outline" >
                Hover Me
            </SplashButton>
        </div>
    )
}


const SplashButtonPreviewSplashColor=()=>{
    return(
        <div>
            <SplashButton splashColor="#7CE36D" >
                Hover Me
            </SplashButton>
        </div>
    )
}

export { SplashButtonPreview, SplashButtonPreviewPrimary,SplashButtonPreviewSecondary,SplashButtonPreviewOutline,SplashButtonPreviewSplashColor };