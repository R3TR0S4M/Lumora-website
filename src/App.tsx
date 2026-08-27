import { useEffect, useState } from 'react';
import campusArrival from './assets/campus-arrival.jpg';
import campusWalk from './assets/campus-walk.jpg';
import studentFriends from './assets/student-friends.jpg';
import lumoraLogo from './assets/lumora-consulting-logo-transparent.png';
import advisorConsultation from './assets/advisor-consultation.jpg';
import studentCelebration from './assets/student-celebration.jpg';
import graduation from './assets/graduation.jpg';
import studentsStudying from './assets/students-studying.jpg';
import studentsCampusWalk from './assets/students-campus-walk.jpg';
import studentsArriving from './assets/students-arriving.jpg';
import studentsDocuments from './assets/students-documents.jpg';
import courseTechnology from './assets/course-technology.jpg';
import courseEngineering from './assets/course-engineering.jpg';
import courseCreative from './assets/course-creative.jpg';

type Page = '/' | '/students' | '/study-in-malaysia' | '/course-finder' | '/how-to-apply' | '/document-checklist' | '/resources' | '/application-progress' | '/about' | '/contact' | '/privacy';

const pages: { label: string; path: Page }[] = [
  { label: 'For students', path: '/students' },
  { label: 'Study in Malaysia', path: '/study-in-malaysia' },
  { label: 'Course finder', path: '/course-finder' },
  { label: 'How to apply', path: '/how-to-apply' },
  { label: 'Resources', path: '/resources' },
  { label: 'About Lumora', path: '/about' },
];

function Arrow() { return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>; }

