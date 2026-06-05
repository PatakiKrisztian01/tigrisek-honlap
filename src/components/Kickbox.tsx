{/* KÉPEK SZEKCIÓ - Javítva: A keret pontosan rásimul a képekre, nincs fix magasság torzítás */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* WAKO Kép és Link */}
              <a 
                href="https://www.wako.sport/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border-2 border-neon-orange/60 shadow-[0_0_15px_rgba(255,165,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:border-neon-orange hover:shadow-[0_0_25px_rgba(255,165,0,0.35)]"
              >
                <img 
                  src="wako.webp" 
                  alt="WAKO Kategóriák" 
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold tracking-wider uppercase bg-neon-orange/80 px-2.5 py-1 rounded">Megnyitás: wako.sport ↗</span>
                </div>
              </a>

              {/* MKBSZ Kép és Link */}
              <a 
                href="https://kick-box.hu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block relative rounded-2xl overflow-hidden border-2 border-neon-orange/60 shadow-[0_0_15px_rgba(255,165,0,0.15)] transition-all duration-300 hover:scale-[1.03] hover:border-neon-orange hover:shadow-[0_0_25px_rgba(255,165,0,0.35)]"
              >
                <img 
                  src="MKBSZ.webp" 
                  alt="MKBSZ Szövetség" 
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-bold tracking-wider uppercase bg-neon-orange/80 px-2.5 py-1 rounded">Megnyitás: kick-box.hu ↗</span>
                </div>
              </a>
            </div>
