import { useState, useEffect, useRef } from "react";
import {
  FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiClock,
  FiCheckCircle, FiArrowRight, FiChevronDown
} from "react-icons/fi";
import {
  Monitor, Wrench, ShieldCheck, Clock, PhoneCall, MapPin,
  ChevronRight, Star, Award, Users, CheckCircle2, Zap,
  ThumbsUp, BadgeCheck, Headphones, Timer, Banknote, Sparkles
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
   NAVBAR
══════════════════════════════════════════════════════════════ */
function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#fff", boxShadow: "0 4px 30px rgba(20,40,123,.12)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scroll("home")}>
            <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={LOGO} alt="RapidFixMate Logo" className="w-full h-full object-contain" />
            </div>
          </div>

<div className="hidden lg:flex items-center gap-1">
  {["home","about","services","brands","contact"].map(l => (
    <button key={l} onClick={() => scroll(l)}
      className="px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all"
      style={{ color: BLUE }}
      onMouseEnter={e => { e.target.style.background = LIGHT; }}
      onMouseLeave={e => { e.target.style.background = "transparent"; }}>
      {l === "services" ? "Services" : l}
    </button>
  ))}

         

   
            <a href="tel:+919760581464"
              className="ml-3 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
              style={{ background: BLUE, color: "#fff", border: `1.5px solid ${BLUE}` }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = BLUE; }}
              onMouseLeave={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.color = "#fff"; }}>
              <PhoneCall size={15} /> +91-9760581464
            </a>
          </div>

          <button className="lg:hidden p-2 rounded-lg" onClick={() => setOpen(!open)}
            style={{ background: LIGHT, color: BLUE }}>
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 px-2 rounded-2xl mb-4"
            style={{ background: "#fff", border: `1px solid ${LIGHT}`, boxShadow: "0 8px 30px rgba(20,40,123,.1)" }}>
            {["home","about","services","brands","contact"].map(l => (
              <button key={l} onClick={() => scroll(l)}
                className="block w-full text-left px-4 py-3 rounded-xl font-medium capitalize transition-all"
                style={{ color: BLUE }}
                onMouseEnter={e => { e.target.style.background = LIGHT; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; }}>
                {l}
              </button>
            ))}
            <a href="tel:+919760581464"
              className="flex items-center gap-2 mt-2 mx-2 px-4 py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: BLUE }}>
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
    <section id="home" className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "80px" }}>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://rapidfixmate.com/wp-content/uploads/2026/04/1.png"
          alt="hero"
          className="w-full h-full object-cover"
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&q=80"; }}
        />
      </div>

      {/* Black overlay 50% */}
      <div className="absolute inset-0 z-10" style={{ background: "rgba(0,0,0,0.55)" }} />

      {/* Blue gradient overlay on top for brand feel */}
      <div className="absolute inset-0 z-10"
        style={{ background: `linear-gradient(135deg, ${BLUE}cc 0%, rgba(26,52,153,0.55) 50%, rgba(13,31,92,0.7) 100%)` }} />

      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none z-10"
        style={{ background: "rgba(100,140,255,.15)", filter: "blur(80px)" }}/>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none z-10"
        style={{ background: "rgba(100,140,255,.12)", filter: "blur(60px)" }}/>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ background: "rgba(255,255,255,.12)", color: "rgba(255,255,255,.95)", border: "1px solid rgba(255,255,255,.25)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
          Available 24/7 · Delhi NCR
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display',serif" }}>
          Delhi's #1 TV Repair
          <br/>
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg,#93c5fd,#bfdbfe)" }}>
            At Your Doorstep
          </span>
        </h1>

        <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,.82)" }}>
          Professional LED/LCD TV repair for all brands in Delhi NCR. Same-day service, genuine spare parts,
          and 90-day warranty on every repair. Call us anytime — we're available round the clock.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919760581464"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-200"
            style={{ background: "#fff", color: BLUE }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
            <PhoneCall size={18}/> Call Now — Free Estimate
          </a>
          <button onClick={() => scroll("contact")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all"
            style={{ border: "2px solid rgba(255,255,255,.5)", background: "rgba(255,255,255,.08)" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; }}>
            Book Repair Online <ChevronRight size={18}/>
          </button>
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
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 rounded-3xl z-0" style={{ background: LIGHT }}/>
            <img src="/img/img1.jpeg" alt="Technician"
              className="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-2xl"/>
            <div className="absolute -bottom-6 -right-6 z-20 px-6 py-4 rounded-2xl text-white shadow-xl"
              style={{ background: BLUE }}>
              <p className="text-3xl font-extrabold" style={{ fontFamily: "'Playfair Display',serif" }}>15+</p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,.7)" }}>Years of Trust</p>
            </div>
            <div className="absolute top-6 -right-4 z-20 px-4 py-3 rounded-xl text-white shadow-xl flex items-center gap-2"
              style={{ background: "#22c55e" }}>
              <Star size={14} fill="white" color="white"/>
              <span className="text-sm font-bold">4.9 / 5 Rated</span>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
              style={{ background: LIGHT, color: BLUE }}>About RapidFixMate</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>
              Delhi NCR's Most Trusted Multi-Brand TV Service Center
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed text-lg">
              Since 2010, <strong>RapidFixMate</strong> has been Delhi's go-to destination for professional TV and home appliance repair.
              Our factory-trained technicians handle every brand and every fault — with precision, speed, and a smile.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              From cracked panels and power board failures to smart TV software issues and HDMI ports — we complete most repairs within 24–48 hours
              using genuine or OEM-grade components. Corporate office: Galaxy Diamond Plaza, Greater Noida West.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Factory-Trained Technicians","Genuine Spare Parts","Same-Day Home Service",
                "90-Day Repair Warranty","Transparent Pricing","Free Diagnosis"].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} style={{ color: BLUE, flexShrink: 0 }}/>
                  <span className="text-gray-700 font-medium text-sm">{i}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+919760581464"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all"
                style={{ background: BLUE }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 28px rgba(20,40,123,.35)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <PhoneCall size={16}/> Call Now
              </a>
              <button onClick={() => scroll("contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
                style={{ border: `2px solid ${BLUE}`, color: BLUE }}
                onMouseEnter={e => { e.currentTarget.style.background = LIGHT; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}>
                Book Online <FiArrowRight size={15}/>
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
  { title: "LED TV Repair",       img: "https://i.pinimg.com/1200x/00/1b/bb/001bbbe28a6a289e690ab21d18882799.jpg", desc: "LED TV screen issues, no display, sound problems, and motherboard repair." },
  { title: "LCD TV Repair",       img: "https://i.pinimg.com/1200x/7c/9c/b7/7c9cb788afd42830aa38b060f114fed9.jpg", desc: "LCD panel repair, backlight issues, and power supply problems fixed at home." },
  { title: "Smart TV Repair",     img: "https://i.pinimg.com/1200x/43/1b/9b/431b9bb8b5de51c9bdeeb0891bdcd205.jpg", desc: "Smart TV software issues, app crashes, WiFi problems, and system updates." },
  { title: "OLED / QLED TV Repair", img: "https://i.pinimg.com/1200x/b7/9d/a3/b79da37203baea62efd544b086b58d70.jpg", desc: "Advanced OLED & QLED TV panel, display, and internal circuit repair." },
  { title: "TV Screen Repair",    img: "https://i.pinimg.com/1200x/23/9a/6f/239a6f623d6217652d6ecb7bcc243300.jpg", desc: "Cracked screen, lines on display, black screen, and panel replacement." },
  { title: "TV Installation",     img: "https://i.pinimg.com/1200x/6a/68/fc/6a68fca338210beb6f2cca779561f7ac.jpg", desc: "Wall mounting, setup, and installation for all TV sizes and brands." },
  { title: "TV Not Turning On",   img: "https://i.pinimg.com/1200x/1b/a1/67/1ba167ddfbb10c6fbf4506b552d85655.jpg", desc: "Power issues, dead TV, fuse, and motherboard troubleshooting." },
  { title: "TV Sound Issue",      img: "https://i.pinimg.com/1200x/28/f8/fd/28f8fdcf62dfc8a0a04337c9ca458702.jpg", desc: "No sound, distorted audio, speaker repair and audio IC issues." },
];

function Services() {
    const scroll = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  
  return (
    <section id="services" className="py-24" style={{ background: "#f8f9ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ background: LIGHT, color: BLUE }}>All Services</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>What We Repair</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            One-stop multi-brand appliance repair center covering every home appliance in Delhi NCR.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map(s => (
            <div key={s.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300"
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 24px 60px rgba(20,40,123,.15)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,.06)"; }}>
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=70"; }}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1.5" style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          

   <button onClick={() => scroll("contact")}
            className="mt-3 inline-flex items-center gap-1 text-xs font-bold" style={{ color: BLUE }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; }}>
            Book Now <FiArrowRight size={12}/>
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
  { icon: BadgeCheck,  title: "Certified Technicians",  desc: "Factory-trained engineers with brand certifications handle every repair with professional expertise.", color: "#4f46e5" },
  { icon: Timer,       title: "Same-Day Service",        desc: "Book before noon — get your appliance repaired the same day, at your home, across all of Delhi NCR.", color: "#0891b2" },
  { icon: ShieldCheck, title: "90-Day Warranty",         desc: "Every repair is backed by a 90-day parts & labour warranty. If it breaks again, we fix it free.", color: "#059669" },
  { icon: Banknote,    title: "Transparent Pricing",     desc: "No hidden charges. You'll know the exact cost before we start. Free diagnosis on every visit.", color: "#d97706" },
  { icon: Headphones,  title: "24/7 Support",            desc: "Our customer care team is available round the clock — call, WhatsApp, or email anytime.", color: "#dc2626" },
  { icon: Sparkles,    title: "Genuine Spare Parts",     desc: "We use only OEM-grade or manufacturer-certified spare parts for lasting, reliable repairs.", color: "#7c3aed" },
];

function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ background: LIGHT, color: BLUE }}>Why RapidFixMate</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>Why Thousands Choose Us</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Built on honesty, speed, and technical excellence — here's what sets RapidFixMate apart.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden relative flex flex-col justify-between min-h-96"
            style={{ background: `linear-gradient(145deg,${BLUE},#1a3499)` }}>
            <div className="p-8 z-10 relative">
              <div className="w-16 h-16 flex items-center justify-center mb-6 overflow-hidden">
                <img src={LOGO} alt="logo" className="w-full h-full object-contain"/>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display',serif" }}>
                Delhi NCR's<br/>Most Trusted<br/>Repair Network
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,.65)" }}>
                Over 10,000 happy customers. 15+ years of experience. Available 24/7, 365 days a year.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[["10K+","Repairs Done"],["4.9★","Google Rating"],["24/7","Available"],["90D","Warranty"]].map(([n,l]) => (
                  <div key={l} className="p-3 rounded-xl text-center"
                    style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)" }}>
                    <p className="text-xl font-extrabold text-white">{n}</p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,.55)" }}>{l}</p>
                  </div>
                ))}
              </div>
              <a href="tel:+919760581464"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
                style={{ background: "#fff", color: BLUE }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}>
                <PhoneCall size={15}/> Call Free Estimate
              </a>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,.05)", transform: "translate(30%,30%)" }}/>
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,.05)" }}/>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title}
                  className="p-6 rounded-2xl border transition-all duration-300 cursor-default relative overflow-hidden"
                  style={{ borderColor: "#e2e8f0", background: "#fff" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = f.color; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${f.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                  <span className="absolute top-3 right-4 text-6xl font-black pointer-events-none select-none"
                    style={{ color: f.color, opacity: 0.06, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${f.color}15` }}>
                    <Icon size={22} style={{ color: f.color }}/>
                  </div>
                  <h4 className="text-base font-bold mb-2" style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>{f.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
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
  { city:"Delhi",     areas:"South, North, East & West Delhi — all areas covered" },
  { city:"Noida",     areas:"Sector 18, 62, 63, 137 & Greater Noida" },
  { city:"Gurgaon",   areas:"DLF, Sohna Rd, Golf Course Rd, Sector 56" },
  { city:"Ghaziabad", areas:"Indirapuram, Vaishali, Raj Nagar, Kaushambi" },
  { city:"Faridabad", areas:"Sector 16, 17, NIT Faridabad, Old Faridabad" },
  { city:"Agra",      areas:"Civil Lines, Shahganj, Tajganj, Kamla Nagar" },
];

function Locations() {
  return (
    <section className="py-24" style={{ background: "#f8f9ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ background: LIGHT, color: BLUE }}>Coverage Area</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>Serving All of Delhi NCR</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Our certified technicians reach your doorstep across 6 major cities.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map(loc => (
            <div key={loc.city}
              className="group p-6 rounded-3xl border transition-all duration-300 cursor-default"
              style={{ borderColor: "#e2e8f0", background: "#fff" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = BLUE; e.currentTarget.style.borderColor = BLUE;
                e.currentTarget.querySelectorAll(".lc").forEach(el => el.style.color = "#fff");
                e.currentTarget.querySelectorAll(".la").forEach(el => el.style.color = "rgba(255,255,255,.65)");
                e.currentTarget.querySelectorAll(".li").forEach(el => el.style.color = "rgba(255,255,255,.7)");
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.querySelectorAll(".lc").forEach(el => el.style.color = BLUE);
                e.currentTarget.querySelectorAll(".la").forEach(el => el.style.color = "#64748b");
                e.currentTarget.querySelectorAll(".li").forEach(el => el.style.color = BLUE);
              }}>
              <div className="flex items-start gap-4">
                <MapPin size={22} className="li mt-0.5 flex-shrink-0" style={{ color: BLUE }}/>
                <div>
                  <h3 className="lc text-xl font-extrabold mb-1" style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>{loc.city}</h3>
                  <p className="la text-sm leading-relaxed" style={{ color: "#64748b" }}>{loc.areas}</p>
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
    <section id="brands" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ background: LIGHT, color: BLUE }}>Brands We Service</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>All Major TV Brands</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Our technicians are trained and certified across every popular brand sold in India.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
          {brands.map(b => (
            <div key={b.name}
              className="bg-white rounded-2xl flex flex-col items-center justify-center p-6 h-32 transition-all duration-300"
              style={{ border: "1.5px solid #e2e8f0" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = `0 8px 32px rgba(20,40,123,.12)`; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <img src={b.logo} alt={b.name} className="max-h-10 max-w-full object-contain"
                style={{ filter: "grayscale(50%)", opacity: .75, transition: "all .3s" }}
                onMouseEnter={e => { e.target.style.filter = "none"; e.target.style.opacity = 1; }}
                onMouseLeave={e => { e.target.style.filter = "grayscale(50%)"; e.target.style.opacity = .75; }}
                onError={e => { e.target.parentNode.innerHTML = `<span style="font-weight:800;font-size:18px;color:${BLUE}">${b.name}</span>`; }}/>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Sansui","Akai","Philips","Sharp","Hitachi","Haier","Videocon","Toshiba","Onida","Lloyd","Croma","TCL","Hisense","Vu"].map(b => (
            <span key={b} className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: LIGHT, color: BLUE, border: `1px solid ${BLUE}22` }}>{b}</span>
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
    { n:"01", title:"Call or Book Online",  desc:"Contact us via phone, WhatsApp, or our online form. Share your issue and location." },
    { n:"02", title:"Get Confirmation",     desc:"Our team confirms your booking and assigns a certified technician near you." },
    { n:"03", title:"Technician Arrives",   desc:"Technician reaches your home on time with tools and spare parts." },
    { n:"04", title:"Repair & Warranty",    desc:"Repair completed, tested, and covered by our 90-day warranty before we leave." },
  ];
  return (
    <section className="py-24" style={{ background: BLUE }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ background: "rgba(255,255,255,.12)", color: "rgba(255,255,255,.85)", border: "1px solid rgba(255,255,255,.2)" }}>
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Playfair Display',serif" }}>Our Simple Process</h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "rgba(255,255,255,.6)" }}>
            Getting your appliance repaired is as easy as 1-2-3-4.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n} className="p-6 rounded-3xl transition-all duration-300"
              style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,.15)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.transform = "none"; }}>
              <span className="block text-5xl font-black mb-4" style={{ color: "rgba(255,255,255,.15)", lineHeight: 1 }}>{s.n}</span>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display',serif" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>{s.desc}</p>
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
  const [form, setForm] = useState({ name:"", phone:"", email:"", service:"", msg:"" });
  const [sent, setSent] = useState(false);

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name:"", phone:"", email:"", service:"", msg:"" });
  };

  const inp = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
            style={{ background: LIGHT, color: BLUE }}>Get in Touch</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: BLUE, fontFamily: "'Playfair Display',serif" }}>Book Your Repair</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Fill the form or call us directly — we respond within 30 minutes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="p-8 rounded-3xl shadow-xl" style={{ border: `1.5px solid ${LIGHT}` }}>
            {sent && (
              <div className="mb-6 p-4 rounded-xl flex items-center gap-3 text-green-700 font-medium"
                style={{ background: "#d1fae5" }}>
                <FiCheckCircle size={20}/> Request submitted! We'll call you within 30 minutes.
              </div>
            )}
            <form onSubmit={submit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[["name","Full Name","Your Name","text"],["phone","Phone Number","+91 97XXXXXXXX","tel"]].map(([k,l,p,t]) => (
                  <div key={k}>
                    <label className="block text-sm font-bold mb-1.5" style={{ color: BLUE }}>{l} *</label>
                    <input required type={t} placeholder={p} value={form[k]}
                      onChange={e => setForm({...form,[k]:e.target.value})}
                      className={inp} style={{ borderColor:"#e2e8f0", color:"#1e293b" }}
                      onFocus={e => { e.target.style.borderColor = BLUE; e.target.style.boxShadow = `0 0 0 3px ${LIGHT}`; }}
                      onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}/>
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: BLUE }}>Email</label>
                <input type="email" placeholder="abc@example.com" value={form.email}
                  onChange={e => setForm({...form,email:e.target.value})}
                  className={inp} style={{ borderColor:"#e2e8f0", color:"#1e293b" }}
                  onFocus={e => { e.target.style.borderColor = BLUE; e.target.style.boxShadow = `0 0 0 3px ${LIGHT}`; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}/>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: BLUE }}>Service Required *</label>
                <select required value={form.service} onChange={e => setForm({...form,service:e.target.value})}
                  className={`${inp} appearance-none`}
                  style={{ borderColor:"#e2e8f0", color: form.service ? "#1e293b" : "#94a3b8" }}
                  onFocus={e => { e.target.style.borderColor = BLUE; e.target.style.boxShadow = `0 0 0 3px ${LIGHT}`; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}>
                  <option value="">Select service</option>
                  {["LED TV Repair","LCD TV Repair","Smart TV Repair","OLED / QLED TV Repair","TV Screen Repair","TV Installation","TV Not Turning On","TV Sound Issue"].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1.5" style={{ color: BLUE }}>Message / Address</label>
                <textarea rows={4} placeholder="Describe your issue, brand, model, or your full address..."
                  value={form.msg} onChange={e => setForm({...form,msg:e.target.value})}
                  className={`${inp} resize-none`} style={{ borderColor:"#e2e8f0", color:"#1e293b" }}
                  onFocus={e => { e.target.style.borderColor = BLUE; e.target.style.boxShadow = `0 0 0 3px ${LIGHT}`; }}
                  onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}/>
              </div>
              <button type="submit"
                className="w-full py-4 rounded-xl font-bold text-white transition-all duration-200"
                style={{ background: BLUE }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 10px 32px rgba(20,40,123,.35)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                Submit Repair Request →
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: "300px" }}>
              <iframe title="RapidFixMate Delhi NCR" width="100%" height="100%" frameBorder="0" style={{ border:0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224344.33213899735!2d77.06889754733523!3d28.52725159999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy"/>
            </div>
            {[
              { icon:PhoneCall, l:"Call / WhatsApp", v:"+91-9760581464",                          s:"Mon–Sun, 24 Hours" },
              { icon:FiMail,    l:"Email Us",         v:"care@rapidfixmate.com",                   s:"Reply within 2 hours" },
              { icon:MapPin,    l:"Corporate Office", v:"Galaxy Diamond Plaza, Greater Noida West", s:"Gautam Buddha Nagar, UP 201301" },
            ].map(i => {
              const Icon = i.icon;
              return (
                <div key={i.l} className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{ background: LIGHT, border: `1px solid ${BLUE}22` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: BLUE }}>
                    <Icon size={20} color="white"/>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide" style={{ color: BLUE, opacity:.7 }}>{i.l}</p>
                    <p className="font-extrabold text-sm" style={{ color: BLUE }}>{i.v}</p>
                    <p className="text-xs text-gray-500">{i.s}</p>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-16 h-16">
                <img src={LOGO} alt="RapidFixMate" className="w-full h-full object-contain"/>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,.5)" }}>
              Delhi NCR's trusted multi-brand appliance repair network since 2010. Certified, fast, and reliable.
            </p>
            <div className="flex gap-3">
              {[["f","#1877F2"],["w","#25D366"],["in","#0A66C2"],["yt","#FF0000"]].map(([s,c]) => (
                <div key={s} className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer text-xs font-black uppercase transition-all"
                  style={{ background: "rgba(255,255,255,.08)", color: "rgba(255,255,255,.55)", border: "1px solid rgba(255,255,255,.1)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = c; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.08)"; e.currentTarget.style.color = "rgba(255,255,255,.55)"; }}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-bold mb-4">Quick Links</p>
            {["home","about","services","brands","contact"].map(l => (
              <button key={l} onClick={() => scroll(l)}
                className="block capitalize text-sm mb-3 transition-all text-left"
                style={{ color: "rgba(255,255,255,.5)" }}
                onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.paddingLeft = "6px"; }}
                onMouseLeave={e => { e.target.style.color = "rgba(255,255,255,.5)"; e.target.style.paddingLeft = "0"; }}>
                {l}
              </button>
            ))}
          </div>

          <div>
            <p className="text-white font-bold mb-4">Services</p>
            {["LED TV Repair","LCD TV Repair","Smart TV Repair","OLED / QLED TV Repair","TV Screen Repair","TV Installation","TV Not Turning On","TV Sound Issue"].map(s => (
              <p key={s} className="text-sm mb-3" style={{ color: "rgba(255,255,255,.5)" }}>{s}</p>
            ))}
          </div>

          <div>
            <p className="text-white font-bold mb-4">Contact</p>
            {[
              [FiPhone,  "+91-9760581464"],
              [FiMail,   "care@rapidfixmate.com"],
              [FiMapPin, "Galaxy Diamond Plaza, Greater Noida West, UP 201301"],
              [FiClock,  "24/7 — All Days"],
            ].map(([Icon,v]) => (
              <div key={v} className="flex items-start gap-3 mb-3">
                <Icon size={13} style={{ color: "rgba(255,255,255,.35)", flexShrink:0, marginTop:2 }}/>
                <span className="text-sm" style={{ color: "rgba(255,255,255,.5)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 flex items-center justify-center"
          style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,.3)" }}>© 2026 RapidFixMate. All Rights Reserved.</p>
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

      <a href="https://wa.me/919760581464" target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-200"
        style={{ background: "#25D366" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        title="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}