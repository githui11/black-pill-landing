import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-32 px-6 md:px-16 w-full flex flex-col items-center">
            <div className="max-w-6xl w-full">
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-text mb-4">Functional Diagnostics</h2>
                <p className="font-mono text-sm text-accent mb-20 uppercase tracking-widest hidden md:block">System // Analysis Architecture</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1: Diagnostic Shuffler */}
                    <div className="feature-card relative bg-surface border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col overflow-hidden h-96 group">
                        <h3 className="text-xl font-bold font-sans text-text mb-2 relative z-10">Surgical Precision</h3>
                        <p className="text-sm text-text-muted relative z-10">AI scans 13 facial parameters against golden ratio geometry, calibrated to real attractiveness data.</p>
                        <DiagnosticShuffler />
                    </div>

                    {/* Card 2: Telemetry Typewriter */}
                    <div className="feature-card relative bg-surface border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col overflow-hidden h-96">
                        <h3 className="text-xl font-bold font-sans text-text mb-2 relative z-10">Personalized Protocols</h3>
                        <p className="text-sm text-text-muted relative z-10">Every recommendation is tailored to YOUR specific weaknesses, ethnicity, and phenotype.</p>
                        <TelemetryTypewriter />
                    </div>

                    {/* Card 3: Cursor Protocol Scheduler */}
                    <div className="feature-card relative bg-surface border border-white/5 rounded-[2rem] p-8 shadow-2xl flex flex-col overflow-hidden h-96">
                        <h3 className="text-xl font-bold font-sans text-text mb-2 relative z-10">Honest Scoring</h3>
                        <p className="text-sm text-text-muted relative z-10">Calibrated against model-tier benchmarks. No ego protection, no flattery — just actionable truth.</p>
                        <CursorScheduler />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Subcomponents for Interactions

function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { id: 1, label: "// BIZYGOMATIC WIDTH: OPTIMAL", value: "89%" },
        { id: 2, label: "// GONIAL ANGLE: DEVIATION", value: "-12°" },
        { id: 3, label: "// CANTHAL TILT: POSITIVE", value: "+3°" }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex-1 mt-8 w-full flex items-center justify-center pointer-events-none">
            {cards.map((c, i) => (
                <div
                    key={c.id}
                    className="absolute w-full bg-primary border border-accent/20 rounded-2xl p-4 flex justify-between items-center transition-all"
                    style={{
                        zIndex: 3 - i,
                        transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                        opacity: 1 - (i * 0.25),
                        transitionDuration: '800ms',
                        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                >
                    <span className="font-mono text-xs text-text-muted">{c.label}</span>
                    <span className="font-mono text-sm font-bold text-accent">{c.value}</span>
                </div>
            ))}
        </div>
    );
}

function TelemetryTypewriter() {
    const fullText = `> INITIALIZING PROTOCOL...
> ANALYZING PHENOTYPE: [CAUCASIAN/NORDIC]
> DETECTED SUB-OPTIMAL MASSETER VOLUME
> GENERATING HYPERTROPHY REGIMEN...
> MATCHING FACIAL HARMONY INDICES...
> PROTOCOL SYNCED.`;

    const [text, setText] = useState('');

    useEffect(() => {
        let index = 0;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setText('');
                index = 0;
                const interval = setInterval(() => {
                    setText(fullText.slice(0, index));
                    index++;
                    if (index > fullText.length) clearInterval(interval);
                }, 50);
            }
        });

        const el = document.getElementById('typewriter-container');
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div id="typewriter-container" className="relative flex-1 mt-6 w-full p-4 bg-primary rounded-2xl font-mono text-[0.65rem] md:text-xs text-accent leading-relaxed overflow-hidden">
            <div className="absolute top-2 right-3 flex items-center gap-2">
                <span className="text-[0.6rem] text-text-muted uppercase">Live Feed</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="mt-4 whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></div>
        </div>
    );
}

function CursorScheduler() {
    const schedulerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Cursor enters
            tl.fromTo('.anim-cursor',
                { x: -50, y: 150, opacity: 0 },
                { x: 30, y: 40, opacity: 1, duration: 1, ease: 'power2.out' }
            )
                // Cursor moves to day cell (Wednesday)
                .to('.anim-cursor', { x: 85, y: -20, duration: 0.8, ease: 'power2.inOut' })
                // Click simulation
                .to('.anim-cursor', { scale: 0.85, duration: 0.1 })
                .to('.anim-cursor', { scale: 1, duration: 0.1 })
                // Cell highlights
                .to('.day-cell-active', { backgroundColor: '#C9A84C', color: '#0D0D12', duration: 0.2 }, '-=0.1')
                // Moves to Save button
                .to('.anim-cursor', { x: 140, y: 60, duration: 0.8, ease: 'power2.inOut' })
                // Click simulation
                .to('.anim-cursor', { scale: 0.85, duration: 0.1 })
                .to('.btn-save', { scale: 0.95, duration: 0.1 }, '-=0.1')
                .to('.anim-cursor', { scale: 1, duration: 0.1 })
                .to('.btn-save', { scale: 1, duration: 0.1 }, '-=0.1')
                // Fade out
                .to('.anim-cursor', { opacity: 0, duration: 0.5 });

        }, schedulerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={schedulerRef} className="relative flex-1 mt-8 w-full flex flex-col items-center justify-center p-4">
            <div className="bg-primary border border-white/5 rounded-2xl p-4 w-full relative z-0">
                <div className="flex justify-between mb-4">
                    <span className="text-[10px] uppercase font-mono text-text-muted border-b border-text-muted pb-1">Weekly Assesment</span>
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className={`aspect-square flex items-center justify-center rounded-md font-mono text-xs ${i === 3 ? 'day-cell-active text-text' : 'bg-surface text-text-muted'}`}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end">
                    <div className="btn-save bg-white/10 text-[10px] px-3 py-1 rounded font-sans uppercase">Assess</div>
                </div>
            </div>

            {/* SVG Cursor */}
            <svg className="anim-cursor absolute z-10 w-6 h-6 text-white drop-shadow-md pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2l12 11.2h-5.8l3.3 7.3-2.9 1.3-3.2-7.4-4.5 4.5z" />
            </svg>
        </div>
    );
}
