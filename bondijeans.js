/* ============================================================
   Bondi Escolar — bilingual (ES / EN) promotional site
   To use real photos: set a product's img to a URL, e.g.
     img:"https://yoursite.com/photos/camisa.jpg"
   Leave img:"" to keep the built-in line-art placeholder.
   ============================================================ */

/* ---------- UI STRING TRANSLATIONS ---------- */
const I18N = {
  es:{
    brand_sub:"Escolar",
    nav_home:"Inicio", nav_collection:"Colección", nav_about:"Nosotros",
    nav_sizes:"Guía de Tallas", nav_contact:"Contacto",
    hero_eyebrow:"De la escuela a la universidad",
    hero_tag:"Te acompaña en cada etapa",
    hero_cta:"Descubre la colección",
    feat1_t:"Algodón Premium", feat1_d:"Suave, resistente y cómodo",
    feat2_t:"Calidad que dura", feat2_d:"Diseñados para el uso diario y lavado frecuente",
    feat3_t:"Corte perfecto", feat3_d:"Comodidad y estilo en cada etapa",
    feat4_t:"Responsables", feat4_d:"Comprometidos con un futuro sostenible",
    coll_eyebrow:"Uniforme y más", coll_title:"La colección",
    coll_lead:"Uniforme escolar resistente y prendas esenciales para el día a día. Una sola marca, hecha para durar.",
    about_eyebrow:"Nosotros",
    about_title:"El uniforme en el que las familias confían.",
    about_p1:"Bondi nació haciendo denim resistente — y esa misma obsesión por la durabilidad va hoy en nuestro uniforme escolar. Rodillas reforzadas, costuras dobles y telas de fácil cuidado que aguantan el patio, la lavadora y los estirones.",
    about_p2:"Más allá del uniforme, hacemos las prendas básicas para completar el guardarropa. Una sola marca, hecha para durar.",
    about_cta:"Ver la colección",
    sizes_eyebrow:"Guía de tallas", sizes_title:"Encuentra la talla perfecta",
    sizes_col_size:"Talla", sizes_col_age:"Edad", sizes_col_height:"Altura (cm)", sizes_col_chest:"Pecho (cm)",
    sizes_note:"¿Entre dos tallas? Recomendamos elegir la mayor para dejar espacio para crecer.",
    foot_tagline:"Uniforme escolar resistente y prendas esenciales para el día a día. Hecho para durar.",
    foot_shop:"Colección", foot_help:"Ayuda", foot_follow:"Síguenos",
    foot_shipping:"Envíos", foot_returns:"Devoluciones",
    foot_copy:"© 2026 Bondi Escolar", foot_legal:"Privacidad · Términos",
    cat_Schoolwear:"Uniforme", cat_PE:"Deporte", cat_Knitwear:"Punto", cat_Accessories:"Accesorios",
    trust1:"Envíos a todo el país", trust2:"Cambios y devoluciones fáciles", trust3:"Pagos 100% seguros",
    m_sizes:"Tallas disponibles", view_details:"Ver detalles", cat_all:"Todo", size_one:"Talla única"
  },
  en:{
    brand_sub:"School",
    nav_home:"Home", nav_collection:"Collection", nav_about:"About",
    nav_sizes:"Size Guide", nav_contact:"Contact",
    hero_eyebrow:"From school to university",
    hero_tag:"With you at every stage",
    hero_cta:"Explore the collection",
    feat1_t:"Premium Cotton", feat1_d:"Soft, durable and comfortable",
    feat2_t:"Built to last", feat2_d:"Designed for daily wear and frequent washing",
    feat3_t:"Perfect fit", feat3_d:"Comfort and style at every stage",
    feat4_t:"Responsible", feat4_d:"Committed to a sustainable future",
    coll_eyebrow:"Uniform & beyond", coll_title:"The collection",
    coll_lead:"Hard-wearing schoolwear and everyday essentials. One label, built to last.",
    about_eyebrow:"About us",
    about_title:"The schoolwear families rely on.",
    about_p1:"Bondi began making hard-wearing denim — and that same obsession with durability now goes into our schoolwear. Reinforced knees, double-stitched seams and easy-care fabric that holds up to playgrounds, washing machines and growth spurts.",
    about_p2:"Beyond the uniform, we make the casual staples to round out the wardrobe. One label, built to last.",
    about_cta:"Browse the collection",
    sizes_eyebrow:"Size guide", sizes_title:"Find the perfect fit",
    sizes_col_size:"Size", sizes_col_age:"Age", sizes_col_height:"Height (cm)", sizes_col_chest:"Chest (cm)",
    sizes_note:"Between two sizes? We recommend sizing up to leave room to grow.",
    foot_tagline:"Hard-wearing schoolwear and everyday essentials. Built to last.",
    foot_shop:"Collection", foot_help:"Help", foot_follow:"Follow",
    foot_shipping:"Shipping", foot_returns:"Returns",
    foot_copy:"© 2026 Bondi School", foot_legal:"Privacy · Terms",
    cat_Schoolwear:"Schoolwear", cat_PE:"Sport", cat_Knitwear:"Knitwear", cat_Accessories:"Accessories",
    trust1:"Nationwide shipping", trust2:"Easy returns & exchanges", trust3:"100% secure payment",
    m_sizes:"Available sizes", view_details:"View details", cat_all:"All", size_one:"One size"
  }
};

