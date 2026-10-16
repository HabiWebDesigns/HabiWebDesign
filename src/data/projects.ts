// ✏️ ADD YOUR REAL PROJECTS HERE. Each card opens `url` in a new tab.
// `image` is optional: put a screenshot in /public/projects and use 'projects/x.jpg'
export type Category = 'Business' | 'Landing Pages' | 'Portfolio' | 'Events' | 'Other'
export interface Project { slug:string; title:string; category:Category; description:string; url:string; image?:string; hue:number; technologies:string[] }
export const categories = ['All','Business','Landing Pages','Portfolio','Events','Other'] as const
export const projects: Project[] = [
 {slug:'kape-sulok',title:'Kape Sulok Café',category:'Business',hue:25,url:'https://example.com',technologies:['React','Tailwind','Framer Motion'],description:'A warm, menu-first website for a neighborhood café.'},
 {slug:'dela-cruz-trading',title:'Dela Cruz Trading',category:'Business',hue:210,url:'https://example.com',technologies:['React','TypeScript','Vite'],description:'A clear, trustworthy site for a local supplier.'},
 {slug:'mara-reyes-portfolio',title:'Mara Reyes Portfolio',category:'Portfolio',hue:260,url:'https://example.com',technologies:['React','Framer Motion'],description:'A quiet, image-led portfolio for a photographer.'},
 {slug:'ana-and-miguel',title:'Ana & Miguel Wedding',category:'Events',hue:340,url:'https://example.com',technologies:['React','Tailwind'],description:'A romantic wedding site with RSVP and story timeline.'},
 {slug:'lakbay-landing',title:'Lakbay Startup Landing',category:'Landing Pages',hue:170,url:'https://example.com',technologies:['React','TypeScript','Framer Motion'],description:'A focused launch page for a travel startup.'},
 {slug:'tala-experience',title:'Tala Interactive Story',category:'Other',hue:230,url:'https://example.com',technologies:['React','SVG','Framer Motion'],description:'An interactive scroll-driven digital experience.'},
]
