const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));
menuBtn.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); document.body.style.overflow=''; menuBtn.setAttribute('aria-expanded','false'); }));
document.getElementById('year').textContent = new Date().getFullYear();

const people = {
  mayamba: {
    name: 'Mayamba Mwanawasa',
    role: 'Managing Partner (2021 – Present)',
    image: 'assets/mayamba-mwanawasa-1.jpg?v=20260903c',
    email: 'info@dovechambers.co.zm',
    paragraphs: [
      'Ms. Mayamba Mwanawasa is the Managing Partner of Dove Chambers and an accomplished legal practitioner with over 19 years of distinguished experience in private practice. Admitted to the Zambian Bar in 2007, she successfully passed the Bar examinations on her first attempt — a remarkable achievement that reflects her discipline, determination, and unwavering commitment to excellence.',
      'She is an Advocate of the High Court of Zambia and the Supreme Court of Zambia, a Commissioner for Oaths, and a Notary Public.',
      'Before joining Dove Chambers in 2011, Ms. Mwanawasa practiced at several reputable law firms, including Mulenga Mundashi & Company, where she gained invaluable experience in litigation and legal advisory services. She has since established herself as a trusted legal adviser and accomplished advocate, representing both corporate and individual clients before courts and tribunals across Zambia, including the Supreme Court, as well as in arbitration and mediation proceedings.',
      'While her passion lies in conveyancing and legal drafting, her expertise spans Corporate and Commercial Law, Company Law, Employment and Labour Law, Construction Law, Matrimonial and Family Law, Civil and Criminal Litigation, and Alternative Dispute Resolution. She advises businesses and individuals on complex legal and commercial matters, including corporate governance, regulatory compliance, company incorporation, statutory filings, commercial contracts, work permits for foreign nationals, and legal risk management.',
      'Her practice has also seen her represent members of the Zambia Defence Forces before Courts Martial, demonstrating her ability to competently handle highly specialised legal proceedings.',
      'Throughout her career, Ms. Mwanawasa has earned a reputation for integrity, sound legal judgment, meticulous attention to detail, and an unwavering commitment to deliver exceptional legal services. As Managing Partner, she continues to lead Dove Chambers with professionalism, excellence, and a client-centered approach, helping to shape the firm’s reputation as a trusted provider of innovative legal solutions.'
    ],
    funFact: 'When she’s not leading one of Zambia’s respected law firms, Ms. Mwanawasa is busy making history. She is the first Zambian to complete all six World Marathon Majors—an extraordinary accomplishment achieved by only a select group of runners worldwide. Her marathon journey mirrors her legal career built on discipline, resilience, consistency, and the determination to finish every challenge she starts. Whether in the courtroom or on the racecourse, she embodies the belief that excellence is never accidental—it is earned.'
  },
  jacob: {
    name: 'Jacob Milambo',
    role: 'Senior Partner',
    image: 'assets/jacob-milambo-1.jpg?v=20260903c',
    email: 'info@dovechambers.co.zm',
    paragraphs: [
      'A distinguished advocate with nearly a decade of experience at the Zambian Bar, Jacob Milambo is a Senior Partner at Dove Chambers Legal Practitioners, renowned for his strategic thinking, composure, and dedication to achieving effective legal solutions for his clients.',
      'Jacob holds a Bachelor of Laws Degree (LL.B) from Cavendish University Zambia and has been a valued member of Dove Chambers since 2013. Throughout his career, he has developed a reputation as a thoughtful and analytical legal practitioner, combining legal expertise with a practical understanding of his clients’ needs.',
      'Known within the firm for his calm and composed nature, Jacob possesses a commanding courtroom presence. Behind the quiet confidence is a fierce advocate — one who approaches every matter with preparation, precision, and the determination to pursue the best possible outcome for his clients.',
      'Jacob manages a broad civil litigation portfolio, with particular focus on employment and labour matters, tort, family law, probate, and general commercial disputes. His expertise further extends to corporate advisory, contract negotiation, joint venture agreements, mergers and acquisitions, corporate governance, and commercial transactions.',
      'With extensive experience in conveyancing and legal drafting, Jacob brings exceptional attention to detail and a solution-oriented approach to every transaction he handles.'
    ],
    funFact: 'Despite his calm and composed demeanor, Jacob has a competitive spirit that extends beyond the courtroom. He is a passionate basketball enthusiast and a devoted fan of the late Kobe Bryant — a reflection of his admiration for discipline, resilience, and the relentless pursuit of excellence.'
  },
  inutu: {
    name: 'Inutu Ngobola',
    role: 'Partner',
    image: 'assets/inutu.jpg?v=20260903c',
    email: 'info@dovechambers.co.zm',
    paragraphs: [
      'Inutu Ngobola is an Advocate of the Superior Courts of Zambia, admitted to the Bar in June 2017. She holds an LLB (Honours) law degree from London South Bank University, in the United Kingdom, and has extensive experience in civil litigation and commercial law.',
      'She represents individuals and corporate clients in commercial and corporate disputes, construction and mining matters, land and property disputes, employment and labour claims, and constitutional petitions. Her practice also includes Corporate and Commercial Law, Employment and Labour Law, Mining and Construction Law, Property and Land Law, Conveyancing, and Contract Drafting and Negotiation.',
      'Inutu advises clients on regulatory compliance, commercial transactions, risk management, and dispute resolution. She also has experience in property acquisitions, commercial agreements, probate and administration of estates, matrimonial and family law, insurance claims, and debt recovery.',
      'Known for her strategic approach and practical legal advice, Inutu is committed to delivering effective, client-focused solutions with professionalism, integrity, and excellence.'
    ]
  },
  nyambe: {
    name: 'Nyambe Makunku',
    role: 'Associate',
    image: 'assets/nyambe-makunku-3.jpg?v=20260903c',
    email: 'info@dovechambers.co.zm',
    paragraphs: [
      'Nyambe is a dynamic legal practitioner with over four years of experience advising clients across complex legal matters. His practice spans dispute resolution, appellate and commercial litigation, employment and labor law, family law, and probate and succession.'
    ],
    funFact: 'He is an avid sports enthusiast who passionately supports Arsenal, PSG, and Nkana FC, and regularly follows Formula 1 and tennis.'
  }
};
const modal = document.getElementById('profileModal'); const content = document.getElementById('modalContent');
document.querySelectorAll('.person-card').forEach(card => card.addEventListener('click', () => {
  const p = people[card.dataset.person];
  if (!p) return;
  const paragraphsHtml = p.paragraphs.map(text => `<p>${text}</p>`).join('');
  const funFactHtml = p.funFact ? `<div class="modal-fun-fact"><strong>Fun Fact</strong><p>${p.funFact}</p></div>` : '';
  content.innerHTML = `
    <div class="modal-body">
      <div class="modal-portrait"><img src="${p.image}" alt="${p.name}"></div>
      <div class="modal-text">
        <div class="role">${p.role}</div>
        <h3>${p.name}</h3>
        <div class="bio-content">${paragraphsHtml}${funFactHtml}</div>
        <a class="modal-email" href="mailto:${p.email}">${p.email} ↗</a>
      </div>
    </div>
  `;
  modal.showModal();
}));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close()); modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

