import WaveButton from "../buttoncn/wave-button"

const WaveButtonPreview = () => {
    return (
        <div>
            <WaveButton>Wave Button</WaveButton>
        </div>
    )
}

const WaveButtonPreviewWaveColors=()=>{
    return(
        <div>
            <WaveButton waveColors={["#7f1d1d", "#991b1b", "#b91c1c", "#dc2626", "#ef4444"]}>Wave Button</WaveButton>
        </div>
    )
}

export {WaveButtonPreviewWaveColors,WaveButtonPreview}