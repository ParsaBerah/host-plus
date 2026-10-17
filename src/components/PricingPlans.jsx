import React, { useState, useRef } from 'react';


import plan1Img from '../assets/images/plan-1.png';
import plan2Img from '../assets/images/plan-2.png';
import plan3Img from '../assets/images/plan-3.png';


import abstractShapeLeft from '../assets/images/abstract-left.png';
import abstractShapeRight from '../assets/images/abstract-right.png';


const TiltCard = ({ children, isFeatured }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full flex justify-center"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.03, 1.03, 1.03)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-in-out',
          transformStyle: 'preserve-3d',
        }}
        className={`w-full relative rounded-[24px] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-[40px] cursor-pointer ${isFeatured
            ? 'bg-[#1D1F20]/80 border-2 border-blue-500/40 shadow-[0_10px_40px_rgba(21,93,252,0.25)] md:-translate-y-4'
            : 'bg-[#1D1F20]/50 border border-white/5 hover:border-white/20 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
          }`}
      >
        {children}
      </div>
    </div>
  );
};

const PricingPlans = () => {
  const topFeatures = [
    'پشتیبانی تخصصی ۲۴/۷ ساعت',
    '۷ روز ضمانت بازگشت وجه',
    'ضد بدافزار رایگان و حرفه‌ای',
  ];

  const plans = [
    {
      id: 1,
      title: 'هاست وردپرس',
      tag: 'شروع قیمت از',
      price: '۱,۹۹۰,۰۰۰',
      period: 'تومان / ماهانه',
      image: plan1Img,
      isFeatured: false,
      features: [
        'فضای دیسک: ۱۰ گیگابایت NVMe',
        'ترافیک: نامحدود',
        'بک‌‌آپ‌‌گیری روزانه منظم',
        'دامنه رایگان .ir',
        'پشتیبانی ۲۴/۷ اولویت‌دار',
      ],
      description: 'مناسب سایت‌های نوپا و پروژه‌های شخصی با سرعت بهینه‌شده برای مدیریت محتوای وردپرس.',
    },
    {
      id: 2,
      title: 'هاست وردپرس حرفه‌ای',
      tag: 'شروع قیمت از',
      price: '۲,۸۹۰,۰۰۰',
      period: 'تومان / ماهانه',
      image: plan2Img,
      isFeatured: true,
      features: [
        'فضای دیسک: ۲۵ گیگابایت NVMe',
        'ترافیک: نامحدود',
        'بک‌آپ‌گیری ابری ساعتی',
        'گواهی رایگان SSL نامحدود',
        'پشتیبانی ویژه اختصاصی',
      ],
      description: 'قدرت بسیار بالا، امنیت اختصاصی و بهینه‌شده برای فروشگاه‌های ووکامرس و سایت‌های پربازدید.',
    },
    {
      id: 3,
      title: 'هاست وردپرس شرکتی',
      tag: 'شروع قیمت از',
      price: '۱,۲۹۰,۰۰۰',
      period: 'تومان / ماهانه',
      image: plan3Img,
      isFeatured: false,
      features: [
        'فضای دیسک: ۵ گیگابایت NVMe',
        'ترافیک: نامحدود',
        'بک‌آپ‌گیری هفتگی',
        'تضمین آپ‌تایم ۹۹.۹٪',
        'پشتیبانی فنی سریع',
      ],
      description: 'انتخابی اقتصادی و مطمئن برای وبلاگ‌ها و کسب‌وکارهایی که به دنبال پایداری هستند.',
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center overflow-hidden">

      
      <div className="absolute -right-16 top-10 w-64 md:w-80 pointer-events-none select-none z-0">
        <img
          src={abstractShapeRight}
          alt="بنفش راست"
          className="w-full h-auto object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      
      <div className="absolute -left-16 top-10 w-64 md:w-80 pointer-events-none select-none z-0">
        <img
          src={abstractShapeLeft}
          alt="بنفش چپ"
          className="w-full h-auto object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-16 select-none z-10">
        {topFeatures.map((feat, idx) => (
          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
            <svg
              className="w-4 h-4 text-blue-500 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feat}</span>
          </div>
        ))}
      </div>

      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative z-10">
        {plans.map((plan) => (
          <TiltCard key={plan.id} isFeatured={plan.isFeatured}>
            
            <div
              style={{ transform: 'translateZ(30px)' }}
              className="w-full h-32 flex items-center justify-center mb-6 pointer-events-none"
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="max-h-full max-w-[140px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            
            <div
              style={{ transform: 'translateZ(20px)' }}
              className="text-center mb-6 pointer-events-none"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{plan.title}</h3>
              <span className="text-xs text-gray-400 block mb-1">{plan.tag}</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">{plan.price}</span>
                <span className="text-xs text-gray-400">{plan.period}</span>
              </div>
            </div>

            
            <ul
              style={{ transform: 'translateZ(15px)' }}
              className="flex flex-col gap-3 my-6 border-t border-b border-white/5 py-6 pointer-events-none"
            >
              {plan.features.map((item, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                  <svg
                    className="w-4 h-4 text-blue-400 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            
            <p
              style={{ transform: 'translateZ(10px)' }}
              className="text-[11px] text-gray-400 leading-relaxed text-center mb-8 pointer-events-none"
            >
              {plan.description}
            </p>

            
            <div
              style={{ transform: 'translateZ(25px)' }}
              className="w-full flex justify-center"
            >
              <div className="bg-[#1D1F20]/58 border border-[#FDFDFD]/5 rounded-[16px] backdrop-blur-[60px] p-1.5 flex items-center justify-center w-full max-w-[220px]">
                <button
                  type="button"
                  className="w-full py-2.5 px-6 rounded-[12px] bg-[#7F56D9] hover:bg-[#6c28a1] text-white text-xs font-medium border border-blue-400/30 shadow-[0_0_15px_rgba(21,93,252,0.35)] transition-all active:scale-95 cursor-pointer text-center"
                >
                  مشاهده پلن‌ها
                </button>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      
      <div className="mt-14 flex items-center justify-center gap-3 sm:gap-4 z-10 select-none">
        <div className="w-20 sm:w-28 md:w-36 h-[3px] rounded-full bg-[#8b5cf6] shadow-[0_0_12px_#8b5cf6,0_0_24px_rgba(139,92,246,0.6)] cursor-pointer transition-all duration-300" />
        <div className="w-20 sm:w-28 md:w-36 h-[3px] rounded-full bg-[#f8fafc] shadow-[0_0_10px_rgba(255,255,255,0.7)] opacity-90 cursor-pointer transition-all duration-300 hover:opacity-100" />
        <div className="w-20 sm:w-28 md:w-36 h-[3px] rounded-full bg-[#f8fafc] shadow-[0_0_10px_rgba(255,255,255,0.7)] opacity-90 cursor-pointer transition-all duration-300 hover:opacity-100" />
      </div>

    </section>
  );
};

export default PricingPlans;