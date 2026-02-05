import PeelButton from "../buttoncn/peel-button"

const PeelButtonPreview = () => {
    return (
        <div>
            <PeelButton>Hover Me kpkpkpk</PeelButton>
        </div>
    )
}

const PeelButtonColors = () => {
    return (
        <div>
            <PeelButton colors={["#bfdbfe", "#3b82f6", "#1e3a8a"]}>Hover Me</PeelButton>
        </div>
    )
}

export  {PeelButtonPreview, PeelButtonColors}