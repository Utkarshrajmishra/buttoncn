export interface NavItem{
    id:string,
    title:string,
    description?:string,
    href:string,
    count?: number|string
    isComingSoon?:boolean,
    isNew?:boolean,
    isLabel?:boolean,
   
}

export interface NavSection{
    title:string,
    items:NavItem[]
}

export const NavigationSection: NavSection[]=[
    {
        title:"Getting Started",
        items:[
            {
                id:"getting-started",
                title:"Getting Started",
                description:"Introduction and usage guidelines.",
                href:"/docs/getting-started"
            }
        ]
    },
    {
        title:"Components",
        items:[
            {
                id:"getting-started",
                title:"Getting Started",
                description:"Introduction and usage guidelines.",
                href:"/docs/getting-started"
            }
        ]
    }
]