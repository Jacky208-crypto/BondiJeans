/* ============================================================
   PRODUCTS — to use your own photos, set "img" to a photo URL,
   e.g.  img:"https://yoursite.com/photos/shirt.jpg"
   Leave img:"" to keep the built-in placeholder.
   Schoolwear is listed first and is the default category shown.
   ============================================================ */
const PRODUCTS = [
  // ---- SCHOOLWEAR (the focus) ----
  {name:"Classic Oxford School Shirt", cat:"Schoolwear", price:26, img:"", shape:"shirt", tag:"Bestseller",
   desc:"A crisp easy-iron oxford shirt with a reinforced collar and double-stitched seams. Holds its shape wash after wash. Available in white and sky blue."},
  {name:"Pleated School Skirt", cat:"Schoolwear", price:34, img:"", shape:"skirt",
   desc:"A knife-pleated skirt in a tough, crease-resistant poly-wool blend with an adjustable inner waistband to grow with your child."},
  {name:"Slim School Trousers", cat:"Schoolwear", price:36, img:"", shape:"trousers",
   desc:"Sturdy flat-front trousers with reinforced knees, a half-elastic waist and a teflon-treated finish that shrugs off spills."},
  {name:"Structured School Blazer", cat:"Schoolwear", price:79, img:"", shape:"blazer", tag:"New",
   desc:"A smart, hard-wearing blazer with a soft-touch lining, badge-ready chest pocket and stain-resistant finish. The cornerstone of the uniform."},
  {name:"V-Neck School Jumper", cat:"Schoolwear", price:32, img:"", shape:"sweater",
   desc:"A soft, pill-resistant knit jumper with ribbed cuffs and hem. Warm, breathable and built for everyday classroom wear."},
  {name:"School Cardigan", cat:"Schoolwear", price:34, img:"", shape:"sweater",
   desc:"An easy-care button cardigan in a durable cotton-blend knit. A cosy layer for cooler mornings and draughty classrooms."},
 
  // ---- PE & SPORT ----
  {name:"PE Polo Shirt", cat:"PE & Sport", price:19, img:"", shape:"polo",
   desc:"A breathable moisture-wicking polo with a reinforced collar. Quick-drying and built for the field, the court and everything between."},
  {name:"Sports Shorts", cat:"PE & Sport", price:17, img:"", shape:"shorts",
   desc:"Lightweight twin-layer PE shorts with an elastic waist and inner brief. Hard-wearing and quick to dry."},
  {name:"Track Jacket", cat:"PE & Sport", price:44, img:"", shape:"jacket",
   desc:"A zip-through training jacket in a brushed-back fabric with a stand collar and zip pockets. Warm-ups to cool-downs."},
 
  // ---- ACCESSORIES ----
  {name:"School Tie (Pack of 2)", cat:"Accessories", price:14, img:"", shape:"tie",
   desc:"A pair of pre-knotted elastic ties in a stain-resistant weave. Easy for little hands, smart all day."},
  {name:"Reinforced School Backpack", cat:"Accessories", price:42, img:"", shape:"backpack",
   desc:"A roomy water-resistant backpack with a padded laptop sleeve, reinforced base and ergonomic straps. Built for the long haul."},
 
  // ---- EVERYDAY / CASUAL ----
  {name:"Salt Wash Tee", cat:"Casual", price:42, img:"", shape:"tee",
   desc:"Heavyweight 240gsm cotton tee with a relaxed fit and a soft garment-washed finish. The off-duty staple."},
  {name:"Headland Knit", cat:"Knitwear", price:96, img:"", shape:"sweater",
   desc:"A lambswool crewneck with ribbed cuffs and a lived-in handle. Warm without the bulk."},
 
  // ---- DENIM (where it all started) ----
  {name:"The Coastline Denim Jacket", cat:"Denim", price:189, img:"", shape:"jacket",
   desc:"A heavyweight 14oz indigo denim jacket with a boxy fit and antique brass hardware. Designed to fade beautifully over time."},
  {name:"Tidal Straight Jean", cat:"Denim", price:128, img:"", shape:"jeans",
   desc:"Our signature straight-leg jean in rigid organic cotton denim. A clean, timeless silhouette."},
];
 
/* fixed category order so schoolwear leads */
const CATS = ["All","Schoolwear","PE & Sport","Knitwear","Denim","Casual","Accessories"];
 
