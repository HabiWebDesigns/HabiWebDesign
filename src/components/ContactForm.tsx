import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
const types=['Business Website','Landing Page','Portfolio','Event / Wedding','Website Redesign','Custom Website','Other']
const budgets=['Below ₱5,000','₱5,000 – ₱10,000','₱10,000 – ₱20,000','₱20,000+','Not Sure Yet']
// 🔌 Connect later: set to your Formspree URL (e.g. https://formspree.io/f/xxxx). If empty, submission is simulated.
const ENDPOINT=''
type V={name:string;email:string;brand:string;type:string;budget:string;message:string}
const L=({id,label,e,children}:{id:string;label:string;e?:string;children:React.ReactNode})=><div><label htmlFor={id} className="text-sm font-medium text-deep">{label}</label>{children}{e&&<p id={id+'-e'} className="mt-1 text-sm text-red-700">{e}</p>}</div>
export default function ContactForm(){
  const [v,setV]=useState<V>({name:'',email:'',brand:'',type:'',budget:'',message:''})
  const [err,setErr]=useState<Partial<V>>({}); const [state,setState]=useState<'idle'|'loading'|'ok'|'fail'>('idle')
  const up=(k:keyof V)=>(e:{target:{value:string}})=>setV({...v,[k]:e.target.value})
  async function submit(e:FormEvent){
    e.preventDefault(); const x:Partial<V>={}
    if(v.name.trim().length<2)x.name='Please enter your name.'
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))x.email='Please enter a valid email.'
    if(!v.type)x.type='Please choose a project type.'
    if(v.message.trim().length<10)x.message='Tell us a little more (at least 10 characters).'
    setErr(x); if(Object.keys(x).length)return
    setState('loading')
    try{ if(ENDPOINT){const r=await fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(v)}); if(!r.ok)throw new Error()} else await new Promise(r=>setTimeout(r,900)); setState('ok')}catch{setState('fail')}
  }
  if(state==='ok')return <motion.div role="status" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} className="border border-primary/40 bg-soft p-10 text-center"><CheckCircle2 className="mx-auto text-primary" size={40}/><h3 className="mt-4 font-display text-3xl text-deep">Thread received.</h3><p className="mt-2">Thanks, {v.name.split(' ')[0]}! We'll reply to {v.email} soon.</p></motion.div>
  const f='mt-2 w-full border border-deep/20 bg-white px-4 py-3 text-ink focus:border-primary'
  return <form onSubmit={submit} noValidate className="grid gap-6 sm:grid-cols-2">
    <L id="name" label="Name" e={err.name}><input id="name" className={f} value={v.name} onChange={up('name')} aria-invalid={!!err.name} aria-describedby="name-e" autoComplete="name"/></L>
    <L id="email" label="Email" e={err.email}><input id="email" type="email" className={f} value={v.email} onChange={up('email')} aria-invalid={!!err.email} aria-describedby="email-e" autoComplete="email"/></L>
    <div className="sm:col-span-2"><L id="brand" label="Business / Brand"><input id="brand" className={f} value={v.brand} onChange={up('brand')}/></L></div>
    <L id="type" label="Project Type" e={err.type}><select id="type" className={f} value={v.type} onChange={up('type')} aria-invalid={!!err.type}><option value="">Select…</option>{types.map(t=><option key={t}>{t}</option>)}</select></L>
    <L id="budget" label="Budget"><select id="budget" className={f} value={v.budget} onChange={up('budget')}><option value="">Select…</option>{budgets.map(t=><option key={t}>{t}</option>)}</select></L>
    <div className="sm:col-span-2"><L id="message" label="Message" e={err.message}><textarea id="message" rows={6} placeholder="Tell us about your project..." className={f} value={v.message} onChange={up('message')} aria-invalid={!!err.message} aria-describedby="message-e"/></L></div>
    <div className="sm:col-span-2">{state==='fail'&&<p role="alert" className="mb-4 flex items-center gap-2 text-red-700"><AlertCircle size={18}/>Something went wrong. Please try again.</p>}
      <motion.button whileHover={{y:-2}} whileTap={{scale:.96}} disabled={state==='loading'} className="inline-flex items-center gap-2 rounded-full bg-deep px-8 py-4 text-sm font-medium text-white disabled:opacity-60">{state==='loading'&&<Loader2 className="animate-spin" size={16}/>}{state==='loading'?'Sending…':'Send Project Inquiry'}</motion.button></div></form>
}
