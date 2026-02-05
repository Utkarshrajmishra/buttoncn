import { createMDX } from 'fumadocs-mdx/next';


/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  outputFileTracingIncludes:{
    "/**":["components/buttoncn/**/**"]
  },
  async headers(){
    return[
      {
        source:"/r/:path",
        headers:[
          {
            key:"Cache-Control",
            value:"public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  },
  eslint:{
    ignoreDuringBuilds:true,
  }
};

const withMDX = createMDX({});

export default withMDX(config);