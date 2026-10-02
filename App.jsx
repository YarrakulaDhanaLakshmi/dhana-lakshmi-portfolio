import React from "react";
import {
  ArrowUpRight, Mail, MapPin, Download, Code2,
  Database, Layers3, BrainCircuit, ExternalLink, Menu, X, ChevronDown,
  BriefcaseBusiness, GraduationCap, Sparkles, Terminal, Globe2, Activity, ListChecks, KeyRound, Lightbulb, Wifi
} from "lucide-react";

const projects = [
  {
    number: "01", name: "Inventory Management System", category: "Full Stack · Microservices",
    description: "A Java-based inventory and purchase management capstone focused on organizing materials, vendors and purchase workflows.",
    stack: ["Java", "Spring Boot", "REST APIs", "Microservices"],
    link: "https://github.com/YarrakulaDhanaLakshmi",
    linkLabel: "Find repository on GitHub", note: "Add the exact project repository URL and verified UI screenshots before publishing."
  },
  {
    number: "02", name: "ECG Heartbeat Classification", category: "Machine Learning · Healthcare Data",
    description: "An experimental classification project using ECG heartbeat features and the MIT-BIH dataset to compare machine-learning approaches across heartbeat classes.",
    stack: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    link: "https://github.com/YarrakulaDhanaLakshmi",
    linkLabel: "View GitHub profile", note: "Notebook experiments reported approximately 99.6% accuracy for selected models. This is a dataset result, not clinical validation or a diagnostic tool."
  },
  {
    number: "03", name: "Parkinson’s Detection", category: "Machine Learning · Healthcare",
    description: "A healthcare-focused machine-learning project. See the repository for its implemented workflow, data and model details.",
    stack: ["Python", "Machine Learning"],
    link: "https://github.com/YarrakulaDhanaLakshmi/Parkinson-s",
    linkLabel: "View repository", note: "Project description kept general until the repository implementation is reviewed."
  },
  {
    number: "04", name: "Event RSVP & Invitation Management", category: "Web Application",
    description: "An event RSVP application where guests can submit responses and organizers can review them, with input validation and a responsive interface.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    link: "https://github.com/YarrakulaDhanaLakshmi/WEEK4",
    linkLabel: "View repository"
  },
  {
    number: "05", name: "Budget Planner", category: "Frontend Application",
    description: "A lightweight budget planner for entering monthly income and expenses, validating inputs and calculating the remaining budget.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/YarrakulaDhanaLakshmi/budget_planner",
    linkLabel: "View repository"
  },
  {
    number: "06", name: "Task Manager", category: "Productivity · Web Application",
    description: "A task-management project focused on organizing tasks and supporting a clearer day-to-day workflow.",
    stack: ["Web Development", "Task Management"],
    link: "https://github.com/YarrakulaDhanaLakshmi",
    linkLabel: "Find repository on GitHub", note: "Add the exact repository URL and confirm the implemented features before publishing."
  },
  {
    number: "07", name: "Password Generator", category: "Utility · Web Application",
    description: "A password-generator project for creating passwords through a simple user interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/YarrakulaDhanaLakshmi",
    linkLabel: "Find repository on GitHub", note: "Add the exact repository URL and verify its options and security details before publishing."
  },
  {
    number: "08", name: "Smart Lamp", category: "Smart Technology · Project",
    description: "A smart-lamp project exploring connected or automated lighting. The project details are kept broad until its hardware and implementation are confirmed.",
    stack: ["Smart Technology", "Automation"],
    link: "https://github.com/YarrakulaDhanaLakshmi",
    linkLabel: "Find repository on GitHub", note: "Add the exact repository or project link and confirmed hardware/software stack."
  }
];

const skillGroups = [
  { title: "Programming", icon: Code2, items: ["Java", "JavaScript", "Python", "SQL"] },
  { title: "Backend", icon: Layers3, items: ["Spring Boot", "Spring MVC", "REST APIs", "Node.js", "Express.js", "Microservices"] },
  { title: "Frontend", icon: Globe2, items: ["React", "HTML5", "CSS3", "Responsive UI"] },
  { title: "Data & Tools", icon: Database, items: ["MySQL", "Git & GitHub", "Maven", "Eclipse", "SonarQube"] }
];