// Fast Count-Up Animation for "26+", "100+", and "24m+"
const statCounters = document.querySelectorAll('.stat-counter');
let statsAnimated = false;

function animateCounters() {
  if (statsAnimated) return;
  statsAnimated = true;
  const duration = 1200; // fast and energetic count-up
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutQuad / snappy acceleration with crisp settling
    const ease = 1 - Math.pow(1 - progress, 3);

    statCounters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const prefix = counter.dataset.prefix || '';
      const suffix = counter.dataset.suffix || '';
      const current = Math.floor(ease * target);
      counter.textContent = `${prefix}${current}${suffix}`;
    });

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      statCounters.forEach(counter => {
        const target = counter.dataset.target;
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';
        counter.textContent = `${prefix}${target}${suffix}`;
      });
    }
  }
  requestAnimationFrame(step);
}

const principlesSection = document.querySelector('.principles');
if (principlesSection && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(principlesSection);
} else {
  animateCounters();
}

// Kinetic Interactive Movement for "Experience that moves matters forward."
const heroSection = document.querySelector('.hero');
const heroTitle = document.getElementById('heroTitle');
if (heroSection && heroTitle && window.matchMedia('(pointer: fine)').matches) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isMoving = false;

  function updateHeadlineMotion() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    heroTitle.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      requestAnimationFrame(updateHeadlineMotion);
    } else {
      isMoving = false;
    }
  }

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Elegant, smooth range of motion
    targetX = x * 26;
    targetY = y * 14;

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateHeadlineMotion);
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updateHeadlineMotion);
    }
  });
}

// 02 / Expertise Section Compact Slide Carousel
const sliderViewport = document.getElementById('sliderViewport');
const sliderTrack = document.getElementById('sliderTrack');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');
const counterCurrent = document.getElementById('counterCurrent');
const counterTotal = document.getElementById('counterTotal');
const sliderProgressBar = document.getElementById('sliderProgressBar');
const sliderDots = document.getElementById('sliderDots');
const filterChips = document.querySelectorAll('.filter-chip');
const allPracticeCards = Array.from(document.querySelectorAll('.practice-card'));