const SHAPES = {
  shirt:'<path d="M70 40 L88 30 L100 42 L112 30 L130 40 L150 60 L135 78 L135 210 L65 210 L65 78 L50 60 Z"/><path d="M88 30 L100 60 L112 30"/><path d="M100 60 L100 205"/>',
  skirt:'<path d="M70 50 L130 50 L162 210 L38 210 Z"/><path d="M70 50 L130 50 L128 68 L72 68 Z"/>',
  trousers:'<path d="M65 30 L135 30 L142 215 L112 215 L100 100 L88 215 L58 215 Z"/><path d="M65 30 L135 30 L130 58 L70 58 Z"/>',
  blazer:'<path d="M60 45 L85 32 L100 50 L115 32 L140 45 L150 95 L130 100 L130 210 L70 210 L70 100 L50 95 Z"/><path d="M85 32 L100 110 M115 32 L100 110"/><path d="M78 130 L72 158"/>',
  sweater:'<path d="M50 50 L75 32 L125 32 L150 50 L162 95 L140 105 L140 210 L60 210 L60 105 L38 95 Z"/><path d="M75 32 Q100 55 125 32"/>',
  polo:'<path d="M62 45 L86 32 L100 44 L114 32 L138 45 L150 72 L132 84 L132 205 L68 205 L68 84 L50 72 Z"/><path d="M86 32 L100 60 L114 32"/><path d="M100 44 L100 92"/>',
  shorts:'<path d="M60 60 L140 60 L143 150 L112 150 L100 102 L88 150 L57 150 Z"/><path d="M60 60 L140 60 L137 82 L63 82 Z"/>',
  tie:'<path d="M88 30 L112 30 L108 56 L120 150 L100 186 L80 150 L92 56 Z"/><path d="M88 30 L112 30 L108 56 L92 56 Z"/>',
  backpack:'<path d="M65 70 Q65 50 100 50 Q135 50 135 70 L140 205 L60 205 Z"/><path d="M85 70 L85 132 L115 132 L115 70"/><path d="M76 50 Q70 35 86 36 M124 50 Q130 35 114 36"/>',
  jacket:'<path d="M55 40 L70 25 L130 25 L145 40 L150 90 L125 95 L125 215 L75 215 L75 95 L50 90 Z"/><path d="M100 25 L100 95"/>',
  jeans:'<path d="M65 30 L135 30 L142 215 L112 215 L100 100 L88 215 L58 215 Z"/><path d="M65 30 L135 30 L130 58 L70 58 Z"/>',
  tee:'<path d="M55 45 L80 30 L120 30 L145 45 L160 75 L138 90 L138 205 L62 205 L62 90 L40 75 Z"/><path d="M80 30 Q100 50 120 30"/>',
};
 
const grid=document.getElementById('grid');
let active="Schoolwear";   // open focused on schoolwear
 
function media(p){
  const ph=`<div class="ph"><svg viewBox="0 0 200 240" fill="none" stroke="#161513" stroke-width="2">${SHAPES[p.shape]||SHAPES.tee}</svg></div>`;
  const im=p.img?`<img src="${p.img}" alt="${p.name}" onerror="this.remove()">`:'';
  return ph+im;
}
 
const fc=document.getElementById('filters');
CATS.forEach(c=>{
  const b=document.createElement('button');
  b.className='chip'+(c===active?' active':'');
  b.textContent=c;
  b.onclick=()=>{active=c;[...fc.children].forEach(x=>x.classList.remove('active'));b.classList.add('active');render();};
  fc.appendChild(b);
});
 
function render(){
  const list=active==='All'?PRODUCTS:PRODUCTS.filter(p=>p.cat===active);
  grid.innerHTML='';
  list.forEach((p,i)=>{
    const idx=PRODUCTS.indexOf(p);
    const card=document.createElement('div');
    card.className='card';
    card.style.animationDelay=(i*0.04)+'s';
    card.innerHTML=`
      <div class="media">${p.tag?`<span class="tag">${p.tag}</span>`:''}${media(p)}<div class="view">View details</div></div>
      <div class="card-info">
        <div><h3>${p.name}</h3><div class="cat">${p.cat}</div></div>
        <div class="price">$${p.price}</div>
      </div>`;
    card.onclick=()=>openModal(idx);
    grid.appendChild(card);
  });
}
render();
 
const overlay=document.getElementById('overlay');
const modal=document.getElementById('modal');
function openModal(i){
  const p=PRODUCTS[i];
  const sizes=p.cat==='Accessories'?['One size']:
              p.cat==='Schoolwear'?['4','6','8','10','12','14','16']:
              ['XS','S','M','L','XL'];
  modal.innerHTML=`
    <button class="m-close" onclick="closeModal()">×</button>
    <div class="m-media">${media(p)}</div>
    <div class="m-info">
      <div class="m-cat">${p.cat}</div>
      <h2>${p.name}</h2>
      <div class="m-price">$${p.price}</div>
      <p class="m-desc">${p.desc}</p>
      <div class="m-sizes-label">Available sizes</div>
      <div class="sizes">${sizes.map(s=>`<span>${s}</span>`).join('')}</div>
    </div>`;
  overlay.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){overlay.classList.remove('open');document.body.style.overflow='';}
overlay.onclick=e=>{if(e.target===overlay)closeModal();};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
