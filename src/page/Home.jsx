import { useState, useEffect } from "react";
import {
  FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiClock,
  FiCheckCircle, FiArrowRight,
} from "react-icons/fi";
import {
  Monitor, Wrench, ShieldCheck, PhoneCall, MapPin,
  ChevronRight, Star, CheckCircle2, Zap,
  BadgeCheck, Headphones, Timer, Banknote, Sparkles
} from "lucide-react";

const BLUE = "#14287b";
const LIGHT = "#e8ecf8";
const LOGO = "https://rapidfixmate.com/wp-content/uploads/2025/02/logofix.jpeg";

const brands = [
  { name: "Samsung",   logo: "https://rapidfixmate.com/wp-content/uploads/2025/02/Samsung_Logo.svg.webp" },
  { name: "Sony",      logo: "https://i.pinimg.com/736x/2d/76/94/2d76946ec31d3d3057c08701b273a304.jpg" },
  { name: "LG",        logo: "https://rapidfixmate.com/wp-content/uploads/2025/02/Samsung_Logo.svg-5.png" },
  { name: "Panasonic", logo: "https://rapidfixmate.com/wp-content/uploads/2025/02/Samsung_Logo.svg-3.png" },
  { name: "Mi",        logo: "https://rapidfixmate.com/wp-content/uploads/2025/02/Samsung_Logo.svg-2.png" },
  { name: "Philips",   logo: "https://rapidfixmate.com/wp-content/uploads/2025/02/Samsung_Logo.svg-1.png" },
  { name: "Haier",     logo: "https://rapidfixmate.com/wp-content/uploads/2025/02/Samsung_Logo.svg.png" },
  { name: "OnePlus",   logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/OnePlus_logo.svg/2560px-OnePlus_logo.svg.png" },
];

/* ══════════════════════════════════════════════════════════════
   RESPONSIVE STYLES
══════════════════════════════════════════════════════════════ */
const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
  img { max-width: 100%; height: auto; display: block; }
  
  .rfm-container { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 16px; }
  @media (min-width: 640px)  { .rfm-container { padding: 0 24px; } }
  @media (min-width: 1024px) { .rfm-container { padding: 0 32px; } }

  .rfm-section { padding: 60px 0; }
  @media (min-width: 768px)  { .rfm-section { padding: 80px 0; } }
  @media (min-width: 1024px) { .rfm-section { padding: 96px 0; } }

  .rfm-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 800;
    line-height: 1.15;
  }

  /* GRID UTILITIES */
  .rfm-grid-2 { display: grid; grid-template-columns: 1fr; gap: 24px; }
  @media (min-width: 640px) { .rfm-grid-2 { grid-template-columns: repeat(2, 1fr); } }

  .rfm-grid-3 { display: grid; grid-template-columns: 1fr; gap: 20px; }
  @media (min-width: 640px) { .rfm-grid-3 { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .rfm-grid-3 { grid-template-columns: repeat(3, 1fr); } }

  .rfm-grid-4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  @media (min-width: 640px) { .rfm-grid-4 { grid-template-columns: repeat(2, 1fr); gap: 20px; } }
  @media (min-width: 1024px) { .rfm-grid-4 { grid-template-columns: repeat(4, 1fr); gap: 24px; } }

  .rfm-grid-lg-2 { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
  @media (min-width: 1024px) { .rfm-grid-lg-2 { grid-template-columns: repeat(2, 1fr); gap: 64px; } }

  .rfm-grid-why { display: grid; grid-template-columns: 1fr; gap: 32px; align-items: start; }
  @media (min-width: 1024px) { .rfm-grid-why { grid-template-columns: 2fr 3fr; gap: 40px; } }

  .rfm-grid-why-features { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 480px) { .rfm-grid-why-features { grid-template-columns: repeat(2, 1fr); } }

  /* HERO BUTTONS */
  .rfm-hero-btns { display: flex; flex-direction: column; gap: 12px; justify-content: center; align-items: center; }
  @media (min-width: 480px) { .rfm-hero-btns { flex-direction: row; flex-wrap: wrap; } }

  /* ABOUT BUTTONS */
  .rfm-about-btns { display: flex; flex-wrap: wrap; gap: 12px; }

  /* ABOUT IMAGE */
  .rfm-about-img { height: 280px; }
  @media (min-width: 640px) { .rfm-about-img { height: 360px; } }
  @media (min-width: 1024px) { .rfm-about-img { height: 420px; } }

  /* CONTACT GRID */
  .rfm-contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
  @media (min-width: 1024px) { .rfm-contact-grid { grid-template-columns: repeat(2, 1fr); gap: 48px; } }

  /* CONTACT FORM ROW */
  .rfm-form-row { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 480px) { .rfm-form-row { grid-template-columns: repeat(2, 1fr); } }

  /* FOOTER GRID */
  .rfm-footer-grid { display: grid; grid-template-columns: 1fr; gap: 32px; }
  @media (min-width: 640px)  { .rfm-footer-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .rfm-footer-grid { grid-template-columns: repeat(4, 1fr); gap: 40px; } }

  /* WHY US STATS GRID */
  .rfm-stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 24px; }

  /* SERVICE CARD IMAGE */
  .rfm-service-img { height: 160px; }
  @media (min-width: 640px) { .rfm-service-img { height: 180px; } }

  /* NAVBAR */
  .rfm-nav-desktop { display: none; }
  @media (min-width: 768px) { .rfm-nav-desktop { display: flex; align-items: center; gap: 4px; } }
  .rfm-nav-mobile-btn { display: flex; }
  @media (min-width: 768px) { .rfm-nav-mobile-btn { display: none !important; } }

  /* SECTION BADGE */
  .rfm-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 14px;
  }

  /* BRANDS SECONDARY */
  .rfm-brands-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }

  /* SERVICE GRID - 2 col mobile, 4 col desktop */
  .rfm-service-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  @media (min-width: 768px)  { .rfm-service-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; } }
  @media (min-width: 1024px) { .rfm-service-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; } }

  /* BRANDS GRID - 2 col mobile, 4 col desktop */
  .rfm-brands-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; margin-bottom: 20px; }
  @media (min-width: 640px)  { .rfm-brands-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; } }

  /* MAP */
  .rfm-map-wrap { border-radius: 20px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,.1); }
  .rfm-map-wrap iframe { display: block; width: 100%; height: 240px; border: 0; }
  @media (min-width: 640px) { .rfm-map-wrap iframe { height: 300px; } }

  /* PROCESS GRID */
  .rfm-process-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
  @media (min-width: 640px)  { .rfm-process-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .rfm-process-grid { grid-template-columns: repeat(4, 1fr); } }

  /* TOUCH TARGETS */
  a, button { min-height: 44px; touch-action: manipulation; cursor: pointer; }
  a { text-decoration: none; }
  input, select, textarea { font-family: inherit; font-size: 14px; }

  /* WHATSAPP BUTTON */
  .rfm-wa { position: fixed; bottom: 20px; right: 16px; z-index: 100; width: 52px; height: 52px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: #25D366; box-shadow: 0 4px 20px rgba(37,211,102,.4); border: none; transition: transform .2s; }
  @media (min-width: 640px) { .rfm-wa { bottom: 28px; right: 28px; width: 56px; height: 56px; } }
  .rfm-wa:hover { transform: scale(1.1); }

  /* LOCATION CARDS */
  .rfm-loc-card { padding: 20px; border-radius: 20px; border: 1px solid #e2e8f0; background: #fff; transition: all .3s; cursor: default; }
  .rfm-loc-card:hover { background: #14287b; border-color: #14287b; }
  .rfm-loc-card:hover .lc { color: #fff !important; }
  .rfm-loc-card:hover .la { color: rgba(255,255,255,.65) !important; }
  .rfm-loc-card:hover .li { color: rgba(255,255,255,.7) !important; }

  /* SERVICE CARD */
  .rfm-svc-card { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,.06); transition: all .3s; }
  .rfm-svc-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(20,40,123,.14); }

  /* WHY FEATURE CARD */
  .rfm-why-card { padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; background: #fff; transition: all .3s; cursor: default; position: relative; overflow: hidden; }

  /* SCROLL OFFSET FOR ANCHOR NAV */
  section { scroll-margin-top: 80px; }
`;

/* ══════════════════════════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "#fff", boxShadow: "0 4px 30px rgba(20,40,123,.1)" }}>
      <div className="rfm-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <div onClick={() => scroll("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, overflow: "hidden", flexShrink: 0 }}>
              <img src={LOGO} alt="RapidFixMate" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="rfm-nav-desktop">
            {["home", "about", "services", "brands", "contact"].map(l => (
              <button key={l} onClick={() => scroll(l)}
                style={{ padding: "8px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, color: BLUE, background: "transparent", border: "none", textTransform: "capitalize", cursor: "pointer" }}
                onMouseEnter={e => e.target.style.background = LIGHT}
                onMouseLeave={e => e.target.style.background = "transparent"}>
                {l}
              </button>
            ))}
            <a href="tel:+919760581464"
              style={{ marginLeft: 10, display: "flex", alignItems: "center", gap: 7, padding: "10px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, background: BLUE, color: "#fff", border: `1.5px solid ${BLUE}`, transition: "all .2s", minHeight: 44 }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = BLUE; }}
              onMouseLeave={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.color = "#fff"; }}>
              <PhoneCall size={14} /> +91-9760581464
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="rfm-nav-mobile-btn" onClick={() => setOpen(!open)}
            style={{ padding: 8, borderRadius: 8, background: LIGHT, color: BLUE, border: "none", cursor: "pointer", minHeight: 44, minWidth: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{ padding: "12px 8px 16px", borderRadius: 16, marginBottom: 12, background: "#fff", border: `1px solid ${LIGHT}`, boxShadow: "0 8px 30px rgba(20,40,123,.1)" }}>
            {["home", "about", "services", "brands", "contact"].map(l => (
              <button key={l} onClick={() => scroll(l)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 10, fontWeight: 500, textTransform: "capitalize", color: BLUE, background: "transparent", border: "none", fontSize: 15, cursor: "pointer" }}
                onMouseEnter={e => e.target.style.background = LIGHT}
                onMouseLeave={e => e.target.style.background = "transparent"}>
                {l}
              </button>
            ))}
            <a href="tel:+919760581464"
              style={{ display: "flex", alignItems: "center", gap: 8, margin: "8px 6px 0", padding: "12px 14px", borderRadius: 10, fontSize: 14, fontWeight: 700, color: "#fff", background: BLUE }}>
              <PhoneCall size={15} /> +91-9760581464
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════ */
function Hero() {
  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", minHeight: "100vh", paddingTop: 72 }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src="https://rapidfixmate.com/wp-content/uploads/2026/04/1.png" alt="hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&q=80"; }} />
      </div>
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(0,0,0,0.55)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: `linear-gradient(135deg, ${BLUE}cc 0%, rgba(26,52,153,0.55) 50%, rgba(13,31,92,0.7) 100%)` }} />

      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "64px 16px 80px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 500, marginBottom: 28, background: "rgba(255,255,255,.12)", color: "rgba(255,255,255,.95)", border: "1px solid rgba(255,255,255,.25)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
          Available 24/7 · Delhi NCR
        </div>

        <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.1, fontSize: "clamp(32px, 7vw, 70px)" }}>
          Delhi's #1 TV Repair
          <br />
          <span style={{ background: "linear-gradient(90deg,#93c5fd,#bfdbfe)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            At Your Doorstep
          </span>
        </h1>

        <p style={{ fontSize: "clamp(15px, 2.5vw, 19px)", marginBottom: 36, maxWidth: 640, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65, color: "rgba(255,255,255,.82)", padding: "0 8px" }}>
          Professional LED/LCD TV repair for all brands in Delhi NCR. Same-day service, genuine spare parts, and 90-day warranty on every repair.
        </p>

        <div className="rfm-hero-btns">
          <a href="tel:+919760581464"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", borderRadius: 14, fontWeight: 700, fontSize: 15, background: "#fff", color: BLUE, transition: "all .2s", width: "100%", maxWidth: 280 }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.3)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <PhoneCall size={17} /> Call Now — Free Estimate
          </a>
          <button onClick={() => scroll("contact")}
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", borderRadius: 14, fontWeight: 700, fontSize: 15, color: "#fff", border: "2px solid rgba(255,255,255,.5)", background: "rgba(255,255,255,.08)", cursor: "pointer", transition: "all .2s", width: "100%", maxWidth: 280 }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.18)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.08)"}>
            Book Repair Online <ChevronRight size={17} />
          </button>
        </div>

        {/* Stats Bar */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 32px", marginTop: 48 }}>
          {[["10K+", "Repairs Done"], ["4.9★", "Rating"], ["15+", "Years"], ["90D", "Warranty"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{n}</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.6)", marginTop: 3 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   ABOUT
══════════════════════════════════════════════════════════════ */
function About() {
  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="about" className="rfm-section" style={{ background: "#fff" }}>
      <div className="rfm-container">
        <div className="rfm-grid-lg-2">
          {/* Image */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -16, left: -16, width: 200, height: 200, borderRadius: 20, background: LIGHT, zIndex: 0 }} />
            <img src="/img/img1.jpeg" alt="Technician"
              className="rfm-about-img"
              style={{ position: "relative", zIndex: 1, width: "100%", objectFit: "cover", borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,.15)" }}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"; }} />
            <div style={{ position: "absolute", bottom: -16, right: -8, zIndex: 2, padding: "14px 20px", borderRadius: 16, color: "#fff", boxShadow: "0 8px 24px rgba(20,40,123,.3)", background: BLUE }}>
              <p style={{ fontSize: 28, fontWeight: 800, fontFamily: "'Playfair Display',serif", lineHeight: 1 }}>15+</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,.7)", marginTop: 3 }}>Years of Trust</p>
            </div>
            <div style={{ position: "absolute", top: 16, right: -8, zIndex: 2, padding: "8px 14px", borderRadius: 10, color: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,.15)", background: "#22c55e", display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={13} fill="white" color="white" />
              <span style={{ fontSize: 13, fontWeight: 700 }}>4.9 / 5 Rated</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="rfm-badge" style={{ background: LIGHT, color: BLUE }}>About RapidFixMate</span>
            <h2 className="rfm-section-title" style={{ color: BLUE, marginBottom: 20 }}>
              Delhi NCR's Most Trusted Multi-Brand TV Service Center
            </h2>
            <p style={{ color: "#475569", marginBottom: 16, lineHeight: 1.75, fontSize: 16 }}>
              Since 2010, <strong>RapidFixMate</strong> has been Delhi's go-to destination for professional TV and home appliance repair. Our factory-trained technicians handle every brand and every fault — with precision, speed, and a smile.
            </p>
            <p style={{ color: "#64748b", marginBottom: 28, lineHeight: 1.75, fontSize: 14 }}>
              From cracked panels and power board failures to smart TV software issues and HDMI ports — we complete most repairs within 24–48 hours using genuine or OEM-grade components.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px 16px", marginBottom: 28 }}>
              {["Factory-Trained Technicians", "Genuine Spare Parts", "Same-Day Home Service", "90-Day Repair Warranty", "Transparent Pricing", "Free Diagnosis"].map(i => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={17} style={{ color: BLUE, flexShrink: 0 }} />
                  <span style={{ color: "#374151", fontWeight: 500, fontSize: 14 }}>{i}</span>
                </div>
              ))}
            </div>
            <div className="rfm-about-btns">
              <a href="tel:+919760581464"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, fontWeight: 700, color: "#fff", fontSize: 14, background: BLUE, transition: "all .2s", minHeight: 44 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 28px rgba(20,40,123,.3)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <PhoneCall size={15} /> Call Now
              </a>
              <button onClick={() => scroll("contact")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, fontWeight: 700, fontSize: 14, border: `2px solid ${BLUE}`, color: BLUE, background: "transparent", cursor: "pointer", transition: "all .2s", minHeight: 44 }}
                onMouseEnter={e => e.currentTarget.style.background = LIGHT}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                Book Online <FiArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   SERVICES
══════════════════════════════════════════════════════════════ */
const serviceList = [
  { title: "LED TV Repair",         img: "https://i.pinimg.com/1200x/00/1b/bb/001bbbe28a6a289e690ab21d18882799.jpg", desc: "LED TV screen issues, no display, sound problems, and motherboard repair." },
  { title: "LCD TV Repair",         img: "https://i.pinimg.com/1200x/7c/9c/b7/7c9cb788afd42830aa38b060f114fed9.jpg", desc: "LCD panel repair, backlight issues, and power supply problems fixed at home." },
  { title: "Smart TV Repair",       img: "https://i.pinimg.com/1200x/43/1b/9b/431b9bb8b5de51c9bdeeb0891bdcd205.jpg", desc: "Smart TV software issues, app crashes, WiFi problems, and system updates." },
  { title: "OLED / QLED Repair",    img: "https://i.pinimg.com/1200x/b7/9d/a3/b79da37203baea62efd544b086b58d70.jpg", desc: "Advanced OLED & QLED TV panel, display, and internal circuit repair." },
  { title: "TV Screen Repair",      img: "https://i.pinimg.com/1200x/23/9a/6f/239a6f623d6217652d6ecb7bcc243300.jpg", desc: "Cracked screen, lines on display, black screen, and panel replacement." },
  { title: "TV Installation",       img: "https://i.pinimg.com/1200x/6a/68/fc/6a68fca338210beb6f2cca779561f7ac.jpg", desc: "Wall mounting, setup, and installation for all TV sizes and brands." },
  { title: "TV Not Turning On",     img: "https://i.pinimg.com/1200x/1b/a1/67/1ba167ddfbb10c6fbf4506b552d85655.jpg", desc: "Power issues, dead TV, fuse, and motherboard troubleshooting." },
  { title: "TV Sound Issue",        img: "https://i.pinimg.com/1200x/28/f8/fd/28f8fdcf62dfc8a0a04337c9ca458702.jpg", desc: "No sound, distorted audio, speaker repair and audio IC issues." },
];

function Services() {
  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="services" className="rfm-section" style={{ background: "#f8f9ff" }}>
      <div className="rfm-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="rfm-badge" style={{ background: LIGHT, color: BLUE }}>All Services</span>
          <h2 className="rfm-section-title" style={{ color: BLUE, marginBottom: 12 }}>What We Repair</h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontSize: 16 }}>
            One-stop multi-brand appliance repair center covering every home appliance in Delhi NCR.
          </p>
        </div>
        <div className="rfm-service-grid">
          {serviceList.map(s => (
            <div key={s.title} className="rfm-svc-card">
              <div className="rfm-service-img" style={{ position: "relative", overflow: "hidden" }}>
                <img src={s.img} alt={s.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s" }}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=70"; }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.5), transparent)" }} />
              </div>
              <div style={{ padding: "14px 16px 16px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: BLUE, fontFamily: "'Playfair Display',serif" }}>{s.title}</h3>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.6 }}>{s.desc}</p>
                <button onClick={() => scroll("contact")}
                  style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 700, color: BLUE, background: "transparent", border: "none", cursor: "pointer", padding: "4px 0", minHeight: 36 }}>
                  Book Now <FiArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   WHY CHOOSE US
══════════════════════════════════════════════════════════════ */
const whyFeatures = [
  { icon: BadgeCheck,  title: "Certified Technicians",  desc: "Factory-trained engineers with brand certifications handle every repair.", color: "#4f46e5" },
  { icon: Timer,       title: "Same-Day Service",        desc: "Book before noon — get your appliance repaired the same day, at home.", color: "#0891b2" },
  { icon: ShieldCheck, title: "90-Day Warranty",         desc: "Every repair backed by a 90-day parts & labour warranty. We fix it free.", color: "#059669" },
  { icon: Banknote,    title: "Transparent Pricing",     desc: "No hidden charges. Know the exact cost before we start. Free diagnosis.", color: "#d97706" },
  { icon: Headphones,  title: "24/7 Support",            desc: "Our customer care is available round the clock — call or WhatsApp anytime.", color: "#dc2626" },
  { icon: Sparkles,    title: "Genuine Spare Parts",     desc: "We use only OEM-grade or manufacturer-certified spare parts.", color: "#7c3aed" },
];

function WhyUs() {
  return (
    <section id="why" className="rfm-section" style={{ background: "#fff", overflow: "hidden" }}>
      <div className="rfm-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="rfm-badge" style={{ background: LIGHT, color: BLUE }}>Why RapidFixMate</span>
          <h2 className="rfm-section-title" style={{ color: BLUE, marginBottom: 12 }}>Why Thousands Choose Us</h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontSize: 16 }}>
            Built on honesty, speed, and technical excellence.
          </p>
        </div>

        <div className="rfm-grid-why">
          {/* Left Blue Card */}
          <div style={{ borderRadius: 24, overflow: "hidden", background: `linear-gradient(145deg,${BLUE},#1a3499)`, position: "relative", padding: "32px 28px" }}>
            <div style={{ width: 52, height: 52, marginBottom: 20, overflow: "hidden", borderRadius: 10 }}>
              <img src={LOGO} alt="logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
            <h3 style={{ fontSize: "clamp(22px, 4vw, 30px)", fontWeight: 800, color: "#fff", marginBottom: 14, lineHeight: 1.2, fontFamily: "'Playfair Display',serif" }}>
              Delhi NCR's Most Trusted Repair Network
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 24, color: "rgba(255,255,255,.65)" }}>
              Over 10,000 happy customers. 15+ years of experience. Available 24/7, 365 days a year.
            </p>
            <div className="rfm-stats-grid">
              {[["10K+", "Repairs Done"], ["4.9★", "Google Rating"], ["24/7", "Available"], ["90D", "Warranty"]].map(([n, l]) => (
                <div key={l} style={{ padding: "12px 10px", borderRadius: 12, textAlign: "center", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)" }}>
                  <p style={{ fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1 }}>{n}</p>
                  <p style={{ fontSize: 11, marginTop: 4, color: "rgba(255,255,255,.55)" }}>{l}</p>
                </div>
              ))}
            </div>
            <a href="tel:+919760581464"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 12, fontWeight: 700, fontSize: 14, background: "#fff", color: BLUE, transition: "transform .2s", marginTop: 8, minHeight: 44 }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}>
              <PhoneCall size={14} /> Call Free Estimate
            </a>
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,.05)", transform: "translate(35%,35%)", pointerEvents: "none" }} />
          </div>

          {/* Right Feature Grid */}
          <div className="rfm-grid-why-features">
            {whyFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rfm-why-card"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = f.color; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${f.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <span style={{ position: "absolute", top: 8, right: 10, fontSize: 48, fontWeight: 900, color: f.color, opacity: 0.07, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, background: `${f.color}15` }}>
                    <Icon size={20} style={{ color: f.color }} />
                  </div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: BLUE, fontFamily: "'Playfair Display',serif" }}>{f.title}</h4>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   LOCATIONS
