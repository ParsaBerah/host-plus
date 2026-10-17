import React, { useState } from 'react';

import earthImg from '../assets/images/earth.png';
import figmaIcon from '../assets/icons/figma.svg';
import notionIcon from '../assets/icons/notion.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import appleIcon from '../assets/icons/apple.svg';
import chatgptIcon from '../assets/icons/chatgpt.svg';
import chromeIcon from '../assets/icons/chrome.svg';

const Hero = () => {
    const [domain, setDomain] = useState('');

    const brandLogos = [
        { name: 'Figma', src: figmaIcon },
        { name: 'Notion', src: notionIcon },
        { name: 'VS Code', src: vscodeIcon },
        { name: 'Apple', src: appleIcon },
        { name: 'ChatGPT', src: chatgptIcon },
        { name: 'Chrome', src: chromeIcon },
    ];

    return (
        <section className="relative w-full pt-[200px] pb-16 flex flex-col items-center text-center">

            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1100px] md:w-[1350px] lg:w-[1550px] pointer-events-none select-none z-0">
                <img
                    src={earthImg}
                    alt="کره زمین"
                    className="w-full h-auto object-contain mx-auto scale-110"
                />
            </div>

            
            <div className="relative z-10 flex flex-col items-center px-4 max-w-4xl mx-auto">
                <h1 className="text-xl sm:text-2xl md:text-[28px] font-bold text-white tracking-wide">
                    هاست پلاس؛ هاست سریع و سرور قدرتمند برای رشد کسب‌و‌کار شما
                </h1>

                <p className="mt-3 text-xs sm:text-sm text-gray-300 font-normal">
                    زیرساختی پایدار و سریع برای میزبانی وب‌سایت‌ها، فروشگاه‌ها و پروژه‌های آنلاین
                </p>

                
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 flex items-center justify-center gap-3 w-full max-w-[560px]"
                >

                    <div className="flex-1 bg-[#1D1F20]/70 border border-[#FDFDFD]/10 rounded-[14px] px-4 py-3 backdrop-blur-[40px] shadow-lg">
                        <input
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            placeholder="نام دامنه را برای ثبت یا انتقال وارد کنید"
                            className="bg-transparent text-right text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none w-full font-peyda"
                        />
                    </div>


                    <button
                        type="submit"
                        className="px-6 py-3 rounded-[14px] bg-[#7F56D9] hover:bg-[#6c28a1] text-white text-xs sm:text-sm font-medium shadow-[0_0_15px_rgba(127,86,217,0.4)] transition-all active:scale-95 shrink-0"
                    >
                        جستجوی دامنه
                    </button>
                </form>


                <button
                    type="button"
                    className="mt-3.5 flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer select-none"
                >
                    <span>مشاهده پسوند های تخفیف دار</span>
                    <span className="text-sm font-bold">←</span>
                </button>
            </div>


            <div className="relative z-10 mt-[250px] flex items-center justify-center w-full px-4 select-none">
                
                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black text-white/15 tracking-tight pointer-events-none whitespace-nowrap">
                    انتخاب برند های بزرگ
                </span>

                
                <div className="absolute top-[55%] left-0 right-0 flex items-center justify-center gap-8 sm:gap-14 md:gap-20 px-4">
                    {brandLogos.map((brand, idx) => (
                        <div
                            key={idx}
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                            title={brand.name}
                        >
                            <img
                                src={brand.src}
                                alt={brand.name}
                                className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;