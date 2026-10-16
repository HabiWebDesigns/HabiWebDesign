import { ReactNode, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Monitor, Code2, LayoutTemplate, Building2, UserRound, Heart, RefreshCw, Sparkles } from 'lucide-react'
import type { IconName } from '../data/services'

export function useSeo(title:string, description:string){
  useEffect(()=>{
    document.title=title
    const set=(sel:string,attr:string,val:string)=>document.querySelector(sel)?.setAttribute(attr,val)
    set('meta[name="description"]','content',description); set('meta[property="og:title"]','content',title); set('meta[property="og:description"]','content',description)
  },[title,description])
}

export function Reveal({children,delay=0,className=''}:{children:ReactNode;delay?:number;className?:string}){
  const r=useReducedMotion()
  return <motion.div className={className} initial={r?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}

export function PageTransition({children}:{children:ReactNode}){
  return <motion.main id="main" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.35}}>{children}</motion.main>
}

export function SectionHeading({eyebrow,title,children,align='left'}:{eyebrow?:string;title:ReactNode;children?:ReactNode;align?:'left'|'center'}){
  return <Reveal className={`max-w-2xl ${align==='center'?'mx-auto text-center':''}`}>
    {eyebrow&&<p className="mb-4 text-xs font-medium uppercase tracking-[.3em] text-deep/70">{eyebrow}</p>}
    <h2 className="font-display text-4xl font-light leading-tight text-deep sm:text-5xl">{title}</h2>
    {children&&<p className="mt-5 text-lg leading-relaxed text-ink/75">{children}</p>}</Reveal>
}

export function Button({to,onClick,children,variant='primary',type='button',disabled,className=''}:{to?:string;onClick?:()=>void;children:ReactNode;variant?:'primary'|'ghost'|'light';type?:'button'|'submit';disabled?:boolean;className?:string}){
  const base='inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors disabled:opacity-60 '
  const v={primary:'bg-deep text-white hover:bg-ink',ghost:'border border-deep/30 text-deep hover:bg-soft',light:'bg-white text-deep hover:bg-soft'}[variant]
  const m={whileHover:{y:-2},whileTap:{scale:.96},transition:{type:'spring' as const,stiffness:400,damping:25}}
  return to
    ? <motion.span {...m} className="inline-block"><Link to={to} className={base+v+' '+className}>{children}</Link></motion.span>
    : <motion.button {...m} type={type} onClick={onClick} disabled={disabled} className={base+v+' '+className}>{children}</motion.button>
}

const icons={monitor:Monitor,code:Code2,layout:LayoutTemplate,building:Building2,user:UserRound,heart:Heart,refresh:RefreshCw,sparkles:Sparkles}
export function AnimatedIcon({name,size=28}:{name:IconName;size?:number}){
  const I=icons[name]; const r=useReducedMotion()
  const idle=name==='sparkles'&&!r?{scale:[1,1.15,1],rotate:[0,12,0]}:name==='code'&&!r?{x:[0,2,0,-2,0]}:undefined
  return <motion.span className="inline-flex text-primary" animate={idle} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}
    whileHover={{scale:1.18,rotate:name==='refresh'?180:name==='sparkles'?30:-6}}>
    <I size={size} strokeWidth={1.4} aria-hidden/></motion.span>
}

/** Woven-thread SVG background: slow drifting curves */
export function Threads(){
  const r=useReducedMotion()
  const paths=['M-100 420 C 300 120, 600 620, 1000 300 S 1500 200, 1700 380','M-100 520 C 250 700, 650 150, 1050 450 S 1450 600, 1700 300','M-100 250 C 400 500, 700 50, 1100 250 S 1500 450, 1700 150']
  return <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice">
    {paths.map((d,i)=><motion.path key={i} d={d} fill="none" stroke="#5B9FE8" strokeWidth={i===1?24:1} strokeLinecap="round" opacity={i===1?.12:.45}
      initial={r?false:{pathLength:0}} animate={{pathLength:1,y:r?0:[0,14,0]}} transition={{pathLength:{duration:2.4,delay:i*.3},y:{duration:12+i*3,repeat:Infinity,ease:'easeInOut'}}}/>)}</svg>
}

export function Cover({hue,title,image}:{hue:number;title:string;image?:string}){
  if(image) return <img src={image} alt={`${title} website preview`} loading="lazy" className="h-full w-full object-cover"/>
  return <div role="img" aria-label={`${title} website preview`} className="relative h-full w-full overflow-hidden" style={{background:`linear-gradient(135deg,hsl(${hue} 70% 92%),hsl(${hue} 60% 78%))`}}>
    <div className="absolute inset-x-[12%] top-[14%] bottom-0 rounded-t-lg border border-white/70 bg-white/80 p-3 shadow-lg">
      <div className="mb-2 flex gap-1">{[0,1,2].map(i=><i key={i} className="size-1.5 rounded-full bg-deep/20"/>)}</div>
      <div className="h-3 w-1/2 rounded" style={{background:`hsl(${hue} 50% 40%)`}}/><div className="mt-2 h-2 w-3/4 rounded bg-deep/10"/><div className="mt-1 h-2 w-2/3 rounded bg-deep/10"/>
      <div className="mt-4 grid grid-cols-3 gap-2">{[0,1,2].map(i=><div key={i} className="h-10 rounded" style={{background:`hsl(${hue} 60% 85%)`}}/>)}</div></div></div>
}

export function CTA({title='Have an idea in mind?',sub="Let's weave it into the web.",button='Start Your Project'}:{title?:string;sub?:string;button?:string}){
  return <section className="relative overflow-hidden bg-deep px-6 py-28 text-center text-white"><Reveal>
    <h2 className="font-display text-5xl font-light sm:text-6xl">{title}</h2><p className="mt-4 text-xl text-soft">{sub}</p>
    <div className="mt-10"><Button to="/contact" variant="light">{button}</Button></div></Reveal></section>
}
