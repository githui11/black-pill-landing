import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);
    const bgImage = "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop";
    // marble/architectural shadows vibe

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-element', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex flex-col justify-end pb-24 px-6 md:px-16 overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl text-left">
                <h1 className="flex flex-col gap-2 mb-6">
                    <span className="hero-element font-sans font-semibold text-lg md:text-2xl text-accent tracking-widest uppercase">
                        Golden ratio geometry meets
                    </span>
                    <span className="hero-element font-serif italic font-medium text-6xl md:text-8xl lg:text-9xl text-text leading-[0.9] tracking-tight">
                        Brutal truth.
                    </span>
                </h1>

                <p className="hero-element font-sans text-text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                    AI-powered facial analysis that tells you exactly what to fix and how to fix it.
                    No ego protection. Just actionable precision.
                </p>

                <button className="hero-element magnetic-btn relative overflow-hidden group bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download the App</span>
                    <span className="btn-hover-layer bg-black/20 z-0"></span>
                    <svg className="w-5 h-5 relative z-10 group-hover:translate-y-[-1px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
