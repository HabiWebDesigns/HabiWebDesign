import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import { Button, CTA, Reveal, SectionHeading, Threads, useSeo } from '../components/ui'
import { ServiceCard, ProjectCard } from '../components/cards'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { process, why, testimonials } from '../data/content'
export default function Home(){
  useSeo('Habi Web Designs | Weaving Your Ideas Into the Web','Habi Web Designs creates modern, responsive, and beautiful websites for businesses, entrepreneurs, professionals, and individuals in the Philippines.')
  const r=useReducedMotion()
  return <>
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"><Threads/>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div><motion.h1 initial={r?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.3}} className="font-display text-5xl font-light leading-[1.05] text-deep sm:text-7xl xl:text-8xl">Your Idea.<br/><span className="text-primary">Woven</span> Into the Web.</motion.h1>
          <motion.p initial={r?false:{opacity:0}} animate={{opacity:1}} transition={{delay:.7,duration:.8}} className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">We create modern, beautiful, and functional websites designed around your brand, your story, and your goals.</motion.p>
          <motion.div initial={r?false:{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className="mt-10 flex flex-wrap gap-4"><Button to="/contact">Start a Project</Button><Button to="/projects" variant="ghost">View Our Work</Button></motion.div></div>
        <motion.img src={`${import.meta.env.BASE_URL}logo.png`} alt="Habi Web Designs woven H logo" initial={r?false:{opacity:0,x:40,rotate:-3}} animate={{opacity:1,x:0,rotate:0}} transition={{duration:1.2,ease:[.22,1,.36,1]}} className="mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md"/></div></section>

    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2"><SectionHeading eyebrow="Why it matters" title="Your business deserves more than a template."/>
      <Reveal delay={.1}><p className="text-lg leading-relaxed text-ink/80">Your website is often the first conversation a customer has with you. A template says what everyone says. A website woven around your story says what only you can say, clearly, quickly, and on every screen they hold.</p></Reveal></section>

    <section className="bg-soft/40 px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Services" title="What we weave"/>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">{services.filter(s=>['web-design','web-development','landing-pages','business-websites','custom'].includes(s.id)).map((s,i)=><Reveal key={s.id} delay={i*.08}><ServiceCard s={s}/></Reveal>)}</div>
      <div className="mt-10"><Button to="/services" variant="ghost">All services</Button></div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24"><div className="flex flex-wrap items-end justify-between gap-6"><SectionHeading eyebrow="Featured work" title="Things we've woven"/><Link to="/projects" className="text-sm font-medium text-deep underline underline-offset-4">See all projects</Link></div>
      <div className="mt-14 grid gap-12 md:grid-cols-3">{projects.slice(0,3).map((p,i)=><Reveal key={p.slug} delay={i*.1} className={i===1?'md:mt-16':''}><ProjectCard p={p}/></Reveal>)}</div></section>

    <section className="bg-deep px-6 py-24 text-white"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Why Habi" title={<span className="text-white">Every thread, on purpose</span>}/>
      <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">{why.map(([t,d],i)=><Reveal key={t} delay={i*.06} className="bg-deep p-6"><h3 className="font-display text-xl">{t}</h3><p className="mt-3 text-sm leading-relaxed text-soft/90">{d}</p></Reveal>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-24"><SectionHeading eyebrow="Process" title="From first thread to launch"/>
      <ol className="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-6">{process.map((s,i)=><Reveal key={s.n} delay={i*.08}><li className="border-t-2 border-primary pt-4"><span className="text-sm text-primary">{s.n}</span><h3 className="font-display text-2xl text-deep">{s.t}</h3><p className="mt-2 text-sm text-ink/70">{s.d}</p></li></Reveal>)}</ol></section>

    <section className="bg-soft/40 px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Kind words" title="What clients say"/>
      <div className="mt-14 grid gap-10 md:grid-cols-3">{testimonials.map((t,i)=><Reveal key={i} delay={i*.1}><figure><blockquote className="font-display text-xl leading-snug text-deep">“{t.q}”</blockquote><figcaption className="mt-4 text-sm text-ink/70">{t.n} · {t.r}</figcaption></figure></Reveal>)}</div></div></section>
    <CTA/></>
}
