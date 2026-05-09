  // ========== FEATURED IMAGE MODAL ==========
const featuredImages = document.querySelectorAll('.featured-image');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// OPEN MODAL
featuredImages.forEach(img => {

  img.addEventListener('mouseenter', () => {

    modalImage.src = img.src;
    imageModal.classList.add('active');

  });

});

// CLOSE BUTTON
modalClose.addEventListener('click', () => {

  imageModal.classList.remove('active');

});

// CLOSE WHEN CLICKING BACKGROUND
imageModal.addEventListener('click', (e) => {

  if(e.target === imageModal){

    imageModal.classList.remove('active');

  }

});

// ESC KEY CLOSE
document.addEventListener('keydown', (e) => {

  if(e.key === 'Escape'){

    imageModal.classList.remove('active');

  }

});

  
// =========== CURSOR ===========
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('a, button, .skill-card, .project-card, .contact-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorRing.style.transform = 'translate(-50%,-50%) scale(1.5)';
      cursorRing.style.borderColor = 'rgba(0,212,255,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursorRing.style.transform = 'translate(-50%,-50%) scale(1)';
      cursorRing.style.borderColor = 'rgba(0,212,255,0.5)';
    });
  });
}

// =========== NAV SCROLL ===========
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// =========== MOBILE MENU ===========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
function closeMobile() { mobileMenu.classList.remove('open'); }

// =========== SCROLL REVEAL ===========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Animate skill bars
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        const w = bar.getAttribute('data-width');
        bar.style.transform = `scaleX(${w})`;
        bar.classList.add('animated');
      });
      // If standalone skill bar
      if (entry.target.classList.contains('skill-bar')) {
        const w = entry.target.getAttribute('data-width');
        entry.target.style.transform = `scaleX(${w})`;
        entry.target.classList.add('animated');
      }
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item').forEach(el => {
  observer.observe(el);
});

// =========== FORM ===========
function handleSubmit() {
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const msg = document.getElementById('fmessage').value;
  const formMsg = document.getElementById('formMsg');
  if (!name || !email || !msg) {
    formMsg.style.color = '#ff6b6b';
    formMsg.textContent = 'Please fill in all required fields.';
    formMsg.style.opacity = 1;
    return;
  }
  formMsg.style.color = 'var(--accent)';
  formMsg.textContent = '✓ Message sent! I\'ll get back to you soon.';
  formMsg.style.opacity = 1;
  setTimeout(() => { formMsg.style.opacity = 0; }, 4000);
  document.getElementById('fname').value = '';
  document.getElementById('femail').value = '';
  document.getElementById('fsubject').value = '';
  document.getElementById('fmessage').value = '';
}

// =========== SMOOTH ACTIVE NAV ===========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(l => {
    l.style.color = l.getAttribute('href') === '#' + current ? 'var(--text)' : '';
  });
});