function Header({ page, navigate }: { page: Page; navigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);
  const go = (path: Page) => { navigate(path); setOpen(false); };
  return <>
    <header className="header">
      <button className="brand" onClick={() => go('/')} aria-label="Lumora Consulting home"><img src={lumoraLogo} alt="Lumora Consulting" /></button>
      <nav aria-label="Main navigation">{pages.map((item) => <button className={page === item.path ? 'active' : ''} aria-current={page === item.path ? 'page' : undefined} key={item.path} onClick={() => go(item.path)}>{item.label}</button>)}</nav>
      <button className="header-button" onClick={() => go('/contact')}>Talk to us <Arrow /></button>
      <button className={`menu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation"><i /><i /></button>
    </header>
    <div className={`mobile-nav ${open ? 'open' : ''}`} id="mobile-navigation" aria-hidden={!open}>{pages.map((item) => <button key={item.path} onClick={() => go(item.path)}>{item.label}</button>)}<button onClick={() => go('/contact')}>Talk to us <Arrow /></button></div>
  </>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) { return <p className={`eyebrow ${light ? 'light' : ''}`}><span />{children}</p>; }
function Button({ children, onClick, light = false }: { children: React.ReactNode; onClick: () => void; light?: boolean }) { return <button className={`cta ${light ? 'light' : ''}`} onClick={onClick}>{children}<Arrow /></button>; }

function Home({ navigate }: { navigate: (page: Page) => void }) {
  return <>
    <section className="hero">
      <div className="grid" />
      <div className="hero-copy"><Eyebrow>For African students, made clearer</Eyebrow><h1>Find the university<br />that <em>finds you.</em></h1><p>Personal guidance for ambitious African students planning their next chapter in Malaysia.</p><p className="free-application-note"><span>✓</span> No application fee when you apply through Lumora.</p><div className="actions"><Button onClick={() => navigate('/study-in-malaysia')}>Study in Malaysia</Button><button className="plain-link" onClick={() => navigate('/about')}>Why Lumora <span>↓</span></button></div></div>
      <div className="orbit-stage" aria-hidden="true"><i className="orbit a" /><i className="orbit b" /><i className="orbit c" /><i className="dot one" /><i className="dot two" /><i className="dot three" /><div className="globe"><i /><i /><i /><i /><b>GO</b></div><div className="float-card first"><small>01</small><strong>Apply with<br />confidence</strong></div><div className="float-card second"><small>02</small><strong>Accept your<br />best offer</strong></div></div>
      <div className="hero-foot"><span>Independent student recruitment<br />and advisory</span><button onClick={() => navigate('/students')}>Scroll to discover ↓</button></div>
    </section>
    <section className="stats"><p>Clear advice. Malaysian perspective. A plan built around you.</p><div><strong>1:1</strong>guided support</div><div><strong>MY</strong>focused guidance</div><div><strong>∞</strong>possibilities</div></section>
    <section className="malaysia-banner"><div><Eyebrow light>Malaysia, in focus</Eyebrow><h2>Study closer to<br /><em>your future.</em></h2><p>Explore programmes, compare what matters and get a clear plan for studying in Malaysia.</p><Button light onClick={() => navigate('/study-in-malaysia')}>Explore Malaysia</Button></div><img src={campusArrival} alt="Students arriving at a university campus in Malaysia" /></section>
    <section className="study-finder"><div className="finder-heading"><Eyebrow>Find your direction</Eyebrow><h2>Start with a course.<br /><em>Leave with a plan.</em></h2><p>You do not need a university shortlist to begin. Answer a few simple questions and get a useful direction for your first consultation.</p></div><div className="home-finder-card"><p className="finder-card-intro">Not sure what to study?</p><h3>Try the Lumora course finder.</h3><p>It takes around one minute and gives you a starting point based on your interests.</p><Button onClick={() => navigate('/course-finder')}>Find my direction</Button></div></section>
    <section className="levels-section"><div className="level-title"><Eyebrow>Choose your pathway</Eyebrow><h2>There is more than<br />one way <em>forward.</em></h2></div><div className="level-grid">{[['01', 'After Grade 12', 'Explore foundation, diploma and degree routes after secondary school.'], ['02', 'Diploma', 'Build practical knowledge and keep your options open.'], ['03', 'Bachelor’s degree', 'Explore a degree direction aligned with your ambitions.'], ['04', 'Postgraduate study', 'Take your expertise and career further.']].map(([number, title, text]) => <button key={title} onClick={() => navigate('/study-in-malaysia')}><span>{number}</span><h3>{title}</h3><p>{text}</p><Arrow /></button>)}</div></section>
    <section className="guide-section"><div><Eyebrow>Malaysia study guides</Eyebrow><h2>Answers for the<br /><em>next big question.</em></h2><p>Practical, parent-friendly guidance for students planning to study in Malaysia.</p><Button onClick={() => navigate('/resources')}>Explore free guides</Button></div><div className="guide-list">{[['Choosing a course', 'How to compare your interests, strengths and future options.'], ['Understanding entry routes', 'A simple guide to planning after secondary school.'], ['Preparing for your consultation', 'The questions that help you get the most from your first chat.']].map(([title, text], index) => <article key={title}><span>Guide 0{index + 1}</span><h3>{title}</h3><p>{text}</p><button onClick={() => navigate('/resources')} aria-label={`Read ${title}`}><Arrow /></button></article>)}</div></section>
    <section className="split-intro"><div><Eyebrow>The Lumora way</Eyebrow><h2>Big decisions deserve<br />a human approach.</h2></div><div className="steps">{[['01', 'We listen first', 'Your goals, grades and budget are where we begin.'], ['02', 'We match with care', 'Together, we build a shortlist that makes sense.'], ['03', 'We move forward', 'From applications to offers, we stay in your corner.']].map(([n, title, text]) => <article key={n}><small>{n}</small><h3>{title}</h3><p>{text}</p><Arrow /></article>)}</div></section>
    <section className="image-story"><div className="story-copy"><Eyebrow>Student life starts here</Eyebrow><h2>Picture the<br /><em>possibility.</em></h2><p>Every new campus is a place to meet people, test ideas and grow into the person you are becoming.</p><Button onClick={() => navigate('/students')}>See student support</Button></div><div className="story-images"><img className="main-image" src={studentFriends} alt="Two students talking together outdoors" /><img className="small-image" src={campusWalk} alt="Students walking through a university campus" /></div></section>
  </>;
}

function Students({ navigate }: { navigate: (page: Page) => void }) {
  return <PageHero label="For students" title={<>A clearer way<br />to <em>go further.</em></>} text="You do not need every answer today. You need someone who listens, sees your potential and helps you make a confident next move. Parents and guardians are always welcome in the conversation." action="Start your journey" onAction={() => navigate('/contact')} aside={<div className="photo-art student-art"><img src={studentFriends} alt="Two students sharing a conversation outdoors" /><div className="photo-caption">Your next chapter<br />looks good on you.</div></div>}>
    <section className="content-band"><Eyebrow>Built around you</Eyebrow><h2>More than an application.<br />A plan that feels like yours.</h2><div className="feature-grid">{[['Your direction', 'Explore courses, pathways and locations that match who you are becoming.'], ['Your application', 'Get practical help to prepare a compelling, complete application. Through Lumora’s university connections, students do not pay an application fee.'], ['Your decision', 'Compare your options and make the choice that feels right.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="journey-section"><Eyebrow>Student journeys</Eyebrow><h2>Support for the<br /><em>whole transition.</em></h2><p className="journey-intro">From your first question to your first day on campus, Lumora makes the process feel more manageable.</p><div className="journey-cards"><article><span>Before you apply</span><h3>Understand your choices</h3><p>Course, budget and intake guidance without the noise.</p></article><article><span>While you apply</span><h3>Keep every detail moving</h3><p>A clear checklist, document support and honest advice.</p></article><article><span>When you decide</span><h3>Feel ready to begin</h3><p>Choose your next step with clarity and confidence.</p></article></div></section>
    <section className="student-life-section"><div><Eyebrow>More than a campus</Eyebrow><h2>Make room for<br /><em>your next chapter.</em></h2><p>Studying in Malaysia is a chance to learn, meet people from around the world and build the independence that follows you long after graduation.</p></div><div className="student-life-gallery"><img className="life-main" src={studentsStudying} alt="Two students studying together on campus" /><img className="life-top" src={studentsCampusWalk} alt="Two students walking and talking on campus" /><img className="life-bottom" src={studentsArriving} alt="Students arriving at a university building" /></div></section>
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
  return <PageHero label="About Lumora" title={<>We make the next<br />step feel <em>possible.</em></>} text="Lumora Consultancy Limited brings warmth, honest advice and practical guidance to one of life's most important decisions: where to learn, grow and belong." action="Speak with our team" onAction={() => navigate('/contact')} aside={<div className="about-art"><img src={advisorConsultation} alt="An education advisor speaking with a student" /><img src={studentCelebration} alt="Two students celebrating outside a campus building" /></div>}>
    <section className="content-band"><Eyebrow>What guides us</Eyebrow><h2>A small team with<br />a wide horizon.</h2><p className="section-intro">We believe study advice should feel personal, not overwhelming. Lumora listens carefully, explains the options in plain language and helps students take one confident step at a time.</p><div className="feature-grid values">{[['Care', 'Every student is a person before they are an application. We make space for their ambitions, questions and circumstances.'], ['Clarity', 'From qualifications and courses to budgets and next steps, we turn complicated information into a plan you can understand.'], ['Possibility', 'The right opportunity can change the direction of a life. We help students look beyond uncertainty and see what could be next.']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-story-section"><div className="about-story-copy"><Eyebrow>Our approach</Eyebrow><h2>Guidance that starts<br />with <em>listening.</em></h2><p>There is no single right route into higher education. Every student arrives with a different academic background, budget, timeline and vision for the future. That is why our first job is to understand your story.</p><p>From there, we help you explore study directions in Malaysia, organise what needs to happen next and feel supported as decisions become real plans. You will always know what you are working towards and why.</p><Button onClick={() => navigate('/course-finder')}>Find my direction</Button></div><div className="about-story-image"><img src={advisorConsultation} alt="A supportive one-to-one student consultation" /><span>Clear advice.<br />Real support.</span></div></section>
    <section className="lumora-support"><div><Eyebrow light>How Lumora supports you</Eyebrow><h2>Thoughtful help at<br />every <em>turn.</em></h2><p>We are here to help students move from first questions to a confident next chapter, with families welcomed into the conversation.</p></div><div className="support-list">{[['01', 'Explore your options', 'Talk through your interests, qualifications and what you want from your student experience.'], ['02', 'Build a practical plan', 'Understand your pathway, prepare your information and make decisions at a pace that works for you.'], ['03', 'Feel ready to move', 'Ask the questions that matter, get clear answers and take the next step with more confidence.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="about-family"><img src={studentCelebration} alt="Two happy students standing outside a modern university building" /><div><Eyebrow>For students and families</Eyebrow><h2>Big decisions work<br />better when shared.</h2><p>Studying abroad is exciting, and it can bring important questions for parents and guardians too. Lumora welcomes family members into the planning process, so everyone can understand the options, timing and practical next steps.</p><Button onClick={() => navigate('/contact')}>Start a conversation</Button></div></section>
  </PageHero>;
}

function ApplicationGuide({ navigate }: { navigate: (page: Page) => void }) {
  const [started, setStarted] = useState(false);
  const startWhatsAppApplication = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const lines: string[] = ['Hello Lumora, I would like to start my application.'];
    details.forEach((value, key) => lines.push(`${key}: ${value}`));
    window.location.href = `https://wa.me/601139009572?text=${encodeURIComponent(lines.join('\n'))}`;
    setStarted(true);
  };
  return <><PageHero label="Your application guide" title={<>A clear way<br />to <em>get started.</em></>} text="You do not need to have every document or decision ready today. Through Lumora’s university connections, students can apply without paying an application fee. Families are welcome to take part too." action="Choose how to start" onAction={() => document.querySelector('#start-application')?.scrollIntoView({ behavior: 'smooth' })} aside={<div className="photo-art campus-art"><img src={graduation} alt="A graduate celebrating an academic achievement" /><div className="photo-caption">Your next step<br />starts here.</div></div>}>
    <section className="apply-steps"><Eyebrow>How it works</Eyebrow><h2>Four steps. One<br /><em>supportive team.</em></h2><div className="apply-grid">{[['01', 'Tell us your plan', 'Share your study interests, current qualification and what you hope to achieve.'], ['02', 'Get clear guidance', 'We help you understand your study options and the documents to prepare.'], ['03', 'Prepare your application', 'Work through your details and documents with a clear checklist.'], ['04', 'Move forward confidently', 'Confirm your next step with support from Lumora.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="free-applications-section"><div><Eyebrow light>Free applications</Eyebrow><h2>Apply with no<br /><em>application fee.</em></h2><p>Through Lumora’s university connections, students can submit their applications without paying an application fee. That means you can focus on choosing the right course and preparing a strong application.</p></div><img className="free-applications-image" src={studentsDocuments} alt="Students reviewing application documents together" /><div className="free-applications-points"><article><span>01</span><h3>More room to plan</h3><p>Use your budget for the parts of your study journey that matter most to you.</p></article><article><span>02</span><h3>Guidance without pressure</h3><p>Ask questions, compare your options and take your next step at a pace that feels right.</p></article><article><span>03</span><h3>Clear from the start</h3><p>We will explain the application process and what you need to prepare before you begin.</p></article></div></section>
    <section className="checklist"><div><Eyebrow>Application checklist</Eyebrow><h2>Have these ready<br />when <em>you can.</em></h2><p>This is a simple starting list. Lumora will tell you what is needed for your own study plan.</p><Button onClick={() => navigate('/document-checklist')}>Open my checklist</Button></div><div className="checklist-list">{['Your latest academic results or certificate', 'A clear copy of your passport, if you have one', 'Your preferred course or study area', 'A parent or guardian contact, if relevant', 'Questions about budget, timing or entry routes'].map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><i>✓</i></div>)}</div></section>
  </PageHero><section className="application-choice" id="start-application"><div><Eyebrow>Start your application</Eyebrow><h2>Choose the way<br />that works <em>for you.</em></h2><p>Both options reach the Lumora team. Choose WhatsApp for a quicker conversation, or send an enquiry form if you would rather share your plans in writing.</p></div><div className="application-choice-actions"><button className="application-choice-whatsapp" onClick={() => document.querySelector('#whatsapp-application')?.scrollIntoView({ behavior: 'smooth' })}><span>Option 01</span><strong>Start on WhatsApp</strong><p>Send your details in a quick, guided message.</p><Arrow /></button><button className="application-choice-form" onClick={() => navigate('/contact')}><span>Option 02</span><strong>Use the enquiry form</strong><p>Tell us more about your study plans and we will reply.</p><Arrow /></button></div></section><section className="whatsapp-apply" id="whatsapp-application"><div><Eyebrow light>Apply via WhatsApp</Eyebrow><h2>Start with a<br /><em>simple message.</em></h2><p>Complete these few details, then WhatsApp will open with your application message ready to send to Lumora.</p></div><form onSubmit={startWhatsAppApplication}><label>Your name<input name="Name" required placeholder="Your name" /></label><label>I am a<select name="I am a" required defaultValue=""><option value="" disabled>Select an option</option><option>Student</option><option>Parent or guardian</option></select></label><label>Qualification<select name="Current qualification" required defaultValue=""><option value="" disabled>Select your qualification</option><option>Secondary school or high school certificate</option><option>IGCSE</option><option>A Levels</option><option>International Baccalaureate (IB)</option><option>BTEC or vocational qualification</option><option>Diploma or degree</option></select></label><label>Study interest<input name="Study interest" required placeholder="e.g. Computer Science" /></label><button type="submit">{started ? 'Open WhatsApp to send' : 'Start application on WhatsApp'} <Arrow /></button></form></section></>;
}

function DocumentChecklist({ navigate }: { navigate: (page: Page) => void }) {
  const documents = ['Latest academic results or certificate', 'Academic transcript, if available', 'Passport copy, if available', 'Preferred course or study area', 'Personal email address and phone number', 'Parent or guardian contact, if relevant', 'Questions about budget, timing or entry routes'];
  const [checked, setChecked] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('lumora-document-checklist') ?? '[]'); } catch { return []; }
  });
  useEffect(() => { localStorage.setItem('lumora-document-checklist', JSON.stringify(checked)); }, [checked]);
  const toggle = (item: string) => setChecked((current) => current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item]);
  const progress = Math.round((checked.length / documents.length) * 100);
  return <main className="document-page"><section className="document-intro"><Eyebrow>My document checklist</Eyebrow><h1>Get ready,<br /><em>one step at a time.</em></h1><p>Use this simple checklist to organise what you already have. Your progress is saved only on this device, and Lumora will confirm what is needed for your personal study plan.</p><div className="check-progress" aria-label={`${checked.length} of ${documents.length} checklist items complete`}><div><strong>{checked.length}</strong><span>of {documents.length} ready</span></div><div className="progress-bar"><i style={{ width: `${progress}%` }} /></div><small>{progress}% complete</small></div></section><section className="document-list" aria-label="Document checklist">{documents.map((item, index) => <button type="button" className={checked.includes(item) ? 'checked' : ''} aria-pressed={checked.includes(item)} key={item} onClick={() => toggle(item)}><span>0{index + 1}</span><strong>{item}</strong><i>{checked.includes(item) ? '✓' : ''}</i></button>)}</section><section className="document-next"><div><Eyebrow light>Ready for the next step?</Eyebrow><h2>Let’s turn your list<br />into a <em>plan.</em></h2><p>Once you have made a start, send Lumora an enquiry and we will help you understand what comes next.</p></div><Button light onClick={() => navigate('/contact')}>Talk to Lumora</Button></section></main>;
}

