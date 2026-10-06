const links=[...document.querySelectorAll('.sidebar nav a')];
const pages=[...document.querySelectorAll('.page')];
function activate(){
  const id=location.hash||'#dashboard';
  pages.forEach(p=>p.style.display=('#'+p.id===id?'block':'none'));
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===id));
}
window.addEventListener('hashchange',activate); activate();
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2400)}
function filterTable(input){const table=input.closest('.panel').querySelector('tbody');const q=input.value.toLowerCase();[...table.rows].forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q)?'':'none')}
