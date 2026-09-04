const dishes=[
{id:'burger',name:'Cheese Burger',category:'Burgers',price:179,veg:false,image:'https://images.pexels.com/photos/8162589/pexels-photo-8162589.jpeg?auto=compress&cs=tinysrgb&w=1200',model:'https://raw.githubusercontent.com/tommykho/tommykho.github.io/master/assets/models/Double_Cheese_Burger.glb',description:'Juicy grilled patty, melted cheese, fresh lettuce, onions and signature sauce.',badge:'BESTSELLER'},
{id:'fries',name:'Crispy Fries',category:'Sides',price:99,veg:true,image:'https://images.pexels.com/photos/29150162/pexels-photo-29150162.jpeg?auto=compress&cs=tinysrgb&w=1200',model:'https://raw.githubusercontent.com/TechoChat/restaurant-3d/f3833528c2b016fbc108aaee09d72f1a322dbb28/public/models/french_fries.glb',description:'Golden crispy fries served hot with tangy ketchup dip.'}
];
const qs=new URLSearchParams(location.search);
let state={category:'All',search:'',selected:null,cart:{},table:qs.get('table')||'07',qr:false,ar:false,toast:''};
const root=document.getElementById('root');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function cartCount(){return Object.values(state.cart).reduce((a,b)=>a+b,0)}
function add(id){state.cart[id]=(state.cart[id]||0)+1;const d=dishes.find(x=>x.id===id);state.toast=`${d.name} added to order`;render();setTimeout(()=>{state.toast='';render()},1800)}
function render(){
const filtered=dishes.filter(d=>(state.category==='All'||d.category===state.category)&&d.name.toLowerCase().includes(state.search.toLowerCase()));
root.innerHTML=`<div class="app"><header class="top"><button class="icon">☰</button><div class="brand"><b>G<span>A</span>BA</b><small>GRAB A BITE</small></div><button class="cart">🛒${cartCount()?`<em>${cartCount()}</em>`:''}</button></header>
<main><section class="hero"><div><p class="eyebrow">GOOD FOOD • GOOD MOOD</p><h1>See it. Spin it.<br><span>Order it.</span></h1><p class="copy">Explore GABA dishes in 3D and place your favourite on your table using AR.</p></div><div class="chip"><strong>◇</strong><div><b>3D MENU</b><small>Scan • Explore • Order</small></div></div></section>
<div class="search"><span>⌕</span><input id="search" placeholder="Search dishes..." value="${esc(state.search)}"></div><div class="cats">${['All','Burgers','Sides','Drinks'].map(c=>`<button class="${state.category===c?'active':''}" data-cat="${c}">${c}</button>`).join('')}</div>
<section class="grid">${filtered.map((d,i)=>`<article class="card"><div class="photo"><img src="${d.image}" alt="${esc(d.name)}" loading="lazy">${i===0&&d.badge?`<span class="badge">${d.badge}</span>`:''}<span class="veg ${d.veg?'green':'red'}"></span></div><div class="body"><div class="row"><h3>${esc(d.name)}</h3><strong>₹${d.price}</strong></div><p>${esc(d.description)}</p><div class="actions"><button class="outline" data-view="${d.id}">◇ View in 3D</button><button class="primary" data-add="${d.id}">Add +</button></div></div></article>`).join('')}</section>
<section class="table"><div><p class="eyebrow">TABLE ORDER</p><h2>Ordering from table <span>#${esc(state.table)}</span></h2><p>Your QR can carry the table number automatically.</p></div><div class="tablebox"><label>Table<input id="table" value="${esc(state.table)}" maxlength="2"></label><button class="darkbtn" id="showqr">Show QR</button></div></section></main>
<footer><div><b>NXT AI LABS</b><span>Ideas • Websites • Real Solutions</span></div><div>GABA 3D Menu MVP</div></footer>${state.toast?`<div class="toast">${esc(state.toast)}</div>`:''}</div>`;
root.querySelector('#search').oninput=e=>{state.search=e.target.value;render()};
root.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{state.category=b.dataset.cat;render()});
root.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>openViewer(b.dataset.view));
root.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>add(b.dataset.add));
root.querySelector('#table').oninput=e=>state.table=e.target.value.replace(/\D/g,'').slice(0,2)||'07';
root.querySelector('#showqr').onclick=()=>{state.qr=true;render();openQr()};
root.querySelector('.cart').onclick=()=>{state.toast=cartCount()?`${cartCount()} item(s) in your order`:'Your order is empty';render();setTimeout(()=>{state.toast='';render()},1800)};
}
function openViewer(id){
const d=dishes.find(x=>x.id===id);state.selected=d;const modal=document.createElement('div');modal.className='backdrop';modal.innerHTML=`<div class="viewer"><div class="vhead"><div><p class="eyebrow">INTERACTIVE 3D</p><h2>${esc(d.name)}</h2></div><button class="close">✕</button></div><div class="stage"><model-viewer src="${d.model}" camera-controls auto-rotate shadow-intensity="1" exposure="1.05" ar ar-modes="webxr scene-viewer quick-look" alt="${esc(d.name)}"></model-viewer><div class="tip">⟲ Drag to rotate • Pinch / wheel to zoom</div></div><div class="vinfo"><div><span class="price">₹${d.price}</span><p>${esc(d.description)}</p></div><div class="vactions"><button class="ar">◫ View on My Table (AR)</button><button class="primary big">🛒 Add to Order</button></div></div></div>`;
document.body.appendChild(modal);modal.querySelector('.close').onclick=()=>modal.remove();modal.querySelector('.primary').onclick=()=>{add(d.id);modal.remove()};modal.querySelector('.ar').onclick=()=>{const mv=modal.querySelector('model-viewer');if(mv.canActivateAR)mv.activateAR();else openAR(d)};
}
function openAR(d){
const back=document.createElement('div');back.className='backdrop arback';back.innerHTML=`<div class="armodal"><video autoplay playsinline muted></video><div class="arui"><div class="artop"><button class="close">✕</button><div><b>View on Your Table</b><small>AR DEMO</small></div><span>⌁</span></div><div class="hint">Move your phone slowly to find a flat surface</div><div class="object">${d.id==='burger'?'🍔':'🍟'}</div><div class="arbottom"><span>↺<small>Reset</small></span><button>●</button><span>◫<small>Snapshot</small></span></div></div></div>`;
document.body.appendChild(back);const video=back.querySelector('video');navigator.mediaDevices?.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false}).then(s=>video.srcObject=s).catch(()=>{});back.querySelector('.close').onclick=()=>{const s=video.srcObject;if(s)s.getTracks().forEach(t=>t.stop());back.remove()};
}
function openQr(){
const url=`${location.origin}${location.pathname}?table=${encodeURIComponent(state.table)}`;const back=document.createElement('div');back.className='backdrop';back.innerHTML=`<div class="qr"><button class="close">✕</button><p class="eyebrow">TABLE QR</p><h2>Table #${esc(state.table)}</h2><p>Print this QR on the table stand. Scanning opens the GABA 3D menu for this table.</p><div class="qrbox"><div id="qrimg"></div></div><code>${esc(url)}</code><button class="primary big print">Print QR</button></div>`;document.body.appendChild(back);new QRCode(back.querySelector('#qrimg'),{text:url,width:210,height:210,colorDark:'#090909',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.H});back.querySelector('.close').onclick=()=>back.remove();back.querySelector('.print').onclick=()=>window.print();
}
render();
