import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  {
    title: 'هاست پلاس',
    links: [
      { label: 'درباره ما', to: '/about' },
      { label: 'همکاری', to: '/about' },
      { label: 'مشتریان ما', to: '/about' },
      { label: 'ارتباط با ما', to: '/support' },
    ],
  },
  {
    title: 'مطالعه بیشتر',
    links: [
      { label: 'سوالات پر تکرار', to: '/support' },
      { label: 'وبلاگ', to: '/blog' },
      { label: 'مستندات', to: '/blog' },
    ],
  },
  {
    title: 'محصولات',
    links: [
      { label: 'دامنه', to: '/domains' },
      { label: 'سرور مجازی', to: '/vps' },
      { label: 'هاست ابری', to: '/cloud-hosting' },
      { label: 'SSL', to: '/cloud-hosting' },
      { label: 'سرور اختصاصی', to: '/vps' },
      { label: 'خدمات ابری', to: '/cloud-hosting' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <footer className="w-full bg-[#0A0A0A] pt-24 pb-12 px-4 flex flex-col items-center border-t border-white/5 relative z-20">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-start gap-16 md:gap-10">

        
        <div className="flex flex-col items-start gap-10 w-full md:w-auto">
          <Link
            to="/"
            className="inline-flex h-[64px] px-8 bg-[#121316] rounded-[16px] border border-white/5 hover:border-white/15 items-center justify-center transition-all"
          >
            <span className="text-[#FAFAFA] text-[22px] font-light tracking-wide" dir="ltr">
              Host plust+
            </span>
          </Link>

          <div className="flex flex-col items-start gap-5 w-full max-w-[320px]">
            <h3 className="text-[#FAFAFA] text-[17px] font-bold">
              اولین نفر از اخبار روز با خبر باش
            </h3>

            <form onSubmit={handleSubscribe} className="w-full h-[52px] flex mt-1 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ایمیل خود را وارد کنید"
                aria-label="ایمیل برای عضویت در خبرنامه"
                className="flex-1 h-full bg-[#0D0D0D] border border-[#161829] border-l-0 rounded-r-[6px] px-4 text-sm text-[#D0DAF5] placeholder-gray-600 focus:outline-none focus:border-[#7F56D9] text-right transition-colors"
              />
              <button
                type="submit"
                aria-label="ثبت ایمیل"
                className="w-[56px] h-full shrink-0 bg-[#7F56D9] hover:bg-[#6941C6] rounded-l-[6px] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
            </form>

            {isSubmitted && (
              <span className="text-emerald-400 text-xs font-medium">
                ایمیل شما با موفقیت در خبرنامه ثبت شد!
              </span>
            )}

            <p className="text-gray-500 text-[13px] font-normal leading-[2] mt-1 text-right">
              هاست پلاس؛ ارائه دهنده خدمات هاست و سرور و زیر ساخت های قدرتمند و ایمن
            </p>
          </div>
        </div>


        <div className="flex flex-row flex-wrap sm:flex-nowrap justify-start md:justify-end gap-16 lg:gap-[130px] w-full md:w-auto pt-4">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="flex flex-col items-start gap-6">
              <h4 className="text-white text-[16px] font-bold">
                {group.title}
              </h4>
              <ul className="flex flex-col items-start gap-4">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-gray-400 text-[15px] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>


      <div className="w-full max-w-[1200px] flex flex-col gap-6 mt-20">
        <div className="w-full h-[1px] bg-white/[0.05]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-4">
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-[42px] h-[42px] rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-[42px] h-[42px] rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <span className="text-[16px] font-bold font-serif">f</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-[42px] h-[42px] rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <span className="text-[13px] font-bold">in</span>
            </a>
          </div>

          <div className="flex items-center gap-10" dir="ltr">
            <Link to="/support" className="text-[#FAFAFA] text-[15px] font-bold hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link to="/support" className="text-[#FAFAFA] text-[15px] font-bold hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link to="/support" className="text-[#FAFAFA] text-[15px] font-bold hover:text-gray-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;