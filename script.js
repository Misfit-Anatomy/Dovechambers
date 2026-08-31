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
    image: 'assets/Mayamba Mwanawasa 1.jpg',
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
    image: 'assets/Jacob Milambo 3.jpg',
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
    image: 'assets/Inutu.jpg',
    email: 'info@dovechambers.co.zm',
    paragraphs: [
      'Inutu Ngobola is an Advocate of the Superior Courts of Zambia, admitted to the Bar in June 2017. She holds an LLB (Honours) law degree from London South Bank University, in the United Kingdom, and has extensive experience in civil litigation and commercial law.',
      'She represents individuals and corporate clients in commercial and corporate disputes, construction and mining matters, land and property disputes, employment and labour claims, and constitutional petitions. Her practice also includes Corporate and Commercial Law, Employment and Labour Law, Mining and Construction Law, Property and Land Law, Conveyancing, and Contract Drafting and Negotiation.',
      'Inutu advises clients on regulatory compliance, commercial transactions, risk management, and dispute resolution. She also has experience in property acquisitions, commercial agreements, probate and administration of estates, matrimonial and family law, insurance claims, and debt recovery.',
      'Known for her strategic approach and practical legal advice, Inutu is committed to delivering effective, client-focused solutions with professionalism, integrity, and excellence.'
    ]
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
