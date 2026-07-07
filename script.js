  // ========== FEATURED IMAGE MODAL ==========
const featuredImages = document.querySelectorAll('.featured-image');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

// Project cards now open a details modal on click.

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

// ========== TEAM DETAILS MODAL ==========
const teamModal = document.getElementById('teamModal');
const teamModalClose = document.getElementById('teamModalClose');
const teamModalImage = document.getElementById('teamModalImage');
const teamModalLabel = document.getElementById('teamModalLabel');
const teamModalName = document.getElementById('teamModalName');
const teamModalRole = document.getElementById('teamModalRole');
const teamModalTags = document.getElementById('teamModalTags');
const teamModalProjects = document.getElementById('teamModalProjects');
const teamCards = document.querySelectorAll('#team .project-card');
const memberProjects = {
  ken: [
    {
      title: 'Autism Spectrum Disorder (ASD) Learning Application',
      slug: 'asd-learning-application'
    },
    {
      title: 'Wedding Invitation Website',
      slug: 'wedding-invitation-website'
    }
  ],
  ronnel: [
    {
      title: 'GenSpe: General Specialization Mobile Game Application',
      slug: 'genspe-mobile-game'
    },
    {
      title: 'Speak-App: Communication Learning Mobile Application for ASD Students',
      slug: 'speak-app'
    }
  ],
  lemor: [
    {
      title: 'IGLA: Interactive Game Learning Application for ADHD Students',
      slug: 'igla-adhd-learning-app'
    }
  ],
  madel: [
    {
      title: 'Birthday Invitation Website',
      slug: 'birthday-invitation-website'
    }
  ]
};

function openMemberProject(projectSlug) {
  const targetProject = document.querySelector(`#projects .project-card[data-project-slug="${projectSlug}"]`);

  if (!targetProject) {
    return;
  }

  closeTeamModal();
  targetProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
  targetProject.classList.add('project-card-focus');

  window.setTimeout(() => {
    targetProject.classList.remove('project-card-focus');
    openProjectModal(targetProject);
  }, 420);
}

function renderTeamProjects(memberKey) {
  const projects = memberProjects[memberKey] || [];

  if (!teamModalProjects) {
    return;
  }

  teamModalProjects.innerHTML = '';

  if (!projects.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'team-modal-project-empty';
    emptyState.textContent = 'No projects listed yet.';
    teamModalProjects.appendChild(emptyState);
    return;
  }

  projects.forEach(project => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'team-modal-project-btn';
    button.textContent = project.title;
    button.addEventListener('click', () => openMemberProject(project.slug));
    teamModalProjects.appendChild(button);
  });
}

function openTeamModal(card) {
  const image = card.querySelector('.team-image');
  const name = card.querySelector('.project-title');
  const role = card.querySelector('.project-desc');
  const tags = card.querySelectorAll('.tech-pill');

  teamModalImage.src = image ? image.src : '';
  teamModalImage.alt = image ? image.alt : '';
  teamModalLabel.textContent = card.dataset.teamRole || 'Team Member';
  teamModalName.textContent = name ? name.textContent.trim() : 'Team Member';
  teamModalRole.textContent = role ? role.textContent.trim() : '';
  renderTeamProjects(card.dataset.memberKey || '');

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
const projectModalTitle = document.getElementById('projectModalTitle');
const projectFacebookLink = document.getElementById('projectFacebookLink');
const projectGalleryPrev = document.getElementById('projectGalleryPrev');
const projectGalleryNext = document.getElementById('projectGalleryNext');
const projectGalleryThumbs = document.getElementById('projectGalleryThumbs');
const projectCards = document.querySelectorAll('#projects .project-card');
let projectGalleryImages = [];
let projectGalleryIndex = 0;

function renderProjectGallery() {
  const imageSrc = projectGalleryImages[projectGalleryIndex] || '';
  const title = projectModalTitle.textContent.trim() || 'Project image';
  const hasMultipleImages = projectGalleryImages.length > 1;

  projectModalImage.src = imageSrc;
  projectModalImage.alt = `${title} image ${projectGalleryIndex + 1}`;

  projectGalleryPrev.hidden = !hasMultipleImages;
  projectGalleryNext.hidden = !hasMultipleImages;
  projectGalleryThumbs.hidden = !hasMultipleImages;
  projectGalleryThumbs.innerHTML = '';

  if (!hasMultipleImages) {
    return;
  }

  projectGalleryImages.forEach((src, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = `project-gallery-thumb${index === projectGalleryIndex ? ' active' : ''}`;
    thumb.setAttribute('aria-label', `Show image ${index + 1}`);

    const thumbImage = document.createElement('img');
    thumbImage.src = src;
    thumbImage.alt = '';
    thumbImage.loading = 'lazy';

    thumb.appendChild(thumbImage);
    thumb.addEventListener('click', () => {
      projectGalleryIndex = index;
      renderProjectGallery();
    });

    projectGalleryThumbs.appendChild(thumb);
  });
}

function moveProjectGallery(direction) {
  if (projectGalleryImages.length <= 1) {
    return;
  }

  projectGalleryIndex = (projectGalleryIndex + direction + projectGalleryImages.length) % projectGalleryImages.length;
  renderProjectGallery();
}

function normalizeProjectLink(url) {
  if (!url) {
    return '';
  }

  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function openProjectModal(card) {
  const image = card.querySelector('.featured-image');
  const title = card.querySelector('.project-title');
  const facebookUrl = normalizeProjectLink((card.dataset.facebookUrl || '').trim());
  const gallery = card.dataset.gallery
    ? card.dataset.gallery.split(',').map(src => src.trim()).filter(Boolean)
    : [];

  projectGalleryImages = gallery.length ? gallery : [image ? image.getAttribute('src') : ''].filter(Boolean);
  projectGalleryIndex = 0;

  projectModalTitle.textContent = title ? title.textContent.trim() : 'Featured System';

  if (projectFacebookLink) {
    projectFacebookLink.hidden = !facebookUrl;

    if (facebookUrl) {
      projectFacebookLink.href = facebookUrl;
    } else {
      projectFacebookLink.removeAttribute('href');
    }
  }

  renderProjectGallery();

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

  projectGalleryPrev.addEventListener('click', () => moveProjectGallery(-1));
  projectGalleryNext.addEventListener('click', () => moveProjectGallery(1));

  projectModal.addEventListener('click', e => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }

    if (e.key === 'ArrowLeft' && projectModal.classList.contains('active')) {
      moveProjectGallery(-1);
    }

    if (e.key === 'ArrowRight' && projectModal.classList.contains('active')) {
      moveProjectGallery(1);
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
