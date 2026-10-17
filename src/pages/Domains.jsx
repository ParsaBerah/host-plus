import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const TLD_PRICES = [
  { ext: '.ir', desc: 'دامنه ملی ایران', register: '۶۵,۰۰۰', renew: '۶۵,۰۰۰', popular: true },
  { ext: '.com', desc: 'محبوب‌ترین پسوند بین‌المللی', register: '۸۹۰,۰۰۰', renew: '۹۲۰,۰۰۰', popular: true },
  { ext: '.net', desc: 'مناسب شرکت‌های شبکه و فناوری', register: '۹۸۰,۰۰۰', renew: '۹۸۰,۰۰۰', popular: false },
  { ext: '.org', desc: 'مناسب سازمان‌ها و نهادها', register: '۸۵۰,۰۰۰', renew: '۸۹۰,۰۰۰', popular: false },
  { ext: '.cloud', desc: 'مناسب سرویس‌های ابری و مدرن', register: '۴۲۰,۰۰۰', renew: '۱,۱۰۰,۰۰۰', popular: true },
  { ext: '.io', desc: 'محبوب استارتاپ‌های تکنولوژی', register: '۳,۲۰۰,۰۰۰', renew: '۳,۲۰۰,۰۰۰', popular: false },
];

const TAKEN_DOMAINS = ['google', 'digikala', 'hostplus', 'apple', 'microsoft', 'iran'];

const Domains = () => {
  const [domainQuery, setDomainQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!domainQuery.trim()) return;

    setIsSearching(true);
    setSearchResult(null);

    const cleanName = domainQuery
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '');

    const fullDomain = cleanName.includes('.') ? cleanName : `${cleanName}.ir`;
    const rootWord = fullDomain.split('.')[0];
    const isTaken = TAKEN_DOMAINS.includes(rootWord);

    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        name: fullDomain,
        available: !isTaken,
        suggestion: `${rootWord}-cloud.ir`,
      });
    }, 550);
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 w-full max-w-[1050px] mx-auto px-4 pt-20 pb-28 flex flex-col items-center">
        
        
        <div className="relative flex flex-col items-center text-center mb-12 select-none">
          <span
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
          >
            DOMAIN
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            ثبت و انتقال دامنه با مالکیت ۱۰۰٪
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/60 max-w-lg leading-relaxed relative z-10">
            نام کسب‌وکار خود را جستجو کنید و در کمترین زمان با DNS اختصاصی رایگان فعال نمایید
          </p>
        </div>

        
        <form
          onSubmit={handleSearch}
          className="relative w-full max-w-3xl rounded-[26px] p-2.5 flex flex-col sm:flex-row items-center gap-3 mb-14"
          style={{
            background:
              'linear-gradient(136deg, rgba(253, 247, 255, 0.12) 0%, rgba(17, 18, 22, 0.75) 100%)',
            backdropFilter: 'blur(50px)',
            WebkitBackdropFilter: 'blur(50px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65)',
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

          <input
            type="text"
            dir="ltr"
            value={domainQuery}
            onChange={(e) => setDomainQuery(e.target.value)}
            placeholder="example.ir یا نام برند شما..."
            className="w-full flex-1 bg-transparent px-5 py-3.5 text-sm sm:text-base text-white placeholder-[#D0DAF5]/35 focus:outline-none font-sans text-left"
          />
               <button
            type="submit"
            disabled={isSearching}
            className="w-full sm:w-auto px-8 py-4 rounded-[18px] bg-[7F56D9] hover:bg-[#6c28a1] disabled:opacity-60 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 shadow-[0_0_25px_rgba(129,49,191,0.45)] min-w-[165px]"
          >
            {isSearching ? 'در حال استعلام...' : 'بررسی وضعیت دامنه'}
          </button>
        </form>

        
        {searchResult && (
          <div
            className={`w-full max-w-3xl mb-14 p-6 rounded-[24px] backdrop-blur-[40px] flex flex-col sm:flex-row items-center justify-between gap-4 border ${
              searchResult.available
                ? 'bg-[#14151c]/85 border-emerald-500/40'
                : 'bg-[#14151c]/85 border-rose-500/40'
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${
                  searchResult.available
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-rose-500/15 text-rose-400'
                }`}
              >
                {searchResult.available ? '✓' : '✕'}
              </div>
              <div>
                <h3 className="text-base font-sans font-bold text-white" dir="ltr">
                  {searchResult.name}
                </h3>
                {searchResult.available ? (
                  <span className="text-xs text-emerald-400">
                    این دامنه آزاد است و هم‌اکنون می‌توانید آن را به نام خود ثبت کنید.
                  </span>
                ) : (
                  <span className="text-xs text-rose-400">
                    این دامنه قبلاً ثبت شده است. پیشنهاد آزاد:{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setDomainQuery(searchResult.suggestion);
                        setSearchResult({ name: searchResult.suggestion, available: true });
                      }}
                      className="text-white underline font-sans font-semibold cursor-pointer mr-1"
                      dir="ltr"
                    >
                      {searchResult.suggestion}
                    </button>
                  </span>
                )}
              </div>
            </div>

            {searchResult.available && (
              <Link
                to={`/auth?domain=${encodeURIComponent(searchResult.name)}`}
                className="px-6 py-3 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs font-bold transition-all shrink-0"
              >
                ثبت آنی دامنه ←
              </Link>
            )}
          </div>
        )}

        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TLD_PRICES.map((item) => (
            <div
              key={item.ext}
              className="group relative rounded-[26px] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background:
                  'linear-gradient(136deg, rgba(253, 247, 255, 0.10) 0%, rgba(17, 18, 22, 0.55) 100%)',
                backdropFilter: 'blur(45px)',
                WebkitBackdropFilter: 'blur(45px)',
                border: '1px solid rgba(255, 255, 255, 0.09)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.45)',
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-[1px] inset-x-10 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-sans font-black text-white" dir="ltr">
                    {item.ext}
                  </span>
                  {item.popular && (
                    <span className="text-[10px] bg-[#7F56D9]/20 text-[#D0DAF5] border border-[#7F56D9]/40 px-2.5 py-0.5 rounded-full">
                      پرمخاطب
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#D0DAF5]/60 mb-6">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#D0DAF5]/45 block">ثبت سالانه:</span>
                  <span className="text-base font-bold text-white">
                    {item.register} <small className="text-[10px] font-normal text-[#D0DAF5]/60">تومان</small>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setDomainQuery(`yourbrand${item.ext}`)}
                  className="text-xs font-bold text-[#a78bfa] group-hover:text-white transition-colors cursor-pointer"
                >
                  انتخاب پسوند ←
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Domains;