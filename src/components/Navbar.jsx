import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full pt-6 pb-4 px-4 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1240px] flex items-center justify-between pointer-events-auto">
          
          
          <Link
            to="/"
            className="h-[54px] px-6 bg-[#1c1e20]/75 border border-white/[0.06] rounded-[16px] backdrop-blur-[30px] flex items-center justify-center hover:border-white/15 transition-all shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
          >
            <span className="text-[#FAFAFA] text-[18px] font-light font-sans tracking-wide" dir="ltr">
              +Host plust
            </span>
          </Link>

          
          <nav
            aria-label="منوی اصلی"
            className="hidden md:flex items-center gap-8 h-[54px] px-8 bg-[#1c1e20]/75 border border-white/[0.06] rounded-[16px] backdrop-blur-[30px] shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
          >
            
            <div className="relative group py-3">
              <Link
                to="/vps"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isActive('/vps') || isActive('/cloud-hosting')
                    ? 'text-[#a78bfa]'
                    : 'text-[#FAFAFA]/90 hover:text-white'
                }`}
              >
                <span>محصولات</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 top-full pt-2 w-56">
                <div className="bg-[#16171d]/95 border border-white/10 rounded-[16px] p-2 backdrop-blur-[35px] shadow-2xl flex flex-col gap-1">
                  <Link
                    to="/vps"
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-[#7F56D9]/20 transition-colors flex items-center justify-between"
                  >
                    <span>سرور مجازی ابری (VPS)</span>
                    <span className="text-[10px] text-[#a78bfa] font-sans">6 Loc</span>
                  </Link>
                  <Link
                    to="/cloud-hosting"
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-[#7F56D9]/20 transition-colors flex items-center justify-between"
                  >
                    <span>هاست ابری پرسرعت</span>
                    <span className="text-[10px] text-emerald-400 font-sans">NVMe</span>
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="relative group py-3">
              <Link
                to="/domains"
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  isActive('/domains') || isActive('/support')
                    ? 'text-[#a78bfa]'
                    : 'text-[#FAFAFA]/90 hover:text-white'
                }`}
              >
                <span>خدمات ما</span>
                <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 top-full pt-2 w-52">
                <div className="bg-[#16171d]/95 border border-white/10 rounded-[16px] p-2 backdrop-blur-[35px] shadow-2xl flex flex-col gap-1">
                  <Link
                    to="/domains"
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-[#7F56D9]/20 transition-colors"
                  >
                    جستجو و ثبت دامنه
                  </Link>
                  <Link
                    to="/support"
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-[#7F56D9]/20 transition-colors"
                  >
                    پشتیبانی ۲۴/۷ و سوالات
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-[#a78bfa]' : 'text-[#FAFAFA]/90 hover:text-white'
              }`}
            >
              وبلاگ
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-[#a78bfa]' : 'text-[#FAFAFA]/90 hover:text-white'
              }`}
            >
              درباره ما
            </Link>
          </nav>

          
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#1c1e20]/75 border border-white/[0.06] rounded-[16px] backdrop-blur-[30px] shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
              <Link
                to="/auth"
                className="h-[42px] px-5 bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs sm:text-sm font-bold rounded-[12px] flex items-center justify-center transition-all shadow-[0_0_20px_rgba(127,86,217,0.4)]"
              >
                ورود | ثبت نام
              </Link>
            </div>

            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="باز کردن منو"
              className="md:hidden w-[54px] h-[54px] rounded-[16px] bg-[#1c1e20]/75 border border-white/[0.06] backdrop-blur-[30px] flex items-center justify-center text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>

        </div>

        
        {mobileMenuOpen && (
          <div className="absolute top-24 inset-x-4 bg-[#1c1e20]/95 border border-white/10 rounded-[16px] p-5 flex flex-col gap-3.5 md:hidden backdrop-blur-[30px] shadow-2xl pointer-events-auto">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5 border-b border-white/5">
              صفحه اصلی
            </Link>
            <Link to="/vps" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5 border-b border-white/5">
              سرور مجازی ابری (VPS)
            </Link>
            <Link to="/cloud-hosting" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5 border-b border-white/5">
              هاست ابری پرسرعت
            </Link>
            <Link to="/domains" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5 border-b border-white/5">
              جستجو و ثبت دامنه
            </Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5 border-b border-white/5">
              وبلاگ و مستندات
            </Link>
            <Link to="/support" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5 border-b border-white/5">
              پشتیبانی و سوالات پرتکرار
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-white text-sm font-medium py-1.5">
              درباره ما
            </Link>
          </div>
        )}
      </header>

      <div className="h-[88px] w-full shrink-0" />
    </>
  );
};

export default Navbar;