function CourseFinder({ navigate }: { navigate: (page: Page) => void }) {
  const [interest, setInterest] = useState('');
  const [style, setStyle] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState<{ title: string; text: string } | null>(null);
  const getResult = () => {
    const suggestions: Record<string, { title: string; text: string }> = {
      'Technology and problem-solving': { title: 'Computer science & IT', text: 'A strong starting point if you enjoy systems, digital tools and solving practical problems.' },
      'Design and creative ideas': { title: 'Creative arts & design', text: 'Consider a creative pathway where visual thinking, communication and original ideas are valued.' },
      'People, wellbeing and science': { title: 'Health & life sciences', text: 'A good area to explore if you are interested in people, wellbeing and how the world works.' },
      'Business, money and leadership': { title: 'Business & management', text: 'A useful direction for students drawn to organisations, entrepreneurship, leadership or finance.' },
      'Buildings, places and how things work': { title: 'Engineering & built environment', text: 'Explore pathways that bring together practical problem-solving, design and technical thinking.' },
      'Society, communication and justice': { title: 'Social sciences, law & communications', text: 'A starting point for students interested in people, ideas, media, society and positive change.' },
    };
    setResult(suggestions[interest] ?? { title: 'A personalised study direction', text: 'You have made a useful start. Let’s talk through your interests and find a pathway that feels right.' });
  };
  return <main className="quiz-page"><section className="quiz-hero"><div className="quiz-intro"><Eyebrow>Course finder</Eyebrow><h1>Find a direction<br /><em>that feels like you.</em></h1><p>This quick guide does not choose a university or make a decision for you. It simply gives you a thoughtful starting point for exploring courses in Malaysia.</p><span className="quiz-note">Explore your interests. Then make your next move with confidence.</span></div><div className="quiz-gallery" aria-label="Students exploring different study directions"><img className="quiz-image-main" src={courseTechnology} alt="Student working on computer programming" /><img className="quiz-image-top" src={courseEngineering} alt="Student working with engineering equipment" /><img className="quiz-image-bottom" src={courseCreative} alt="Student focused on creative work" /></div></section><section className="quiz-card" aria-labelledby="quiz-heading"><div><span className="quiz-step">About one minute</span><h2 id="quiz-heading">What are you naturally drawn to?</h2></div><label><span>1. Which subject area sounds most like you?</span><div className="select-control"><select value={interest} onChange={(event) => setInterest(event.target.value)}><option value="" disabled>Choose an area</option><option>Technology and problem-solving</option><option>Design and creative ideas</option><option>People, wellbeing and science</option><option>Business, money and leadership</option><option>Buildings, places and how things work</option><option>Society, communication and justice</option></select><i aria-hidden="true">⌄</i></div></label><label><span>2. How do you prefer to learn?</span><div className="select-control"><select value={style} onChange={(event) => setStyle(event.target.value)}><option value="" disabled>Choose a style</option><option>By creating and trying things</option><option>By analysing ideas and information</option><option>By working with people</option><option>By solving real-world problems</option></select><i aria-hidden="true">⌄</i></div></label><label><span>3. What matters most in your next step?</span><div className="select-control"><select value={goal} onChange={(event) => setGoal(event.target.value)}><option value="" disabled>Choose a priority</option><option>Building practical career skills</option><option>Exploring a subject I enjoy</option><option>Keeping future options open</option><option>Making a positive impact</option></select><i aria-hidden="true">⌄</i></div></label><button className="cta" type="button" disabled={!interest || !style || !goal} onClick={getResult}>See my starting point <Arrow /></button>{result && <div className="quiz-result" role="status" aria-live="polite"><small>Your suggested area to explore</small><h3>{result.title}</h3><p>{result.text}</p><Button onClick={() => navigate('/contact')}>Discuss this with Lumora</Button></div>}</section></main>;
}

