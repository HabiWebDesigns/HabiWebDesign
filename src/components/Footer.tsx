import { Link } from 'react-router-dom'
import { Facebook, Instagram, Github, Mail } from 'lucide-react'
import { links } from './Navbar'
import { socials } from '../data/content'
export default function Footer(){
  const s=[[Facebook,socials.facebook,'Facebook'],[Instagram,socials.instagram,'Instagram'],[Github,socials.github,'GitHub'],[Mail,'mailto:'+socials.email,'Email']] as const
  return <footer className="border-t border-deep/10 bg-soft/50 px-6 py-16"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
    <div className="md:col-span-2"><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Habi Web Designs" className="h-20 w-auto"/><p className="mt-3 font-display text-lg text-deep">Weaving Your Ideas Into the Web.</p>
      <div className="mt-5 flex gap-4">{s.map(([I,h,l])=><a key={l} href={h} aria-label={l} target="_blank" rel="noreferrer" className="text-deep transition-transform hover:-translate-y-1 hover:text-primary"><I size={20}/></a>)}</div></div>
    <nav aria-label="Footer"><h2 className="mb-3 text-xs uppercase tracking-[.25em] text-deep/60">Navigate</h2><ul className="space-y-2 text-sm">{links.map(([l,t])=><li key={t}><Link className="hover:text-primary" to={t}>{l}</Link></li>)}</ul></nav>
    <div><h2 className="mb-3 text-xs uppercase tracking-[.25em] text-deep/60">Services</h2><ul className="space-y-2 text-sm">{['Web Design','Web Development','Landing Pages','Business Websites'].map(x=><li key={x}><Link className="hover:text-primary" to="/services">{x}</Link></li>)}</ul><p className="mt-5 text-sm">Philippines 🇵🇭</p></div></div>
    <p className="mx-auto mt-12 max-w-7xl text-xs text-ink/60">© 2026 Habi Web Designs. All rights reserved.</p></footer>
}
