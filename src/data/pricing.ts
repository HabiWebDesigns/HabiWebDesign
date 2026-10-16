export interface Tier{name:string;price:string;for:string;features:string[];featured?:boolean}
// ✏️ Starting prices only. Adjust freely.
export const tiers:Tier[]=[
 {name:'Starter',price:'₱5,000+',for:'For individuals and a simple online presence.',features:['Single-page website','Responsive design','Basic contact section','Social links','Basic animations','Deployment assistance']},
 {name:'Business',price:'₱10,000+',for:'For small businesses.',featured:true,features:['Multi-page website','Custom design','Responsive development','Contact form','Basic SEO','Animations','Deployment']},
 {name:'Custom',price:"Let's Talk",for:'For unique requirements.',features:['Custom functionality','Advanced interactions','Custom integrations','Web applications','Unique design requirements']},
]