function Resources({ navigate }: { navigate: (page: Page) => void }) {
  const guides = [
    ['01', 'Choosing a course', 'A calm way to compare interests, strengths and future possibilities.', 'Begin with three lists: subjects you enjoy, tasks you are good at, and careers you are curious about. Look for patterns, then ask Lumora which study routes could match them.'],
    ['02', 'Planning your budget', 'The questions to ask early when thinking about tuition, living costs and support.', 'Think beyond tuition. Ask about accommodation, meals, transport, visa-related costs and a small emergency budget. A realistic plan makes every later decision easier.'],
    ['03', 'Preparing documents', 'A simple checklist for academic records, identification and application information.', 'Keep clear digital copies of your latest results, certificate, passport if available, and any supporting documents. Name files clearly so they are easy to find when you need them.'],
    ['04', 'Getting ready for Malaysia', 'Practical topics to discuss before you travel, from accommodation to settling in.', 'Before travelling, talk through accommodation, arrival plans, what to pack, local communication and how you will stay in touch with family. Small preparations can make the transition feel much calmer.'],
  ];
  return <main className="resources-page"><section className="resources-intro"><Eyebrow>Free planning resources</Eyebrow><h1>Helpful answers,<br /><em>before you ask.</em></h1><p>Clear, simple starting points for students and the families supporting them. Use these guides to prepare for a more useful conversation with Lumora.</p></section><section className="resource-grid" aria-label="Study planning guides">{guides.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p><a href={`#guide-${number}`}>Read the guide <Arrow /></a></article>)}</section><section className="resource-notes" aria-label="Quick study planning guides">{guides.map(([number, title, , advice]) => <details id={`guide-${number}`} key={number}><summary><span>{number}</span>{title}</summary><p>{advice}</p></details>)}</section><section className="resource-cta"><div><Eyebrow light>Still unsure?</Eyebrow><h2>You do not need to<br /><em>figure it out alone.</em></h2></div><Button light onClick={() => navigate('/course-finder')}>Try the course finder</Button></section></main>;
}

