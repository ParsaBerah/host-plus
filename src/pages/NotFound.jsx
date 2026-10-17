import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-24 text-center">
        <div
          className="relative w-full max-w-[540px] p-10 sm:p-14 flex flex-col items-center"
          style={{
            background:
              'linear-gradient(136deg, rgba(253, 247, 255, 0.12) 0%, rgba(17, 18, 22, 0.65) 100%)',
            borderRadius: '36px',
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          }}
        >
          <span className="font-sans text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 leading-none mb-4 select-none">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-3">
            مسیر مورد نظر در شبکه یافت نشد
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/60 leading-relaxed mb-8 max-w-sm">
            صفحه‌ای که به دنبال آن هستید حذف شده، تغییر نام یافته یا به صورت موقت در دسترس نیست.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="px-7 py-3.5 rounded-2xl bg-[7F56D9] hover:bg-[#6c28a1] text-white text-xs sm:text-sm font-bold transition-all shadow-[0_0_25px_rgba(129,49,191,0.45)]"
            >
              بازگشت به صفحه اصلی
            </Link>
            <Link
              to="/vps"
              className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#D0DAF5] text-xs sm:text-sm font-bold transition-all"
            >
              مشاهده سرورهای مجازی
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;