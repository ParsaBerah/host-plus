import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageBackdrop from '../components/PageBackdrop';

const LOCATIONS = [
  { id: 'de', name: 'آلمان', datacenter: 'Frankfurt - Hetzner', ping: '38ms', code: 'DE' },
  { id: 'nl', name: 'هلند', datacenter: 'Amsterdam - Equinix', ping: '42ms', code: 'NL' },
  { id: 'tr', name: 'ترکیه', datacenter: 'Istanbul - Tier III', ping: '24ms', code: 'TR' },
  { id: 'gr', name: 'یونان', datacenter: 'Athens - Lamda', ping: '49ms', code: 'GR' },
  { id: 'ru', name: 'روسیه', datacenter: 'Moscow - DataPro', ping: '55ms', code: 'RU' },
  { id: 'eg', name: 'مصر', datacenter: 'Cairo - GPX', ping: '62ms', code: 'EG' },
];

const OS_LIST = [
  { id: 'ubuntu', name: 'Ubuntu 24.04 LTS', tag: 'پیشنهادی' },
  { id: 'debian', name: 'Debian 12', tag: 'پایدار' },
  { id: 'windows', name: 'Windows Server 2022', tag: 'لایسنس اصلی' },
  { id: 'almalinux', name: 'AlmaLinux 9', tag: 'سازمانی' },
];

const VPS_PLANS = [
  {
    id: 'vps-starter',
    title: 'سرور ابری استارتر',
    cpu: '2 vCPU',
    ram: '4 GB DDR5',
    storage: '60 GB NVMe',
    bandwidth: '2.5 TB',
    port: '10 Gbps',
    monthlyPrice: '۴۹۰,۰۰۰',
    yearlyPrice: '۳۹۰,۰۰۰',
    popular: false,
  },
  {
    id: 'vps-pro',
    title: 'سرور ابری حرفه‌ای',
    cpu: '4 vCPU',
    ram: '8 GB DDR5',
    storage: '120 GB NVMe',
    bandwidth: '5 TB',
    port: '10 Gbps',
    monthlyPrice: '۸۹۰,۰۰۰',
    yearlyPrice: '۷۱۰,۰۰۰',
    popular: true,
  },
  {
    id: 'vps-enterprise',
    title: 'سرور ابری سازمانی',
    cpu: '8 vCPU',
    ram: '16 GB DDR5',
    storage: '250 GB NVMe',
    bandwidth: '10 TB',
    port: '10 Gbps',
    monthlyPrice: '۱,۶۵۰,۰۰۰',
    yearlyPrice: '۱,۳۲۰,۰۰۰',
    popular: false,
  },
  {
    id: 'vps-dedicated',
    title: 'سرور ابری الترا',
    cpu: '16 vCPU',
    ram: '32 GB DDR5',
    storage: '500 GB NVMe',
    bandwidth: '20 TB',
    port: '25 Gbps',
    monthlyPrice: '۲,۹۸۰,۰۰۰',
    yearlyPrice: '۲,۴۵۰,۰۰۰',
    popular: false,
  },
];

