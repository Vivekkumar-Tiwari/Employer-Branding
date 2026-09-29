"use client";

import { useRef, createRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Sparkles, Network, Cuboid } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Content animation
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative w-full h-screen flex flex-col justify-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#F5F5F5]">
        <video
          src="/hero--video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full"
        />
        
        {/* Dark Gradient Overlay for Text Readability at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 pb-16 md:pb-20" ref={contentRef}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          
          {/* Left: Heading */}
          <div className="flex-1 max-w-3xl">
            <p className="text-xs md:text-sm font-semibold tracking-widest text-[#044BD9] mb-4 md:mb-6 uppercase">
              EMPLOYER BRANDING / LIFE-AT
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-medium tracking-tight text-white leading-[1.05]">
              Make your workplace <br className="hidden md:block" />
              worth talking about.
            </h1>
          </div>

          {/* Right: Description & CTA */}
          <div className="flex-1 max-w-md flex flex-col gap-6">
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-sm">
              We turn real people and workplace culture into cinematic, social-first stories that attract the talent your brand deserves.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="group w-full sm:w-auto px-7 py-4 bg-[#044BD9] text-white rounded-[14px] text-[17px] font-medium transition-all hover:bg-[#033BA8] flex items-center justify-center gap-2 active:scale-[0.98]">
                Let's Talk
                <div className="relative flex items-center justify-center overflow-hidden w-5 h-5">
                  <ArrowRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-6" />
                  <ArrowRight size={18} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                </div>
              </button>
              <button className="group w-full sm:w-auto px-7 py-4 bg-white text-black rounded-[14px] text-[17px] font-medium transition-all hover:bg-gray-100 flex items-center justify-center gap-2 active:scale-[0.98]">
                Explore Our Work
                <div className="relative flex items-center justify-center overflow-hidden w-5 h-5">
                  <ArrowRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-6" />
                  <ArrowRight size={18} className="absolute -translate-x-6 transition-transform duration-300 group-hover:translate-x-0" />
                </div>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