══════════════════════════════════════════════════════════════ */
const locations = [
  { city: "Delhi",     areas: "South, North, East & West Delhi — all areas covered" },
  { city: "Noida",     areas: "Sector 18, 62, 63, 137 & Greater Noida" },
  { city: "Gurgaon",   areas: "DLF, Sohna Rd, Golf Course Rd, Sector 56" },
  { city: "Ghaziabad", areas: "Indirapuram, Vaishali, Raj Nagar, Kaushambi" },
  { city: "Faridabad", areas: "Sector 16, 17, NIT Faridabad, Old Faridabad" },
  { city: "Agra",      areas: "Civil Lines, Shahganj, Tajganj, Kamla Nagar" },
];

function Locations() {
  return (
    <section className="rfm-section" style={{ background: "#f8f9ff" }}>
      <div className="rfm-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="rfm-badge" style={{ background: LIGHT, color: BLUE }}>Coverage Area</span>
          <h2 className="rfm-section-title" style={{ color: BLUE, marginBottom: 12 }}>Serving All of Delhi NCR</h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontSize: 16 }}>Our certified technicians reach your doorstep across 6 major cities.</p>
        </div>
        <div className="rfm-grid-3">
          {locations.map(loc => (
            <div key={loc.city} className="rfm-loc-card">
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <MapPin size={20} className="li" style={{ color: BLUE, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 className="lc" style={{ fontSize: 18, fontWeight: 800, marginBottom: 5, color: BLUE, fontFamily: "'Playfair Display',serif" }}>{loc.city}</h3>
                  <p className="la" style={{ fontSize: 14, lineHeight: 1.55, color: "#64748b" }}>{loc.areas}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   BRANDS
══════════════════════════════════════════════════════════════ */
function Brands() {
  return (
    <section id="brands" className="rfm-section" style={{ background: "#fff" }}>
      <div className="rfm-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="rfm-badge" style={{ background: LIGHT, color: BLUE }}>Brands We Service</span>
          <h2 className="rfm-section-title" style={{ color: BLUE, marginBottom: 12 }}>All Major TV Brands</h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontSize: 16 }}>
            Our technicians are trained and certified across every popular brand sold in India.
          </p>
        </div>
        <div className="rfm-brands-grid">
          {brands.map(b => (
            <div key={b.name}
              style={{ background: "#fff", borderRadius: 16, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 14px", height: 100, border: "1.5px solid #e2e8f0", transition: "all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = `0 8px 32px rgba(20,40,123,.1)`; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <img src={b.logo} alt={b.name}
                style={{ maxHeight: 36, maxWidth: "100%", objectFit: "contain", filter: "grayscale(50%)", opacity: .75, transition: "all .3s" }}
                onMouseEnter={e => { e.target.style.filter = "none"; e.target.style.opacity = 1; }}
                onMouseLeave={e => { e.target.style.filter = "grayscale(50%)"; e.target.style.opacity = .75; }}
                onError={e => { e.target.outerHTML = `<span style="font-weight:800;font-size:16px;color:${BLUE}">${b.name}</span>`; }} />
            </div>
          ))}
        </div>
        <div className="rfm-brands-tags">
          {["Sansui", "Akai", "Philips", "Sharp", "Hitachi", "Haier", "Videocon", "Toshiba", "Onida", "Lloyd", "Croma", "TCL", "Hisense", "Vu"].map(b => (
            <span key={b} style={{ padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, background: LIGHT, color: BLUE, border: `1px solid ${BLUE}22` }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   PROCESS
══════════════════════════════════════════════════════════════ */
function Process() {
  const steps = [
    { n: "01", title: "Call or Book Online",  desc: "Contact us via phone, WhatsApp, or our online form. Share your issue and location." },
    { n: "02", title: "Get Confirmation",     desc: "Our team confirms your booking and assigns a certified technician near you." },
    { n: "03", title: "Technician Arrives",   desc: "Technician reaches your home on time with tools and spare parts." },
    { n: "04", title: "Repair & Warranty",    desc: "Repair completed, tested, and covered by our 90-day warranty before we leave." },
  ];
  return (
    <section className="rfm-section" style={{ background: BLUE }}>
      <div className="rfm-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="rfm-badge" style={{ background: "rgba(255,255,255,.12)", color: "rgba(255,255,255,.85)", border: "1px solid rgba(255,255,255,.2)" }}>
            How It Works
          </span>
          <h2 className="rfm-section-title" style={{ color: "#fff", marginBottom: 12 }}>Our Simple Process</h2>
          <p style={{ maxWidth: 480, margin: "0 auto", fontSize: 16, color: "rgba(255,255,255,.6)" }}>
            Getting your appliance repaired is as easy as 1-2-3-4.
          </p>
        </div>
        <div className="rfm-process-grid">
          {steps.map(s => (
            <div key={s.n}
              style={{ padding: "24px 20px", borderRadius: 20, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", transition: "all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.transform = "none"; }}>
              <span style={{ display: "block", fontSize: 44, fontWeight: 900, marginBottom: 14, color: "rgba(255,255,255,.15)", lineHeight: 1 }}>{s.n}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "'Playfair Display',serif" }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,.55)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   CONTACT
══════════════════════════════════════════════════════════════ */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", msg: "" });
  const [sent, setSent] = useState(false);

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", service: "", msg: "" });
  };

  const inpStyle = { width: "100%", padding: "12px 14px", borderRadius: 12, border: "1.5px solid #e2e8f0", fontSize: 14, outline: "none", transition: "all .2s", color: "#1e293b", background: "#fff", fontFamily: "inherit" };

  const focus = e => { e.target.style.borderColor = BLUE; e.target.style.boxShadow = `0 0 0 3px ${LIGHT}`; };
  const blur  = e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; };

  return (
    <section id="contact" className="rfm-section" style={{ background: "#fff" }}>
      <div className="rfm-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="rfm-badge" style={{ background: LIGHT, color: BLUE }}>Get in Touch</span>
          <h2 className="rfm-section-title" style={{ color: BLUE, marginBottom: 12 }}>Book Your Repair</h2>
          <p style={{ color: "#64748b", maxWidth: 500, margin: "0 auto", fontSize: 16 }}>Fill the form or call us directly — we respond within 30 minutes.</p>
        </div>

        <div className="rfm-contact-grid">
          {/* Form */}
          <div style={{ padding: "28px 24px", borderRadius: 24, boxShadow: "0 4px 32px rgba(20,40,123,.08)", border: `1.5px solid ${LIGHT}` }}>
            {sent && (
              <div style={{ marginBottom: 20, padding: "12px 16px", borderRadius: 12, display: "flex", alignItems: "center", gap: 10, color: "#065f46", fontWeight: 600, fontSize: 14, background: "#d1fae5" }}>
                <FiCheckCircle size={18} /> Request submitted! We'll call you within 30 minutes.
              </div>
            )}
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="rfm-form-row">
                {[["name", "Full Name", "Your Name", "text"], ["phone", "Phone Number", "+91 97XXXXXXXX", "tel"]].map(([k, l, p, t]) => (
                  <div key={k}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6, color: BLUE }}>{l} *</label>
                    <input required type={t} placeholder={p} value={form[k]}
                      onChange={e => setForm({ ...form, [k]: e.target.value })}
                      style={inpStyle} onFocus={focus} onBlur={blur} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6, color: BLUE }}>Email</label>
                <input type="email" placeholder="abc@example.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inpStyle} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6, color: BLUE }}>Service Required *</label>
                <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{ ...inpStyle, appearance: "none", color: form.service ? "#1e293b" : "#94a3b8" }} onFocus={focus} onBlur={blur}>
                  <option value="">Select service</option>
                  {["LED TV Repair", "LCD TV Repair", "Smart TV Repair", "OLED / QLED TV Repair", "TV Screen Repair", "TV Installation", "TV Not Turning On", "TV Sound Issue"].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6, color: BLUE }}>Message / Address</label>
                <textarea rows={4} placeholder="Describe your issue, brand, model, or your full address..."
                  value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                  style={{ ...inpStyle, resize: "none" }} onFocus={focus} onBlur={blur} />
              </div>
              <button type="submit"
                style={{ width: "100%", padding: "14px", borderRadius: 12, fontWeight: 700, fontSize: 15, color: "#fff", background: BLUE, border: "none", cursor: "pointer", transition: "all .2s", minHeight: 48 }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 10px 32px rgba(20,40,123,.3)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Submit Repair Request →
              </button>
            </form>
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="rfm-map-wrap">
              <iframe title="RapidFixMate Delhi NCR" frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224344.33213899735!2d77.06889754733523!3d28.52725159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy" />
            </div>
            {[
              { icon: PhoneCall, l: "Call / WhatsApp", v: "+91-9760581464",                           s: "Mon–Sun, 24 Hours" },
              { icon: FiMail,    l: "Email Us",         v: "care@rapidfixmate.com",                    s: "Reply within 2 hours" },
              { icon: MapPin,    l: "Corporate Office", v: "Galaxy Diamond Plaza, Greater Noida West", s: "Gautam Buddha Nagar, UP 201301" },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.l} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 18px", borderRadius: 16, background: LIGHT, border: `1px solid ${BLUE}22` }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: BLUE }}>
                    <Icon size={18} color="white" />
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: BLUE, opacity: .7 }}>{item.l}</p>
                    <p style={{ fontWeight: 800, fontSize: 14, color: BLUE, marginTop: 2 }}>{item.v}</p>
                    <p style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{item.s}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════ */
function Footer() {
  const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer style={{ background: "#0b1a5c" }}>
      <div className="rfm-container" style={{ padding: "56px 16px 32px" }}>
        <div className="rfm-footer-grid" style={{ marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 52, height: 52 }}>
                <img src={LOGO} alt="RapidFixMate" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 20, color: "rgba(255,255,255,.5)" }}>
              Delhi NCR's trusted multi-brand appliance repair network since 2010. Certified, fast, and reliable.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[["f", "#1877F2"], ["w", "#25D366"], ["in", "#0A66C2"], ["yt", "#FF0000"]].map(([s, c]) => (
                <div key={s}
                  style={{ width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 11, fontWeight: 900, textTransform: "uppercase", transition: "all .2s", background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.55)", border: "1px solid rgba(255,255,255,.1)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = c; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.color = "rgba(255,255,255,.55)"; }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Quick Links</p>
            {["home", "about", "services", "brands", "contact"].map(l => (
              <button key={l} onClick={() => scroll(l)}
                style={{ display: "block", textTransform: "capitalize", fontSize: 13, marginBottom: 10, color: "rgba(255,255,255,.5)", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", padding: "2px 0", transition: "all .2s", minHeight: 0 }}
                onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.paddingLeft = "6px"; }}
                onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,.5)"; e.target.style.paddingLeft = "0"; }}>
                {l}
              </button>
            ))}
          </div>

          <div>
            <p style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Services</p>
            {["LED TV Repair", "LCD TV Repair", "Smart TV Repair", "OLED / QLED TV Repair", "TV Screen Repair", "TV Installation"].map(s => (
              <p key={s} style={{ fontSize: 13, marginBottom: 8, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>{s}</p>
            ))}
          </div>

          <div>
            <p style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Contact</p>
            {[
              [FiPhone,  "+91-9760581464"],
              [FiMail,   "care@rapidfixmate.com"],
              [FiMapPin, "Galaxy Diamond Plaza, Greater Noida West, UP 201301"],
              [FiClock,  "24/7 — All Days"],
            ].map(([Icon, v]) => (
              <div key={v} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
                <Icon size={13} style={{ color: "rgba(255,255,255,.35)", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 20, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>© 2026 RapidFixMate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════════════════ */
export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = globalStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif" }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Locations />
      <Process />
      <Brands />
      <Contact />
      <Footer />

      {/* WhatsApp FAB */}
      <a href="https://wa.me/919760581464" target="_blank" rel="noreferrer" className="rfm-wa" title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}