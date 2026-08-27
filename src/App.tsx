import { useEffect, useState } from 'react';
import campusArrival from './assets/campus-arrival.jpg';
import campusWalk from './assets/campus-walk.jpg';
import studentFriends from './assets/student-friends.jpg';
import lumoraPathway from './assets/lumora-pathway.png';
import lumoraLogo from './assets/lumora-consulting-logo.jpg';

type Page = '/' | '/students' | '/study-in-malaysia' | '/how-to-apply' | '/about' | '/contact' | '/privacy';

const pages: { label: string; path: Page }[] = [
  { label: 'For students', path: '/students' },
  { label: 'Study in Malaysia', path: '/study-in-malaysia' },
  { label: 'How to apply', path: '/how-to-apply' },
  { label: 'About Lumora', path: '/about' },
];

function Arrow() { return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

function Header({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);
  const go = (path: Page) => { navigate(path); setOpen(false); };
  return <>
    <header className="header">
      <button className="brand" onClick={() => go('/')} aria-label="Lumora Consulting home"><img src={lumoraLogo} alt="Lumora Consulting" /></button>
      <nav>{pages.map((item) => <button className={page === item.path ? 'active' : ''} key={item.path} onClick={() => go(item.path)}>{item.label}</button>)}</nav>
      <button className="header-button" onClick={() => go('/contact')}>Talk to us <Arrow /></button>
      <button className={`menu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="Open menu"><i /><i /></button>
    </header>
    <div className={`mobile-nav ${open ? 'open' : ''}`}>{pages.map((item) => <button key={item.path} onClick={() => go(item.path)}>{item.label}</button>)}<button onClick={() => go('/contact')}>Talk to us <Arrow /></button></div>
  </>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={`eyebrow ${light ? 'light' : ''}`}><span />{children}</p>; }
function Button({ children, onClick, light = false }: { children: React.ReactNode; onClick: () => void; light?: boolean }) { return <button className={`cta ${light ? 'light' : ''}`} onClick={onClick}>{children}<Arrow /></button>; }

function Home({ navigate }: { navigate: (page: Page) => void }) {
  return <>
    <section className="hero">
      <div className="grid" />
      <div className="hero-copy"><Eyebrow>For African students, made clearer</Eyebrow><h1>Find the university<br />that <em>finds you.</em></h1><p>Personal guidance for ambitious African students planning their next chapter in Malaysia.</p><div className="actions"><Button onClick={() => navigate('/study-in-malaysia')}>Study in Malaysia</Button><button className="plain-link" onClick={() => navigate('/about')}>Why Lumora <span>↓</span></button></div></div>
      <div className="orbit-stage" aria-hidden="true"><i className="orbit a" /><i className="orbit b" /><i className="orbit c" /><i className="dot one" /><i className="dot two" /><i className="dot three" /><div className="globe"><i /><i /><i /><i /><b>GO</b></div><div className="float-card first"><small>01</small><strong>Apply with<br />confidence</strong></div><div className="float-card second"><small>02</small><strong>Accept your<br />best offer</strong></div></div>
      <div className="hero-foot"><span>Independent student recruitment<br />and advisory</span><button onClick={() => navigate('/students')}>Scroll to discover ↓</button></div>
    </section>
    <section className="stats"><p>Clear advice. Malaysian perspective. A plan built around you.</p><div><strong>1:1</strong>guided support</div><div><strong>MY</strong>focused guidance</div><div><strong>∞</strong>possibilities</div></section>
    <section className="malaysia-banner"><div><Eyebrow light>Malaysia, in focus</Eyebrow><h2>Study closer to<br /><em>your future.</em></h2><p>Explore programmes, compare what matters and get a clear plan for studying in Malaysia.</p><Button light onClick={() => navigate('/study-in-malaysia')}>Explore Malaysia</Button></div><img src={campusArrival} alt="Students arriving at a university campus in Malaysia" /></section>
    <section className="study-finder"><div className="finder-heading"><Eyebrow>Find your direction</Eyebrow><h2>Start with a course.<br /><em>Leave with a plan.</em></h2><p>You do not need a university shortlist to begin. Choose your current qualification and the subject area you are drawn to.</p></div><div className="home-finder-card"><label>Which qualification do you have?<select defaultValue=""><option value="" disabled>Choose your current qualification</option><option>Secondary school or high school certificate</option><option>IGCSE</option><option>A Levels</option><option>International Baccalaureate (IB)</option><option>BTEC or vocational qualification</option><option>Diploma or transfer qualification</option><option>Undergraduate degree</option></select></label><label>What are you interested in?<select defaultValue=""><option value="" disabled>Choose a degree area</option><option>Business & management</option><option>Computer science & IT</option><option>Engineering</option><option>Health & life sciences</option><option>Creative arts & design</option><option>Law & social sciences</option></select></label><Button onClick={() => navigate('/contact')}>Get personalised guidance</Button></div></section>
    <section className="levels-section"><div className="level-title"><Eyebrow>Choose your pathway</Eyebrow><h2>There is more than<br />one way <em>forward.</em></h2></div><div className="level-grid">{[['01', 'After Grade 12', 'Explore foundation, diploma and degree routes after secondary school.'], ['02', 'Diploma', 'Build practical knowledge and keep your options open.'], ['03', 'Bachelor’s degree', 'Explore a degree direction aligned with your ambitions.'], ['04', 'Postgraduate study', 'Take your expertise and career further.']].map(([number, title, text]) => <button key={title} onClick={() => navigate('/study-in-malaysia')}><span>{number}</span><h3>{title}</h3><p>{text}</p><Arrow /></button>)}</div></section>
    <section className="guide-section"><div><Eyebrow>Malaysia study guides</Eyebrow><h2>Answers for the<br /><em>next big question.</em></h2><p>Practical, parent-friendly guidance for students planning from Zambia, South Africa and across Africa.</p><Button onClick={() => navigate('/contact')}>Ask a study advisor</Button></div><div className="guide-list">{[['Choosing a course', 'How to compare your interests, strengths and future options.'], ['Understanding entry routes', 'A simple guide to planning after Grade 12 and secondary school certificates.'], ['Preparing for your consultation', 'The questions that help you get the most from your first chat.']].map(([title, text], index) => <article key={title}><span>Guide 0{index + 1}</span><h3>{title}</h3><p>{text}</p><button onClick={() => navigate('/contact')} aria-label={`Ask about ${title}`}><Arrow /></button></article>)}</div></section>
    <section className="split-intro"><div><Eyebrow>The Lumora way</Eyebrow><h2>Big decisions deserve<br />a human approach.</h2></div><div className="steps">{[['01', 'We listen first', 'Your goals, grades and budget are where we begin.'], ['02', 'We match with care', 'Together, we build a shortlist that makes sense.'], ['03', 'We move forward', 'From applications to offers, we stay in your corner.']].map(([n, title, text]) => <article key={n}><small>{n}</small><h3>{title}</h3><p>{text}</p><Arrow /></article>)}</div></section>
    <section className="image-story"><div className="story-copy"><Eyebrow>Student life starts here</Eyebrow><h2>Picture the<br /><em>possibility.</em></h2><p>Every new campus is a place to meet people, test ideas and grow into the person you are becoming.</p><Button onClick={() => navigate('/students')}>See student support</Button></div><div className="story-images"><img className="main-image" src={studentFriends} alt="Two students talking together outdoors" /><img className="small-image" src={campusWalk} alt="Students walking through a university campus" /></div></section>
  </>;
}

function Students({ navigate }: { navigate: (page: Page) => void }) {
  return <PageHero label="For students" title={<>A clearer way<br />to <em>go further.</em></>} text="You do not need every answer today. You need someone who listens, sees your potential and helps you make a confident next move. Parents and guardians are always welcome in the conversation." action="Start your journey" onAction={() => navigate('/contact')} aside={<div className="photo-art student-art"><img src={studentFriends} alt="Two students sharing a conversation outdoors" /><div className="photo-caption">Your next chapter<br />looks good on you.</div></div>}>
    <section className="content-band"><Eyebrow>Built around you</Eyebrow><h2>More than an application.<br />A plan that feels like yours.</h2><div className="feature-grid">{[['Your direction', 'Explore courses, pathways and locations that match who you are becoming.'], ['Your application', 'Get practical help to prepare a compelling, complete application.'], ['Your decision', 'Compare your options and make the choice that feels right.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="journey-section"><Eyebrow>Student journeys</Eyebrow><h2>Support for the<br /><em>whole transition.</em></h2><p className="journey-intro">From your first question to your first day on campus, Lumora makes the process feel more manageable.</p><div className="journey-cards"><article><span>Before you apply</span><h3>Understand your choices</h3><p>Course, budget and intake guidance without the noise.</p></article><article><span>While you apply</span><h3>Keep every detail moving</h3><p>A clear checklist, document support and honest advice.</p></article><article><span>When you decide</span><h3>Feel ready to begin</h3><p>Choose your next step with clarity and confidence.</p></article></div></section>
  </PageHero>;
}

function Malaysia({ navigate }: { navigate: (page: Page) => void }) {
  const [area, setArea] = useState('Business & management');
  const [budget, setBudget] = useState('Flexible');
  return <><PageHero label="Study in Malaysia" title={<>A world-class<br />chapter, <em>closer to home.</em></>} text="Malaysia offers a vibrant, well-connected study experience. Lumora helps you discover a direction that fits your goals and your budget." action="Plan my Malaysia journey" onAction={() => navigate('/contact')} aside={<div className="photo-art malaysia-art"><img src={campusArrival} alt="Modern university campus" /><div className="photo-caption">Malaysia is ready<br />when you are.</div></div>}>
    <section className="content-band tinted malaysia-copy"><Eyebrow>Why Malaysia</Eyebrow><h2>More opportunity,<br />less distance.</h2><div className="feature-grid">{[['A connected education hub', 'An international environment with options designed for ambitious students.'], ['A lifestyle that works', 'A welcoming place to learn, live and build independence.'], ['A route with range', 'Explore pathways that fit your qualifications and aspirations.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </PageHero><section className="finder"><div><Eyebrow>Malaysia programme explorer</Eyebrow><h2>Start with what<br /><em>matters to you.</em></h2><p>Tell us your interests and we will help you make sense of the next step. We do not show university listings here, just the right questions to begin with.</p></div><div className="finder-card"><label>What would you like to study?<select value={area} onChange={(event) => setArea(event.target.value)}><option>Business & management</option><option>Accounting & finance</option><option>Engineering & technology</option><option>Computer science & IT</option><option>Health & life sciences</option><option>Psychology & social sciences</option><option>Law & international relations</option><option>Creative arts & design</option><option>Architecture & built environment</option><option>Hospitality & tourism</option><option>Education & early childhood</option><option>Media & communications</option></select></label><label>Your budget preference<select value={budget} onChange={(event) => setBudget(event.target.value)}><option>Flexible</option><option>Budget-conscious</option><option>Looking for scholarships</option></select></label><div className="finder-result"><small>Your starting point</small><strong>{area}</strong><span>{budget} planning</span></div><Button onClick={() => navigate('/contact')}>Talk through my options</Button></div></section><section className="faq"><Eyebrow>Questions, answered</Eyebrow><h2>Planning should feel<br /><em>less complicated.</em></h2><details open><summary>Can Lumora help me choose a course in Malaysia?</summary><p>Yes. We start with your goals, interests and qualifications, then help you understand what to consider next.</p></details><details><summary>Do I need to know my exact university choice first?</summary><p>No. You can begin with a conversation. The point is to create a confident shortlist, not rush into a decision.</p></details><details><summary>Can parents join the consultation?</summary><p>Of course. We welcome parents and guardians to be part of the planning conversation.</p></details></section></>;
}

function About({ navigate }: { navigate: (page: Page) => void }) {
  return <PageHero label="About Lumora" title={<>We make the next<br />step feel <em>possible.</em></>} text="Lumora Consultancy Limited brings warmth and clarity to one of life's most important decisions: where to learn, grow and belong." action="Speak with our team" onAction={() => navigate('/contact')} aside={<div className="about-art"><img src={campusArrival} alt="Students arriving at a modern university building" /><img src={lumoraPathway} alt="Abstract blue pathway illustration" /></div>}>
    <section className="content-band"><Eyebrow>What guides us</Eyebrow><h2>A small team with<br />a wide horizon.</h2><div className="feature-grid values">{[['Care', 'Every student is a person before they are an application.'], ['Clarity', 'Good guidance should make complex decisions feel lighter.'], ['Possibility', 'The right opportunity can change the direction of a life.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </PageHero>;
}

function ApplicationGuide() {
  const [started, setStarted] = useState(false);
  const startWhatsAppApplication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const lines: string[] = ['Hello Lumora, I would like to start my application.'];
    details.forEach((value, key) => lines.push(`${key}: ${value}`));
    window.location.href = `https://wa.me/601139009572?text=${encodeURIComponent(lines.join('\n'))}`;
    setStarted(true);
  };
  return <><PageHero label="Your application guide" title={<>A clear way<br />to <em>get started.</em></>} text="You do not need to have every document or decision ready today. This is the simple path from your first conversation to your next step. Families are welcome to take part too." action="Start on WhatsApp" onAction={() => document.querySelector('#whatsapp-application')?.scrollIntoView({ behavior: 'smooth' })} aside={<div className="photo-art campus-art"><img src={campusWalk} alt="Students walking through a university campus" /><div className="photo-caption">Your next step<br />starts here.</div></div>}>
    <section className="apply-steps"><Eyebrow>How it works</Eyebrow><h2>Four steps. One<br /><em>supportive team.</em></h2><div className="apply-grid">{[['01', 'Tell us your plan', 'Share your study interests, current qualification and what you hope to achieve.'], ['02', 'Get clear guidance', 'We help you understand your study options and the documents to prepare.'], ['03', 'Prepare your application', 'Work through your details and documents with a clear checklist.'], ['04', 'Move forward confidently', 'Confirm your next step with support from Lumora.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="checklist"><div><Eyebrow>Application checklist</Eyebrow><h2>Have these ready<br />when <em>you can.</em></h2><p>This is a simple starting list. Lumora will tell you what is needed for your own study plan.</p></div><div className="checklist-list">{['Your latest academic results or certificate', 'A clear copy of your passport, if you have one', 'Your preferred course or study area', 'A parent or guardian contact, if relevant', 'Questions about budget, timing or entry routes'].map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><i>✓</i></div>)}</div></section>
  </PageHero><section className="whatsapp-apply" id="whatsapp-application"><div><Eyebrow light>Apply via WhatsApp</Eyebrow><h2>Start with a<br /><em>simple message.</em></h2><p>Complete these few details, then WhatsApp will open with your application message ready to send to Lumora.</p></div><form onSubmit={startWhatsAppApplication}><label>Your name<input name="Name" required placeholder="Your name" /></label><label>I am a<select name="I am a" required defaultValue=""><option value="" disabled>Select an option</option><option>Student</option><option>Parent or guardian</option></select></label><label>Qualification<select name="Current qualification" required defaultValue=""><option value="" disabled>Select your qualification</option><option>Secondary school or high school certificate</option><option>IGCSE</option><option>A Levels</option><option>International Baccalaureate (IB)</option><option>BTEC or vocational qualification</option><option>Diploma or degree</option></select></label><label>Study interest<input name="Study interest" required placeholder="e.g. Computer Science" /></label><button type="submit">{started ? 'Open WhatsApp to send' : 'Start application on WhatsApp'} <Arrow /></button></form></section></>;
}

function Privacy() {
  return <main className="privacy-page"><Eyebrow>Your privacy</Eyebrow><h1>Privacy made<br /><em>clear.</em></h1><p className="privacy-intro">Lumora Consultancy Limited respects the privacy of students, parents and guardians who contact us.</p><div className="privacy-list"><article><h2>What we collect</h2><p>We may collect names, contact details, current qualifications, study interests and the information you choose to share in an enquiry.</p></article><article><h2>Why we collect it</h2><p>We use this information only to respond to your enquiry, provide student guidance and arrange requested consultations.</p></article><article><h2>How we protect it</h2><p>We do not sell personal information. Access is limited to Lumora team members who need it to support your enquiry.</p></article><article><h2>Your choices</h2><p>You may ask us to update or delete your information by contacting Lumora through WhatsApp or email.</p></article></div></main>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [booked, setBooked] = useState(false);
  const sendEmail = (event: React.FormEvent<HTMLFormElement>, subject: string, setStatus: (value: boolean) => void) => {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const lines: string[] = [];
    details.forEach((value, key) => lines.push(`${key}: ${value}`));
    const query = new URLSearchParams({ subject, body: `Hello Lumora,\n\n${lines.join('\n')}\n\nSent from the Lumora website.` });
    window.location.href = `mailto:services.lumora@outlook.com?${query.toString()}`;
    setStatus(true);
  };
  return <main className="contact-page"><section><Eyebrow>Start a conversation</Eyebrow><h1>Let’s make<br />a plan <em>together.</em></h1><p>Whether you are a student, parent or guardian, we would love to hear from you.</p><div className="contact-note"><span>Good decisions start with<br />a simple hello.</span><i>✦</i></div><a className="whatsapp-link" href="https://wa.me/601139009572?text=Hello%20Lumora%2C%20I%20would%20like%20help%20studying%20in%20Malaysia." target="_blank" rel="noreferrer">Ask us on WhatsApp <span>↗</span></a></section><div className="contact-forms"><form onSubmit={(event) => sendEmail(event, 'New Lumora website enquiry', setSent)}><h3>Send an enquiry</h3><label>I am a<select name="I am a" required defaultValue=""><option value="" disabled>Select an option</option><option>Student</option><option>Parent or guardian</option></select></label><label>Full name<input name="Full name" required placeholder="Your name" /></label><label>Email address<input name="Email address" required type="email" placeholder="you@example.com" /></label><label>What can we help with?<textarea name="Enquiry" required placeholder="Tell us a little about your plans" /></label><button type="submit">{sent ? 'Email draft opened' : 'Send enquiry'} <Arrow /></button></form><form className="booking-form" onSubmit={(event) => sendEmail(event, 'New Lumora consultation request', setBooked)}><h3>Book a free consultation</h3><label>Preferred date<input name="Preferred date" type="date" required /></label><label>Preferred time<select name="Preferred time" required defaultValue=""><option value="" disabled>Choose a time</option><option>10:00 AM</option><option>1:00 PM</option><option>4:00 PM</option></select></label><label>Your email<input name="Email address" required type="email" placeholder="you@example.com" /></label><button type="submit">{booked ? 'Email draft opened' : 'Request a consultation'} <Arrow /></button><small>Your email app will open with the request ready to send to Lumora.</small></form></div></main>;
}

function PageHero({ label, title, text, action, onAction, aside, children }: { label: string; title: React.ReactNode; text: string; action: string; onAction: () => void; aside: React.ReactNode; children: React.ReactNode }) {
  return <><section className="inner-hero"><div className="grid" /><div className="inner-copy"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p><Button onClick={onAction}>{action}</Button></div><div className="inner-art">{aside}</div></section>{children}</>;
}

export default function App() {
  const pageFromPath = (): Page => (['/', '/students', '/study-in-malaysia', '/how-to-apply', '/about', '/contact', '/privacy'].includes(window.location.pathname) ? window.location.pathname as Page : '/');
  const [page, setPage] = useState<Page>(pageFromPath);
  const navigate = (next: Page) => { window.history.pushState({}, '', next); setPage(next); window.scrollTo(0, 0); };
  useEffect(() => { const back = () => setPage(pageFromPath()); window.addEventListener('popstate', back); return () => window.removeEventListener('popstate', back); }, []);
  useEffect(() => {
    const titles: Record<Page, string> = { '/': 'Lumora | Study in Malaysia', '/students': 'For Students & Families | Lumora', '/study-in-malaysia': 'Study in Malaysia | Lumora', '/how-to-apply': 'How to Apply | Lumora', '/about': 'About Lumora', '/contact': 'Contact Lumora', '/privacy': 'Privacy | Lumora' };
    document.title = titles[page];
  }, [page]);
  const content = page === '/' ? <Home navigate={navigate} /> : page === '/students' ? <Students navigate={navigate} /> : page === '/study-in-malaysia' ? <Malaysia navigate={navigate} /> : page === '/how-to-apply' ? <ApplicationGuide /> : page === '/about' ? <About navigate={navigate} /> : page === '/privacy' ? <Privacy /> : <Contact />;
  return <div className="site"><Header page={page} navigate={navigate} />{content}<a className="whatsapp-float" href="https://wa.me/601139009572?text=Hello%20Lumora%2C%20I%20would%20like%20help%20studying%20in%20Malaysia." target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation">⌁<span>WhatsApp us</span></a><footer><span>© {new Date().getFullYear()} Lumora Consultancy Limited</span><span>Turning potential into possibility.</span><div className="footer-links"><button onClick={() => navigate('/privacy')}>Privacy</button><a href="#" onClick={(event) => event.preventDefault()}>Instagram</a><a href="#" onClick={(event) => event.preventDefault()}>Facebook</a><a href="#" onClick={(event) => event.preventDefault()}>LinkedIn</a></div></footer></div>;
}
