import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Protocol() {
    const containerRef = useRef(null);

    const steps = [
        {
            id: 1,
            num: "01",
            title: "Analyze",
            desc: "Scan 13 facial parameters against golden ratio geometry.",
            Animation: GeometricScan
        },
        {
            id: 2,
            num: "02",
            title: "Diagnose",
            desc: "Identify specific deviations and sub-optimal phenotypes.",
            Animation: LaserGrid
        },
        {
            id: 3,
            num: "03",
            title: "Prescribe",
            desc: "Generate personalized, actionable hypertrophy protocols.",
            Animation: PulsingWaveform
        }
    ];

    // We must re-register ScrollTrigger if we are using it
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                // Pin each card
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    end: () => `+=${window.innerHeight * cards.length}`,
                    id: `card-${i}`
                });

                // Fade scale card when the NEXT card comes into view
                if (i < cards.length - 1) {
                    gsap.to(card, {
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        },
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(20px)',
                    });
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="protocol" className="relative w-full bg-primary z-10">
            {steps.map((step, i) => (
                <div
                    key={step.id}
                    className="protocol-card w-full h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-16 bg-primary border-t border-white/5"
                    style={{ zIndex: i + 10 }}
                >
                    <div className="w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-12">
                        <span className="font-mono text-accent text-lg mb-4">// {step.num}</span>
                        <h2 className="font-sans font-bold text-5xl md:text-7xl text-text mb-4">{step.title}</h2>
                        <p className="font-sans text-text-muted text-xl max-w-md">{step.desc}</p>
                    </div>
                    <div className="w-full md:w-1/2 h-64 md:h-[500px] mt-12 md:mt-0 bg-surface rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center shadow-2xl relative">
                        <step.Animation />
                    </div>
                </div>
            ))}
        </section>
    );
}

function GeometricScan() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-80 h-80 text-accent/50 animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.1" />
            </svg>
        </div>
    );
}

function LaserGrid() {
    return (
        <div className="absolute inset-0 w-full h-full flex flex-col p-12">
            <div className="grid grid-cols-8 grid-rows-5 gap-2 w-full h-full opacity-20">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div key={i} className="border border-white/20 rounded-md" />
                ))}
            </div>
            <div className="absolute left-0 top-1/4 w-full h-[2px] bg-accent shadow-[0_0_20px_4px_#C9A84C]"
                style={{ animation: 'scan 4s ease-in-out infinite alternate' }} />
            <style>{`
        @keyframes scan {
          0% { transform: translateY(-50px); }
          100% { transform: translateY(350px); }
        }
      `}</style>
        </div>
    );
}

function PulsingWaveform() {
    return (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center p-12">
            <svg className="w-full h-32 text-accent drop-shadow-[0_0_15px_#C9A84C]" viewBox="0 0 200 40" fill="none" preserveAspectRatio="none">
                <path
                    d="M0 20 C 20 20, 30 5, 40 20 S 60 40, 70 20 S 90 20, 100 20 S 110 5, 120 20 S 140 40, 150 20 S 170 20, 180 20 S 190 20, 200 20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="animate-[pulse_1.5s_ease-in-out_infinite]"
                />
            </svg>
        </div>
    );
}
