import { useState } from "react";
import { Route, Switch } from "wouter";
import { ArrowUpRight, ChevronDown, Clock3, Mail, Menu, MoveUpRight, Radio, ShieldCheck, Sparkles, X } from "lucide-react";

// Carbon Broadcast: dark obsidian editorial surfaces, electric-volt action color, field-line geometry, concise broadcast-like motion.

const navItems = [
  ["Newsletter", "#newsletter"],
  ["Summit 2028", "#summit"],
  ["Talk To Ed Blount", "#ed"],
  ["FAQs", "#faqs"],
] as const;

const faqs = [
  ["What is Fast Sports Business?", "Fast Sports Business is an independent daily intelligence publication for the marketers, sponsors, investors, and athletes shaping fast football and the dynamic sports economy around it."],
  ["How often is the newsletter published?", "The Daily Fast Sports Intelligence Briefing is built around a one-article-per-day cadence: one sharp executive read, every day, with market context and a clear strategic takeaway."],
  ["What is Summit 2028?", "Summit 2028 is an independent flagship executive conference for the people building the next commercial, media, and capital layer of fast football."],
  ["How can brands, sponsors, and investors collaborate with Fast Sports Business?", "Partners can collaborate through sponsorship strategy, custom intelligence briefings, executive events, editorial partnerships, and targeted advisory work with the Fast Sports Business desk."],
  ["How does Fast Sports Business spotlight 18–24 athletes?", "The publication tracks the 18–24 athlete cohort as a business signal: emerging audience behavior, media fluency, NIL structures, and the new pathways from performance to ownership."],
];

function BrandMark() {
  return <span className="brand-mark-wrap" aria-hidden="true"><img src="/assets/fast-sports-mark.png" alt="" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/manus-storage/fast-sports-mark_028c7436.png"; }} /><span className="brand-mark"><span className="brand-mark__chevron" /><span className="brand-mark__pulse" /></span></span>;
}

function App() {
  return <Switch><Route path="/" component={Home} /><Route component={Home} /></Switch>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [segment, setSegment] = useState("Marketer / Agency");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const currentDate = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date());

  const scrollTo = (href: string) => { setMenuOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };

  return <div className="site-shell">
    <header className="site-header">
      <a className="brand-lockup" href="#top" onClick={(e) => { e.preventDefault(); scrollTo("#top"); }} aria-label="Fast Sports Business home">
        <BrandMark /><span className="brand-wordmark"><strong>FAST SPORTS</strong><em>BUSINESS</em></span>
      </a>
      <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>{label}</a>)}
      </nav>
      <div className="header-actions"><button className="button button--volt button--small" onClick={() => scrollTo("#newsletter")}>Subscribe <ArrowUpRight size={15} /></button><button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></button></div>
    </header>

    <main id="top">
      <section className="hero hero--cinematic section-grid">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-dot" />THE INDEPENDENT INTELLIGENCE HUB FOR FAST SPORTS &amp; INNOVATION</div><h1><span>Fast Football</span><br />Business Report.</h1><p className="hero-lede">The definitive daily intelligence platform and executive briefing for brand marketers, institutional sponsors, venture investors, and athletes defining the next generation of the sport.</p><div className="hero-cta-row"><button className="button button--volt" onClick={() => scrollTo("#newsletter")}>Subscribe to Daily Briefing <ArrowUpRight size={16} /></button><button className="button button--ghost" onClick={() => scrollTo("#summit")}>Explore Summit 2028 <MoveUpRight size={16} /></button></div><div className="hero-stats"><div><strong>01</strong><span>article / day</span></div><div><strong>04</strong><span>decision-maker lenses</span></div><div><strong>∞</strong><span>next plays to watch</span></div></div></div>
        <div className="hero-art" aria-label="Hero animation of two young athletes playing fast football">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/assets/summit-2028-workshop.png"><source src="/assets/fast-sports-business-hero-concept.mp4" type="video/mp4" /><source src="/manus-storage/fast-sports-business-hero-concept_20da8a02.mp4" type="video/mp4" /></video><div className="hero-video-shade" />
          <div className="art-label"><Radio size={14} /> LIVE FIELD SIGNAL <span>01:24</span></div><div className="field-grid" /><div className="field-arc arc-one" /><div className="field-arc arc-two" /><div className="energy-trail trail-one" /><div className="energy-trail trail-two" />
          <div className="player player--left"><div className="player-head player-head--light" /><div className="player-body body--teal" /><div className="player-arm arm--throw" /><div className="player-arm arm--back" /><div className="player-leg leg--front" /><div className="player-leg leg--back" /></div>
          <div className="player player--right"><div className="player-head player-head--dark" /><div className="player-body body--orange" /><div className="player-arm arm--catch" /><div className="player-arm arm--down" /><div className="player-leg leg--front" /><div className="player-leg leg--back" /></div>
          <div className="football" /><div className="hero-coordinate">35.1497° N<br />90.0490° W</div><div className="hero-caption">THE NEXT FORMAT<br /><span>IS ALREADY MOVING</span></div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-track"><span>FAST FOOTBALL IS A MEDIA PROPERTY</span><i>✳</i><span>CAPITAL FOLLOWS VELOCITY</span><i>✳</i><span>THE ATHLETE IS THE CHANNEL</span><i>✳</i><span>FAST FOOTBALL IS A MEDIA PROPERTY</span></div></section>

      <section className="newsletter section-grid" id="newsletter"><div className="section-index">02 / INBOX SIGNAL</div><div className="newsletter-intro reveal"><p className="kicker">THE DAILY BRIEFING</p><h2>Get the <span>Daily Fast Sports</span> Intelligence Briefing.</h2><p>One actionable executive article every single day. Exclusive market data, sponsorship valuations, NIL deal structures, and private investment insights.</p><div className="segment-row" role="group" aria-label="Select your perspective">{["Marketer / Agency", "Brand / Sponsor", "Investor / VC", "Athlete / Agent"].map((item) => <button key={item} className={segment === item ? "is-selected" : ""} onClick={() => setSegment(item)}>{item}</button>)}</div></div><form className="form-card reveal" onSubmit={(e) => { e.preventDefault(); setNewsletterSent(true); }}><div className="form-card__top"><span>YOUR LENS</span><strong>{segment}</strong></div>{newsletterSent ? <div className="success-state"><ShieldCheck size={32} /><h3>Briefing queued.</h3><p>Watch your inbox for the next signal. You’re on the daily list.</p><button type="button" className="text-link" onClick={() => setNewsletterSent(false)}>Add another reader <ArrowUpRight size={14} /></button></div> : <><label>First name<input required placeholder="First name" /></label><label>Work email<input required type="email" placeholder="you@company.com" /></label><label>Organization / Company<input required placeholder="Your organization" /></label><button className="button button--volt button--full" type="submit">Get Daily Briefing <ArrowUpRight size={16} /></button><small>By subscribing, you agree to receive the daily briefing. Unsubscribe anytime.</small></>}</form></section>

      <section className="intelligence section-grid"><div className="section-index">03 / TODAY’S INTELLIGENCE</div><div className="article-card reveal"><div className="article-card__visual"><div className="visual-noise" /><div className="article-number">01</div><div className="article-visual-text">FAST<br /><span>FORMAT</span></div><div className="visual-line" /></div><div className="article-card__body"><div className="live-label"><span /> TODAY’S INTEL — {currentDate.toUpperCase()}</div><h2>The Rise of Non-Contact Fast Football: <em>Why 18–24 Talent and Major Brands Are Flocking to High-Velocity Formats.</em></h2><div className="article-meta"><span><Clock3 size={15} /> 7 min read</span><span><Sparkles size={15} /> Ed &amp; Intelligence Desk</span></div><div className="takeaways"><span>KEY STRATEGIC TAKEAWAYS</span><p>01&nbsp;&nbsp; Format design is becoming a sponsorship moat.</p><p>02&nbsp;&nbsp; The 18–24 athlete is a media-native distribution layer.</p><p>03&nbsp;&nbsp; Non-contact unlocks new capital and venue logic.</p></div><a className="text-link" href="#newsletter" onClick={(e) => { e.preventDefault(); scrollTo("#newsletter"); }}>Read the full intelligence <ArrowUpRight size={15} /></a></div></div></section>

      <section className="summit section-grid" id="summit"><div className="section-index">04 / SUMMIT 2028</div><div className="summit-visual"><img src="/assets/summit-2028-workshop.png" alt="Executive conference workshop with sports business leaders" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/manus-storage/summit-2028-workshop_dd2d1362.png"; }} /><div className="summit-overlay"><span>THE FLAGSHIP EXECUTIVE CONFERENCE</span><strong>SUMMIT<br /><i>2028</i></strong></div></div><div className="summit-copy reveal"><p className="kicker">THE NEXT PLAY, IN THE ROOM</p><h2>Put the next play<br />on your <span>calendar.</span></h2><p>Summit 2028 brings the operators, investors, brand architects, and athletes defining the fast sports economy into one room—before the next format becomes obvious.</p><div className="track-list"><div><span>01</span><p>Franchise Capital &amp; Private Equity</p></div><div><span>02</span><p>Enterprise Brand Activations</p></div><div><span>03</span><p>Athlete NIL &amp; Media Monetization</p></div></div><button className="button button--orange" onClick={() => setNewsletterSent(true)}>Register for Summit 2028 Updates <ArrowUpRight size={16} /></button></div></section>

      <section className="ed section-grid" id="ed"><div className="section-index">05 / FOUNDER ADVISORY</div><div className="ed-copy reveal"><p className="kicker">TALK TO ED BLOUNT</p><h2>Good strategy<br />starts with a <span>clear read.</span></h2><p>Ed is the category founder and advisor helping leaders make the next move in fast sports with sharper positioning, smarter capital, and a story the market can actually repeat.</p><div className="ed-focus"><span>CORE AREAS</span><p>Brand Sponsorship Strategy</p><p>Strategic League Advisory</p><p>Keynote Briefings</p></div><div className="ed-signature">ED<span> / FSB</span></div></div><form className="inquiry-card reveal" onSubmit={(e) => { e.preventDefault(); setInquirySent(true); }}>{inquirySent ? <div className="success-state"><Mail size={32} /><h3>Message received.</h3><p>Ed’s desk will follow up with a clear next step.</p><button type="button" className="text-link" onClick={() => setInquirySent(false)}>Send another inquiry <ArrowUpRight size={14} /></button></div> : <><div className="inquiry-head"><span>OPEN CHANNEL</span><span className="status-dot">AVAILABLE</span></div><label>Full name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>Inquiry type<select defaultValue="Sponsorship"><option>Sponsorship</option><option>Investment</option><option>Advisory</option><option>Speaking</option></select></label><label>Message<textarea required rows={4} placeholder="Tell us what you’re building…" /></label><button className="button button--ghost button--full" type="submit">Open the channel <ArrowUpRight size={16} /></button></>}</form></section>

      <section className="faqs section-grid" id="faqs"><div className="section-index">06 / COMMON QUESTIONS</div><div className="faqs-intro reveal"><p className="kicker">FAQ / AEO READY</p><h2>Cut through<br />the <span>noise.</span></h2><p>Short answers for smart people who need the signal before the room does.</p></div><div className="faq-list reveal">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={18} /></button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></section>
    </main>

    <footer className="site-footer"><div className="footer-top"><a className="brand-lockup" href="#top"><BrandMark /><span className="brand-wordmark"><strong>FAST SPORTS</strong><em>BUSINESS</em></span></a><div className="footer-statement"><span>THE INDEPENDENT INTELLIGENCE HUB</span><p>Making the next format legible.</p></div><div className="footer-news"><span>GET THE SIGNAL</span><form onSubmit={(e) => e.preventDefault()}><input type="email" required placeholder="Email address" aria-label="Email address" /><button aria-label="Subscribe"><ArrowUpRight size={16} /></button></form></div></div><div className="footer-bottom"><span>© 2028 FAST SPORTS BUSINESS</span><div><a href="#newsletter">RSS</a><a href="#newsletter">LinkedIn</a><a href="#newsletter">Instagram</a></div><span>BUILT FOR THE NEXT PLAY <i>✳</i></span></div></footer>
  </div>;
}

export default App;
