import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
    Server,
    Globe,
    Activity,
    LifeBuoy,
    Wallet,
    Plus,
    LogOut,
    Cpu,
    HardDrive,
    Copy,
    Check,
    RotateCw,
    Power,
    Terminal,
    Sparkles,
    ArrowLeft,
    ShieldCheck,
} from 'lucide-react';
import PageBackdrop from '../components/PageBackdrop';

const INITIAL_INSTANCES = [
    {
        id: 'srv-de-01',
        name: 'prod-core-germany',
        location: 'آلمان (Frankfurt)',
        ip: '185.212.44.198',
        os: 'Ubuntu 24.04 LTS',
        specs: '4 vCPU • 8 GB DDR5 • 120 GB NVMe',
        status: 'running', 
        cpuLoad: 28,
        ramUsage: 44,
        uptime: '42 روز و 14 ساعت',
    },
    {
        id: 'srv-nl-02',
        name: 'redis-cache-nl',
        location: 'هلند (Amsterdam)',
        ip: '94.142.241.72',
        os: 'Debian 12',
        specs: '2 vCPU • 4 GB DDR5 • 60 GB NVMe',
        status: 'running',
        cpuLoad: 14,
        ramUsage: 31,
        uptime: '19 روز و 8 ساعت',
    },
];

