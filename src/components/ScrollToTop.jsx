import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_TITLES = {
  '/': 'هاست پلاس | ارائه دهنده خدمات هاست ابری و سرورهای پرسرعت',
  '/vps': 'خرید سرور مجازی ابری (VPS) در ۶ لوکیشن | هاست پلاس',
  '/cloud-hosting': 'خرید هاست ابری پرسرعت NVMe | هاست پلاس',
  '/domains': 'جستجو و ثبت آنی دامنه | هاست پلاس',
  '/blog': 'وبلاگ فنی و مستندات زیرساخت | هاست پلاس',
  '/about': 'درباره ما و معماری دیتاسنترها | هاست پلاس',
  '/support': 'مرکز پشتیبانی ۲۴/۷ و سوالات متداول | هاست پلاس',
  '/auth': 'ورود و ثبت‌نام در پنل کاربری | هاست پلاس',
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = PAGE_TITLES[pathname] || 'هاست پلاس | Host Plus';
  }, [pathname]);

  return null;
};

export default ScrollToTop;