if (sliderViewport && sliderTrack) {
  let currentIndex = 0;
  let activeFilter = 'all';
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationId = null;

  function getVisibleCards() {
    return allPracticeCards.filter(card => !card.classList.contains('is-hidden'));
  }

  function getCardStep() {
    const visible = getVisibleCards();
    if (visible.length === 0) return 360;
    const cardRect = visible[0].getBoundingClientRect();
    const gap = 20;
    return cardRect.width + gap;
  }

  function getMaxIndex() {
    const visible = getVisibleCards();
    if (visible.length <= 1) return 0;
    const step = getCardStep();
    const viewportWidth = sliderViewport.clientWidth;
    const fullyVisibleInViewport = Math.max(1, Math.floor(viewportWidth / step));
    return Math.max(0, visible.length - fullyVisibleInViewport);
  }

  function updateSlideUI() {
    const visible = getVisibleCards();
    const maxIdx = getMaxIndex();

    // Ensure currentIndex is clamped
    if (currentIndex > maxIdx) {
      currentIndex = maxIdx;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }

    const step = getCardStep();
    const targetTranslate = -(currentIndex * step);
    currentTranslate = targetTranslate;
    prevTranslate = targetTranslate;
    sliderTrack.style.transform = `translateX(${targetTranslate}px)`;

    // Update Counter (pad to 2 digits)
    if (counterCurrent) {
      counterCurrent.textContent = String(Math.min(currentIndex + 1, visible.length)).padStart(2, '0');
    }
    if (counterTotal) {
      counterTotal.textContent = String(visible.length).padStart(2, '0');
    }

    // Update Buttons
    if (sliderPrev) {
      sliderPrev.disabled = currentIndex <= 0;
    }
    if (sliderNext) {
      sliderNext.disabled = currentIndex >= maxIdx;
    }

    // Update Progress Bar
    if (sliderProgressBar) {
      const progressPercent = visible.length > 0 
        ? Math.min(100, Math.max(12, ((currentIndex + 1) / visible.length) * 100))
        : 100;
      sliderProgressBar.style.width = `${progressPercent}%`;
    }

    // Update Pagination Dots
    if (sliderDots) {
      const dotsCount = maxIdx + 1;
      sliderDots.innerHTML = '';
      for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === currentIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
        dot.addEventListener('click', () => {
          goToSlide(i);
        });
        sliderDots.appendChild(dot);
      }
    }
  }

  function goToSlide(index) {
    const maxIdx = getMaxIndex();
    currentIndex = Math.max(0, Math.min(index, maxIdx));
    updateSlideUI();
  }

  // Prev / Next button click handlers
  if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }

  if (sliderNext) {
    sliderNext.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }

  // Keyboard navigation when slider viewport has focus
  sliderViewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToSlide(currentIndex - 1);
    }
  });

  // Touch and Mouse Drag-to-Slide Functionality
  function pointerStart(e) {
    isDragging = true;
    sliderViewport.classList.add('is-dragging');
    sliderTrack.classList.add('is-dragging');
    startX = getPositionX(e);
    cancelAnimationFrame(animationId);
  }

  function pointerMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const diffX = currentX - startX;
    const maxIdx = getMaxIndex();
    const step = getCardStep();
    const maxTranslate = 0;
    const minTranslate = -(maxIdx * step);

    // Add resistance at boundaries
    let newTranslate = prevTranslate + diffX;
    if (newTranslate > maxTranslate) {
      newTranslate = maxTranslate + (newTranslate - maxTranslate) * 0.25;
    } else if (newTranslate < minTranslate) {
      newTranslate = minTranslate + (newTranslate - minTranslate) * 0.25;
    }

    currentTranslate = newTranslate;
    sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
  }

  function pointerEnd() {
    if (!isDragging) return;
    isDragging = false;
    sliderViewport.classList.remove('is-dragging');
    sliderTrack.classList.remove('is-dragging');

    const movedBy = currentTranslate - prevTranslate;
    const step = getCardStep();
    const threshold = Math.min(60, step * 0.2);

    if (movedBy < -threshold) {
      goToSlide(currentIndex + 1);
    } else if (movedBy > threshold) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(currentIndex);
    }
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  // Mouse drag listeners
  sliderViewport.addEventListener('mousedown', pointerStart);
  window.addEventListener('mousemove', pointerMove);
  window.addEventListener('mouseup', pointerEnd);

  // Touch swipe listeners
  sliderViewport.addEventListener('touchstart', pointerStart, { passive: true });
  window.addEventListener('touchmove', pointerMove, { passive: true });
  window.addEventListener('touchend', pointerEnd);

  // Category Filtering with Smooth Transition to Slide 0
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      if (filter === activeFilter) return;
      activeFilter = filter;

      filterChips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');

      // Filter visible cards
      allPracticeCards.forEach(card => {
        const category = card.dataset.category;
        const isMatch = filter === 'all' || category === filter;
        if (isMatch) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });

      // Reset to first slide in category
      currentIndex = 0;
      updateSlideUI();
    });
  });

  // Recalculate slider positioning on window resize
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateSlideUI();
    }, 120);
  });

  // Interactive Cursor Spotlight illumination across dark card surface
  if (window.matchMedia('(pointer: fine)').matches) {
    allPracticeCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // Initial slider state setup
  updateSlideUI();
}

