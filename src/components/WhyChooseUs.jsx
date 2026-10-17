import React from 'react';

import supportIcon from '../assets/images/features/support.png';
import uptimeIcon from '../assets/images/features/uptime.png';
import securityIcon from '../assets/images/features/security.png';
import speedIcon from '../assets/images/features/speed.png';

const FEATURES_DATA = [
  {
    id: 'support',
    title: 'پشتیبانی ۲۴/۷',
    desc: 'تیم متخصص در تمام ساعات شبانه‌روز',
    image: supportIcon,
  },
  {
    id: 'uptime',
    title: 'پایداری بالا',
    desc: 'زیرساخت پایدار با مانیتورینگ دائمی',
    image: uptimeIcon,
  },
  {
    id: 'security',
    title: 'امنیت بالا',
    desc: 'محافظ چند لایه ای و بک آپ گیری منظم',
    image: securityIcon,
  },
  {
    id: 'speed',
    title: 'سرعت بالا',
    desc: 'سرور های قدرتمند همراه با شبکه پر سرعت',
    image: speedIcon,
  },
];

const WhyChooseUs = () => {
  return (
    <section 
      aria-labelledby="why-choose-us-heading"
      className="relative w-full py-20 px-4 flex flex-col items-center bg-[#050508]"
    >
      
      <div className="relative flex flex-col items-center text-center mb-16 select-none">
        <span 
          aria-hidden="true"
          className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.04] pointer-events-none"
        >
          ؟
        </span>

        <h2 
          id="why-choose-us-heading"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 relative z-10"
        >
          چرا همه هاست پلاس رو انتخاب میکنن
        </h2>

        <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed relative z-10">
          زیرساختی پایدار، سریع و امن برای رشد کسب‌وکار شما از یک وب‌سایت کوچک تا پروژه‌های بزرگ سازمانی
        </p>
      </div>

      
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch z-10">
        {FEATURES_DATA.map((item) => (
          <article
            key={item.id}
            className="group relative bg-[#111216]/70 border border-white/5 hover:border-white/15 rounded-[24px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 backdrop-blur-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="w-full h-36 flex items-center justify-center mb-8">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="max-h-full max-w-[130px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-xs text-gray-400 leading-relaxed font-normal">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;