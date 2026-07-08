/**
 * Main application logic: rendering, navigation, form validation, scroll effects.
 */

(function () {
  'use strict';

  // ── Render dynamic content from SITE_DATA ──────────────────────────

  function renderListings() {
    const grid = document.getElementById('listingsGrid');
    if (!grid || !window.SITE_DATA) return;

    // Filter only active and pending listings
    const activeListings = SITE_DATA.listings.filter(
      listing => listing.status === 'active' || listing.status === 'pending'
    );

    grid.innerHTML = activeListings
      .map(
        (listing) => {
          // Use fallbackImage if mainImage doesn't exist or fails to load
          const imageUrl = listing.fallbackImage || listing.mainImage;
          const statusBadge = listing.status === 'pending' 
            ? '<span class="listing-card__status">Pending</span>' 
            : '';
          
          return `
        <article class="listing-card reveal">
          <div class="listing-card__image-wrap">
            <img 
              src="${imageUrl}" 
              alt="${listing.description}" 
              class="listing-card__image" 
              loading="lazy"
              onerror="this.src='${listing.fallbackImage}'"
            />
            <span class="listing-card__price">${listing.price}</span>
            ${statusBadge}
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
      `;
        }
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

  // ── Dynamic content updates ────────────────────────────────────────

  function updateDynamicContent() {
    if (!window.SITE_DATA) return;

    const data = window.SITE_DATA;

    // Update hero section
    if (data.homepage?.hero) {
      const hero = data.homepage.hero;
      const heroEyebrow = document.querySelector('.hero .eyebrow');
      const heroTitle = document.querySelector('.hero__title');
      const heroText = document.querySelector('.hero__text');
      const heroImage = document.querySelector('.hero__image');
      const heroBadgeLabel = document.querySelector('.hero__badge-label');
      const heroBadgeValue = document.querySelector('.hero__badge-value');

      if (heroEyebrow) heroEyebrow.textContent = hero.eyebrow;
      if (heroTitle) heroTitle.textContent = hero.title;
      if (heroText) heroText.textContent = hero.subtitle;
      if (heroImage) {
        heroImage.src = hero.image.url;
        heroImage.alt = hero.image.alt;
      }
      if (heroBadgeLabel) heroBadgeLabel.textContent = hero.badge.label;
      if (heroBadgeValue) heroBadgeValue.textContent = hero.badge.value;

      // Update stats
      const stats = document.querySelectorAll('.stat');
      hero.stats.forEach((stat, i) => {
        if (stats[i]) {
          const number = stats[i].querySelector('.stat__number');
          const label = stats[i].querySelector('.stat__label');
          if (number) number.textContent = stat.number;
          if (label) label.textContent = stat.label;
        }
      });
    }

    // Update about section
    if (data.homepage?.about) {
      const about = data.homepage.about;
      const aboutEyebrow = document.querySelector('#about .eyebrow');
      const aboutTitle = document.querySelector('#about .section__title');
      const aboutLead = document.querySelector('.about__lead');
      const aboutText = document.querySelector('.about__text');
      const aboutImage = document.querySelector('.about__image');
      const accentNumber = document.querySelector('.about__accent-number');
      const accentLabel = document.querySelector('.about__accent-label');

      if (aboutEyebrow) aboutEyebrow.textContent = about.eyebrow;
      if (aboutTitle) aboutTitle.textContent = about.title;
      if (aboutLead) aboutLead.textContent = about.lead;
      if (aboutText) aboutText.textContent = about.description;
      if (aboutImage) {
        aboutImage.src = about.image.url;
        aboutImage.alt = about.image.alt;
      }
      if (accentNumber) accentNumber.textContent = about.accentCard.number;
      if (accentLabel) accentLabel.textContent = about.accentCard.label;

      // Update highlights list
      const highlightsList = document.querySelector('.about__highlights');
      if (highlightsList) {
        highlightsList.innerHTML = about.highlights
          .map(highlight => `<li>${highlight}</li>`)
          .join('');
      }
    }

    // Update contact section
    if (data.contact && data.address) {
      const contacts = document.querySelectorAll('.contact__details li a, .footer__links li a');
      contacts.forEach(link => {
        if (link.href.includes('tel:') && data.contact.cellLink) {
          const isOffice = link.textContent.includes('703');
          link.href = isOffice ? data.contact.officeLink : data.contact.cellLink;
          link.textContent = isOffice ? data.contact.office : data.contact.cell;
        }
        if (link.href.includes('mailto:')) {
          link.href = data.contact.emailLink;
          link.textContent = data.contact.email;
        }
      });

      // Update addresses
      const addresses = document.querySelectorAll('address');
      addresses.forEach(addr => {
        addr.innerHTML = `${data.address.street}<br />${data.address.city}, ${data.address.state} ${data.address.zip}`;
      });
    }

    // Update footer
    if (data.agent && data.footer) {
      const logoNames = document.querySelectorAll('.logo__name');
      const logoTaglines = document.querySelectorAll('.logo__tagline');
      logoNames.forEach(el => el.textContent = data.agent.name);
      
      document.querySelectorAll('.logo__tagline:not(.logo--footer .logo__tagline)').forEach(el => {
        el.textContent = data.agent.title;
      });
      
      document.querySelectorAll('.logo--footer .logo__tagline').forEach(el => {
        el.textContent = data.agent.company;
      });

      const footerTagline = document.querySelector('.footer__tagline');
      if (footerTagline) footerTagline.textContent = data.agent.slogan;

      const copyright = document.querySelector('.footer__bottom p');
      if (copyright) copyright.innerHTML = `&copy; ${data.footer.copyright}`;

      const footerLicense = document.querySelector('.footer__license');
      if (footerLicense) footerLicense.textContent = data.footer.license;
    }
  }

  // ── Init ───────────────────────────────────────────────────────────

  function init() {
    // Wait for content to be loaded
    if (!window.SITE_DATA) {
      window.addEventListener('contentLoaded', init, { once: true });
      return;
    }

    // Update all dynamic content
    updateDynamicContent();
    
    // Render content-driven sections
    renderListings();
    renderServices();
    renderBenefits();
    renderTestimonials();
    
    // Initialize interactions
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
