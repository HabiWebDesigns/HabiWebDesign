export type IconName='monitor'|'code'|'layout'|'building'|'user'|'heart'|'refresh'|'sparkles'
export interface Service { id:string; title:string; icon:IconName; description:string; features:string[] }
export const services: Service[] = [
 {id:'web-design',title:'Web Design',icon:'monitor',description:'Modern layouts, visual identity, typography, user experience.',features:['Visual direction','Typography & color','UX flows']},
 {id:'web-development',title:'Web Development',icon:'code',description:'Responsive, fast, functional websites.',features:['Responsive build','Performance','Clean code']},
 {id:'landing-pages',title:'Landing Pages',icon:'layout',description:'Focused pages that present a business, product, service, or campaign.',features:['Clear messaging','Single goal','Quick turnaround']},
 {id:'business-websites',title:'Business Websites',icon:'building',description:'Professional websites for small businesses and growing brands.',features:['Multi-page','Contact forms','Basic SEO']},
 {id:'portfolio-websites',title:'Portfolio Websites',icon:'user',description:'Personal sites for professionals, creatives, photographers and freelancers.',features:['Image galleries','About & CV','Inquiry form']},
 {id:'event-wedding',title:'Event & Wedding Websites',icon:'heart',description:'Beautiful custom websites for events and weddings.',features:['RSVP','Schedule & venue','Gallery']},
 {id:'redesign',title:'Website Redesign',icon:'refresh',description:'Modernizing outdated websites.',features:['Audit','Fresh design','Content migration']},
 {id:'custom',title:'Custom Web Experiences',icon:'sparkles',description:"Unique interactive websites based on a client's concept.",features:['Interactive concepts','Custom animation','Integrations']},
]
