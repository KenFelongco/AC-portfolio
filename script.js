  // ========== FEATURED IMAGE MODAL ==========
const featuredImages = document.querySelectorAll('.featured-image');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

<<<<<<< HEAD
// Project cards now open a details modal on click.
=======
// OPEN MODAL
featuredImages.forEach(img => {

  img.addEventListener('mouseenter', () => {

    modalImage.src = img.src;
    imageModal.classList.add('active');

  });

});
>>>>>>> 952ed016629acf92ea33fa58b716af3ab9dc57e3

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

<<<<<<< HEAD
// ========== TEAM DETAILS MODAL ==========
const teamModal = document.getElementById('teamModal');
const teamModalClose = document.getElementById('teamModalClose');
const teamModalImage = document.getElementById('teamModalImage');
const teamModalName = document.getElementById('teamModalName');
const teamModalRole = document.getElementById('teamModalRole');
const teamModalTags = document.getElementById('teamModalTags');
const teamModalWork = document.getElementById('teamModalWork');
const teamCards = document.querySelectorAll('#team .project-card');
const defaultTeamWork = teamModalWork ? teamModalWork.textContent.trim() : '';

function openTeamModal(card) {
  const image = card.querySelector('.team-image');
  const name = card.querySelector('.project-title');
  const role = card.querySelector('.project-desc');
  const tags = card.querySelectorAll('.tech-pill');
  const customWork = card.querySelector('.team-member-work');

  teamModalImage.src = image ? image.src : '';
  teamModalImage.alt = image ? image.alt : '';
  teamModalName.textContent = name ? name.textContent.trim() : 'Team Member';
  teamModalRole.textContent = role ? role.textContent.trim() : '';
  teamModalWork.textContent = customWork ? customWork.textContent.trim() : defaultTeamWork;

  teamModalTags.innerHTML = '';
  tags.forEach(tag => {
    const clonedTag = tag.cloneNode(true);
    teamModalTags.appendChild(clonedTag);
  });

  teamModal.classList.add('active');
  teamModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeTeamModal() {
  teamModal.classList.remove('active');
  teamModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (teamModal) {
  teamCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => openTeamModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openTeamModal(card);
      }
    });
  });

  teamModalClose.addEventListener('click', closeTeamModal);

  teamModal.addEventListener('click', e => {
    if (e.target === teamModal) {
      closeTeamModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && teamModal.classList.contains('active')) {
      closeTeamModal();
    }
  });
}

// ========== PROJECT DETAILS MODAL ==========
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');
const projectModalImage = document.getElementById('projectModalImage');
const projectModalCategory = document.getElementById('projectModalCategory');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalDesc = document.getElementById('projectModalDesc');
const projectModalTags = document.getElementById('projectModalTags');
const projectModalWork = document.getElementById('projectModalWork');
const projectCards = document.querySelectorAll('#projects .project-card');
const defaultProjectWork = projectModalWork ? projectModalWork.textContent.trim() : '';

function openProjectModal(card) {
  const image = card.querySelector('.featured-image');
  const category = card.querySelector('.featured-badge');
  const title = card.querySelector('.project-title');
  const desc = card.querySelector('.project-desc');
  const tags = card.querySelectorAll('.tech-pill');
  const customWork = card.querySelector('.project-details-content');

  projectModalImage.src = image ? image.src : '';
  projectModalImage.alt = image ? image.alt : '';
  projectModalCategory.textContent = category ? category.textContent.trim() : 'Featured System';
  projectModalTitle.textContent = title ? title.textContent.trim() : 'Featured System';
  projectModalDesc.textContent = desc ? desc.textContent.trim() : '';
  projectModalWork.textContent = customWork ? customWork.textContent.trim() : defaultProjectWork;

  projectModalTags.innerHTML = '';
  tags.forEach(tag => {
    const clonedTag = tag.cloneNode(true);
    projectModalTags.appendChild(clonedTag);
  });

  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

if (projectModal) {
  projectCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');

    card.addEventListener('click', () => openProjectModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(card);
      }
    });
  });

  projectModalClose.addEventListener('click', closeProjectModal);

  projectModal.addEventListener('click', e => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

// ========== LOCATION MAP MODAL ==========
const locationMapOpen = document.getElementById('locationMapOpen');
const locationMapModal = document.getElementById('locationMapModal');
const locationMapClose = document.getElementById('locationMapClose');
const locationMapFrame = document.getElementById('locationMapFrame');
const locationMapSrc = locationMapFrame ? locationMapFrame.src : '';

function openLocationMapModal() {
  if (locationMapFrame) {
    locationMapFrame.src = locationMapSrc;
  }

  locationMapModal.classList.add('active');
  locationMapModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeLocationMapModal() {
  locationMapModal.classList.remove('active');
  locationMapModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  if (locationMapFrame) {
    locationMapFrame.src = 'about:blank';
  }
}

if (locationMapOpen && locationMapModal) {
  locationMapOpen.addEventListener('click', e => {
    e.preventDefault();
    openLocationMapModal();
  });

  locationMapClose.addEventListener('click', closeLocationMapModal);

  locationMapModal.addEventListener('click', e => {
    if (e.target === locationMapModal) {
      closeLocationMapModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && locationMapModal.classList.contains('active')) {
      closeLocationMapModal();
    }
  });
}

=======
>>>>>>> 952ed016629acf92ea33fa58b716af3ab9dc57e3
  
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
<<<<<<< HEAD
=======

>>>>>>> 952ed016629acf92ea33fa58b716af3ab9dc57e3
