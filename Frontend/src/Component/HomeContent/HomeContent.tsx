import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

const HomeContent: React.FC = () => {
  const navigate = useNavigate();
  const featureCardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    featureCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      featureCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el);
    }
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='rgba(255,255,255,0.05)'/%3E%3Cpath d='M30,30 L70,30 L70,70 L30,70 Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='2'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '200px'
          }}
        />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl animate-fadeInUp">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/20 shadow-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Organize your files and keep them safe, everywhere!
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                 CloudBox offers military-grade encryption, ensuring all your data is protected from unauthorized access with zero-knowledge architecture.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 cursor-pointer text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex-1 flex justify-center lg:justify-end animate-fadeInRight">
              <div className="w-full max-w-md lg:max-w-lg">
                <svg 
                  viewBox="0 0 500 400" 
                  className="w-full h-auto filter drop-shadow-2xl"
                >
                  {/* Cloud Background */}
                  <ellipse cx="250" cy="150" rx="200" ry="100" fill="rgba(255,255,255,0.1)" />
                  
                  {/* File Icons */}
                  <rect x="100" y="200" width="80" height="100" rx="10" fill="rgba(255,255,255,0.8)" />
                  <rect x="105" y="205" width="70" height="15" rx="5" fill="#667eea" />
                  <rect x="105" y="230" width="60" height="5" rx="2" fill="#ccc" />
                  <rect x="105" y="240" width="50" height="5" rx="2" fill="#ccc" />
                  
                  <rect x="210" y="180" width="80" height="100" rx="10" fill="rgba(255,255,255,0.8)" />
                  <rect x="215" y="185" width="70" height="15" rx="5" fill="#764ba2" />
                  <rect x="215" y="210" width="60" height="5" rx="2" fill="#ccc" />
                  <rect x="215" y="220" width="50" height="5" rx="2" fill="#ccc" />
                  
                  <rect x="320" y="220" width="80" height="100" rx="10" fill="rgba(255,255,255,0.8)" />
                  <rect x="325" y="225" width="70" height="15" rx="5" fill="#ff7e5f" />
                  <rect x="325" y="250" width="60" height="5" rx="2" fill="#ccc" />
                  <rect x="325" y="260" width="50" height="5" rx="2" fill="#ccc" />
                  
                  {/* Shield Icon */}
                  <path 
                    d="M250,100 C200,80 150,120 150,170 C150,220 200,260 250,300 C300,260 350,220 350,170 C350,120 300,80 250,100 Z" 
                    fill="rgba(255,255,255,0.9)" 
                  />
                  <path 
                    d="M250,100 C200,80 150,120 150,170 C150,220 200,260 250,300" 
                    fill="none" 
                    stroke="#667eea" 
                    strokeWidth="8" 
                  />
                  <path 
                    d="M220,180 L240,200 L280,160" 
                    fill="none" 
                    stroke="#764ba2" 
                    strokeWidth="10" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16">
            Why Choose CloudBox
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div 
              ref={addToRefs}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Military-Grade Encryption
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your files are protected with AES-256 encryption, the same standard used by governments and security experts worldwide.
              </p>
            </div>

            {/* Feature 2 */}
            <div 
              ref={addToRefs}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Access Anywhere
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sync your files across all devices and access them from anywhere with our secure cloud platform.
              </p>
            </div>

            {/* Feature 3 */}
            <div 
              ref={addToRefs}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Zero-Knowledge Architecture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We never have access to your encryption keys. Only you can decrypt and view your files.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;