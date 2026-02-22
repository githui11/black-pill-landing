import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
    const sectionRef = useRef(null);
    // Using an abstract organic/dark texture
    const bgTexture = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop";

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Line-by-line reveal
            gsap.from('.reveal-text', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: 'power3.out',
            });

            // bg parallax
            gsap.to('.texture-bg', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                y: 100,
                ease: 'none',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="philosophy" className="relative w-full py-40 px-6 md:px-16 bg-primary flex flex-col justify-center overflow-hidden min-h-[80vh]">
            <div
                className="texture-bg absolute -inset-20 z-0 bg-cover bg-center opacity-10 mix-blend-screen"
                style={{ backgroundImage: `url(${bgTexture})` }}
            />

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="mb-16">
                    <p className="reveal-text text-xl md:text-3xl font-sans text-text-muted">
                        Most beauty apps focus on: <span className="text-text">ego protection and flattery</span>.
                    </p>
                </div>

                <div>
                    <p className="reveal-text font-serif italic font-medium text-5xl md:text-7xl lg:text-8xl text-text leading-[1.1] tracking-tight">
                        We focus on:<br />
                        <span className="text-accent">brutal truth</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
