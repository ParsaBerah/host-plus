import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const FAQ_ITEMS = [
  {
    q: 'تحویل سرورهای مجازی ابری چقدر زمان می‌برد؟',
    a: 'تمامی سرورهای مجازی در هر ۶ لوکیشن (آلمان، هلند، ترکیه، یونان، روسیه و مصر) به صورت کاملاً خودکار و در کمتر از ۶۰ ثانیه پس از پرداخت، نصب و اطلاعات دسترسی برای شما ارسال می‌شود.',
  },
  {
    q: 'آیا امکان ارتقای منابع (RAM و CPU) بدون از دست رفتن اطلاعات وجود دارد؟',
    a: 'بله، زیرساخت ابری هاست پلاس به شما اجازه می‌دهد در هر زمان از طریق پنل کاربری، منابع سرور خود را بدون تغییر IP و بدون حذف داده‌ها ارتقا دهید.',
  },
  {
    q: 'شرایط انتقال رایگان وب‌سایت از شرکت‌های دیگر به چه صورت است؟',
    a: 'کافی است پس از تهیه سرویس، یک تیکت برای واحد فنی ارسال کنید. تیم متخصص ما در تمام ساعات شبانه‌روز فرآیند انتقال کامل سایت و دیتابیس شما را بدون قطعی (Downtime) و به صورت رایگان انجام می‌دهد.',
  },
  {
    q: 'بک‌آپ‌گیری از سرورها در چه بازه‌های زمانی انجام می‌شود؟',
    a: 'علاوه بر امکان ساخت اسنپ‌شات دستی توسط کاربر، سیستم محافظ چندلایه ما به صورت هفتگی و روزانه از تمامی سرویس‌ها نسخه پشتیبان در سرورهای مجزا تهیه می‌کند.',
  },
];

const SupportFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ticketForm, setTicketForm] = useState({ name: '', email: '', dept: 'فنی و سرورها', message: '' });
  const [ticketId, setTicketId] = useState(null);

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    const randomId = Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setTicketForm({ name: '', email: '', dept: 'فنی و سرورها', message: '' });
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 w-full max-w-[960px] mx-auto px-4 pt-16 pb-28 flex flex-col items-center">
        
        
        <div className="relative flex flex-col items-center text-center mb-16 select-none">
          <span
            aria-hidden="true"
            className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.04] pointer-events-none"
          >
            ؟
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            مرکز پشتیبانی ۲۴/۷ و سوالات پرتکرار
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/60 max-w-lg leading-relaxed relative z-10">
            تیم متخصص هاست پلاس در تمام ساعات شبانه‌روز آماده پاسخگویی به سوالات فنی و فروش شماست
          </p>
        </div>

        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            {
              badge: 'وضعیت شبکه: پایدار (۹۹.۹۹٪)',
              badgeColor: 'text-emerald-400',
              hasPulse: true,
              title: 'ارسال تیکت فنی',
              desc: 'میانگین زمان پاسخگویی زیر ۱۰ دقیقه',
              ltr: false,
            },
            {
              badge: '021 - 9100 0000',
              badgeColor: 'text-[#a78bfa]',
              hasPulse: false,
              title: 'مشاوره تلفنی قبل از خرید',
              desc: 'راهنمایی انتخاب بهترین سرور برای پروژه شما',
              ltr: true,
            },
            {
              badge: 'support@hostplus.ir',
              badgeColor: 'text-[#D0DAF5]/80',
              hasPulse: false,
              title: 'مکاتبه سازمانی',
              desc: 'ویژه قراردادهای سازمانی و کلاسترهای اختصاصی',
              ltr: true,
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                background:
                  'linear-gradient(136deg, rgba(253, 247, 255, 0.10) 0%, rgba(17, 18, 22, 0.6) 100%)',
                backdropFilter: 'blur(45px)',
                WebkitBackdropFilter: 'blur(45px)',
              }}
              className="group relative rounded-[24px] border border-white/10 hover:border-white/20 p-6 flex flex-col gap-2 transition-all hover:-translate-y-1 shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
            >
              <span
                dir={card.ltr ? 'ltr' : 'rtl'}
                className={`text-xs font-bold flex items-center gap-2 ${
                  card.ltr ? 'font-sans text-right justify-end' : ''
                } ${card.badgeColor}`}
              >
                {card.hasPulse && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                {card.badge}
              </span>
              <h3 className="text-base font-bold text-white mt-1">{card.title}</h3>
              <p className="text-xs text-[#D0DAF5]/60 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        
        <div className="w-full flex flex-col gap-4 mb-20">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: isOpen
                    ? 'linear-gradient(136deg, rgba(253, 247, 255, 0.14) 0%, rgba(20, 21, 28, 0.78) 100%)'
                    : 'linear-gradient(136deg, rgba(253, 247, 255, 0.07) 0%, rgba(17, 18, 22, 0.5) 100%)',
                  backdropFilter: 'blur(45px)',
                  WebkitBackdropFilter: 'blur(45px)',
                }}
                className={`relative rounded-[22px] border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#7F56D9]/60 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{item.q}</span>
                  <span
                    className={`w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-45 text-[#a78bfa]' : 'text-gray-300'
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

        
        <div
          className="relative w-full rounded-[28px] border border-white/12 p-7 sm:p-10"
          style={{
            background:
              'linear-gradient(136deg, rgba(253, 247, 255, 0.11) 0%, rgba(17, 18, 22, 0.72) 100%)',
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)',
          }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-white mb-2">
            ثبت مستقیم تیکت و درخواست مشاوره
          </h2>
          <p className="text-xs text-[#D0DAF5]/60 mb-8">
            سوال فنی یا درخواست مهاجرت رایگان سرویس دارید؟ فرم زیر را تکمیل کنید تا کارشناسان ما پاسخگوی شما باشند.
          </p>

          {ticketId && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-xs text-emerald-300 flex items-center justify-between">
              <span>تیکت شما با موفقیت در سیستم ثبت شد و به واحد مربوطه ارجاع گردید.</span>
              <strong className="font-sans text-sm text-white" dir="ltr">
                Ticket #{ticketId}
              </strong>
            </div>
          )}

          <form onSubmit={handleTicketSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#D0DAF5]">نام و نام خانوادگی</label>
              <input
                type="text"
                required
                value={ticketForm.name}
                onChange={(e) => setTicketForm({ ...ticketForm, name: e.target.value })}
                placeholder="مثلاً: علی رضایی"
                className="h-[48px] bg-[#0D0D0D]/90 border border-[#161829] focus:border-[#7F56D9] rounded-xl px-4 text-xs text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#D0DAF5]">ایمیل یا شماره تماس</label>
              <input
                type="text"
                required
                dir="ltr"
                value={ticketForm.email}
                onChange={(e) => setTicketForm({ ...ticketForm, email: e.target.value })}
                placeholder="info@domain.com / 0912..."
                className="h-[48px] bg-[#0D0D0D]/90 border border-[#161829] focus:border-[#7F56D9] rounded-xl px-4 text-xs text-white font-sans text-left focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-[#D0DAF5]">واحد مربوطه</label>
              <select
                value={ticketForm.dept}
                onChange={(e) => setTicketForm({ ...ticketForm, dept: e.target.value })}
                className="h-[48px] bg-[#0D0D0D]/90 border border-[#161829] focus:border-[#7F56D9] rounded-xl px-4 text-xs text-white focus:outline-none"
              >
                <option value="فنی و سرورها">پشتیبانی فنی و سرورها</option>
                <option value="مشاوره فروش">مشاوره فروش و مهاجرت رایگان</option>
                <option value="امور مالی">واحد مالی و فاکتورها</option>
              </select>
            </div>

            <div className="sm:col-span-3 flex flex-col gap-2">
              <label className="text-xs font-bold text-[#D0DAF5]">شرح درخواست یا سوال فنی</label>
              <textarea
                rows={4}
                required
                value={ticketForm.message}
                onChange={(e) => setTicketForm({ ...ticketForm, message: e.target.value })}
                placeholder="توضیحات خود را اینجا بنویسید..."
                className="bg-[#0D0D0D]/90 border border-[#161829] focus:border-[#7F56D9] rounded-xl p-4 text-xs text-white focus:outline-none resize-none leading-relaxed"
              />
            </div>

            <div className="sm:col-span-3 flex justify-end">
              <button
                type="submit"
                className="btn-shine px-8 py-3.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-[0_0_25px_rgba(127,86,217,0.45)]"
              >
                ارسال تیکت پشتیبانی ←
              </button>
            </div>
          </form>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default SupportFaq;