const Dashboard = () => {
    const [searchParams] = useSearchParams();
    const pendingPlan = searchParams.get('plan');
    const pendingLoc = searchParams.get('loc');
    const pendingDomain = searchParams.get('domain');

    const [instances, setInstances] = useState(INITIAL_INSTANCES);
    const [copiedIp, setCopiedIp] = useState(null);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [activeConsole, setActiveConsole] = useState(null);

    const handleCopyIp = (ip) => {
        navigator.clipboard.writeText(ip);
        setCopiedIp(ip);
        setTimeout(() => setCopiedIp(null), 2000);
    };

    const handleReboot = (id) => {
        setInstances((prev) =>
            prev.map((srv) => (srv.id === id ? { ...srv, status: 'rebooting' } : srv))
        );
        setTimeout(() => {
            setInstances((prev) =>
                prev.map((srv) => (srv.id === id ? { ...srv, status: 'running' } : srv))
            );
        }, 2200);
    };

    const handleTogglePower = (id) => {
        setInstances((prev) =>
            prev.map((srv) => {
                if (srv.id !== id) return srv;
                const nextStatus = srv.status === 'stopped' ? 'running' : 'stopped';
                return {
                    ...srv,
                    status: nextStatus,
                    cpuLoad: nextStatus === 'stopped' ? 0 : 22,
                };
            })
        );
    };

    const handleDeployNewOrder = () => {
        const newServer = {
            id: `srv-new-${Date.now()}`,
            name: `cloud-${pendingLoc || 'de'}-node`,
            location: pendingLoc ? `لوکیشن (${pendingLoc.toUpperCase()})` : 'آلمان (Frankfurt)',
            ip: '193.168.104.55',
            os: 'Ubuntu 24.04 LTS',
            specs: pendingPlan || '4 vCPU • 8 GB DDR5 • 120 GB NVMe',
            status: 'running',
            cpuLoad: 8,
            ramUsage: 16,
            uptime: 'چند لحظه پیش',
        };
        setInstances([newServer, ...instances]);
        setOrderCompleted(true);
    };

    return (
        <div className="relative min-h-screen bg-[#050508] text-white flex flex-col overflow-x-hidden">
            <PageBackdrop />

            
            <header className="relative z-20 w-full border-b border-white/10 bg-[#0c0d12]/80 backdrop-blur-[30px] px-4 py-4">
                <div className="max-w-[1240px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <Link
                            to="/"
                            className="h-[44px] px-5 bg-[#1c1e20] border border-white/10 hover:border-white/20 rounded-[12px] flex items-center justify-center text-[#FAFAFA] text-base font-light font-sans transition-all"
                            dir="ltr"
                        >
                            +Host plust
                        </Link>
                        <div className="hidden sm:flex items-center gap-2 text-xs text-[#D0DAF5]/60 border-r border-white/10 pr-5">
                            <ShieldCheck className="w-4 h-4 text-[#a78bfa]" />
                            <span>کنسول مدیریت زیرساخت ابری</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">
                            <Wallet className="w-4 h-4 text-[#a78bfa]" />
                            <span className="text-[#D0DAF5]/60">اعتبار پنل:</span>
                            <strong className="text-white font-bold">۲,۴۵۰,۰۰۰ تومان</strong>
                        </div>

                        <Link
                            to="/vps"
                            className="btn-shine px-4 py-2.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_20px_rgba(127,86,217,0.4)]"
                        >
                            <Plus className="w-4 h-4" />
                            <span>ساخت سرور جدید</span>
                        </Link>

                        <Link
                            to="/"
                            title="خروج از حساب"
                            className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-rose-500/15 hover:text-rose-300 hover:border-rose-500/30 border border-white/10 text-xs text-[#D0DAF5]/80 flex items-center gap-1.5 transition-all"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">خروج</span>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="relative z-10 w-full max-w-[1240px] mx-auto px-4 py-10 flex-1 flex flex-col gap-8">

                
                {(pendingPlan || pendingDomain) && !orderCompleted && (
                    <div
                        className="rounded-[24px] p-6 border border-[#7F56D9]/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_15px_40px_rgba(127,86,217,0.2)]"
                        style={{
                            background:
                                'linear-gradient(136deg, rgba(127, 86, 217, 0.22) 0%, rgba(17, 18, 22, 0.85) 100%)',
                            backdropFilter: 'blur(40px)',
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#7F56D9]/25 border border-[#7F56D9]/50 flex items-center justify-center text-[#a78bfa] shrink-0">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="text-[11px] text-[#a78bfa] font-bold block mb-1">
                                    سفارش آماده تحویل آنی در کمتر از ۶۰ ثانیه
                                </span>
                                <h2 className="text-base sm:text-lg font-bold text-white">
                                    {pendingDomain
                                        ? `ثبت دامنه اختصاصی ${pendingDomain}`
                                        : `راه‌اندازی سرور ابری (${pendingPlan}) در دیتاسنتر ${(pendingLoc || 'de').toUpperCase()}`}
                                </h2>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleDeployNewOrder}
                            className="btn-shine w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_25px_rgba(127,86,217,0.5)] shrink-0"
                        >
                            <span>تایید نهایی و ساخت آنی سرویس</span>
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                    </div>
                )}

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-[22px] bg-[#111216]/80 border border-white/10 backdrop-blur-[35px] flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-[#D0DAF5]/60 font-medium">سرورهای ابری فعال</span>
                            <div className="w-9 h-9 rounded-xl bg-[#7F56D9]/15 border border-[#7F56D9]/30 flex items-center justify-center text-[#a78bfa]">
                                <Server className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-sans font-black text-white">{instances.length}</span>
                            <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                همه سرویس‌ها پایدار
                            </span>
                        </div>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#111216]/80 border border-white/10 backdrop-blur-[35px] flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-[#D0DAF5]/60 font-medium">دامنه‌های ثبت‌شده</span>
                            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                                <Globe className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-sans font-black text-white">
                                {pendingDomain && orderCompleted ? 4 : 3}
                            </span>
                            <Link to="/domains" className="text-[11px] text-[#a78bfa] hover:underline flex items-center gap-1">
                                <span>ثبت دامنه جدید</span>
                                <ArrowLeft className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#111216]/80 border border-white/10 backdrop-blur-[35px] flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-[#D0DAF5]/60 font-medium">ترافیک مصرفی ماهانه</span>
                            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400">
                                <Activity className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-sans font-black text-white" dir="ltr">1.4 TB</span>
                            <span className="text-[11px] text-[#D0DAF5]/50 font-sans" dir="ltr">از 7.5 TB</span>
                        </div>
                    </div>

                    <div className="p-5 rounded-[22px] bg-[#111216]/80 border border-white/10 backdrop-blur-[35px] flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-[#D0DAF5]/60 font-medium">تیکت‌های پشتیبانی</span>
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                                <LifeBuoy className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <span className="text-2xl font-sans font-black text-white">0</span>
                            <Link to="/support" className="text-[11px] text-[#a78bfa] hover:underline flex items-center gap-1">
                                <span>ارسال تیکت فنی</span>
                                <ArrowLeft className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <Server className="w-5 h-5 text-[#a78bfa]" />
                            <h2 className="text-base sm:text-lg font-bold text-white">
                                ماشین‌های مجازی و سرورهای ابری شما
                            </h2>
                        </div>
                        <span className="text-xs text-[#D0DAF5]/50 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-emerald-400" />
                            مانیتورینگ زنده منابع
                        </span>
                    </div>

                    {instances.map((srv) => (
                        <div
                            key={srv.id}
                            style={{
                                background:
                                    'linear-gradient(136deg, rgba(253, 247, 255, 0.09) 0%, rgba(17, 18, 22, 0.68) 100%)',
                                backdropFilter: 'blur(45px)',
                                WebkitBackdropFilter: 'blur(45px)',
                            }}
                            className="relative rounded-[24px] border border-white/10 hover:border-white/20 p-6 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[0_15px_35px_rgba(0,0,0,0.45)]"
                        >
                            
                            <div className="flex items-start sm:items-center gap-4">
                                <div className="relative w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                                    <Server className="w-5 h-5 text-[#D0DAF5]" />
                                    <span
                                        className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#111216] ${srv.status === 'running'
                                                ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]'
                                                : srv.status === 'rebooting'
                                                    ? 'bg-amber-400 animate-ping'
                                                    : 'bg-rose-500'
                                            }`}
                                    />
                                </div>

                                <div>
                                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                                        <h3 className="text-base font-sans font-bold text-white" dir="ltr">
                                            {srv.name}
                                        </h3>
                                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] text-[#D0DAF5] inline-flex items-center gap-1">
                                            <Globe className="w-3 h-3 text-[#a78bfa]" />
                                            {srv.location}
                                        </span>
                                        <span className="text-[11px] font-sans text-[#a78bfa] bg-[#7F56D9]/15 px-2 py-0.5 rounded" dir="ltr">
                                            {srv.os}
                                        </span>
                                    </div>
                                    <p className="text-xs font-sans text-[#D0DAF5]/55 flex items-center gap-1.5" dir="ltr">
                                        <HardDrive className="w-3.5 h-3.5 text-[#D0DAF5]/40" />
                                        {srv.specs}
                                    </p>
                                </div>
                            </div>

                            
                            <div className="grid grid-cols-2 gap-6 sm:w-64">
                                <div>
                                    <div className="flex justify-between items-center text-[11px] mb-1.5">
                                        <span className="text-[#D0DAF5]/60 flex items-center gap-1 font-sans">
                                            <Cpu className="w-3.5 h-3.5 text-[#a78bfa]" />
                                            CPU
                                        </span>
                                        <span className="font-sans font-bold text-white" dir="ltr">{srv.cpuLoad}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#7F56D9] rounded-full transition-all duration-500"
                                            style={{ width: `${srv.cpuLoad}%` }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center text-[11px] mb-1.5">
                                        <span className="text-[#D0DAF5]/60 flex items-center gap-1 font-sans">
                                            <Activity className="w-3.5 h-3.5 text-emerald-400" />
                                            RAM
                                        </span>
                                        <span className="font-sans font-bold text-white" dir="ltr">{srv.ramUsage}%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                                            style={{ width: `${srv.ramUsage}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            
                            <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                                <button
                                    type="button"
                                    onClick={() => handleCopyIp(srv.ip)}
                                    title="کپی آدرس IP"
                                    className="px-3.5 py-2 rounded-xl bg-[#0D0D0D] border border-white/10 hover:border-[#7F56D9] text-xs font-sans text-[#D0DAF5] flex items-center gap-2 cursor-pointer transition-colors"
                                    dir="ltr"
                                >
                                    <span>{srv.ip}</span>
                                    {copiedIp === srv.ip ? (
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    ) : (
                                        <Copy className="w-3.5 h-3.5 text-[#a78bfa]" />
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveConsole(activeConsole === srv.id ? null : srv.id)}
                                    title="کنسول خط فرمان (SSH)"
                                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#D0DAF5] hover:text-white cursor-pointer transition-colors"
                                >
                                    <Terminal className="w-4 h-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleReboot(srv.id)}
                                    disabled={srv.status === 'rebooting'}
                                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white flex items-center gap-1.5 cursor-pointer transition-colors disabled:opacity-50"
                                >
                                    <RotateCw
                                        className={`w-3.5 h-3.5 text-[#a78bfa] ${srv.status === 'rebooting' ? 'animate-spin' : ''
                                            }`}
                                    />
                                    <span>{srv.status === 'rebooting' ? 'در حال ریستارت...' : 'ریستارت'}</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleTogglePower(srv.id)}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors ${srv.status === 'stopped'
                                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                            : 'bg-rose-500/15 text-rose-300 border border-rose-500/30 hover:bg-rose-500/25'
                                        }`}
                                >
                                    <Power className="w-3.5 h-3.5" />
                                    <span>{srv.status === 'stopped' ? 'روشن کردن' : 'خاموش'}</span>
                                </button>
                            </div>

                            
                            {activeConsole === srv.id && (
                                <div
                                    dir="ltr"
                                    className="w-full lg:col-span-3 mt-2 p-4 rounded-2xl bg-[#07080c] border border-white/10 font-mono text-xs text-emerald-400 flex flex-col gap-1"
                                >
                                    <div className="text-gray-500 mb-1">
                                        Connected to {srv.name} ({srv.ip}) via WebSSH...
                                    </div>
                                    <div>root@{srv.name}:~# uptime</div>
                                    <div className="text-[#D0DAF5]/80">
                                        14:22:09 up 42 days, 14:11, 1 user, load average: 0.18, 0.24, 0.21
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
};

export default Dashboard;