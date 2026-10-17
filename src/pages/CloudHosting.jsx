import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const CLOUD_PLANS = [
  {
    id: 'cloud-eco',
    name: 'هاست ابری اکو',
    subtitle: 'مناسب وب‌سایت‌های شرکتی و شخصی',
    storage: '20 GB NVMe',
    ram: '2 GB Dedicated',
    cpu: '2 Cores',
    domains: '۳ دامنه مجزا',
    traffic: '۵۰۰ گیگابایت',
    price: '۲۴۰,۰۰۰',
    minVisits: 0,
    maxVisits: 15000,
  },
  {
    id: 'cloud-pro',
    name: 'هاست ابری پلاس',
    subtitle: 'مناسب فروشگاه‌های اینترنتی و وردپرس',
    storage: '60 GB NVMe',
    ram: '6 GB Dedicated',
    cpu: '4 Cores',
    domains: '۱۰ دامنه مجزا',
    traffic: '۲ ترابایت',
    price: '۵۸۰,۰۰۰',
    popular: true,
    minVisits: 15001,
    maxVisits: 70000,
  },
  {
    id: 'cloud-enterprise',
    name: 'کلاستر ابری سازمانی',
    subtitle: 'مناسب پلتفرم‌های پرترافیک و استارتاپ‌ها',
    storage: '150 GB NVMe',
    ram: '16 GB Dedicated',
    cpu: '8 Cores',
    domains: 'نامحدود',
    traffic: 'نامحدود',
    price: '۱,۳۹۰,۰۰۰',
    minVisits: 70001,
    maxVisits: 250000,
  },
];

const TECHNICAL_SPECS = [
  { title: 'وب‌سرور LiteSpeed Enterprise', desc: 'کش اختصاصی LSCache برای بارگذاری زیر ۰.۵ ثانیه' },
  { title: 'بک‌آپ‌گیری روزانه در فضای مجزا', desc: 'نگهداری ۳۰ نسخه پشتیبان با قابلیت بازگردانی یک‌کلیکی' },
  { title: 'فایروال سخت‌افزاری Anti-DDoS', desc: 'پاک‌سازی ترافیک ورودی تا ظرفیت ۲.۵ ترابیت بر ثانیه' },
  { title: 'گواهی SSL رایگان و خودکار', desc: 'صدور و تمدید آنی گواهینامه‌های امنیتی Let’s Encrypt' },
];

const CloudHosting = () => {
  const [dailyVisits, setDailyVisits] = useState(25000);

  const recommendedPlan =
    CLOUD_PLANS.find((p) => dailyVisits >= p.minVisits && dailyVisits <= p.maxVisits) ||
    CLOUD_PLANS[2];

  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-4 pt-16 pb-28 flex flex-col items-center">
        
        
        <div className="relative flex flex-col items-center text-center mb-16 select-none">
          <span
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
          >
            CLOUD HOST
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            هاست ابری پرسرعت با منابع اختصاصی
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/60 max-w-xl leading-relaxed relative z-10">
            ترکیب قدرت سرور مجازی با سادگی هاست اشتراکی؛ بدون محدودیت منابع و با پایداری تضمین‌شده ۹۹.۹۹٪
          </p>
        </div>

        
        <div
          className="relative w-full max-w-4xl rounded-[28px] p-6 sm:p-9 mb-16 border border-white/12"
          style={{
            background:
              'linear-gradient(136deg, rgba(253, 247, 255, 0.11) 0%, rgba(17, 18, 22, 0.7) 100%)',
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55)',
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[1px] inset-x-16 h-[1px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent)',
            }}
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-1">
                تخمین‌گر هوشمند منابع سرویس
              </h2>
              <p className="text-xs text-[#D0DAF5]/60">
                میانگین بازدید روزانه وب‌سایت خود را مشخص کنید تا بهترین پلن به شما پیشنهاد شود
              </p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-[#7F56D9]/20 border border-[#7F56D9]/40 text-left shrink-0">
              <span className="text-[11px] text-[#D0DAF5]/70 block">بازدید روزانه:</span>
              <span className="text-base font-sans font-bold text-white" dir="ltr">
                {dailyVisits.toLocaleString('en-US')} / day
              </span>
            </div>
          </div>

          <input
            type="range"
            min={2000}
            max={150000}
            step={1000}
            value={dailyVisits}
            onChange={(e) => setDailyVisits(Number(e.target.value))}
            aria-label="تعداد بازدید روزانه"
            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#7F56D9] mb-4"
          />

          <div className="flex items-center justify-between text-[11px] text-[#D0DAF5]/50 font-sans" dir="ltr">
            <span>2,000 Visits</span>
            <span>50,000 Visits</span>
            <span>100,000 Visits</span>
            <span>150,000+ Visits</span>
          </div>
        </div>

        
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {CLOUD_PLANS.map((plan) => {
            const isRecommended = recommendedPlan.id === plan.id;
            return (
              <div
                key={plan.id}
                style={{
                  background: isRecommended
                    ? 'linear-gradient(136deg, rgba(253, 247, 255, 0.16) 0%, rgba(22, 23, 34, 0.78) 100%)'
                    : 'linear-gradient(136deg, rgba(253, 247, 255, 0.08) 0%, rgba(17, 18, 22, 0.55) 100%)',
                  backdropFilter: 'blur(45px)',
                  WebkitBackdropFilter: 'blur(45px)',
                }}
                className={`group relative rounded-[28px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'border-2 border-[#7F56D9] shadow-[0_20px_50px_rgba(127,86,217,0.28)] -translate-y-2'
                    : 'border border-white/10 hover:border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.45)]'
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-[1px] inset-x-12 h-[1px] opacity-70"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent)',
                  }}
                />

                {isRecommended && (
                  <span className="absolute -top-3.5 left-6 bg-[#7F56D9] text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-lg">
                    پیشنهاد هوشمند برای شما
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-[#D0DAF5]/55 mb-6">{plan.subtitle}</p>

                  <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-white/10">
                    <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-xs text-[#D0DAF5]/55">تومان / ماهانه</span>
                  </div>

                  <ul className="flex flex-col gap-4 text-xs mb-8">
                    <li className="flex items-center justify-between">
                      <span className="text-[#D0DAF5]/60">فضای دیسک پرسرعت</span>
                      <span className="font-sans font-bold text-white" dir="ltr">{plan.storage}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#D0DAF5]/60">رم اختصاصی</span>
                      <span className="font-sans font-bold text-white" dir="ltr">{plan.ram}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#D0DAF5]/60">پردازنده ابری</span>
                      <span className="font-sans font-bold text-white" dir="ltr">{plan.cpu}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#D0DAF5]/60">تعداد دامنه قابل میزبانی</span>
                      <span className="font-bold text-[#a78bfa]">{plan.domains}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[#D0DAF5]/60">ترافیک ماهانه</span>
                      <span className="font-bold text-white">{plan.traffic}</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to={`/auth?plan=${plan.id}`}
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-center transition-all ${
                    isRecommended
                      ? 'bg-[#7F56D9] hover:bg-[#6941C6] text-white shadow-[0_0_25px_rgba(127,86,217,0.45)]'
                      : 'bg-white/10 hover:bg-white/15 text-[#D0DAF5]'
                  }`}
                >
                  سفارش و تحویل آنی ←
                </Link>
              </div>
            );
          })}
        </div>

        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNICAL_SPECS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[24px] bg-[#111216]/75 border border-white/10 backdrop-blur-[35px] flex flex-col gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#7F56D9] mb-1" />
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-[#D0DAF5]/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default CloudHosting;