const content = window.siteContent;
const grid = document.querySelector('#service-grid');
content.services.forEach(service => {
  const card = document.createElement('article'); card.className = 'service-card reveal';
  const media = document.createElement('div'); media.className = `service-media ${service.theme}`;
  if(service.image) { const img = document.createElement('img'); img.src=service.image; img.alt=service.title; img.loading='lazy'; media.append(img); }
  else { const symbol=document.createElement('span'); symbol.className='service-symbol'; symbol.textContent=service.symbol; const label=document.createElement('small');label.textContent='ESPACIO PARA FOTOGRAFÍA';media.append(symbol,label); }
  const copy=document.createElement('div');copy.className='service-copy';
  const tag=document.createElement('p');tag.className='eyebrow';tag.textContent=service.category;
  const title=document.createElement('h3');title.textContent=service.title;
  const description=document.createElement('p');description.textContent=service.description;
  copy.append(tag,title,description);card.append(media,copy);grid.append(card);
});
const waUrl = text => `https://wa.me/${content.whatsapp}?text=${encodeURIComponent(text)}`;
document.querySelectorAll('[data-wa]').forEach(a=>a.href=waUrl(content.defaultMessage));
document.querySelectorAll('[data-pack]').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#idea').value=`Me interesa el plan: ${a.dataset.pack}. `;}));
const menu=document.querySelector('.menu-toggle');const mobileNav=document.querySelector('#mobile-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');mobileNav.hidden=!open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');mobileNav.hidden=true;}));
document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();const f=new FormData(event.currentTarget);const message=`¡Hola, equipo de Mundo de Fantasía! Soy ${f.get('name')}. Me gustaría organizar una fiesta en Valencia.\n${f.get('date')?'Fecha: '+f.get('date')+'\n':''}${f.get('age')?'Edades: '+f.get('age')+'\n':''}${f.get('idea')||''}`;const link=document.createElement('a');link.href=waUrl(message);link.target='_blank';link.rel='noopener noreferrer';link.click();const status=document.querySelector('#form-status');status.replaceChildren();status.append('Tu mensaje está preparado. Si WhatsApp no se ha abierto, ');const retry=document.createElement('a');retry.href=waUrl(message);retry.target='_blank';retry.rel='noopener noreferrer';retry.textContent='ábrelo aquí';status.append(retry);});
document.querySelector('#year').textContent=new Date().getFullYear();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reduced.matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('animate');observer.observe(el);});}
