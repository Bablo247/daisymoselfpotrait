// Set year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Mark active nav link
const path = window.location.pathname.replace(/\/index\.html$/, '/');
document.querySelectorAll('.nav-link').forEach(a => {
  if (a.getAttribute('href') === path || (path === '/' && a.getAttribute('href') === '/index.html')) {
    a.classList.add('active');
    a.setAttribute('aria-current','page');
  }
});

// Simple fade-up on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

// Lightbox using Bootstrap modal
const modalEl = document.getElementById('lightboxModal');
if (modalEl) {
  const modalImg = modalEl.querySelector('img');
  document.querySelectorAll('[data-lightbox]').forEach(img=>{
    img.addEventListener('click', ()=>{
      modalImg.src = img.src;
      modalImg.alt = img.alt || 'Gallery image';
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    });
  });
}

// Contact form (demo): basic client-side validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const msg = contactForm.querySelector('#message').value.trim();
    if(!name || !email || !msg){
      alert('Please fill in all fields.');
      return;
    }
    alert('Thanks! Your message has been received. (Demo form)');
    contactForm.reset();
  });
}