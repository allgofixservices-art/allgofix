// ALLGOFIX contact settings
// Replace these two placeholders with your real business numbers before publishing.
const ALLGOFIX_PHONE = "+91 8758000713";
const ALLGOFIX_WHATSAPP = "918758000713"; // country code + number, no + or spaces

function setupContactLinks(){
  document.querySelectorAll('[data-phone-link]').forEach(link=>{
    link.href = `tel:${ALLGOFIX_PHONE.replace(/\s+/g,'')}`;
  });
  document.querySelectorAll('[data-whatsapp-link]').forEach(link=>{
    link.href = `https://wa.me/${ALLGOFIX_WHATSAPP}`;
  });
}

setupContactLinks();


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

