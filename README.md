# ⚡ Host Plus (+Host plust) — Cloud Infrastructure & VPS Platform

وب‌اپلیکیشن مدرن ارائه خدمات **سرور مجازی ابری (Cloud VPS)**، **هاست ابری NVMe** و **ثبت دامنه** با رابط کاربری Glassmorphism، پشتیبانی کامل از چیدمان راست‌چین (RTL) و پنل مدیریت سرورها.

---

## ✨ ویژگی‌های کلیدی (Key Features)

- 🌍 **کره زمین سه‌بعدی تعاملی (Three.js):** نمایش دیتاسنترهای جهانی با رندرینگ نقطه‌ای بهینه.
- 🖥️ **پیکربندی زنده سرور مجازی (`/vps`):** انتخاب تعاملی ۶ لوکیشن (آلمان، هلند، ترکیه، یونان، روسیه، مصر)، سیستم‌عامل و دوره پرداخت با محاسبه آنی قیمت.
- 🚀 **تخمین‌گر هوشمند منابع (`/cloud-hosting`):** پیشنهاد خودکار پلن هاست ابری بر اساس اسلایدر بازدید روزانه.
- 🔍 **سیستم استعلام دامنه (`/domains`):** بررسی آزاد بودن دامنه همراه با پیشنهاد پسوند جایگزین.
- 🎛️ **کنسول مدیریت ابری (`/dashboard`):** پنل کاربری مجهز به مانیتورینگ زنده CPU/RAM، ریستارت، خاموش/روشن کردن سرور، کپی IP و ترمینال WebSSH.
- 🎨 **دیزاین سیستم اختصاصی (Zero AI-Slop):** استفاده از افکت‌های شیشه‌ای مهندسی‌شده (`backdrop-blur`)، لبه‌های نوری Specular و انیمیشن‌های ۶۰ فریم بر ثانیه.

---

## 🛠️ تکنولوژی‌های استفاده‌شده (Tech Stack)

- **Frontend Framework:** React 18 (Vite)
- **Routing & Code Splitting:** React Router v6 (`React.lazy` & `Suspense`)
- **Styling:** Tailwind CSS + Custom Glassmorphic Tokens
- **3D Graphics:** Three.js / WebGL
- **Icons:** Lucide React
- **Typography:** Peyda (Persian) & Manrope (Technical/Latin Metrics)

---

## 🚀 راه‌اندازی پروژه در محیط لوکال (Getting Started)

```bash
# 1. کلون کردن ریپازیتوری
git clone [https://github.com/YOUR_USERNAME/host-plus.git](https://github.com/YOUR_USERNAME/host-plus.git)

# 2. ورود به پوشه پروژه
cd host-plus

# 3. نصب پکیج‌ها
npm install

# 4. اجرای سرور توسعه
npm run dev

# 5. ساخت نسخه نهایی (Production Build)
npm run build