/* ---------- PRODUCTS (bilingual) ---------- */
const PRODUCTS = [
  {key:"Schoolwear", shape:"shirt", tag:"top", img:"",
   name:{es:"Camisa Oxford Clásica", en:"Classic Oxford School Shirt"},
   desc:{es:"Camisa oxford de planchado fácil con cuello reforzado y costuras dobles. Mantiene su forma lavado tras lavado. Disponible en blanco y azul cielo.",
         en:"A crisp easy-iron oxford shirt with a reinforced collar and double-stitched seams. Holds its shape wash after wash. Available in white and sky blue."}},
  {key:"Schoolwear", shape:"skirt", img:"",
   name:{es:"Falda Escolar Plisada", en:"Pleated School Skirt"},
   desc:{es:"Falda de tablas en una mezcla poli-lana resistente a las arrugas, con cintura interior ajustable que crece con tu hijo.",
         en:"A knife-pleated skirt in a tough, crease-resistant poly-wool blend with an adjustable inner waistband to grow with your child."}},
  {key:"Schoolwear", shape:"trousers", img:"",
   name:{es:"Pantalón Escolar Slim", en:"Slim School Trousers"},
   desc:{es:"Pantalón resistente con rodillas reforzadas, media cintura elástica y acabado que repele los líquidos.",
         en:"Sturdy flat-front trousers with reinforced knees, a half-elastic waist and a teflon-treated finish that shrugs off spills."}},
  {key:"Schoolwear", shape:"blazer", tag:"new", img:"",
   name:{es:"Blazer Escolar Estructurado", en:"Structured School Blazer"},
   desc:{es:"Blazer elegante y resistente con forro suave, bolsillo para insignia y acabado antimanchas. La pieza clave del uniforme.",
         en:"A smart, hard-wearing blazer with a soft-touch lining, badge-ready chest pocket and stain-resistant finish. The cornerstone of the uniform."}},
  {key:"Schoolwear", shape:"sweater", img:"",
   name:{es:"Jersey Escolar de Pico", en:"V-Neck School Jumper"},
   desc:{es:"Jersey suave resistente al pilling con puños y bajo acanalados. Cálido, transpirable y hecho para el día a día.",
         en:"A soft, pill-resistant knit jumper with ribbed cuffs and hem. Warm, breathable and built for everyday classroom wear."}},
  {key:"Schoolwear", shape:"sweater", img:"",
   name:{es:"Cárdigan Escolar", en:"School Cardigan"},
   desc:{es:"Cárdigan de botones de fácil cuidado en punto de algodón duradero. Una capa cálida para las mañanas frías.",
         en:"An easy-care button cardigan in a durable cotton-blend knit. A cosy layer for cooler mornings and draughty classrooms."}},

  {key:"PE", shape:"polo", img:"",
   name:{es:"Polo de Deporte", en:"PE Polo Shirt"},
   desc:{es:"Polo transpirable que absorbe la humedad, con cuello reforzado. De secado rápido y hecho para el campo y la cancha.",
         en:"A breathable moisture-wicking polo with a reinforced collar. Quick-drying and built for the field and the court."}},
  {key:"PE", shape:"shorts", img:"",
   name:{es:"Pantalón Corto Deportivo", en:"Sports Shorts"},
   desc:{es:"Pantalón corto de deporte ligero de doble capa con cintura elástica y slip interior. Resistente y de secado rápido.",
         en:"Lightweight twin-layer PE shorts with an elastic waist and inner brief. Hard-wearing and quick to dry."}},
  {key:"PE", shape:"jacket", img:"",
   name:{es:"Chaqueta de Chándal", en:"Track Jacket"},
   desc:{es:"Chaqueta de entrenamiento con cremallera en tejido afelpado, cuello alto y bolsillos con cierre.",
         en:"A zip-through training jacket in a brushed-back fabric with a stand collar and zip pockets."}},

  {key:"Accessories", shape:"tie", img:"",
   name:{es:"Corbata Escolar (Pack de 2)", en:"School Tie (Pack of 2)"},
   desc:{es:"Par de corbatas elásticas pre-anudadas en un tejido antimanchas. Fáciles para manos pequeñas, elegantes todo el día.",
         en:"A pair of pre-knotted elastic ties in a stain-resistant weave. Easy for little hands, smart all day."}},
  {key:"Accessories", shape:"backpack", img:"",
   name:{es:"Mochila Escolar Reforzada", en:"Reinforced School Backpack"},
   desc:{es:"Mochila amplia resistente al agua con funda acolchada para portátil, base reforzada y tirantes ergonómicos.",
         en:"A roomy water-resistant backpack with a padded laptop sleeve, reinforced base and ergonomic straps."}},

  {key:"Knitwear", shape:"sweater", img:"",
   name:{es:"Jersey Headland", en:"Headland Knit"},
   desc:{es:"Jersey de cuello redondo en lana de cordero con puños acanalados y un tacto vivido. Cálido sin volumen.",
         en:"A lambswool crewneck with ribbed cuffs and a lived-in handle. Warm without the bulk."}},
  {key:"Knitwear", shape:"sweater", img:"",
   name:{es:"Camiseta Salt Wash", en:"Salt Wash Tee"},
   desc:{es:"Camiseta de algodón pesado de 240gsm con corte relajado y acabado lavado suave. El básico de fin de semana.",
         en:"Heavyweight 240gsm cotton tee with a relaxed fit and a soft garment-washed finish. The off-duty staple."}},
];

