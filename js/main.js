/**
 * Main application logic: rendering, navigation, form validation, scroll effects.
 */

(function () {
  'use strict';

  // ── Render dynamic content from SITE_DATA ──────────────────────────

  function renderListings() {
    const grid = document.getElementById('listingsGrid');
    if (!grid || !window.SITE_DATA) return;

    grid.innerHTML = SITE_DATA.listings
      .map(
        (listing) => `
        <article class="listing-card reveal">
          <div class="listing-card__image-wrap">
            <img src="${listing.image}" alt="${listing.alt}" class="listing-card__image" loading="lazy" />
            <span class="listing-card__price">${listing.price}</span>
          </div>
          <div class="listing-card__body">
            <p class="listing-card__address">${listing.address}</p>
            <ul class="listing-card__meta">
              <li>${listing.beds} Beds</li>
              <li>${listing.baths} Baths</li>
              <li>${listing.sqft} sq ft</li>
            </ul>
            <a href="#contact" class="btn btn--text listing-card__cta">View Details</a>
          </div>
        </article>
      `
      )
      .join('');
  }

  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid || !window.SITE_DATA) return;

    const icons = {
      home: '<path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>',
      tag: '<path d="M20 12l-8 8-8-8V4h8l8 8z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="7" cy="7" r="1" fill="currentColor"/>',
      chart: '<path d="M4 20V10M10 20V4M16 20v-8M22 20V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
      search: '<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M20 20l-3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
      map: '<path d="M1 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M7 4v14M13 6v14" stroke="currentColor" stroke-width="1.5"/>',
      star: '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>',
    };

    grid.innerHTML = SITE_DATA.services
      .map(
        (service) => `
        <article class="service-card reveal">
          <div class="service-card__icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24">${icons[service.icon] || icons.home}</svg>
          </div>
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__text">${service.description}</p>
        </article>
      `
      )
      .join('');
  }

  function renderBenefits() {
    const grid = document.getElementById('benefitsGrid');
    if (!grid || !window.SITE_DATA) return;

    grid.innerHTML = SITE_DATA.benefits
      .map(
        (benefit, i) => `
        <article class="benefit-card reveal">
          <span class="benefit-card__number">${String(i + 1).padStart(2, '0')}</span>
          <h3 class="benefit-card__title">${benefit.title}</h3>
          <p class="benefit-card__text">${benefit.description}</p>
        </article>
      `
      )
      .join('');
  }

  function renderStars(count) {
    return Array.from({ length: 5 }, (_, i) =>
      i < count
        ? '<svg class="star star--filled" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" fill="currentColor"/></svg>'
        : '<svg class="star" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" fill="none" stroke="currentColor" stroke-width="1"/></svg>'
    ).join('');
  }

  function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid || !window.SITE_DATA) return;

    grid.innerHTML = SITE_DATA.testimonials
      .map(
        (t) => `
        <blockquote class="testimonial-card reveal">
          <div class="testimonial-card__stars" aria-label="${t.rating} out of 5 stars">
            ${renderStars(t.rating)}
          </div>
          <p class="testimonial-card__quote">"${t.quote}"</p>
          <footer class="testimonial-card__author">— ${t.name}</footer>
        </blockquote>
      `
      )
      .join('');
  }

  // ── Sticky header ──────────────────────────────────────────────────

  function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Mobile navigation ──────────────────────────────────────────────

  function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      toggle.classList.toggle('nav-toggle--active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        toggle.classList.remove('nav-toggle--active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // ── Smooth scroll & active nav link ────────────────────────────────

  function initSmoothScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();
        const headerHeight = document.getElementById('header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({ top, behavior: 'smooth' });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ── Scroll reveal animations ───────────────────────────────────────

  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  // ── Form validation ────────────────────────────────────────────────

  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const fields = {
      fullName: {
        el: document.getElementById('fullName'),
        error: document.getElementById('fullNameError'),
        validate: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
      },
      email: {
        el: document.getElementById('email'),
        error: document.getElementById('emailError'),
        validate: (v) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Please enter a valid email address.',
      },
      phone: {
        el: document.getElementById('phone'),
        error: document.getElementById('phoneError'),
        validate: (v) =>
          v.replace(/\D/g, '').length >= 10 ? '' : 'Please enter a valid phone number.',
      },
      interest: {
        el: document.getElementById('interest'),
        error: document.getElementById('interestError'),
        validate: (v) => (v ? '' : 'Please select an option.'),
      },
      message: {
        el: document.getElementById('message'),
        error: document.getElementById('messageError'),
        validate: (v) => (v.trim().length >= 10 ? '' : 'Please enter a message (at least 10 characters).'),
      },
    };

    function showError(field, message) {
      field.el.classList.toggle('form__input--error', Boolean(message));
      field.error.textContent = message;
    }

    function validateField(key) {
      const field = fields[key];
      const message = field.validate(field.el.value);
      showError(field, message);
      return !message;
    }

    Object.keys(fields).forEach((key) => {
      fields[key].el.addEventListener('blur', () => validateField(key));
      fields[key].el.addEventListener('input', () => {
        if (fields[key].error.textContent) validateField(key);
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const success = document.getElementById('formSuccess');
      if (success) success.hidden = true;

      const allValid = Object.keys(fields).every((key) => validateField(key));
      if (!allValid) {
        const firstInvalid = Object.keys(fields).find((key) => fields[key].error.textContent);
        if (firstInvalid) fields[firstInvalid].el.focus();
        return;
      }

      // Demo: show success message (wire to backend later)
      if (success) {
        success.hidden = false;
        form.reset();
        Object.values(fields).forEach((f) => showError(f, ''));
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // ── Init ───────────────────────────────────────────────────────────

  function init() {
    renderListings();
    renderServices();
    renderBenefits();
    renderTestimonials();
    initHeader();
    initMobileNav();
    initSmoothScroll();
    initForm();

    // Reveal after dynamic content is rendered
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