const VpsPricing = () => {
  const [selectedLoc, setSelectedLoc] = useState('de');
  const [selectedOs, setSelectedOs] = useState('ubuntu');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('vps-pro');

  const currentLocObj = LOCATIONS.find((l) => l.id === selectedLoc);
  const currentPlanObj = VPS_PLANS.find((p) => p.id === selectedPlan);

  return (
    <div className="relative min-h-screen bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden">
      
      <PageBackdrop />

      <Navbar />

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-4 pt-16 pb-28 flex flex-col items-center">
        
        
        <div className="relative flex flex-col items-center text-center mb-16 select-none">
          <span
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-7xl sm:text-8xl font-black text-white/[0.03] font-sans pointer-events-none tracking-widest"
          >
            CLOUD VPS
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            سرور مجازی ابری در لوکیشن‌های مختلف
          </h1>
          <p className="text-xs sm:text-sm text-[#D0DAF5]/60 max-w-xl leading-relaxed relative z-10">
            تحویل آنی در کمتر از ۶۰ ثانیه با سخت‌افزار نسل جدید، دیسک‌های فوق سریع NVMe و دسترسی کامل روت
          </p>
        </div>

        
        <div className="w-full mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-[#D0DAF5]">
              ۱. انتخاب موقعیت دیتاسنتر
            </h2>
            <span className="text-xs text-[#D0DAF5]/60">
              پینگ فعلی به {currentLocObj?.name}:{' '}
              <strong className="text-emerald-400 font-sans" dir="ltr">
                {currentLocObj?.ping}
              </strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {LOCATIONS.map((loc) => {
              const active = selectedLoc === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedLoc(loc.id)}
                  style={{
                    background: active
                      ? 'linear-gradient(136deg, rgba(127, 86, 217, 0.24) 0%, rgba(17, 18, 22, 0.8) 100%)'
                      : 'linear-gradient(136deg, rgba(253, 247, 255, 0.08) 0%, rgba(17, 18, 22, 0.55) 100%)',
                    backdropFilter: 'blur(35px)',
                    WebkitBackdropFilter: 'blur(35px)',
                  }}
                  className={`group relative p-4 rounded-[20px] border text-right transition-all cursor-pointer flex flex-col gap-2 ${
                    active
                      ? 'border-[#7F56D9] shadow-[0_10px_30px_rgba(127,86,217,0.25)] -translate-y-0.5'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-[1px] inset-x-6 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                    }}
                  />

                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-sans font-bold px-2 py-0.5 rounded bg-white/10 text-[#D0DAF5]">
                      {loc.code}
                    </span>
                    <span className="text-[11px] font-sans text-emerald-400" dir="ltr">
                      {loc.ping}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">سرور {loc.name}</div>
                  <div className="text-[11px] font-sans text-[#D0DAF5]/45 truncate" dir="ltr">
                    {loc.datacenter}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-end">
          
          
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h2 className="text-sm sm:text-base font-bold text-[#D0DAF5]">
              ۲. انتخاب سیستم‌عامل پیش‌فرض
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {OS_LIST.map((os) => {
                const active = selectedOs === os.id;
                return (
                  <button
                    key={os.id}
                    type="button"
                    onClick={() => setSelectedOs(os.id)}
                    style={{
                      background: active
                        ? 'linear-gradient(136deg, rgba(127, 86, 217, 0.18) 0%, rgba(13, 13, 13, 0.85) 100%)'
                        : 'rgba(13, 13, 13, 0.65)',
                      backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                    }}
                    className={`p-3.5 rounded-[16px] border text-right transition-all cursor-pointer flex flex-col gap-1 ${
                      active
                        ? 'border-[#7F56D9] text-white shadow-[0_8px_20px_rgba(127,86,217,0.2)]'
                        : 'border-white/10 text-[#D0DAF5]/60 hover:border-white/20'
                    }`}
                  >
                    <span className="text-[10px] text-[#a78bfa] font-bold">{os.tag}</span>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-white" dir="ltr">
                      {os.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="p-1.5 bg-[#111216]/80 border border-white/10 backdrop-blur-[30px] rounded-2xl inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[#7F56D9] text-white shadow-lg'
                    : 'text-[#D0DAF5]/60 hover:text-white'
                }`}
              >
                پرداخت ماهانه
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  billingCycle === 'yearly'
                    ? 'bg-[#7F56D9] text-white shadow-lg'
                    : 'text-[#D0DAF5]/60 hover:text-white'
                }`}
              >
                <span>پرداخت سالانه</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded text-[10px]">
                  ۲۰٪ تخفیف
                </span>
              </button>
            </div>
          </div>

        </div>

        
        <div className="w-full mb-12">
          <h2 className="text-sm sm:text-base font-bold text-[#D0DAF5] mb-4">
            ۳. انتخاب منابع سخت‌افزاری
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VPS_PLANS.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  style={{
                    background: isSelected
                      ? 'linear-gradient(136deg, rgba(253, 247, 255, 0.16) 0%, rgba(22, 23, 34, 0.75) 100%)'
                      : 'linear-gradient(136deg, rgba(253, 247, 255, 0.09) 0%, rgba(17, 18, 22, 0.55) 100%)',
                    backdropFilter: 'blur(45px)',
                    WebkitBackdropFilter: 'blur(45px)',
                  }}
                  className={`group relative rounded-[28px] p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#7F56D9] shadow-[0_20px_50px_rgba(127,86,217,0.28)] -translate-y-1.5'
                      : 'border border-white/10 hover:border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.45)] hover:-translate-y-1'
                  }`}
                >
                  
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-[1px] inset-x-10 h-[1px] opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent)',
                    }}
                  />

                  {plan.popular && (
                    <span className="absolute -top-3 left-6 bg-[#7F56D9] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      پرفروش‌ترین
                    </span>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-white mb-6">{plan.title}</h3>

                    
                    <ul className="flex flex-col gap-3.5 text-xs border-y border-white/10 py-5 mb-6">
                      <li className="flex items-center justify-between">
                        <span className="text-[#D0DAF5]/55">پردازنده (CPU)</span>
                        <span className="font-sans font-bold text-white" dir="ltr">{plan.cpu}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-[#D0DAF5]/55">حافظه رم (RAM)</span>
                        <span className="font-sans font-bold text-white" dir="ltr">{plan.ram}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-[#D0DAF5]/55">فضای ذخیره‌سازی</span>
                        <span className="font-sans font-bold text-white" dir="ltr">{plan.storage}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-[#D0DAF5]/55">ترافیک ماهانه</span>
                        <span className="font-sans font-bold text-white" dir="ltr">{plan.bandwidth}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="text-[#D0DAF5]/55">پورت شبکه</span>
                        <span className="font-sans font-bold text-[#a78bfa]" dir="ltr">{plan.port}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-baseline justify-between mb-5">
                      <span className="text-xs text-[#D0DAF5]/55">مبلغ ماهانه:</span>
                      <div className="text-left">
                        <span className="text-xl font-bold text-white">
                          {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                        </span>
                        <span className="text-[11px] text-[#D0DAF5]/55 mr-1">تومان</span>
                      </div>
                    </div>

                    <div
                      className={`w-full py-3 rounded-xl text-xs font-bold text-center transition-colors ${
                        isSelected
                          ? 'bg-[#7F56D9] text-white shadow-[0_0_20px_rgba(127,86,217,0.4)]'
                          : 'bg-white/10 text-[#D0DAF5] group-hover:bg-white/15'
                      }`}
                    >
                      {isSelected ? 'پلن انتخاب شده ✓' : 'انتخاب این پلن'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        <div
          className="relative w-full rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
          style={{
            background:
              'linear-gradient(136deg, rgba(253, 247, 255, 0.16) 0%, rgba(17, 18, 22, 0.75) 100%)',
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)',
          }}
        >
          
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[1px] inset-x-20 h-[1px]"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
            }}
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-right">
            <div>
              <span className="text-xs text-[#D0DAF5]/55 block mb-1">کانفیگ نهایی شما:</span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {currentPlanObj?.title} — لوکیشن {currentLocObj?.name}
              </h4>
            </div>
            <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />
            <div className="text-xs text-[#D0DAF5]/85 font-sans" dir="ltr">
              {currentPlanObj?.cpu} • {currentPlanObj?.ram} • {currentPlanObj?.storage}
            </div>
          </div>

          <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right">
              <span className="text-[11px] text-[#D0DAF5]/55 block">مبلغ قابل پرداخت:</span>
              <span className="text-xl font-bold text-white">
                {billingCycle === 'monthly' ? currentPlanObj?.monthlyPrice : currentPlanObj?.yearlyPrice}{' '}
                <small className="text-xs font-normal text-[#D0DAF5]/60">تومان</small>
              </span>
            </div>

            <Link
              to="/auth"
              className="px-8 py-4 rounded-2xl bg-[7F56D9] hover:bg-[#6c28a1] text-white text-xs sm:text-sm font-bold transition-all shadow-[0_0_25px_rgba(129,49,191,0.5)] shrink-0"
            >
              ساخت سرور و ادامه ←
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default VpsPricing;