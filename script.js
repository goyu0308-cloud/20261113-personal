
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
if(toggle) toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.querySelector('#guest-form');
if(form){
 const list=document.querySelector('#message-list');
 const saved=JSON.parse(localStorage.getItem('writerGuestbook')||'[]');
 const render=(items)=>{list.innerHTML='';items.forEach(m=>{const el=document.createElement('article');el.className='message';const top=document.createElement('div');top.className='message-top';const strong=document.createElement('strong');strong.textContent=m.name;const time=document.createElement('time');time.textContent=m.date;top.append(strong,time);const p=document.createElement('p');p.textContent=m.message;el.append(top,p);list.prepend(el)})};
 render(saved);
 form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const item={name:data.get('name').trim(),message:data.get('message').trim(),date:new Date().toLocaleDateString('ko-KR')};if(!item.name||!item.message)return;saved.push(item);localStorage.setItem('writerGuestbook',JSON.stringify(saved));render(saved);form.reset();alert('방명록이 이 브라우저에 저장되었습니다.')});
}
