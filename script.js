
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile nav
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');
  navToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open.toString());
  });
  function closeMobileNav() {
    mobileNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  // Intersection Observer — fade-in animations
  const fadeEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // Form handler
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    setTimeout(() => {
      e.target.style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }, 900);
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--gold)' : '';
    });
  }, { passive: true });


