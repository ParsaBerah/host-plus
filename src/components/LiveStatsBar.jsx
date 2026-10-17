import React from 'react';

const METRICS = [
  { label: 'پایداری شبکه (SLA)', value: '99.99%', status: 'همه دیتاسنترها پایدار', isGreen: true },
  { label: 'سرورهای ابری فعال', value: '+18,420', status: 'در ۶ لوکیشن جهانی', isGreen: false },
  { label: 'میانگین پینگ به ایران', value: '28ms', status: 'روتینگ مستقیم BGP', isGreen: false },
  { label: 'ظرفیت شبکه و گارد DDoS', value: '2.5 Tbps', status: 'فیلترینگ خودکار لایه ۷', isGreen: false },
];

const LiveStatsBar = () => {
  return (
    <section
      aria-label="آمار زنده زیرساخت"
      className="relative w-full py-8 px-4 flex justify-center bg-[#050508] z-20"
    >
      <div
        className="relative w-full max-w-[1200px] rounded-[24px] p-6 sm:p-8 border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        style={{
          background:
            'linear-gradient(136deg, rgba(253, 247, 255, 0.08) 0%, rgba(17, 18, 22, 0.65) 100%)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        }}
      >
        
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[1px] inset-x-16 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
          }}
        />

        {METRICS.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start justify-between gap-2 sm:border-l border-white/5 last:border-l-0 sm:pl-6 last:pl-0"
          >
            <div className="flex items-center justify-between w-full">
              <span className="text-xs text-[#D0DAF5]/60 font-medium">{item.label}</span>
              {item.isGreen && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              )}
            </div>

            <span
              dir="ltr"
              className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight mt-1"
            >
              {item.value}
            </span>

            <span className="text-[11px] text-[#a78bfa] font-medium">{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveStatsBar;