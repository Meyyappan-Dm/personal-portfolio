// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

mobileMenuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuToggle.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close mobile menu when clicking a link
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active nav link highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinksArray = Array.from(document.querySelectorAll('.nav-link'));

function highlightActiveNav() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveNav);
highlightActiveNav(); // Initial call

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observe elements for scroll reveal
document.querySelectorAll('.card, .skill-group, .about-meta, .contact-details, .experience-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Header background on scroll
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - scrolled / window.innerHeight * 0.5;
  }
});
