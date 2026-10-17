import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const ARTICLES = [
  {
    id: 1,
    category: 'بهینه‌سازی سرور',
    readTime: '۵ دقیقه مطالعه',
    date: '۱۴۰۵/۰۱/۲۰',
    title: 'مقایسه عملکرد دیسک‌های NVMe Gen4 با SSDهای معمولی در دیتابیس‌های پرترافیک',
    excerpt:
      'بررسی بنچمارک‌های IOPS و تأثیر مستقیم سرعت دیسک روی زمان پاسخگویی کوئری‌های PostgreSQL و MySQL در سرورهای ابری.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'امنیت شبکه',
    readTime: '۷ دقیقه مطالعه',
    date: '۱۴۰۵/۰۱/۱۵',
    title: 'راهنمای جامع ایمن‌سازی سرور لینوکس Ubuntu 24.04 بلافاصله پس از خرید',
    excerpt:
      'از تغییر پورت SSH و تنظیم کلید عمومی تا پیکربندی فایروال UFW و Fail2Ban برای جلوگیری از حملات Brute-Force.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'زیرساخت ابری',
    readTime: '۴ دقیقه مطالعه',
    date: '۱۴۰۵/۰۱/۰۸',
    title: 'کدام لوکیشن دیتاسنتر (آلمان، هلند یا ترکیه) کمترین پینگ را برای کاربران ایران دارد؟',
    excerpt:
      'تحلیل مسیرهای روتینگ (BGP) و مقایسه پینگ و پکت‌لاس ۶ لوکیشن اصلی هاست پلاس از اپراتورهای مختلف کشور.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
  },
];

const CATEGORIES = ['همه مقالات', 'بهینه‌سازی سرور', 'امنیت شبکه', 'زیرساخت ابری'];

const Blog = () => {
  const [selectedCat, setSelectedCat] = useState('همه مقالات');

  const filteredArticles =
    selectedCat === 'همه مقالات'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCat);

  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      <PageBackdrop />
      <Navbar />

      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-4 pt-16 pb-28 flex flex-col items-center">
        
        
        <div className="relative flex flex-col items-center text-center mb-12 select-none">
          <span
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
          >
            TECH BLOG
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            وبلاگ فنی و مستندات زیرساخت
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/60 max-w-xl leading-relaxed relative z-10">
            مقالات تخصصی مدیریت سرور، بهینه‌سازی لینوکس و معماری ابری به قلم تیم مهندسی هاست پلاس
          </p>
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
            const active = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  active
                    ? 'bg-[#7F56D9] border-[#7F56D9] text-white shadow-[0_0_20px_rgba(127,86,217,0.4)]'
                    : 'bg-[#111216]/75 border-white/10 text-[#D0DAF5]/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((post) => (
            <article
              key={post.id}
              style={{
                background:
                  'linear-gradient(136deg, rgba(253, 247, 255, 0.10) 0%, rgba(17, 18, 22, 0.65) 100%)',
                backdropFilter: 'blur(45px)',
                WebkitBackdropFilter: 'blur(45px)',
              }}
              className="group relative rounded-[26px] border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
            >
              
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111216] via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#7F56D9]/80 backdrop-blur-md text-[11px] text-white font-bold">
                  {post.category}
                </span>
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-3 text-[#D0DAF5]/45">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-base font-bold text-white leading-relaxed mb-3 group-hover:text-[#a78bfa] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-[#D0DAF5]/60 leading-[1.9] mb-6">{post.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                  <span className="text-xs font-bold text-[#a78bfa] group-hover:text-white transition-colors cursor-pointer">
                    مطالعه مقاله ←
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Blog;