'use client'

import { useEffect, useState } from 'react'

const projects = [
  { index: '01', title: 'Vinsera — Shop of Tomorrow', description: 'AI-powered e-commerce marketplace with its own virtual currency, Swish.', tags: ['Next.js', 'Firebase', 'Tailwind'], href: 'https://kanchan1.com.np', accent: 'cyan' },
  { index: '02', title: 'Musick — Your Vibe, Your App', description: 'A sleek music player built to feel alive, with a focused mobile-first experience.', tags: ['Android', 'UX', 'Audio'], href: 'https://github.com/A18990/musick-apk', accent: 'violet' },
  { index: '03', title: 'Spill Chat — Say It, Send It', description: 'A fast, minimal chat app for real conversations without the noise.', tags: ['Realtime', 'Firebase', 'React'], href: 'https://github.com/A18990/spill-chat', accent: 'magenta' },
]

const skills = ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Cursor', 'v0.dev', 'AI / ML', 'Python']

export default function Home() {
  const [typed, setTyped] = useState('')
  const [spotlight, setSpotlight] = useState({ x: 50, y: 35 })
  const title = 'Full-Stack Developer'

  useEffect(() => {
    let i = 0
    const timer = window.setInterval(() => { setTyped(title.slice(0, i + 1)); i += 1; if (i === title.length) window.clearInterval(timer) }, 75)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])

  return (
    <main className="site-shell" onMouseMove={(event) => setSpotlight({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })}>
      <div className="noise" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" /><div className="orb orb-two" aria-hidden="true" />
      <div className="spotlight" style={{ left: `${spotlight.x}%`, top: `${spotlight.y}%` }} aria-hidden="true" />

      <nav className="nav container"><a href="#top" className="brand">AP<span>/</span>26</a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div><a href="mailto:ramrajjnk75@gmail.com" className="status"><i /> available for work</a></nav>

      <section id="top" className="hero container">
        <div className="hero-copy"><p className="eyebrow reveal">Independent builder / Nepal</p><h1 className="reveal">Akash<br /><span>Pathak</span></h1><p className="role reveal"><span>{typed}</span><b>_</b></p><p className="hero-tag reveal">Building AI-powered products from Nepal — turning ideas into real apps.</p><div className="hero-actions reveal"><a href="#work" className="button button-primary">View my work <span>↗</span></a><a href="#contact" className="button button-ghost">Contact me</a></div><div className="hero-meta reveal"><span>26° 42′ N / 84° 27′ E</span><span>01 — 04 / 2026</span></div></div>
        <div className="hero-visual reveal" aria-hidden="true"><div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" /><div className="hero-core"><span>AP</span></div><span className="hero-code code-a">010 / 101 / 001</span><span className="hero-code code-b">BUILD_MODE: ON</span></div>
      </section>

      <section id="about" className="section container reveal"><div className="section-head"><span className="section-number">01</span><h2>About the signal</h2><span className="rule" /></div><div className="about-grid"><div className="about-mark">AP<span>+</span></div><div><p className="lede">I am a self-taught builder from Nepal, designing and shipping digital products with curiosity, speed, and a little help from machines.</p><p className="body-copy">Raised in a farming family, I learned early that useful things are made with your hands. Today those hands work in code — using AI tools, thoughtful interfaces, and relentless iteration to build real apps and businesses that move me toward financial independence.</p></div><div className="about-stats"><div><strong>03+</strong><span>products shipped</span></div><div><strong>24/7</strong><span>always learning</span></div></div></div></section>

      <section id="work" className="section container reveal"><div className="section-head"><span className="section-number">02</span><h2>Selected work</h2><span className="rule" /></div><div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.index}><div className="project-top"><span className="project-index">{project.index}</span><span className="project-type">digital product</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="project-link">View project <span>↗</span></a><div className="card-grid" aria-hidden="true" /></article>)}</div></section>

      <section className="skills-strip reveal"><div className="container"><div className="section-head"><span className="section-number">03</span><h2>Tools in rotation</h2><span className="rule" /></div><div className="skill-row">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

      <section id="contact" className="section container reveal"><div className="section-head"><span className="section-number">04</span><h2>Open channel</h2><span className="rule" /></div><div className="contact-layout"><div><p className="contact-kicker">Have a problem worth solving?</p><h2 className="contact-title">Let&apos;s make<br /><span>something real.</span></h2><a className="button button-primary" href="mailto:ramrajjnk75@gmail.com">Start a conversation <span>↗</span></a></div><div className="contact-grid"><a href="https://github.com/A18990" target="_blank" rel="noreferrer" aria-label="Open Akash's GitHub profile"><span>GH ↗</span><strong>GitHub</strong><small>@A18990</small></a><a href="https://instagram.com/Rohanpathak47" target="_blank" rel="noreferrer" aria-label="Open Akash's Instagram profile"><span>IG ↗</span><strong>Instagram</strong><small>@Rohanpathak47</small></a><a href="mailto:ramrajjnk75@gmail.com" aria-label="Email Akash at ramrajjnk75@gmail.com"><span>MAIL ↗</span><strong>Email</strong><small>ramrajjnk75@gmail.com</small></a><a href="https://tiktok.com/@Rohanpathak47" target="_blank" rel="noreferrer" aria-label="Open Akash's TikTok profile"><span>TK ↗</span><strong>TikTok</strong><small>@Rohanpathak47</small></a></div></div></section>

      <footer className="footer container"><span>Designed + built by Akash Pathak</span><span>© 2026 / Kathmandu, Nepal</span><span className="footer-signal">● signal stable</span></footer>
    </main>
  )
}
