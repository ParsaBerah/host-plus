import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const STATS = [
  { value: '99.99%', label: 'آپتایم تضمین‌شده در SLA رسمی', ltr: true },
  { value: '+18,400', label: 'سرور ابری و کانتینر فعال', ltr: true },
  { value: '6', label: 'دیتاسنتر Tier III در اروپا و خاورمیانه', ltr: true },
  { value: '< 8 min', label: 'میانگین پاسخگویی تیکت‌های فنی', ltr: true },
];

const MILESTONES = [
  {
    year: '1400',
    title: 'تأسیس هسته فنی هاست پلاس',
    desc: 'راه‌اندازی اولین کلاستر ابری اختصاصی در دیتاسنتر فرانکفورت آلمان با تمرکز بر سرویس‌های پایدار.',
  },
  {
    year: '1402',
    title: 'گسترش شبکه به ۶ لوکیشن بین‌المللی',
    desc: 'افزودن پاپ‌سایت‌های هلند، ترکیه، یونان، روسیه و مصر با روتینگ مستقیم و کاهش پینگ کاربران ایران.',
  },
  {
    year: '1404',
    title: 'ارتقای کامل به نسل NVMe Gen4 و DDR5',
    desc: 'نوسازی ۱۰۰٪ سخت‌افزارها و ارائه پنل مدیریت ابری آنی با تحویل زیر ۶۰ ثانیه.',
  },
];

const About = () => {
  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-4 pt-16 pb-28 flex flex-col items-center">
        
        
        <div className="relative flex flex-col items-center text-center mb-16 select-none">
          <span
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
          >
            HOST PLUS
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            معماران زیرساخت ابری نسل جدید
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/65 max-w-2xl leading-[2] relative z-10">
            هاست پلاس با هدف حذف پیچیدگی‌های زیرساختی برای تیم‌های نرم‌افزاری، فروشگاه‌های آنلاین و سازمان‌ها شکل گرفت؛ جایی که سرعت، امنیت چندلایه و پایداری در اولویت مطلق قرار دارند.
          </p>
        </div>

        
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              style={{
                background:
                  'linear-gradient(136deg, rgba(253, 247, 255, 0.11) 0%, rgba(17, 18, 22, 0.65) 100%)',
                backdropFilter: 'blur(45px)',
                WebkitBackdropFilter: 'blur(45px)',
              }}
              className="relative rounded-[26px] border border-white/10 p-7 flex flex-col items-center text-center shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-[1px] inset-x-10 h-[1px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                }}
              />
              <span
                dir="ltr"
                className="text-2xl sm:text-4xl font-sans font-black text-white mb-2 tracking-tight"
              >
                {stat.value}
              </span>
              <span className="text-xs text-[#D0DAF5]/65">{stat.label}</span>
            </div>
          ))}
        </div>

        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div
            className="lg:col-span-7 rounded-[28px] border border-white/10 p-8 sm:p-10 flex flex-col justify-between"
            style={{
              background:
                'linear-gradient(136deg, rgba(253, 247, 255, 0.09) 0%, rgba(17, 18, 22, 0.6) 100%)',
              backdropFilter: 'blur(45px)',
            }}
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-6">
                مسیر تکامل زیرساخت هاست پلاس
              </h2>
              <div className="flex flex-col gap-7">
                {MILESTONES.map((item) => (
                  <div key={item.year} className="flex items-start gap-4">
                    <span className="px-3 py-1 rounded-lg bg-[#7F56D9]/20 border border-[#7F56D9]/40 text-xs font-bold text-[#a78bfa] shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-xs text-[#D0DAF5]/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-5 rounded-[28px] border border-[#7F56D9]/40 p-8 sm:p-10 flex flex-col justify-between"
            style={{
              background:
                'linear-gradient(136deg, rgba(127, 86, 217, 0.18) 0%, rgba(17, 18, 22, 0.75) 100%)',
              backdropFilter: 'blur(50px)',
            }}
          >
            <div>
              <span className="text-xs font-bold text-[#a78bfa] block mb-2">
                تضمین کیفیت سرویس (SLA)
              </span>
              <h3 className="text-xl font-bold text-white mb-4 leading-relaxed">
                چرا تیم‌های فنی به هاست پلاس مهاجرت می‌کنند؟
              </h3>
              <p className="text-xs text-[#D0DAF5]/75 leading-[2] mb-6">
                ما در هاست پلاس هیچ منبعی را بیش از ظرفیت واقعی (Oversell) نمی‌فروشیم. تمامی هسته‌های پردازنده، حافظه رم و پهنای باند شبکه به صورت کاملاً ایزوله و اختصاصی در اختیار ماشین مجازی شما قرار می‌گیرد.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/vps"
                className="flex-1 py-3.5 px-5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs font-bold text-center transition-all shadow-[0_0_20px_rgba(127,86,217,0.4)]"
              >
                مشاهده سرورهای ابری
              </Link>
              <Link
                to="/support"
                className="py-3.5 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold text-center transition-all"
              >
                ارتباط با واحد فنی
              </Link>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default About;