/* fixed category order — schoolwear leads */
const CATS = ["all","Schoolwear","PE","Knitwear","Accessories"];

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
};

const SIZE_CHART = [
  {size:"4",  age:"3–4",   h:"104", c:"56"},
  {size:"6",  age:"5–6",   h:"116", c:"60"},
  {size:"8",  age:"7–8",   h:"128", c:"64"},
  {size:"10", age:"9–10",  h:"140", c:"69"},
  {size:"12", age:"11–12", h:"152", c:"74"},
  {size:"14", age:"13–14", h:"164", c:"80"},
  {size:"16", age:"15–16", h:"176", c:"86"},
];

/* ---------- STATE ---------- */
let lang = "es";
try{ const s = localStorage.getItem("bondi_lang"); if(s==="en"||s==="es") lang = s; }catch(e){}
let active = "Schoolwear";

const t = k => (I18N[lang][k] ?? k);

/* ---------- ELEMENTS ---------- */
const grid    = document.getElementById('grid');
const fc      = document.getElementById('filters');
const overlay = document.getElementById('overlay');
const modal   = document.getElementById('modal');
const sizeBody= document.getElementById('sizeBody');

/* ---------- MEDIA ---------- */
function media(p){
  const ph=`<div class="ph"><svg viewBox="0 0 200 240" fill="none" stroke="currentColor" stroke-width="2">${SHAPES[p.shape]||SHAPES.shirt}</svg></div>`;
  const nm=p.name[lang];
  const im=p.img?`<img src="${p.img}" alt="${nm}" onerror="this.remove()">`:'';
  return ph+im;
}

