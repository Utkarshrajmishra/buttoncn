import type { Registry } from "./schema";

export const component:Registry=[{
    name:'ai-input',
    type:'registry:component',
    dependencies:["lucide-react"],
    registryDependencies:["button"],
    files:[
        {
            path:"components/buttoncn/ai-input.tsx",
            type:"registry:component",
           
        }
    ]
}]