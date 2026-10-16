import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { PageTransition } from './components/ui'
import Home from './pages/Home'
import { Services, Projects, Rates, About, Process, Contact, NotFound } from './pages/Pages'
export default function App(){
  const loc=useLocation(); const [top,setTop]=useState(false)
  useEffect(()=>{scrollTo(0,0)},[loc.pathname])
  useEffect(()=>{const f=()=>setTop(scrollY>600); addEventListener('scroll',f,{passive:true}); return()=>removeEventListener('scroll',f)},[])
  return <>
    <Navbar/>
    <AnimatePresence mode="wait"><Routes location={loc} key={loc.pathname}>
      {[['/',<Home/>],['/services',<Services/>],['/projects',<Projects/>],['/rates',<Rates/>],['/about',<About/>],['/process',<Process/>],['/contact',<Contact/>],['*',<NotFound/>]].map(([p,el])=>
        <Route key={p as string} path={p as string} element={<PageTransition>{el as JSX.Element}</PageTransition>}/>)}
    </Routes></AnimatePresence>
    <Footer/>
    {loc.pathname!=='/contact'&&<Link to="/contact" className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-deep py-3.5 text-center text-sm font-medium text-white shadow-lg sm:hidden">Start a Project</Link>}
    <AnimatePresence>{top&&<motion.button initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}} whileTap={{scale:.9}} aria-label="Scroll to top" onClick={()=>scrollTo({top:0,behavior:'smooth'})} className="fixed bottom-20 right-4 z-40 rounded-full border border-deep/20 bg-white p-3 text-deep shadow sm:bottom-6"><ArrowUp size={18}/></motion.button>}</AnimatePresence>
  </>
}
