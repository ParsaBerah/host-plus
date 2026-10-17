import React, { useState } from 'react';

const BENCHMARK_MODES = {
  wordpress: {
    title: 'زمان بارگذاری کامل فروشگاه ووکامرس (TTFB)',
    unit: 'ثانیه (کمتر = بهتر)',
    items: [
      { name: 'کلاستر ابری هاست پلاس (NVMe Gen4 + LiteSpeed)', value: '0.28s', percent: 18, highlight: true },
      { name: 'سرورهای مجازی استاندارد SSD', value: '0.95s', percent: 55, highlight: false },
      { name: 'هاست‌های اشتراکی معمولی', value: '2.40s', percent: 94, highlight: false },
    ],
  },
  database: {
    title: 'تعداد تراکنش دیتابیس در ثانیه (PostgreSQL / MySQL)',
    unit: 'تراکنش بر ثانیه (بیشتر = بهتر)',
    items: [
      { name: 'کلاستر ابری هاست پلاس (DDR5 + NVMe RAID10)', value: '48,500 TPS', percent: 95, highlight: true },
      { name: 'سرورهای مجازی استاندارد SSD', value: '19,200 TPS', percent: 42, highlight: false },
      { name: 'هاست‌های اشتراکی معمولی', value: '4,800 TPS', percent: 14, highlight: false },
    ],
  },
};

const PerformanceBenchmark = () => {
  const [activeTab, setActiveTab] = useState('wordpress');
  const currentData = BENCHMARK_MODES[activeTab];

  return (
    <section className="relative w-full py-24 px-4 flex flex-col items-center bg-[#050508]">
      
      <div className="relative flex flex-col items-center text-center mb-14 select-none">
        <span
          aria-hidden="true"
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
        >
          BENCHMARK
        </span>
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 relative z-10">
          تفاوت سرعت را در عمل تجربه کنید
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-lg leading-relaxed relative z-10">
          مقایسه واقعی عملکرد سخت‌افزار نسل جدید هاست پلاس با سرویس‌های میزبانی متداول در شرایط ترافیکی یکسان
        </p>
      </div>

      
      <div
        className="relative w-full max-w-[1050px] rounded-[28px] p-6 sm:p-10 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        style={{
          background:
            'linear-gradient(136deg, rgba(253, 247, 255, 0.09) 0%, rgba(17, 18, 22, 0.65) 100%)',
          backdropFilter: 'blur(45px)',
          WebkitBackdropFilter: 'blur(45px)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[1px] inset-x-20 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
          }}
        />

        
        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <div className="p-1.5 bg-[#0D0D0D] border border-white/10 rounded-2xl inline-flex gap-1 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('wordpress')}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'wordpress'
                  ? 'bg-[#7F56D9] text-white shadow-md'
                  : 'text-[#D0DAF5]/60 hover:text-white'
              }`}
            >
              سرعت لود وب‌سایت
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('database')}
              className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'database'
                  ? 'bg-[#7F56D9] text-white shadow-md'
                  : 'text-[#D0DAF5]/60 hover:text-white'
              }`}
            >
              قدرت پردازش دیتابیس
            </button>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-relaxed">
              معماری بدون گلوگاه (Zero-Bottleneck)
            </h3>
            <p className="text-xs text-[#D0DAF5]/65 leading-[2]">
              با ترکیب پردازنده‌های فرکانس بالای AMD EPYC، رم‌های DDR5 و دیسک‌های NVMe Gen4، زمان پاسخگویی سرور (TTFB) به زیر ۳۰۰ میلی‌ثانیه کاهش یافته است.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-[#0D0D0D]/80 border border-white/5">
              <span className="text-[11px] text-gray-400 block mb-1">سرعت خواندن دیسک</span>
              <span className="text-base font-sans font-bold text-white" dir="ltr">7,400 MB/s</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0D0D0D]/80 border border-white/5">
              <span className="text-[11px] text-gray-400 block mb-1">پورت شبکه اختصاصی</span>
              <span className="text-base font-sans font-bold text-[#a78bfa]" dir="ltr">10 Gbps</span>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-7 flex flex-col gap-6 bg-[#0A0A0E]/80 border border-white/5 rounded-[22px] p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-xs sm:text-sm font-bold text-white">{currentData.title}</span>
            <span className="text-[11px] text-[#D0DAF5]/50">{currentData.unit}</span>
          </div>

          <div className="flex flex-col gap-6">
            {currentData.items.map((bar, idx) => (
              <div key={idx} className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className={bar.highlight ? 'font-bold text-white' : 'text-[#D0DAF5]/60'}>
                    {bar.name}
                  </span>
                  <span
                    dir="ltr"
                    className={`font-sans font-bold ${
                      bar.highlight ? 'text-[#a78bfa] text-sm' : 'text-gray-400'
                    }`}
                  >
                    {bar.value}
                  </span>
                </div>

                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      bar.highlight
                        ? 'bg-gradient-to-l from-[#7F56D9] to-[#a78bfa] shadow-[0_0_15px_rgba(127,86,217,0.6)]'
                        : 'bg-white/20'
                    }`}
                    style={{ width: `${bar.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerformanceBenchmark;