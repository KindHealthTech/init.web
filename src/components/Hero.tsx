'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const sections = [
  {
    id: 1,
    title: 'Foster patient confidence through compassion',
    description:
      'We are developing a distinctive, reason-based large language model designed to eliminate uncertainties in your interactions with patients.',
    image: '/assets/images/doc3.png',
  },
  {
    id: 3,
    title: 'AI-Powered Patient Communication',
    description:
      'Leverage advanced natural language processing to improve patient communication and understanding.',
    image: '/assets/images/doc5.png',
  },
  {
    id: 4,
    title: 'Real-time Clinical Decision Support',
    description:
      'Get instant, evidence-based suggestions to support your clinical decision-making process.',
    image: '/assets/images/mobile.png',
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight;
      const currentSection = Math.floor(scrollPosition / sectionHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white" ref={containerRef}>
      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
              ${index === activeSection ? 'bg-indigo-600 scale-150' : 'bg-gray-300 hover:bg-gray-400'}`}
            onClick={() => window.scrollTo({
              top: index * window.innerHeight,
              behavior: 'smooth'
            })}
          />
        ))}
      </div>
      <div 
        className="h-[500vh]" // 5 sections * 100vh
        style={{
          position: 'relative',
        }}
      >
        <div 
          className="sticky top-0 h-screen overflow-hidden"
        >
          {sections.map((section, index) => {
            const isActive = index === activeSection;
            const isPast = index < activeSection;
            const isFuture = index > activeSection;

            return (
              <div
                key={section.id}
                className={`
                  absolute inset-0 w-full h-full transition-all duration-700 ease-out
                  ${isActive ? 'opacity-100 translate-y-0 scale-100' : ''}
                  ${isPast ? 'opacity-0 -translate-y-1/4 scale-95' : ''}
                  ${isFuture ? 'opacity-0 translate-y-1/4 scale-95' : ''}
                `}
                style={{
                  zIndex: sections.length - index,
                  transform: `
                    scale(${isActive ? 1 : 0.95})
                    translateY(${isPast ? '-10%' : isFuture ? '10%' : '0%'})
                  `,
                }}
              >
                <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex items-center">
                  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div className="px-6 lg:col-span-7 lg:px-0">
                      <div className="mx-auto max-w-2xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                          {section.title}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                          {section.description}
                        </p>
                        {index === 0 && (
                          <div className="mt-10 flex items-center gap-x-6">
                            <a
                              href="#"
                              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Get started
                            </a>
                            <a
                              href="#"
                              className="text-sm font-semibold leading-6 text-gray-900"
                            >
                              Learn more <span aria-hidden="true">→</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-20 sm:mt-24 lg:col-span-5 lg:mt-0">
                      <div className="relative w-full h-[600px]">
                        <Image
                          src={section.image}
                          alt={`${section.title} preview`}
                          fill
                          className="rounded-xl shadow-xl ring-1 ring-gray-400/10 transition-all duration-1000"
                          style={{ objectFit: 'contain' }}
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