/* ---------- FILTERS ---------- */
function renderFilters(){
  fc.innerHTML='';
  CATS.forEach(c=>{
    const label = c==='all' ? t('cat_all') : t('cat_'+c);
    const b=document.createElement('button');
    b.className='chip'+(c===active?' active':'');
    b.textContent=label;
    b.onclick=()=>{active=c;renderFilters();renderGrid();};
    fc.appendChild(b);
  });
}

/* ---------- GRID ---------- */
function renderGrid(){
  const list=active==='all'?PRODUCTS:PRODUCTS.filter(p=>p.key===active);
  grid.innerHTML='';
  list.forEach((p,i)=>{
    const idx=PRODUCTS.indexOf(p);
    const tag = p.tag==='top' ? (lang==='es'?'Más vendido':'Bestseller')
              : p.tag==='new' ? (lang==='es'?'Nuevo':'New') : '';
    const card=document.createElement('div');
    card.className='card';
    card.style.animationDelay=(i*0.04)+'s';
    card.innerHTML=`
      <div class="media">${tag?`<span class="tag">${tag}</span>`:''}${media(p)}<div class="view">${t('view_details')}</div></div>
      <div class="card-info">
        <h3>${p.name[lang]}</h3>
        <div class="cat">${t('cat_'+p.key)}</div>
      </div>`;
    card.onclick=()=>openModal(idx);
    grid.appendChild(card);
  });
}

/* ---------- SIZE TABLE ---------- */
function renderSizes(){
  sizeBody.innerHTML = SIZE_CHART.map(r=>
    `<tr><td><strong>${r.size}</strong></td><td>${r.age}</td><td>${r.h}</td><td>${r.c}</td></tr>`).join('');
}

/* ---------- MODAL ---------- */
function openModal(i){
  const p=PRODUCTS[i];
  const sizes = p.key==='Accessories' ? [t('size_one')]
              : p.key==='Schoolwear'  ? ['4','6','8','10','12','14','16']
              : ['XS','S','M','L','XL'];
  modal.innerHTML=`
    <button class="m-close" onclick="closeModal()" aria-label="Close">×</button>
    <div class="m-media">${media(p)}</div>
    <div class="m-info">
      <div class="m-cat">${t('cat_'+p.key)}</div>
      <h2>${p.name[lang]}</h2>
      <p class="m-desc">${p.desc[lang]}</p>
      <div class="m-sizes-label">${t('m_sizes')}</div>
      <div class="sizes">${sizes.map(s=>`<span>${s}</span>`).join('')}</div>
    </div>`;
  overlay.classList.add('open');document.body.style.overflow='hidden';
}
function closeModal(){overlay.classList.remove('open');document.body.style.overflow='';}
overlay.onclick=e=>{if(e.target===overlay)closeModal();};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ---------- LANGUAGE ---------- */
function applyStatic(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n');
    if(I18N[lang][k]!==undefined) el.textContent=I18N[lang][k];
  });
}
function setLang(l){
  lang=l;
  try{ localStorage.setItem("bondi_lang",l); }catch(e){}
  document.documentElement.lang=l;
  document.querySelectorAll('.lang-opt').forEach(s=>s.classList.toggle('on',s.dataset.lang===l));
  applyStatic();
  renderFilters();
  renderGrid();
  renderSizes();
}
document.getElementById('langToggle').addEventListener('click',()=>{
  setLang(lang==='es'?'en':'es');
});

/* ---------- INIT ---------- */
setLang(lang);
