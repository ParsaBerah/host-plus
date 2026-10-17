import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const STACK_ITEMS = [
  { name: 'Ubuntu 24.04', category: 'سیستم‌عامل', version: 'LTS Official', badge: 'OS' },
  { name: 'Docker Engine', category: 'کانتینر و دوآپس', version: 'v26.1 Ready', badge: 'DevOps' },
  { name: 'WordPress + LSCache', category: 'سیستم مدیریت محتوا', version: 'Auto-Tuned', badge: 'CMS' },
  { name: 'Node.js & PM2', category: 'محیط اجرایی', version: 'v20 / v22 LTS', badge: 'Runtime' },
  { name: 'PostgreSQL / Redis', category: 'دیتابیس ابری', version: 'High-IOPS', badge: 'DB' },
  { name: 'cPanel / DirectAdmin', category: 'کنترل پنل هاستینگ', version: 'Licensed', badge: 'Panel' },
  { name: 'Windows Server', category: 'سیستم‌عامل', version: '2022 Datacenter', badge: 'OS' },
  { name: 'Nginx / LiteSpeed', category: 'وب‌سرور پرسرعت', version: 'HTTP/3 Quic', badge: 'Web' },
];

const TechStackSection = () => {
  const [selectedTech, setSelectedTech] = useState('Docker Engine');

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center bg-[#050508]">
      
      <div className="relative flex flex-col items-center text-center mb-14 select-none">
        <span
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
        >
          ECOSYSTEM
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 relative z-10">
          نصب یک‌کلیکی سیستم‌عامل و ابزارهای توسعه
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed relative z-10">
          بدون اتلاف وقت برای کانفیگ اولیه؛ ایمیج بهینه‌شده‌ی ابزار مورد نظر خود را انتخاب کنید تا زیر ۶۰ ثانیه آماده بهره‌برداری شود
        </p>
      </div>

      
      <div className="w-full max-w-[1150px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STACK_ITEMS.map((item) => {
          const active = selectedTech === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setSelectedTech(item.name)}
              style={{
                background: active
                  ? 'linear-gradient(136deg, rgba(127, 86, 217, 0.22) 0%, rgba(17, 18, 22, 0.8) 100%)'
                  : 'linear-gradient(136deg, rgba(253, 247, 255, 0.07) 0%, rgba(17, 18, 22, 0.55) 100%)',
                backdropFilter: 'blur(35px)',
                WebkitBackdropFilter: 'blur(35px)',
              }}
              className={`group relative rounded-[22px] p-5 border transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                active
                  ? 'border-[#7F56D9] shadow-[0_12px_30px_rgba(127,86,217,0.25)] -translate-y-1'
                  : 'border-white/10 hover:border-white/20 hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-[#D0DAF5]/55">{item.category}</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-sans font-bold text-[#a78bfa]">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base font-sans font-bold text-white mb-1" dir="ltr">
                  {item.name}
                </h3>
                <span className="text-[11px] font-sans text-emerald-400/90 block" dir="ltr">
                  {item.version}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-[#D0DAF5]/70">
        <span>
          ایمیج انتخاب‌شده: <strong className="text-white font-sans">{selectedTech}</strong> (آماده تحویل آنی)
        </span>
        <Link
          to="/vps"
          className="px-6 py-3 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-bold transition-all shadow-[0_0_20px_rgba(127,86,217,0.4)]"
        >
          انتخاب سرور برای این ایمیج ←
        </Link>
      </div>
    </section>
  );
};

export default TechStackSection;