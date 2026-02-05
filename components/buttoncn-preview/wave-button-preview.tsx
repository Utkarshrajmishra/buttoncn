import WaveButton from "../buttoncn/wave-button"

const WaveButtonPreview = () => {
    return (
        <div>
            <WaveButton>Hover Me</WaveButton>
        </div>
    )
}

const WaveButtonPreviewWaveColors=()=>{
    return(
        <div>
            <WaveButton waveColors={["#7f1d1d", "#991b1b", "#b91c1c", "#dc2626", "#ef4444"]}>Hover Me</WaveButton>
        </div>
    )
}

export {WaveButtonPreviewWaveColors,WaveButtonPreview}