// ALLGOFIX contact settings
// Replace these two placeholders with your real business numbers before publishing.
const ALLGOFIX_PHONE = "+91 8758000713";
const ALLGOFIX_WHATSAPP = "918758000713"; // country code + number, no + or spaces

function setupContactLinks(){
  document.querySelectorAll('[data-phone-link]').forEach(link=>{
    if(ALLGOFIX_PHONE !== "+91 8758000713") link.href = `tel:${ALLGOFIX_PHONE}`;
    else { link.href = '#contact'; link.title = 'Add your business phone number in script.js'; }
  });
  document.querySelectorAll('[data-whatsapp-link]').forEach(link=>{
    if(ALLGOFIX_WHATSAPP !== "918758000713") link.href = `https://wa.me/${ALLGOFIX_WHATSAPP}`;
    else { link.href = '#book'; link.title = 'Add your WhatsApp number in script.js'; }
  });
}

setupContactLinks();

document.querySelectorAll('[data-service]').forEach(a=>a.addEventListener('click',()=>{
  const s=a.dataset.service;
  const select=document.querySelector('select[name="service"]');
  if(select){ [...select.options].forEach(o=>{ if(o.text===s) o.selected=true; }); }
}));

const menuBtn=document.getElementById('menuBtn');
const mobileMenu=document.getElementById('mobileMenu');
if(menuBtn && mobileMenu){
  menuBtn.addEventListener('click',()=>{
    const open=mobileMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',open?'true':'false');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
  }));
}

document.getElementById('bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const note=document.getElementById('formNote');
  if(ALLGOFIX_WHATSAPP === "918758000713"){
    note.textContent='WhatsApp is not connected yet. Add your real WhatsApp number in script.js, then upload the updated files.';
    return;
  }
  const f=new FormData(e.target);
  const text=`ALLGOFIX Service Request\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nService: ${f.get('service')}\nArea: ${f.get('area')||'Not specified'}\nDate: ${f.get('date')||'Flexible'}\nRequirements: ${f.get('message')||'None'}`;
  note.textContent='Opening WhatsApp with your service request…';
  window.open(`https://wa.me/${ALLGOFIX_WHATSAPP}?text=${encodeURIComponent(text)}`,'_blank','noopener');
});
