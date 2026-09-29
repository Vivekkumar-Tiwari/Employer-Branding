'use client'

import { useRef, useState, useEffect } from 'react'
import { Menu, X, Search, Command, Sparkles, CornerDownLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power3.out'
    })
  }, { scope: navRef })

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3.5'
          : 'bg-transparent border-transparent py-5'
          }`}
      >
        {/* Container */}
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">

          {/* Logo and Left Links */}
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]">
              <div
                className={`${isScrolled ? 'bg-[#044BD9]' : 'bg-white'} h-8 w-[124px] transition-colors duration-300`}
                style={{
                  maskImage: 'url(/logo.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskImage: 'url(/logo.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left center',
                }}
              />
            </div>

            <div className="hidden lg:flex items-center gap-5 lg:gap-6">
              {['Work', 'Life-at', 'Services', 'About', 'Insights'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`group relative text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-black hover:text-[#044BD9]' : 'text-white/90 hover:text-white'}`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className={`px-5 py-2.5 shadow-sm rounded-[14px] text-[15px] font-medium transition-all ${isScrolled ? 'bg-white text-black border border-gray-200 hover:bg-gray-50' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'}`}>
              See Our Work
            </button>
            <button className={`group flex items-center gap-1.5 px-5 py-2.5 rounded-[14px] text-[15px] font-medium transition-all active:scale-[0.98] ${isScrolled ? 'bg-[#18181B] text-white hover:bg-[#27272A]' : 'bg-white text-black hover:bg-gray-100'}`}>
              Let's Talk
              <div className="relative flex items-center justify-center overflow-hidden w-4 h-4 ml-0.5">
                <ArrowRight size={16} className="absolute transition-transform duration-300 group-hover:translate-x-5" />
                <ArrowRight size={16} className="absolute -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[calc(100%+16px)] left-0 right-0 bg-white rounded-3xl p-6 premium-shadow border border-gray-100 animate-in slide-in-from-top-4 fade-in duration-300 lg:hidden">
            <div className="space-y-4">
              {['Work', 'Life-at', 'Services', 'About', 'Insights'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-gray-700 hover:text-black"
                >
                  {item}
                </a>
              ))}
              <div className="pt-6 space-y-3 border-t border-gray-100">
                <button className="w-full px-6 py-3 rounded-[14px] bg-white text-black border border-gray-200 shadow-sm font-semibold hover:bg-gray-50">
                  See Our Work
                </button>
                <button className="group w-full flex justify-center items-center gap-2 px-6 py-3 rounded-[14px] bg-[#18181B] text-white font-semibold hover:bg-[#27272A]">
                  Let's Talk
                  <div className="relative flex items-center justify-center overflow-hidden w-4 h-4">
                    <ArrowRight size={16} className="absolute transition-transform duration-300 group-hover:translate-x-5" />
                    <ArrowRight size={16} className="absolute -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex justify-center pt-[12vh] px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-fit animate-in zoom-in-95 duration-200">
            {/* Search Input Area */}
            <div className="flex items-center px-4 py-4">
              <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search for anything..."
                className="flex-1 bg-transparent border-none outline-none text-base placeholder:text-gray-400"
                autoFocus
              />
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-gray-500 font-medium shrink-0 ml-4">
                <span className="px-2 py-1 bg-gray-100 rounded-md flex items-center gap-1 border border-gray-200"><Sparkles size={12} /> Ask AI</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
