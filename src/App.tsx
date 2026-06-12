import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BookOpen, Calculator, Palette, Users, Phone,
  MapPin, Clock, ChevronRight, Shield, Quote, Star,
  Utensils
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────── NAVIGATION ──────────────────────────────── */
function Navigation() {
  const navItems = ['Programs', 'Day', 'Learning', 'Safety', 'Contact'];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
      style={{ mixBlendMode: 'multiply' }}>
      <div className="font-nunito text-xl md:text-2xl font-black text-[#2A2A2A]">
        Sanskar Little Star
      </div>
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}
            className="font-nunito font-bold text-[#2A2A2A] hover:text-[#FF6B6B] transition-colors text-sm">
            {item}
          </a>
        ))}
        <button className="btn-coral text-sm">Book a Visit</button>
      </div>
    </nav>
  );
}

/* ──────────────────────────────── SECTION 1: HERO ──────────────────────────────── */
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // ENTRANCE (0-30%)
      tl.fromTo(mascotRef.current,
        { x: '-60vw', rotation: -25, scale: 0.75, opacity: 0 },
        { x: 0, rotation: 0, scale: 1, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(cardRef.current,
        { x: '60vw', scale: 0.92, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08 }, 0.05);

      // SETTLE (30-70%) - hold

      // EXIT (70-100%)
      tl.to(cardRef.current,
        { x: '-18vw', scale: 0.96, opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(mascotRef.current,
        { y: '18vh', rotation: 10, opacity: 0.3, ease: 'power2.in' }, 0.7);
      tl.to(contentRef.current?.children || [],
        { y: '-10vh', opacity: 0.2, stagger: 0.02 }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Floating animation for mascot
  useEffect(() => {
    const float = gsap.to(mascotRef.current, {
      y: -10,
      duration: 1.6,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    });
    return () => { float.kill(); };
  }, []);

  const pills = ['Programs', 'Day', 'Learning', 'Safety'];

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-sunny overflow-hidden">
      {/* Mascot */}
      <img ref={mascotRef} src="/hero_mascot.png" alt="Star Mascot"
        className="absolute left-[4vw] md:left-[8vw] top-[14vh] w-[45vw] md:w-[38vw] max-w-[500px] z-10" />

      {/* Hero Card */}
      <div ref={cardRef}
        className="absolute left-[6vw] md:left-[46vw] top-[18vh] w-[88vw] md:w-[46vw] min-h-[56vh] section-card-thick z-20">
        <div ref={contentRef} className="flex flex-col h-full justify-between">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#2A2A2A] leading-tight mb-4">
              Every little star deserves a bright start.
            </h1>
            <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed max-w-[90%]">
              A nurturing playschool where curiosity leads, creativity shines, and every child is celebrated.
              Established in 2013, Sanskar Little Star has been Hyderabad's trusted name in early childhood education.
            </p>
          </div>
          <div className="mt-6">
            <button className="btn-coral mb-4">Book a School Tour</button>
            <div className="flex flex-wrap gap-2">
              {pills.map((pill) => (
                <a key={pill} href={`#${pill.toLowerCase()}`}
                  className="px-4 py-2 rounded-full border-2 border-[#2A2A2A] bg-white text-[#2A2A2A] font-nunito font-bold text-xs hover:bg-[#FF6B6B] hover:text-white hover:border-[#FF6B6B] transition-all">
                  {pill}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 2: WHO WE ARE ──────────────────────────────── */
function WhoWeAreSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      tl.fromTo(photoRef.current,
        { x: '-70vw', rotation: -3, opacity: 0 },
        { x: 0, rotation: 0, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(cardRef.current,
        { x: '70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0);

      tl.to(cardRef.current,
        { x: '24vw', opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(photoRef.current,
        { x: '-24vw', scale: 0.98, opacity: 0.3, ease: 'power2.in' }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="who" className="relative w-full h-screen bg-sky overflow-hidden">
      {/* Photo Card */}
      <div ref={photoRef}
        className="absolute left-[4vw] md:left-[6vw] top-[14vh] md:top-[16vh] w-[42vw] h-[50vh] md:h-[62vh] rounded-[28px] overflow-hidden border-[8px] md:border-[10px] border-white z-10"
        style={{ boxShadow: '0 18px 0 rgba(0,0,0,0.10)' }}>
        <img src="/who_photo.jpg" alt="Teacher with children" className="w-full h-full object-cover" />
      </div>

      {/* Text Card */}
      <div ref={cardRef}
        className="absolute right-[4vw] md:right-[6vw] top-[14vh] md:top-[18vh] w-[46vw] md:w-[40vw] min-h-[50vh] md:min-h-[56vh] section-card-thick z-20">
        <h2 className="text-2xl md:text-4xl font-black text-[#2A2A2A] mb-2">Who we are</h2>
        <div className="hairline" />
        <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-6">
          Sanskar Little Star is a warm, welcoming space where early learning feels like home.
          Established in 2013 in Barkatpura, Hyderabad, we combine structured play, creativity,
          and care to help children grow confident, kind, and curious.
        </p>
        <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-6">
          Located opposite Bank of Baroda, near Reddy Women's College, we're a one-stop destination
          for Day Care, Play School, Nursery, and Creche services — trusted by families across Hyderabad.
        </p>
        <a href="#programs" className="inline-flex items-center gap-2 text-[#FF6B6B] font-nunito font-bold hover:gap-3 transition-all">
          See our programs <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 3: WHAT YOUR CHILD WILL LEARN ──────────────────────────────── */
function LearningSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: BookOpen, title: 'Language & Literacy', desc: 'Phonics, stories, vocabulary games, and confident communication.' },
    { icon: Calculator, title: 'Numbers & Logic', desc: 'Counting, patterns, puzzles, and early problem-solving.' },
    { icon: Palette, title: 'Art & Creativity', desc: 'Drawing, crafts, music, and imaginative expression.' },
    { icon: Users, title: 'Social Skills', desc: 'Sharing, listening, teamwork, and emotional awareness.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      tl.fromTo(headlineRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' }, 0);

      const cards = cardsRef.current?.children || [];
      tl.fromTo(cards,
        { y: '60vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, ease: 'power2.out' }, 0.05);

      tl.to(cards,
        { y: '-22vh', opacity: 0, stagger: 0.03, ease: 'power2.in' }, 0.7);
      tl.to(headlineRef.current,
        { opacity: 0.2, ease: 'power2.in' }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="learning" className="relative w-full h-screen bg-sunny overflow-hidden">
      <div ref={headlineRef} className="absolute top-[8vh] md:top-[10vh] left-0 right-0 text-center px-6">
        <h2 className="text-2xl md:text-4xl font-black text-[#2A2A2A] mb-3">What your child will learn</h2>
        <p className="text-sm md:text-base text-[#5A5A5A] max-w-[600px] mx-auto">
          A balanced mix of early academics, art, movement, and social skills — delivered through play.
        </p>
      </div>

      <div ref={cardsRef}
        className="absolute top-[26vh] md:top-[28vh] left-[5vw] md:left-[10vw] right-[5vw] md:right-[10vw] grid grid-cols-2 gap-3 md:gap-6">
        {features.map((f, i) => (
          <div key={i} className="section-card p-4 md:p-6">
            <f.icon className="w-8 h-8 md:w-12 md:h-12 text-[#FF6B6B] mb-3" strokeWidth={2.5} />
            <h3 className="text-base md:text-xl font-bold text-[#2A2A2A] mb-2">{f.title}</h3>
            <p className="text-xs md:text-sm text-[#5A5A5A] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 4: A DAY AT SANSKAR ──────────────────────────────── */
function DaySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const timeline = [
    { time: '08:30', activity: 'Warm welcome + free play' },
    { time: '09:30', activity: 'Circle time + theme activity' },
    { time: '10:30', activity: 'Snack break + outdoor play' },
    { time: '11:30', activity: 'Creative session (art/music)' },
    { time: '12:30', activity: 'Story time + calm down' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      tl.fromTo(leftRef.current,
        { x: '-70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(rightRef.current,
        { x: '70vw', scale: 1.03, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'power2.out' }, 0);

      const items = leftRef.current?.querySelectorAll('.timeline-item') || [];
      tl.fromTo(items,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.07 }, 0.1);

      tl.to(leftRef.current,
        { y: '18vh', opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(rightRef.current,
        { y: '-18vh', scale: 0.98, opacity: 0.3, ease: 'power2.in' }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="day" className="relative w-full h-screen bg-sky overflow-hidden">
      {/* Left Text Card */}
      <div ref={leftRef}
        className="absolute left-[4vw] md:left-[6vw] top-[12vh] md:top-[16vh] w-[46vw] md:w-[42vw] min-h-[55vh] md:min-h-[62vh] section-card-thick z-20">
        <h2 className="text-2xl md:text-4xl font-black text-[#2A2A2A] mb-4">A day at Sanskar</h2>
        <div className="space-y-3 md:space-y-4">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#FF6B6B]" />
                {i < timeline.length - 1 && <div className="w-[2px] h-6 bg-[#2A2A2A] opacity-20" />}
              </div>
              <div>
                <span className="font-nunito font-bold text-[#FF6B6B] text-sm">{item.time}</span>
                <p className="text-xs md:text-sm text-[#5A5A5A]">{item.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Photo */}
      <div ref={rightRef}
        className="absolute right-[4vw] md:right-[6vw] top-[12vh] md:top-[16vh] w-[46vw] md:w-[40vw] h-[55vh] md:h-[62vh] rounded-[28px] overflow-hidden border-[8px] md:border-[10px] border-white z-10"
        style={{ boxShadow: '0 18px 0 rgba(0,0,0,0.10)' }}>
        <img src="/day_photo.jpg" alt="Children playing outdoors" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 5: OUR PROGRAMS ──────────────────────────────── */
function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const programs = [
    { age: '1.5 – 2.5 years', title: 'Toddler Program', desc: 'Sensory play, routines, and language building.' },
    { age: '2.5 – 3.5 years', title: 'Nursery', desc: 'Early phonics, numbers, art, and social play.' },
    { age: '3.5 – 4.5 years', title: 'Junior KG', desc: 'Reading readiness, writing prep, science exploration.' },
    { age: '4.5 – 5.5 years', title: 'Senior KG', desc: 'Independent learning, presentations, school readiness.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(cards,
        { x: '18vw', opacity: 0, rotation: 1 },
        {
          x: 0, opacity: 1, rotation: 0, stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', end: 'top 40%', scrub: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="programs" className="relative w-full min-h-screen bg-sunny py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Heading */}
          <div ref={headingRef} className="md:w-[45%] md:sticky md:top-32 md:self-start">
            <h2 className="text-3xl md:text-5xl font-black text-[#2A2A2A] mb-4">Our programs</h2>
            <p className="text-base md:text-lg text-[#5A5A5A] leading-relaxed">
              Age-appropriate groups designed for joyful, hands-on learning.
              Each program is carefully crafted to nurture your child's unique potential.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-[#FF6B6B] border-2 border-white flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" fill="white" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#5A5A5A] font-nunito font-semibold">Rated 4.9/5 by 51+ happy parents</span>
            </div>
          </div>

          {/* Right Cards */}
          <div ref={cardsRef} className="md:w-[50%] space-y-4 md:space-y-6">
            {programs.map((p, i) => (
              <div key={i} className="section-card hover:-translate-y-1 transition-transform">
                <span className="inline-block px-3 py-1 bg-[#C7E7FF] rounded-full text-xs font-nunito font-bold text-[#2A2A2A] mb-2">
                  {p.age}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#2A2A2A] mb-2">{p.title}</h3>
                <p className="text-sm text-[#5A5A5A]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 6: FUN THAT BUILDS SKILLS ──────────────────────────────── */
function FunSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      tl.fromTo(photoRef.current,
        { scale: 0.72, y: '30vh', opacity: 0 },
        { scale: 1, y: 0, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(overlayRef.current,
        { x: '-40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0.05);
      tl.fromTo(badgeRef.current,
        { x: '30vw', scale: 0.6, rotation: 20, opacity: 0 },
        { x: 0, scale: 1, rotation: 0, opacity: 1, ease: 'back.out(1.6)' }, 0.08);

      tl.to(photoRef.current,
        { y: '-18vh', opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(overlayRef.current,
        { y: '14vh', opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(badgeRef.current,
        { x: '18vw', rotation: 12, opacity: 0, ease: 'power2.in' }, 0.7);
    }, sectionRef);

    // Badge float
    const float = gsap.to(badgeRef.current, {
      y: -8, duration: 1.3, yoyo: true, repeat: -1, ease: 'sine.inOut'
    });
    return () => { float.kill(); ctx.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-sky overflow-hidden">
      {/* Photo Card */}
      <div ref={photoRef}
        className="absolute left-[8vw] md:left-[18vw] top-[12vh] md:top-[14vh] w-[84vw] md:w-[64vw] h-[44vh] md:h-[56vh] rounded-[28px] md:rounded-[36px] overflow-hidden z-10"
        style={{ boxShadow: '0 18px 0 rgba(0,0,0,0.10)' }}>
        <img src="/fun_photo.jpg" alt="Child learning with blocks" className="w-full h-full object-cover" />
      </div>

      {/* Badge */}
      <div ref={badgeRef}
        className="absolute right-[6vw] md:right-[14vw] top-[8vh] md:top-[10vh] w-20 h-20 md:w-[10vw] md:h-[10vw] max-w-[140px] max-h-[140px] rounded-full bg-[#FF6B6B] flex items-center justify-center z-30"
        style={{ boxShadow: '0 12px 0 rgba(0,0,0,0.12)' }}>
        <span className="text-white font-nunito font-black text-xs md:text-sm text-center leading-tight px-2">
          Play =<br />Learning
        </span>
      </div>

      {/* Text Overlay */}
      <div ref={overlayRef}
        className="absolute left-[4vw] md:left-[10vw] top-[50vh] md:top-[58vh] w-[68vw] md:w-[44vw] min-h-[22vh] md:min-h-[30vh] section-card-thick z-20">
        <h2 className="text-xl md:text-3xl font-black text-[#2A2A2A] mb-3">Fun that builds real skills</h2>
        <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed">
          From blocks to ballet, every activity is designed to strengthen motor skills, focus, and confidence.
          Our play-based approach ensures children learn while having fun.
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 7: HAPPY PARENTS ──────────────────────────────── */
function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Our daughter runs to school every morning. The teachers are incredibly patient and the activities are so thoughtful. Sanskar Little Star has been a blessing for our family.",
      author: "Priya & Rahul K.",
      role: "Parents of Aanya, Nursery"
    },
    {
      quote: "We love the balance of learning and play. Our son's confidence has grown beautifully. The 24/7 care option is perfect for working parents like us.",
      author: "Ananya M.",
      role: "Parent of Arjun, Junior KG"
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(cards,
        { x: '18vw', opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', end: 'top 40%', scrub: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-sunny py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Heading */}
          <div ref={headingRef} className="md:w-[45%] md:sticky md:top-32 md:self-start">
            <h2 className="text-3xl md:text-5xl font-black text-[#2A2A2A] mb-4">Happy parents</h2>
            <p className="text-base md:text-lg text-[#5A5A5A] leading-relaxed">
              Hear from families who call Sanskar their second home.
              Rated 4.9 out of 5 by over 51 happy parents on JustDial.
            </p>
          </div>

          {/* Right Cards */}
          <div ref={cardsRef} className="md:w-[50%] space-y-4 md:space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="section-card relative">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-[#FF6B6B] opacity-25" />
                <p className="text-sm md:text-base text-[#2A2A2A] leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-nunito font-bold text-[#2A2A2A]">{t.author}</p>
                  <p className="text-xs text-[#5A5A5A]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 8: HEALTHY BEGINNINGS ──────────────────────────────── */
function HealthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      tl.fromTo(photoRef.current,
        { x: '-70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(bandRef.current,
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: 'left', ease: 'power2.out' }, 0.05);
      tl.fromTo(cardRef.current,
        { x: '70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0);

      const bullets = cardRef.current?.querySelectorAll('.bullet') || [];
      tl.fromTo(bullets,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06 }, 0.1);

      tl.to(cardRef.current,
        { y: '16vh', opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(photoRef.current,
        { y: '-16vh', scale: 0.98, opacity: 0.3, ease: 'power2.in' }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-sky overflow-hidden">
      {/* Coral banner band */}
      <div ref={bandRef}
        className="absolute left-[2vw] top-[58vh] md:top-[62vh] w-[50vw] h-[8vh] md:h-[10vh] bg-[#FF6B6B] rounded-[20px] z-0 opacity-60" />

      {/* Photo Card */}
      <div ref={photoRef}
        className="absolute left-[4vw] md:left-[6vw] top-[12vh] md:top-[14vh] w-[42vw] h-[50vh] md:h-[62vh] rounded-[28px] overflow-hidden border-[8px] md:border-[10px] border-white z-10"
        style={{ boxShadow: '0 18px 0 rgba(0,0,0,0.10)' }}>
        <img src="/health_photo.jpg" alt="Healthy child eating fruit" className="w-full h-full object-cover" />
      </div>

      {/* Text Card */}
      <div ref={cardRef}
        className="absolute right-[4vw] md:right-[6vw] top-[12vh] md:top-[16vh] w-[46vw] md:w-[40vw] min-h-[50vh] md:min-h-[60vh] section-card-thick z-20">
        <h2 className="text-2xl md:text-4xl font-black text-[#2A2A2A] mb-4">Healthy beginnings</h2>
        <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-6">
          Nutritious, kid-friendly meals, daily movement, and habits that build strong bodies and happy minds.
        </p>
        <div className="space-y-3">
          {['Balanced meals & hydration', 'Active play + outdoor time', 'Rest periods that recharge'].map((item, i) => (
            <div key={i} className="bullet flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#B9F8C5] flex items-center justify-center flex-shrink-0">
                <Utensils className="w-4 h-4 text-[#2A2A2A]" />
              </div>
              <span className="text-sm md:text-base text-[#2A2A2A]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 9: SAFETY FIRST ──────────────────────────────── */
function SafetySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      tl.fromTo(leftRef.current,
        { x: '-70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0);
      tl.fromTo(shieldRef.current,
        { scale: 0.5, rotation: -20, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, ease: 'back.out(1.8)' }, 0.08);
      tl.fromTo(rightRef.current,
        { x: '70vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'power2.out' }, 0);

      tl.to(leftRef.current,
        { x: '-18vw', opacity: 0.25, ease: 'power2.in' }, 0.7);
      tl.to(rightRef.current,
        { x: '18vw', opacity: 0.3, ease: 'power2.in' }, 0.7);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="safety" className="relative w-full h-screen bg-sunny overflow-hidden">
      {/* Left Text Card */}
      <div ref={leftRef}
        className="absolute left-[4vw] md:left-[6vw] top-[12vh] md:top-[16vh] w-[46vw] md:w-[42vw] min-h-[55vh] md:min-h-[62vh] section-card-thick z-20">
        <div ref={shieldRef} className="mb-4">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center">
            <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-[#2A2A2A] mb-4">Safety first</h2>
        <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed mb-6">
          A secure campus, trained staff, and clear protocols so you can focus on your day with peace of mind.
        </p>
        <div className="space-y-3">
          {['CCTV + secure entry/exit', 'Child-safe furniture & materials', 'Emergency readiness'].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF6B6B] flex-shrink-0" />
              <span className="text-sm md:text-base text-[#2A2A2A]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Photo */}
      <div ref={rightRef}
        className="absolute right-[4vw] md:right-[6vw] top-[12vh] md:top-[14vh] w-[46vw] md:w-[40vw] h-[55vh] md:h-[62vh] rounded-[28px] overflow-hidden border-[8px] md:border-[10px] border-white z-10"
        style={{ boxShadow: '0 18px 0 rgba(0,0,0,0.10)' }}>
        <img src="/safety_photo.jpg" alt="Safe classroom environment" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 10: MEET OUR TEAM ──────────────────────────────── */
function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const team = [
    {
      name: 'Neha Sharma',
      role: 'Founder & Head of School',
      desc: '18+ years in early childhood education. Believes every child is a born explorer.',
      initial: 'N',
      color: '#FF6B6B'
    },
    {
      name: 'Rohan Mehta',
      role: 'Academic Coordinator',
      desc: 'Designs play-based learning experiences that build real-world skills.',
      initial: 'R',
      color: '#C7E7FF'
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 55%', scrub: true }
        }
      );

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(cards,
        { x: '18vw', opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', end: 'top 40%', scrub: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-sky py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Heading */}
          <div ref={headingRef} className="md:w-[45%] md:sticky md:top-32 md:self-start">
            <h2 className="text-3xl md:text-5xl font-black text-[#2A2A2A] mb-4">Meet our team</h2>
            <p className="text-base md:text-lg text-[#5A5A5A] leading-relaxed">
              Passionate educators who guide with patience, joy, and expertise.
              Our dedicated staff creates a nurturing environment where every child thrives.
            </p>
          </div>

          {/* Right Cards */}
          <div ref={cardsRef} className="md:w-[50%] space-y-4 md:space-y-6">
            {team.map((m, i) => (
              <div key={i} className="section-card flex items-start gap-4">
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: m.color }}>
                  <span className="text-xl md:text-2xl font-nunito font-black text-[#2A2A2A]">{m.initial}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2A2A2A]">{m.name}</h3>
                  <p className="text-xs md:text-sm text-[#FF6B6B] font-nunito font-semibold mb-1">{m.role}</p>
                  <p className="text-xs md:text-sm text-[#5A5A5A]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────── SECTION 11: CONTACT ──────────────────────────────── */
function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: '-12vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 50%', scrub: true }
        }
      );
      gsap.fromTo(rightRef.current,
        { x: '12vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 50%', scrub: true }
        }
      );
      gsap.fromTo(mascotRef.current,
        { y: '10vh', opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 40%', scrub: true }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full min-h-screen bg-sunny py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Contact Card */}
          <div ref={leftRef} className="md:w-[45%]">
            <div className="section-card-thick">
              <h2 className="text-2xl md:text-3xl font-black text-[#2A2A2A] mb-6">Visit us</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-[#5A5A5A]">House No 3-4-526/21, Near Reddy Women's College,</p>
                    <p className="text-sm text-[#5A5A5A]">Barkatpura, Hyderabad - 500027</p>
                    <p className="text-xs text-[#5A5A5A] mt-1">Opp Bank of Baroda, Behind Jain Temple, Kachiguda</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
                  <p className="text-sm text-[#2A2A2A] font-nunito font-semibold">07947460693</p>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
                  <p className="text-sm text-[#5A5A5A]">Open 24 Hrs (Mon-Sun)</p>
                </div>

                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
                  <p className="text-sm text-[#2A2A2A] font-nunito font-semibold">Rated 4.9/5 (51 Reviews)</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-[#2A2A2A] border-opacity-10">
                <p className="text-xs text-[#5A5A5A] mb-2">Services offered:</p>
                <div className="flex flex-wrap gap-2">
                  {['Play School', 'Day Care', 'Nursery', 'Creche'].map(s => (
                    <span key={s} className="px-3 py-1 bg-[#C7E7FF] rounded-full text-xs font-nunito font-bold text-[#2A2A2A]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div ref={rightRef} className="md:w-[50%]">
            <div className="section-card-thick">
              <h2 className="text-2xl md:text-3xl font-black text-[#2A2A2A] mb-6">Enquire now</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Parent Name" className="w-full px-4 py-3 rounded-2xl border-2 border-[#2A2A2A] border-opacity-10 bg-white text-sm focus:border-[#FF6B6B] focus:outline-none transition-colors" />
                  <input type="text" placeholder="Child Name" className="w-full px-4 py-3 rounded-2xl border-2 border-[#2A2A2A] border-opacity-10 bg-white text-sm focus:border-[#FF6B6B] focus:outline-none transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-2xl border-2 border-[#2A2A2A] border-opacity-10 bg-white text-sm focus:border-[#FF6B6B] focus:outline-none transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-2xl border-2 border-[#2A2A2A] border-opacity-10 bg-white text-sm focus:border-[#FF6B6B] focus:outline-none transition-colors" />
                </div>
                <select className="w-full px-4 py-3 rounded-2xl border-2 border-[#2A2A2A] border-opacity-10 bg-white text-sm focus:border-[#FF6B6B] focus:outline-none transition-colors text-[#5A5A5A]">
                  <option value="">Select Program Interest</option>
                  <option value="toddler">Toddler Program (1.5-2.5 yrs)</option>
                  <option value="nursery">Nursery (2.5-3.5 yrs)</option>
                  <option value="junior">Junior KG (3.5-4.5 yrs)</option>
                  <option value="senior">Senior KG (4.5-5.5 yrs)</option>
                  <option value="daycare">Day Care</option>
                </select>
                <textarea placeholder="Message" rows={3} className="w-full px-4 py-3 rounded-2xl border-2 border-[#2A2A2A] border-opacity-10 bg-white text-sm focus:border-[#FF6B6B] focus:outline-none transition-colors resize-none" />
                <button type="submit" className="btn-coral w-full">Schedule a Call</button>
              </form>
            </div>
          </div>
        </div>

        {/* Mascot */}
        <img ref={mascotRef} src="/hero_mascot.png" alt="Star Mascot"
          className="hidden md:block absolute left-[2vw] bottom-[6vh] w-[16vw] max-w-[200px] z-10" />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t-2 border-[#2A2A2A] border-opacity-10 text-center">
        <p className="text-sm text-[#5A5A5A]">© Sanskar Little Star A Play School. Built with care since 2013.</p>
      </footer>
    </section>
  );
}

/* ──────────────────────────────── MAIN APP ──────────────────────────────── */
function App() {
  useEffect(() => {
    // Global snap for pinned sections
    const setupSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        }
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupSnap, 500);
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <WhoWeAreSection />
        <LearningSection />
        <DaySection />
        <ProgramsSection />
        <FunSection />
        <TestimonialsSection />
        <HealthSection />
        <SafetySection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
