import React, { useState } from 'react';

import testimonialBg from '../assets/images/testimonial-bg.png';
import avatarImg from '../assets/images/avatar.png';
import quoteBgIcon from '../assets/images/quote-bg.png';

const TESTIMONIALS_LIST = [
  {
    id: 1,
    quote:
      'از زمان انتقال سایت به هاست پلاس، پایداری و سرعت سرویس برای ما کاملاً محسوس بوده. تیم پشتیبانی هم در زمان نیاز سریع پاسخ می‌دهد',
    name: 'پارسا برهمن',
    role: 'مدیر فنی، شرکت نمونه',
    avatar: avatarImg,
  },
  {
    id: 2,
    quote:
      'کیفیت شبکه و آپتایم سرورهای ابری هاست پلاس در مقایسه با سایر سرویس‌دهندگان واقعاً متمایز است و خیال ما را از بابت زیرساخت راحت کرده است',
    name: 'سارا محمدی',
    role: 'توسعه‌دهنده ارشد بک‌اند',
    avatar: avatarImg,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 220);
  };

  const handlePrev = () => {
    changeSlide(currentIndex === 0 ? TESTIMONIALS_LIST.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    changeSlide(currentIndex === TESTIMONIALS_LIST.length - 1 ? 0 : currentIndex + 1);
  };

  const currentItem = TESTIMONIALS_LIST[currentIndex];

  return (
    <section
      aria-label="نظرات مشتریان"
      className="relative w-full pt-32 pb-40 bg-[#050508] flex flex-col items-center overflow-hidden"
    >
      
      <div
        aria-hidden="true"
        className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[140vw] min-w-[1200px] max-w-[1600px] pointer-events-none select-none z-0"
      >
        <img
          src={testimonialBg}
          alt=""
          loading="lazy"
          className="w-full h-auto object-cover opacity-100"
        />
      </div>

      
      <div className="relative z-10 flex flex-col items-center justify-center mb-16 select-none w-full">
        <img
          src={quoteBgIcon}
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[180px] md:w-[240px] opacity-25 pointer-events-none"
        />
        <h2 className="relative z-10 text-2xl md:text-[32px] font-bold text-white tracking-wide">
          تجربه مشتریان هاست پلاس
        </h2>
      </div>

      
      <div
        className="relative z-10 w-[92%] max-w-[850px] flex flex-col items-center justify-center p-[32px] sm:p-[40px] md:p-[60px] transition-all duration-500"
        style={{
          background:
            'linear-gradient(136deg, rgba(253, 247, 255, 0.21) 0%, rgba(253, 247, 255, 0) 100%)',
          borderRadius: '46.92px',
          backdropFilter: 'blur(75.69px)',
          WebkitBackdropFilter: 'blur(75.69px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div className="w-full flex justify-end mb-4">
          <span
            aria-hidden="true"
            className="text-6xl md:text-7xl font-sans font-black text-[#7F56D9] leading-none select-none"
          >
            “
          </span>
        </div>

        
        <blockquote
          className={`text-white text-center font-bold text-[18px] md:text-[24px] leading-[36px] md:leading-[40px] mb-12 max-w-[670px] min-h-[80px] flex items-center transition-all duration-300 ${
            isTransitioning
              ? 'opacity-0 translate-y-2 blur-[3px]'
              : 'opacity-100 translate-y-0 blur-0'
          }`}
          style={{ textShadow: '2px 4px 8px rgba(0, 0, 0, 0.25)' }}
        >
          {currentItem.quote}
        </blockquote>

        
        <div
          dir="ltr"
          className="w-full flex items-center justify-center gap-[40px] sm:gap-[100px] md:gap-[140px]"
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="نظر قبلی"
            className="text-[#80859F] hover:text-white hover:-translate-x-1 transition-all duration-200 cursor-pointer select-none p-2"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>

          <div
            dir="rtl"
            className={`flex flex-col items-center gap-1 min-w-[180px] transition-all duration-300 ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="relative mb-3">
              <div className="absolute inset-0 bg-black/40 rounded-full blur-[10px] translate-y-2" />
              <img
                src={currentItem.avatar}
                alt={currentItem.name}
                className="relative w-[80px] h-[80px] rounded-full object-cover border-[3px] border-[#7F56D9]"
              />
            </div>
            <h4 className="text-[#E0E0E0] text-[19px] font-semibold leading-[32px]">
              {currentItem.name}
            </h4>
            <span className="text-[#B6BCCC] text-[18px] font-normal leading-[32px]">
              {currentItem.role}
            </span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="نظر بعدی"
            className="text-[#EBECF1] hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer select-none p-2"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;