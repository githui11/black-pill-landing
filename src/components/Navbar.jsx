import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Setup morphing logic for navbar: transparent -> bg/blur when scrolled past hero
            gsap.to(navRef.current, {
                scrollTrigger: {
                    trigger: 'body',
                    start: '100vh top',
                    end: '+=1',
                    toggleActions: 'play none none reverse',
                },
                backgroundColor: 'rgba(13, 13, 18, 0.6)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                duration: 0.4,
                ease: 'power2.inOut',
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full w-11/12 max-w-5xl transition-all duration-300 border border-transparent"
        >
            <div className="font-sans font-bold text-xl tracking-tight text-text">
                BLACK PILL
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text/80">
                <a href="#features" className="link-hover hover:text-text">Analysis</a>
                <a href="#philosophy" className="link-hover hover:text-text">Philosophy</a>
                <a href="#protocol" className="link-hover hover:text-text">Protocol</a>
            </div>

            <button className="magnetic-btn relative overflow-hidden group bg-accent text-primary px-6 py-2.5 rounded-full font-semibold text-sm">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download the App</span>
                <span className="btn-hover-layer bg-black/20 z-0"></span>
            </button>
        </nav>
    );
}
