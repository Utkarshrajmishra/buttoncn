import { PulseButton } from "./broken-button";

const PulseButtonDemo=()=>{
  return(
    <PulseButton pulseColor="#fffff">Hover Me</PulseButton>
  )
}


const PulseButtonDemo2=()=>{
  return(
    <PulseButton variant="destructive">Hover Me</PulseButton>
  )
}

const PulseButtonDemo3=()=>{
  return(
    <PulseButton variant="destructive">Hover Me</PulseButton>
  )
}

const PulseButtonDemo4=()=>{
  return(
    <PulseButton variant="outline">Hover Me</PulseButton>
  )
}

const PulseButtonDemo5=()=>{
  return(
    <PulseButton variant="ghost">Hover Me</PulseButton>
  )
}

export  {PulseButtonDemo, PulseButtonDemo2, PulseButtonDemo3, PulseButtonDemo4, PulseButtonDemo5}