function SectionHeading({eyebrow, title, text}) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]];
  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Dhana Lakshmi home"><span className="brand-mark">DL</span><span>Dhana Lakshmi<span className="brand-dot">.</span></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse" /> JAVA FULL STACK DEVELOPER <span className="availability-sep">/</span> GEN AI ENTHUSIAST</div>
          <h1>Building useful<br/><span className="gradient-text">digital experiences.</span></h1>
          <p className="hero-intro">Hi, I’m <strong>Dhana Lakshmi</strong> — a developer interested in building reliable backend services, thoughtful web interfaces and data-driven applications.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-secondary" href="#contact"><Mail size={16}/> Get in touch</a></div>
          <div className="social-row"><a href="https://github.com/YarrakulaDhanaLakshmi" target="_blank" rel="noreferrer"><span className="brand-glyph">GH</span> GitHub <ArrowUpRight size={13}/></a><span className="social-divider"/><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span className="brand-glyph">in</span> LinkedIn <ArrowUpRight size={13}/></a><span className="social-divider"/><span className="location"><MapPin size={15}/> India</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="profile-card">
            <div className="card-top"><span className="window-dots"><i/><i/><i/></span><span className="card-label">developer.profile</span><span className="card-menu">•••</span></div>
            <div className="avatar-area"><div className="avatar-halo"><div className="avatar-initials">DL</div></div><span className="floating-icon icon-code"><Code2 size={19}/></span><span className="floating-icon icon-brain"><BrainCircuit size={20}/></span></div>
            <div className="profile-meta"><span className="profile-kicker">HELLO, WORLD! <Sparkles size={13}/></span><h3>Dhana Lakshmi</h3><p>Java Full Stack Developer</p></div>
            <div className="code-snippet"><span className="code-line"><b>const</b> developer = {'{'}</span><span className="code-line indent">focus: <em>"Full Stack"</em>,</span><span className="code-line indent">learning: <em>"Gen AI"</em>,</span><span className="code-line indent">mindset: <em>"Build & grow"</em></span><span className="code-line">{'}'}<span className="cursor">▍</span></span></div>
          </div>
          <div className="floating-tag tag-top"><span className="tag-icon"><Terminal size={15}/></span> Problem solver</div>
          <div className="floating-tag tag-bottom"><span className="tag-icon tag-purple"><BrainCircuit size={15}/></span> Always learning</div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> Scroll to explore <ChevronDown size={14}/></a>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Developer by choice."/>
        <div className="about-grid"><div className="about-main"><p className="lead">I enjoy turning ideas into practical software — from backend logic and APIs to accessible, responsive interfaces.</p><p>My learning journey has given me hands-on exposure to Java, Spring Boot, RESTful services, React and machine-learning workflows. I’m continuing to strengthen my engineering fundamentals through projects, experimentation and collaborative learning.</p><p>I value clean code, clear communication and building solutions that are useful to the people who use them.</p><a className="text-link" href="https://github.com/YarrakulaDhanaLakshmi" target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a></div>
          <div className="about-aside"><div className="stat-card"><span className="stat-icon"><Code2 size={18}/></span><div><strong>Full Stack</strong><span>Backend & frontend development</span></div></div><div className="stat-card"><span className="stat-icon stat-violet"><BrainCircuit size={18}/></span><div><strong>AI / ML</strong><span>Exploring data-driven solutions</span></div></div><div className="stat-card"><span className="stat-icon stat-blue"><Sparkles size={18}/></span><div><strong>Growth mindset</strong><span>Learning through building</span></div></div></div></div>
      </section>

      <section className="skills-section section-pad" id="skills"><div className="section-wrap"><SectionHeading eyebrow="MY TOOLKIT" title="Technologies I work with" text="A snapshot of the languages, frameworks and tools I’ve used in my learning and projects."/><div className="skills-grid">{skillGroups.map(({title, icon: Icon, items}, idx) => <article className="skill-card" key={title}><div className={"skill-icon skill-icon-"+idx}><Icon size={20}/></div><h3>{title}</h3><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

      <section className="projects section-wrap section-pad" id="projects"><SectionHeading eyebrow="SELECTED WORK" title="Projects I’ve been building" text="A selection of academic, learning and practical projects. Open each repository for implementation details."/><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.number}><div className="project-card-head"><span className="project-number">{project.number} <span>—</span> PROJECT</span><a className="project-open" href={project.link} target="_blank" rel="noreferrer" aria-label={"Open "+project.name}><ArrowUpRight size={18}/></a></div><div className={"project-art art-"+i}><div className="art-grid"/>{i===0 ? <div className="mock-dashboard"><div className="mock-side"/><div className="mock-content"><i/><i/><div className="mock-bars"><b/><b/><b/><b/></div><div className="mock-table"><i/><i/><i/></div></div></div> : i===1 ? <div className="ecg-art"><span>ECG / SIGNAL ANALYSIS</span><svg viewBox="0 0 340 100" role="img" aria-label="Decorative ECG waveform"><path d="M0 54 H55 L69 53 L81 56 L94 52 L105 54 L118 54 L130 18 L143 86 L157 38 L169 54 H210 L223 52 L236 56 L249 53 L262 54 L275 17 L288 87 L301 38 L314 54 H340"/></svg><small>FEATURE EXTRACTION · CLASSIFICATION</small></div> : i===2 ? <div className="parkinsons-art"><div className="parkinsons-icon"><BrainCircuit size={62} strokeWidth={1.35}/><Activity size={25} strokeWidth={1.7}/></div><span>PARKINSON’S DISEASE STUDY</span><small>HEALTHCARE · MACHINE LEARNING</small></div> : i===3 ? <div className="rsvp-art"><div className="rsvp-window"><div className="rsvp-bar"/><div className="rsvp-check">✓</div><b>You're on the list!</b><span>RSVP confirmed</span><div className="rsvp-button">View event</div></div></div> : i===4 ? <div className="budget-art"><span>MONTHLY OVERVIEW</span><strong>₹ 24,500</strong><small>Remaining budget</small><div className="budget-track"><i/></div><div className="budget-labels"><span>Income</span><span>Expenses</span></div></div> : i===5 ? <div className="task-art"><div className="task-window"><div className="task-heading"><ListChecks size={17}/> <b>My tasks</b><span>Today</span></div><div className="task-row done"><i>✓</i><span>Review project plan</span></div><div className="task-row"><i/> <span>Complete assignments</span></div><div className="task-row"><i/> <span>Prepare weekly update</span></div><div className="task-progress"><b/></div><small>DAILY TASK OVERVIEW</small></div></div> : i===6 ? <div className="password-art"><div className="password-window"><div className="password-lock"><KeyRound size={27}/></div><span>PASSWORD GENERATOR</span><div className="password-field">•••••••••••• <b>▣</b></div><div className="password-strength"><i/></div><small>SECURE PASSWORD · GENERATED</small></div></div> : <div className="lamp-art"><div className="lamp-glow"/><div className="lamp-bulb"><Lightbulb size={68} strokeWidth={1.3}/></div><div className="lamp-base"/><div className="lamp-wifi"><Wifi size={22}/></div><span>SMART LIGHTING</span><small>CONNECTED DEVICE CONCEPT</small></div>}</div><div className="project-info"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tech-list">{project.stack.map(t => <span key={t}>{t}</span>)}</div>{project.note && <p className="project-note">{project.note}</p>}<a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ExternalLink size={14}/></a></div></article>)}</div></section>

      <section className="experience-section section-pad" id="experience"><div className="section-wrap"><SectionHeading eyebrow="MY JOURNEY" title="Experience & education"/><div className="timeline"><div className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-content"><span className="timeline-date">PROFESSIONAL EXPERIENCE</span><h3>Advanced Associate Software Engineer</h3><h4>Accenture</h4><p>Offer received for an Advanced Associate Software Engineer role. Update this section with your joining date, current employment status and verified responsibilities.</p></div><span className="timeline-tag">Software</span></div><div className="timeline-item"><div className="timeline-marker marker-blue"><BrainCircuit size={17}/></div><div className="timeline-content"><span className="timeline-date">AI PROJECT EXPERIENCE</span><h3>AI Project Work</h3><h4>Infotact</h4><p>Worked on AI-related project activities with Infotact. Add the project title, tools, dates and your specific contributions to make this entry more detailed and verifiable.</p></div><span className="timeline-tag">AI</span></div><div className="timeline-item"><div className="timeline-marker marker-purple"><GraduationCap size={18}/></div><div className="timeline-content"><span className="timeline-date">EDUCATION</span><h3>Academic Background</h3><h4>Computer Science / Software Development</h4><p>Add your exact degree, college name, graduation year and any relevant academic achievements here.</p></div><span className="timeline-tag">Education</span></div><div className="timeline-item"><div className="timeline-marker marker-blue"><Code2 size={17}/></div><div className="timeline-content"><span className="timeline-date">PROFESSIONAL DEVELOPMENT</span><h3>Java Full Stack Development & Gen AI</h3><h4>Training and hands-on projects</h4><p>Worked through Java, Spring, JPA, microservices, React, testing and Gen AI learning activities, applying concepts in demos and project work.</p></div><span className="timeline-tag">Learning</span></div></div></div></section>

      <section className="contact section-wrap section-pad" id="contact"><div className="contact-panel"><div className="contact-glow"/><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let’s build something<br/><span className="gradient-text">meaningful together.</span></h2><p>Interested in software development, collaboration or sharing ideas? I’d be happy to connect.</p><a className="button button-primary" href="mailto:dhanalakshmiyarrakula@gmail.com">Say hello <ArrowUpRight size={17}/></a><div className="contact-socials"><a href="https://github.com/YarrakulaDhanaLakshmi" target="_blank" rel="noreferrer"><span className="brand-glyph">GH</span> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span className="brand-glyph">in</span> LinkedIn</a><a href="mailto:dhanalakshmiyarrakula@gmail.com"><Mail size={17}/> Email</a></div><span className="contact-hint">LinkedIn profile link can be updated here before publishing.</span></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">DL</span><span>Dhana Lakshmi<span className="brand-dot">.</span></span></a><span>Designed & built with care <span className="footer-heart">♥</span></span><a href="#home" className="back-top">Back to top ↑</a></footer>
  </div>;
}
export default App;