function ApplicationProgress({ navigate }: { navigate: (page: Page) => void }) {
  const steps = [
    ['01', 'Your enquiry', 'Tell us about your study interests, qualification and ideal intake.'],
    ['02', 'Your consultation', 'We talk through the options, questions and documents that matter to you.'],
    ['03', 'Your application plan', 'You receive a clear next-step checklist and support to prepare.'],
    ['04', 'Your next chapter', 'When it is time to move forward, Lumora stays in your corner.'],
  ];
  return <main className="progress-page"><section className="progress-intro"><Eyebrow>Application progress</Eyebrow><h1>Always know<br /><em>what comes next.</em></h1><p>This is the support journey you can expect when you choose Lumora. It is a guide, not a live account tracker, so you will always speak to a real person about your application.</p><Button onClick={() => navigate('/contact')}>Start my enquiry</Button></section><section className="progress-track" aria-label="Your Lumora application journey">{steps.map(([number, title, text], index) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div>{index < steps.length - 1 && <i aria-hidden="true">↓</i>}</article>)}</section><section className="progress-note"><strong>A quick note for families</strong><p>Parents and guardians are welcome in every conversation. We can explain the process, answer practical questions and help everyone feel informed.</p></section></main>;
}

function Privacy() {
  return <main className="privacy-page"><Eyebrow>Your privacy</Eyebrow><h1>Privacy made<br /><em>clear.</em></h1><p className="privacy-intro">Lumora Consultancy Limited respects the privacy of students, parents and guardians who contact us.</p><div className="privacy-list"><article><h2>What we collect</h2><p>We may collect names, contact details, current qualifications, study interests and the information you choose to share in an enquiry.</p></article><article><h2>Why we collect it</h2><p>We use this information only to respond to your enquiry, provide student guidance and arrange requested consultations.</p></article><article><h2>How we protect it</h2><p>We do not sell personal information. Access is limited to Lumora team members who need it to support your enquiry.</p></article><article><h2>Your choices</h2><p>You may ask us to update or delete your information by contacting Lumora through WhatsApp or email.</p></article></div></main>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [enquiryError, setEnquiryError] = useState(false);
  const [booked, setBooked] = useState(false);
  const [bookingSending, setBookingSending] = useState(false);
  const [bookingError, setBookingError] = useState(false);
  const sendEnquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setEnquiryError(false);
    try {
      const response = await fetch('https://formspree.io/f/mdeonvqd', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Enquiry could not be sent');
      form.reset();
      setSent(true);
    } catch {
      setEnquiryError(true);
    } finally {
      setSending(false);
    }
  };
  const sendConsultation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setBookingSending(true);
    setBookingError(false);
    try {
      const response = await fetch('https://formspree.io/f/mzebplpo', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Consultation request could not be sent');
      form.reset();
      setBooked(true);
    } catch {
      setBookingError(true);
    } finally {
      setBookingSending(false);
    }
  };
  return <main className="contact-page"><section><Eyebrow>Start a conversation</Eyebrow><h1>Let’s make<br />a plan <em>together.</em></h1><p>Whether you are a student, parent or guardian, we would love to hear from you.</p><div className="contact-note"><span>Good decisions start with<br />a simple hello.</span><i>✦</i></div><a className="whatsapp-link" href="https://wa.me/601139009572?text=Hello%20Lumora%2C%20I%20would%20like%20help%20studying%20in%20Malaysia." target="_blank" rel="noreferrer">Ask us on WhatsApp <span>↗</span></a></section><div className="contact-forms"><form onSubmit={sendEnquiry}><h3>Send an enquiry</h3><label>I am a<select name="I am a" required defaultValue=""><option value="" disabled>Select an option</option><option>Student</option><option>Parent or guardian</option></select></label><label>Full name<input name="Full name" required placeholder="Your name" /></label><label>Email address<input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label><label>What can we help with?<textarea name="Enquiry" required placeholder="Tell us a little about your plans" /></label><button type="submit" disabled={sending}>{sent ? 'Enquiry sent successfully' : sending ? 'Sending enquiry...' : 'Send enquiry'} <Arrow /></button>{sent && <p className="form-success" role="status">Thank you. Lumora has received your enquiry and will be in touch.</p>}{enquiryError && <p className="form-error" role="alert">We could not send that just now. Please try again or use WhatsApp.</p>}</form><form className="booking-form" onSubmit={sendConsultation}><h3>Book a free consultation</h3><label>Full name<input name="Full name" required autoComplete="name" placeholder="Your name" /></label><label>Phone number<input name="Phone number" required type="tel" autoComplete="tel" placeholder="e.g. +260 97 123 4567" /></label><label>Your email<input name="email" required type="email" autoComplete="email" placeholder="you@example.com" /></label><label>Preferred date<input name="Preferred date" type="date" required /></label><label>Preferred time<select name="Preferred time" required defaultValue=""><option value="" disabled>Choose a time</option><option>10:00 AM</option><option>1:00 PM</option><option>4:00 PM</option></select></label><button type="submit" disabled={bookingSending}>{booked ? 'Request sent successfully' : bookingSending ? 'Sending request...' : 'Request a consultation'} <Arrow /></button>{booked && <p className="form-success" role="status">Thank you. Lumora has received your consultation request.</p>}{bookingError && <p className="form-error" role="alert">We could not send that just now. Please try again or use WhatsApp.</p>}</form></div></main>;
}

