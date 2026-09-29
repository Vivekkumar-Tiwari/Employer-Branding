'use client'

import Image from 'next/image'

const testimonials = [
  {
    quote: "\"We were struggling to stand out in a crowded market. Clade developed a strategy that not only redefined our brand but also increased our customer engagement by 300%.\"",
    author: "John Smith",
    location: "LONDON, UK",
    role: "CEO of Bright Horizons",
    image: "https://i.pravatar.cc/150?u=john",
    reply1: "It's our pleasure. And credit goes to the team",
    reply2: "Thank You!!"
  },
  {
    quote: "\"Working with Clade was the best decision we made. The end result wasn't just a design—it was a game-changing experience for our business. Traffic and engagement have skyrocketed since the redesign.\"",
    author: "Sophia Lin",
    location: "TORONTO, CANADA",
    role: "Owner of Bloom Cafe",
    image: "https://i.pravatar.cc/150?u=sophia",
    reply1: "Thank you for your kind words!",
    reply2: "Absolutely, we appreciate your feedback!"
  },
  {
    quote: "\"They delivered a fully responsive and visually striking website that perfectly captured our brand. Highly recommended. The design updates have improved our customer retention significantly.\"",
    author: "Carlos Rivera",
    location: "AUSTIN, USA",
    role: "Product Manager at AppSphere",
    image: "https://i.pravatar.cc/150?u=carlos",
    reply1: "We're so happy you feel that way!",
    reply2: "It was a pleasure working together!"
  },
  {
    quote: "\"Working with Clade was a game-changer. The team captured our vision perfectly and delivered a website that exceeded our expectations. The process was seamless, and the results were stunning!\"",
    author: "Sarah Johnson",
    location: "SYDNEY, AUSTRALIA",
    role: "CEO of BrightTech",
    image: "https://i.pravatar.cc/150?u=sarah",
    reply1: "Thank you! Our team is dedicated to making an impact.",
    reply2: "Absolutely, we appreciate your feedback!"
  }
]

export default function Testimonials() {
  // Only use 3 testimonials as requested
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="w-full flex flex-col">
        
        {/* Header Section */}
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight text-black leading-[1.05] max-w-2xl">
            Beloved clients<br/>word of love.
          </h2>
          <p className="text-sm md:text-[15px] text-[#333] max-w-[280px] text-right mt-6 md:mt-0 font-normal leading-relaxed">
            Their words reflect our commitment to quality, creativity, and measurable success—proving that when passion meets purpose.
          </p>
        </div>

        {/* Horizontal Scroll Track (Native CSS) */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="flex gap-6 lg:gap-8 w-max pb-8">
            
            {/* Left responsive spacer: offset by gap-8 (32px) to match 1400px container bounds */}
            <div className="w-0 lg:w-[calc(max(32px,calc((100vw-1400px)/2+32px))-32px)] shrink-0" />

            {displayTestimonials.map((t, i) => (
              
              <div key={i} className="snap-center w-[360px] md:w-[500px] lg:w-[600px] h-[640px] shrink-0 p-8 lg:p-10 rounded-[32px] bg-[#F7F7F7] flex flex-col border border-black/[0.03] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                
                <div className="text-[12px] font-mono uppercase tracking-widest text-black mb-4 font-semibold">
                  {t.author.split(' ')[0]}
                </div>

                {/* Client Quote Bubble (Blue Gradient) */}
                <div 
                  className="text-white text-[15px] lg:text-[16px] font-light leading-relaxed p-6 lg:p-8 rounded-2xl rounded-tl-sm shadow-md"
                  style={{ background: 'linear-gradient(135deg, #1F6CFF 0%, #00B4DB 50%, #4A3AFF 100%)' }}
                >
                  {t.quote}
                </div>

                {/* Agenxi Header */}
                <div className="text-right mt-10 mb-4">
                  <span className="text-[12px] font-mono uppercase tracking-widest text-black font-semibold">AGENXI</span>
                </div>

                {/* Agenxi Reply 1 (White) */}
                <div className="flex justify-end mb-3">
                  <div className="bg-white text-black text-[14px] lg:text-[15px] px-6 py-4 rounded-2xl rounded-tr-sm shadow-sm border border-black/[0.04] inline-block">
                    {t.reply1}
                  </div>
                </div>

                {/* Agenxi Reply 2 (White) */}
                <div className="flex justify-end mb-8">
                  <div className="bg-white text-black text-[14px] lg:text-[15px] px-6 py-4 rounded-2xl rounded-tr-sm shadow-sm border border-black/[0.04] inline-block">
                    {t.reply2}
                  </div>
                </div>

                {/* Footer Section */}
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-black/[0.06]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative shrink-0">
                      <Image src={t.image} alt={t.author} fill className="object-cover" unoptimized />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold text-black">{t.author}</span>
                      <span className="text-[11px] text-gray-500 uppercase tracking-widest mt-1">{t.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <svg className="w-[20px] h-[20px] text-[#FFA900] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-[15px] font-medium text-black mt-0.5">4/5</span>
                  </div>
                </div>

              </div>
            ))}
            
            {/* Right responsive spacer */}
            <div className="w-0 lg:w-[calc(max(32px,calc((100vw-1400px)/2+32px))-32px)] shrink-0" />

          </div>
        </div>

      </div>
    </section>
  )
}
