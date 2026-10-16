import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import type { Service } from '../data/services'
import type { Tier } from '../data/pricing'
import { AnimatedIcon, Button, Cover } from './ui'

export function ProjectCard({p}:{p:Project}){
  return <motion.article whileHover={{y:-6}} transition={{type:'spring',stiffness:300,damping:24}} className="group">
    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} (opens in a new tab)`} className="block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-deep/10">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105"><Cover hue={p.hue} title={p.title} image={p.image}/></div>
        <div className="absolute inset-0 flex items-end bg-deep/60 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-white">Visit Website <ArrowUpRight size={16}/></span></div></div>
      <p className="mt-4 text-xs uppercase tracking-[.25em] text-deep/60">{p.category}</p>
      <h3 className="mt-1 font-display text-2xl text-deep">{p.title}</h3>
      <p className="mt-2 text-ink/70">{p.description}</p>
      <p className="mt-3 text-xs text-deep/60">{p.technologies.join(' · ')}</p></a></motion.article>
}

export function ServiceCard({s,detailed}:{s:Service;detailed?:boolean}){
  return <motion.div whileHover={{y:-4}} className="group border-t border-deep/15 pt-6">
    <AnimatedIcon name={s.icon} size={32}/>
    <h3 className="mt-5 font-display text-2xl text-deep">{s.title}</h3>
    <p className="mt-2 text-ink/70">{s.description}</p>
    {detailed&&<><ul className="mt-4 space-y-2 text-sm text-ink/80">{s.features.map(f=><li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary"/>{f}</li>)}</ul>
      <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-deep underline-offset-4 hover:underline">Start this project <ArrowUpRight size={14}/></Link></>}
  </motion.div>
}

export function PricingCard({t}:{t:Tier}){
  return <motion.div whileHover={{y:-6}} className={`flex flex-col border p-8 ${t.featured?'border-deep bg-white shadow-xl shadow-deep/10':'border-deep/15 bg-white/60'}`}>
    {t.featured&&<p className="mb-3 text-xs uppercase tracking-[.25em] text-primary">Most chosen</p>}
    <h3 className="font-display text-3xl text-deep">{t.name}</h3>
    <p className="mt-1 text-sm text-ink/70">{t.for}</p>
    <p className="mt-6 font-display text-4xl text-deep">{t.price}</p>
    {t.price.includes('+')&&<p className="text-xs text-ink/60">Starting price — varies by requirements</p>}
    <ul className="my-8 flex-1 space-y-3 text-sm">{t.features.map(f=><li key={f} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary"/>{f}</li>)}</ul>
    <Button to="/contact" variant={t.featured?'primary':'ghost'}>{t.price==="Let's Talk"?'Request a Quote':'Choose '+t.name}</Button></motion.div>
}