function PageHero({ label, title, text, action, onAction, aside, children }: { label: string; title: React.ReactNode; text: string; action: string; onAction: () => void; aside: React.ReactNode; children: React.ReactNode }) {
  return <><section className="inner-hero"><div className="grid" /><div className="inner-copy"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{text}</p><Button onClick={onAction}>{action}</Button></div><div className="inner-art">{aside}</div></section>{children}</>;
}

export default function App() {
  const pageFromPath = (): Page => (['/', '/students', '/study-in-malaysia', '/course-finder', '/how-to-apply', '/document-checklist', '/resources', '/application-progress', '/about', '/contact', '/privacy'].includes(window.location.pathname) ? window.location.pathname as Page : '/');
  const [page, setPage] = useState<Page>(pageFromPath);
  const navigate = (next: Page) => { window.history.pushState({}, '', next); setPage(next); window.scrollTo(0, 0); };
  useEffect(() => { const back = () => setPage(pageFromPath()); window.addEventListener('popstate', back); return () => window.removeEventListener('popstate', back); }, []);
  useEffect(() => {
    const titles: Record<Page, string> = { '/': 'Lumora | Study in Malaysia', '/students': 'For Students & Families | Lumora', '/study-in-malaysia': 'Study in Malaysia | Lumora', '/course-finder': 'Course Finder | Lumora', '/how-to-apply': 'How to Apply | Lumora', '/document-checklist': 'Document Checklist | Lumora', '/resources': 'Study Resources | Lumora', '/application-progress': 'Your Application Journey | Lumora', '/about': 'About Lumora', '/contact': 'Contact Lumora', '/privacy': 'Privacy | Lumora' };
    const descriptions: Record<Page, string> = { '/': 'Lumora Consultancy Limited helps students and families make confident plans to study in Malaysia.', '/students': 'Guidance for students, parents and guardians planning to study in Malaysia.', '/study-in-malaysia': 'Explore a clear, supportive route to studying in Malaysia with Lumora.', '/course-finder': 'Find a study direction to explore with Lumora’s quick course finder.', '/how-to-apply': 'Understand the simple steps to start your Malaysia study application with Lumora.', '/document-checklist': 'Use Lumora’s simple application document checklist to prepare for studying in Malaysia.', '/resources': 'Free, practical resources for students and families planning to study in Malaysia.', '/application-progress': 'See the supportive student application journey Lumora provides.', '/about': 'Learn about Lumora Consultancy Limited and our student-first approach.', '/contact': 'Contact Lumora for guidance on studying in Malaysia.', '/privacy': 'Read Lumora Consultancy Limited’s privacy information.' };
    document.title = titles[page];
    document.querySelector('meta[name="description"]')?.setAttribute('content', descriptions[page]);
  }, [page]);
  const content = page === '/' ? <Home navigate={navigate} /> : page === '/students' ? <Students navigate={navigate} /> : page === '/study-in-malaysia' ? <Malaysia navigate={navigate} /> : page === '/course-finder' ? <CourseFinder navigate={navigate} /> : page === '/how-to-apply' ? <ApplicationGuide navigate={navigate} /> : page === '/document-checklist' ? <DocumentChecklist navigate={navigate} /> : page === '/resources' ? <Resources navigate={navigate} /> : page === '/application-progress' ? <ApplicationProgress navigate={navigate} /> : page === '/about' ? <About navigate={navigate} /> : page === '/privacy' ? <Privacy /> : <Contact />;
  return <div className="site"><Header page={page} navigate={navigate} />{content}<a className="whatsapp-float" href="https://wa.me/601139009572?text=Hello%20Lumora%2C%20I%20would%20like%20help%20studying%20in%20Malaysia." target="_blank" rel="noreferrer" aria-label="Start a WhatsApp conversation">⌁<span>WhatsApp us</span></a><footer><span>© {new Date().getFullYear()} Lumora Consultancy Limited</span><span>Turning potential into possibility.</span><div className="footer-links"><button onClick={() => navigate('/course-finder')}>Course finder</button><button onClick={() => navigate('/application-progress')}>Application journey</button><button onClick={() => navigate('/privacy')}>Privacy</button><a href="#" onClick={(event) => event.preventDefault()}>Instagram</a><a href="#" onClick={(event) => event.preventDefault()}>Facebook</a><a href="#" onClick={(event) => event.preventDefault()}>LinkedIn</a></div></footer></div>;
}
