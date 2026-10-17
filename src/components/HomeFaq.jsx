import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HOME_FAQS = [
  {
    q: 'آیا انتقال وب‌سایت من از شرکت قبلی به هاست پلاس رایگان انجام می‌شود؟',
    a: 'بله، پس از سفارش هر یک از سرویس‌های هاست ابری یا سرور مجازی، تیم فنی ما تمامی فایل‌ها، دیتابیس‌ها و تنظیمات دامنه شما را به صورت کاملاً رایگان و بدون حتی یک ثانیه قطعی (Zero-Downtime) منتقل می‌کند.',
  },
  {
    q: 'سرورهای مجازی هاست پلاس دارای آی‌پی ثابت و اختصاصی هستند؟',
    a: 'بله، به تمامی سرورهای مجازی در هر ۶ لوکیشن (آلمان، هلند، ترکیه، یونان، روسیه و مصر) یک آی‌پی نسخه ۴ (IPv4) کاملاً اختصاصی و تمیز به همراه ساب‌نت IPv6 اختصاص داده می‌شود که با ریستارت یا تغییر سیستم‌عامل هرگز تغییر نمی‌کند.',
  },
  {
    q: 'در صورت نیاز به منابع بیشتر، چگونه می‌توانم سرویس خود را ارتقا دهم؟',
    a: 'از طریق پنل کاربری خود می‌توانید در هر ساعت از شبانه‌روز، مقدار RAM، هسته‌های پردازنده (vCPU) و فضای دیسک NVMe را به صورت آنی و بدون از دست رفتن اطلاعات ارتقا دهید.',
  },
  {
    q: 'آیا امکان بازگشت وجه در صورت عدم رضایت وجود دارد؟',
    a: 'ما به کیفیت زیرساخت خود اطمینان کامل داریم؛ به همین دلیل تمامی سرویس‌های میزبانی ابری دارای ضمانت بازگشت وجه ۷ روزه بی‌قید و شرط هستند.',
  },
];

const HomeFaq = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative w-full py-24 px-4 flex flex-col items-center bg-[#050508]">
      <div className="relative flex flex-col items-center text-center mb-14 select-none">
        <span
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
        >
          FAQ
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 relative z-10">
          پاسخ به سوالات متداول پیش از خرید
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed relative z-10">
          پاسخ سریع به پرتکرارترین پرسش‌های کاربران درباره زیرساخت، نحوه تحویل و پشتیبانی هاست پلاس
        </p>
      </div>

      <div className="w-full max-w-[880px] flex flex-col gap-4 mb-10">
        {HOME_FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              style={{
                background: isOpen
                  ? 'linear-gradient(136deg, rgba(253, 247, 255, 0.13) 0%, rgba(20, 21, 28, 0.78) 100%)'
                  : 'linear-gradient(136deg, rgba(253, 247, 255, 0.06) 0%, rgba(17, 18, 22, 0.55) 100%)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
              }}
              className={`relative rounded-[22px] border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-[#7F56D9]/60 shadow-[0_15px_40px_rgba(0,0,0,0.45)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                className="w-full p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm sm:text-base font-bold text-white transition-colors">
                  {item.q}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-45 text-[#a78bfa] bg-[#7F56D9]/20' : 'text-gray-300'
                  }`}
                >
                  +
                </span>
              </button>

              
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#D0DAF5]/75 leading-[2] border-t border-white/10">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to="/support"
        className="text-xs sm:text-sm font-bold text-[#a78bfa] hover:text-white transition-colors"
      >
        مشاهده تمام سوالات و ارتباط با پشتیبانی ۲۴/۷ ←
      </Link>
    </section>
  );
};

export default HomeFaq;