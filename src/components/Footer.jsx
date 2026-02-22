export default function Footer() {
    return (
        <footer className="relative z-20 w-full bg-[#050508] rounded-t-[4rem] text-text py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-3xl font-sans font-bold tracking-tight mb-2">BLACK PILL</h2>
                    <p className="text-text-muted text-sm font-sans max-w-sm">
                        AI-powered facial analysis that tells you exactly what to fix and how to fix it.
                    </p>
                </div>

                {/* System Status */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-default">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-text-muted">System Operational</span>
                </div>
            </div>

            {/* Main CTA & Legal */}
            <div className="max-w-6xl mx-auto mt-24 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm font-sans text-text-muted">
                    &copy; {new Date().getFullYear()} Black Pill. All rights reserved.
                </p>

                <button className="magnetic-btn relative overflow-hidden group bg-accent text-primary px-8 py-3 rounded-full font-bold text-sm">
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download the App</span>
                    <span className="btn-hover-layer bg-black/20 z-0"></span>
                </button>
            </div>
        </footer>
    );
}
