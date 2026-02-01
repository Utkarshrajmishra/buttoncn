import { SplashButton } from "./liquid-button";

const LiquidButtonDemo = () => {
    return (
        <SplashButton>Click me</SplashButton>
    )
}



const LiquidButtonDemo3 = () => {
    return (
        <SplashButton variant="outline">Click me</SplashButton>
    )
}

const LiquidButtonDemo4 = () => {
    return (
        <SplashButton variant="primary">Click me</SplashButton>
    )
}

const LiquidButtonDemo5 = () => {
    return (
        <SplashButton variant="secondary">Click me</SplashButton>
    )
}

    
const LiquidButtonDemo6 = () => {
    return (
        <SplashButton splashColor="red-600">Click me</SplashButton>
    )
}

export {LiquidButtonDemo, LiquidButtonDemo3, LiquidButtonDemo4, LiquidButtonDemo5, LiquidButtonDemo6}