import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import PageBackdrop from '../components/PageBackdrop';

const Auth = () => {
  const [step, setStep] = useState('input');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedDomain = searchParams.get('domain');
  const selectedPlan = searchParams.get('plan');
  const selectedLoc = searchParams.get('loc');

  const buildDashboardUrl = () => {
    const params = new URLSearchParams();
    if (selectedPlan) params.set('plan', selectedPlan);
    if (selectedLoc) params.set('loc', selectedLoc);
    if (selectedDomain) params.set('domain', selectedDomain);
    const query = params.toString();
    return query ? `/dashboard?${query}` : '/dashboard';
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!identifier.trim()) return;
    setStep('otp');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    navigate(buildDashboardUrl());
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050508] flex flex-col items-center justify-center p-4 overflow-hidden">
      <PageBackdrop />

      
      <div className="relative z-10 w-full max-w-[460px] flex items-center justify-between mb-6">
        <Link
          to="/"
          className="h-[46px] px-5 bg-[#121316]/80 border border-white/10 rounded-[14px] backdrop-blur-md flex items-center justify-center text-[#FAFAFA] text-base font-light font-sans hover:border-white/20 transition-all"
          dir="ltr"
        >
          +Host plust
        </Link>
        <Link
          to="/"
          className="text-xs text-[#D0DAF5]/70 hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>بازگشت به صفحه اصلی</span>
          <span>←</span>
        </Link>
      </div>

      
      <div
        className="relative z-10 w-full max-w-[460px] p-8 sm:p-10 flex flex-col"
        style={{
          background:
            'linear-gradient(136deg, rgba(253, 247, 255, 0.14) 0%, rgba(17, 18, 22, 0.7) 100%)',
          borderRadius: '36px',
          backdropFilter: 'blur(65px)',
          WebkitBackdropFilter: 'blur(65px)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[1px] inset-x-14 h-[1px]"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent)',
          }}
        />

        {(selectedDomain || selectedPlan) && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-[#7F56D9]/15 border border-[#7F56D9]/40 flex items-center justify-between text-xs">
            <span className="text-[#D0DAF5]">سفارش انتخابی شما:</span>
            <strong className="font-sans text-white" dir="ltr">
              {selectedDomain || `${selectedPlan} (${(selectedLoc || 'DE').toUpperCase()})`}
            </strong>
          </div>
        )}

        {step === 'input' ? (
          <form onSubmit={handleSendOtp} className="flex flex-col gap-6">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-2">
                ورود یا ثبت‌نام در هاست پلاس
              </h1>
              <p className="text-xs text-[#D0DAF5]/70 leading-relaxed">
                برای ورود به کنسول مدیریت ابری، شماره موبایل یا آدرس ایمیل خود را وارد کنید
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="identifier" className="text-xs font-bold text-[#D0DAF5]">
                شماره موبایل یا ایمیل
              </label>
              <input
                id="identifier"
                type="text"
                required
                dir="ltr"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="0912XXXXXXX / name@domain.com"
                className="w-full h-[52px] bg-[#0D0D0D]/90 border-[1.5px] border-[#161829] focus:border-[#7F56D9] rounded-[10px] px-4 text-sm text-white placeholder-[#D0DAF5]/30 focus:outline-none font-sans text-left transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn-shine w-full h-[52px] bg-[#7F56D9] hover:bg-[#6941C6] text-white text-sm font-bold rounded-[12px] transition-all cursor-pointer shadow-[0_0_25px_rgba(127,86,217,0.45)]"
            >
              دریافت کد تایید ←
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10" />
              <span className="shrink-0 mx-4 text-[11px] text-[#D0DAF5]/50">یا ورود مستقیم با</span>
              <div className="flex-grow border-t border-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => navigate(buildDashboardUrl())}
                className="h-[46px] rounded-[10px] bg-[#0D0D0D]/70 border border-white/10 hover:border-[#7F56D9]/60 text-xs font-sans font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => navigate(buildDashboardUrl())}
                className="h-[46px] rounded-[10px] bg-[#0D0D0D]/70 border border-white/10 hover:border-[#7F56D9]/60 text-xs font-sans font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>GitHub</span>
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6">
            <div>
              <h1 className="text-xl font-bold text-white mb-2">کد تایید ۵ رقمی را وارد کنید</h1>
              <p className="text-xs text-[#D0DAF5]/70 leading-relaxed">
                کد یکبارمصرف به <span className="text-white font-sans font-bold">{identifier}</span> ارسال شد. (هر کد ۵ رقمی قابل قبول است)
              </p>
            </div>

            <input
              type="text"
              maxLength={5}
              required
              dir="ltr"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="• • • • •"
              className="w-full h-[56px] bg-[#0D0D0D]/90 border-[1.5px] border-[#7F56D9] rounded-[12px] px-4 text-center text-2xl tracking-[16px] text-white font-sans focus:outline-none"
            />

            <button
              type="submit"
              className="btn-shine w-full h-[52px] bg-[#8131BF] hover:bg-[#6c28a1] text-white text-sm font-bold rounded-[12px] transition-all cursor-pointer shadow-[0_0_25px_rgba(129,49,191,0.5)]"
            >
              تایید و ورود به کنسول ابری
            </button>

            <button
              type="button"
              onClick={() => setStep('input')}
              className="text-xs text-[#D0DAF5]/60 hover:text-white transition-colors text-center cursor-pointer"
            >
              ویرایش شماره موبایل یا ایمیل
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;