import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui'
export const links=[['Home','/'],['Services','/services'],['Projects','/projects'],['Rates','/rates'],['About','/about'],['Contact','/contact']] as const
export default function Navbar(){
  const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false)
  useEffect(()=>{const f=()=>setScrolled(scrollY>30); f(); addEventListener('scroll',f,{passive:true}); return()=>removeEventListener('scroll',f)},[])
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled||open?'border-deep/10 bg-paper/80 backdrop-blur-md':'border-transparent'}`}>
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:p-3">Skip to content</a>
    <nav aria-label="Main" className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${scrolled?'py-2':'py-4'}`}>
      <Link to="/" onClick={()=>setOpen(false)} aria-label="Habi Web Designs home"><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Habi Web Designs" className={`w-auto transition-all duration-300 ${scrolled?'h-10':'h-14'}`}/></Link>
      <ul className="hidden items-center gap-8 lg:flex">{links.map(([l,to])=><li key={to}><NavLink to={to} end={to==='/'} className={({isActive})=>`relative py-2 text-sm tracking-wide ${isActive?'text-deep':'text-ink/70 hover:text-deep'}`}>
        {({isActive})=><>{l}{isActive&&<motion.span layoutId="nav-ind" className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary"/>}</>}</NavLink></li>)}</ul>
      <div className="hidden lg:block"><Button to="/contact">Start a Project</Button></div>
      <button className="p-2 text-deep lg:hidden" aria-expanded={open} aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </nav>
    <AnimatePresence>{open&&<motion.ul initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden px-6 lg:hidden">
      {links.map(([l,to],i)=><motion.li key={to} initial={{x:-12,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:i*.05}}>
        <NavLink to={to} end={to==='/'} onClick={()=>setOpen(false)} className={({isActive})=>`block border-b border-deep/10 py-4 font-display text-2xl ${isActive?'text-primary':'text-deep'}`}>{l}</NavLink></motion.li>)}
      <li className="py-6"><Button to="/contact" className="w-full" >Start a Project</Button></li></motion.ul>}</AnimatePresence></header>
}
