import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, CTA, Reveal, SectionHeading, Threads, useSeo } from '../components/ui'
import { ServiceCard, ProjectCard, PricingCard } from '../components/cards'
import ContactForm from '../components/ContactForm'
import { services } from '../data/services'
import { projects, categories } from '../data/projects'
import { tiers } from '../data/pricing'
import { process, socials } from '../data/content'

const Hero=({eyebrow,title,sub}:{eyebrow:string;title:string;sub?:string})=><section className="relative overflow-hidden px-6 pb-16 pt-40"><Threads/><div className="relative mx-auto max-w-7xl"><p className="mb-4 text-xs uppercase tracking-[.3em] text-deep/70">{eyebrow}</p><h1 className="max-w-4xl font-display text-5xl font-light leading-tight text-deep sm:text-7xl">{title}</h1>{sub&&<p className="mt-6 max-w-xl text-lg text-ink/75">{sub}</p>}</div></section>

export function Services(){
  useSeo('Services | Habi Web Designs','Web design, development, landing pages, business, portfolio, event and wedding websites, redesigns and custom web experiences.')
  return <><Hero eyebrow="Services" title="What Can We Weave For You?"/>
    <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">{services.map((s,i)=><Reveal key={s.id} delay={(i%4)*.08}><ServiceCard s={s} detailed/></Reveal>)}</section><CTA/></>
}

export function Projects(){
  useSeo('Projects | Habi Web Designs','Explore websites and digital experiences created by Habi Web Designs.')
  const [c,setC]=useState<string>('All'); const list=projects.filter(p=>c==='All'||p.category===c)
  return <><Hero eyebrow="Projects" title="Things We've Woven" sub="Explore websites and digital experiences created by Habi Web Designs."/>
    <section className="mx-auto max-w-7xl px-6 pb-24"><div role="group" aria-label="Filter projects" className="mb-12 flex flex-wrap gap-2">{categories.map(x=><button key={x} aria-pressed={c===x} onClick={()=>setC(x)} className={`relative rounded-full px-5 py-2 text-sm transition-colors ${c===x?'text-white':'text-deep hover:bg-soft'}`}>{c===x&&<motion.span layoutId="filter" className="absolute inset-0 rounded-full bg-deep"/>}<span className="relative">{x}</span></button>)}</div>
      <motion.div layout className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">{list.map(p=><motion.div layout key={p.slug} initial={{opacity:0}} animate={{opacity:1}}><ProjectCard p={p}/></motion.div>)}</motion.div>
      {!list.length&&<p className="text-ink/70">No projects in this category yet.</p>}</section></>
}

export function Rates(){
  useSeo('Rates | Habi Web Designs','Simple, transparent starting rates for Starter, Business and Custom websites.')
  return <><Hero eyebrow="Rates" title="Simple, Transparent Rates" sub="Choose a starting point, then we'll tailor the website around your needs."/>
    <section className="mx-auto max-w-7xl px-6 pb-12"><div className="grid gap-8 md:grid-cols-3">{tiers.map((t,i)=><Reveal key={t.name} delay={i*.1}><PricingCard t={t}/></Reveal>)}</div><p className="mt-6 text-sm text-ink/60">All prices are starting prices and may vary depending on your requirements.</p></section>
    <section className="mx-auto max-w-4xl px-6 py-20 text-center"><SectionHeading align="center" title="Need something different?">Tell us what you're building and we'll create a package around it.</SectionHeading><div className="mt-8"><Button to="/contact">Request a Quote</Button></div></section></>
}

export function About(){
  useSeo('About | Habi Web Designs','The story behind Habi, a Filipino word meaning to weave.')
  const items=[['Mission','To help Filipino businesses and individuals tell their story online with websites that are beautiful, clear and genuinely useful.'],['Vision','A web where small brands look as considered as large ones.'],['Values','Craft over shortcuts. Clarity over jargon. Collaboration over guesswork.'],['Philosophy','Every website is many threads: your story, brand, content, goals, design and technology. Our job is to hold them together.']]
  return <><Hero eyebrow="About" title="Habi means to weave." sub="It is a Filipino word for bringing many threads into one cloth. That is how we build websites."/>
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2">{items.map(([t,d],i)=><Reveal key={t} delay={i*.08}><h2 className="font-display text-3xl text-deep">{t}</h2><p className="mt-3 text-lg leading-relaxed text-ink/80">{d}</p></Reveal>)}</section>
    <section className="bg-soft/50 px-6 py-24 text-center"><Reveal><p className="font-display text-4xl font-light text-deep sm:text-6xl">Your idea is the thread.<br/><span className="text-primary">We weave the rest.</span></p></Reveal></section><CTA/></>
}

export function Process(){
  useSeo('Process | Habi Web Designs','How we take your website from idea to launch in six steps.')
  return <><Hero eyebrow="Process" title="How a thread becomes a website"/>
    <section className="relative mx-auto max-w-3xl px-6 pb-24"><div className="absolute bottom-24 left-9 top-0 w-px bg-primary/40 sm:left-10" aria-hidden/>
      <ol className="space-y-16">{process.map(s=><motion.li key={s.n} initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.6}} className="relative pl-20"><span className="absolute left-0 flex size-[4.5rem] items-center justify-center rounded-full border border-primary bg-paper font-display text-xl text-deep sm:size-20">{s.n}</span><h2 className="font-display text-3xl text-deep">{s.t}</h2><p className="mt-2 text-lg text-ink/75">{s.d}</p></motion.li>)}</ol></section><CTA/></>
}

export function Contact(){
  useSeo('Contact | Habi Web Designs','Have a website idea? Tell us about it.')
  return <><Hero eyebrow="Contact" title="Let's Weave Something Together." sub="Have a website idea? Tell us about it."/>
    <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-[2fr_1fr]"><ContactForm/>
      <aside className="space-y-4 border-t border-deep/20 pt-6"><h2 className="font-display text-2xl text-deep">Elsewhere</h2><p><a className="underline" href={`mailto:${socials.email}`}>{socials.email}</a></p>
        {(['facebook','instagram','github'] as const).map(k=><p key={k}><a className="capitalize underline" href={socials[k]} target="_blank" rel="noreferrer">{k}</a></p>)}<p>Philippines 🇵🇭</p></aside></section></>
}

export function NotFound(){
  useSeo('Page not found | Habi Web Designs','This page could not be found.')
  return <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"><Threads/><div className="relative"><p className="font-display text-8xl text-primary">404</p><h1 className="mt-4 font-display text-4xl text-deep sm:text-5xl">Looks like this thread got loose.</h1><p className="mt-4 text-lg text-ink/75">Let's weave you back home.</p><div className="mt-8"><Button to="/">Back Home</Button></div></div></section>
}
