import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

export default function LandingPage() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  
  const changeLanguage = (event) => {
    localStorage.setItem("language", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors">
      <header className="bg-white dark:bg-transparent shadow-md sticky-top z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sahyog</h1>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <select
              onChange={changeLanguage}
              defaultValue={i18n.language}
              className="bg-transparent border border-gray-400 dark:border-gray-600 text-gray-900 dark:text-white rounded px-2 py-1 focus:outline-none"
            >
              <option value="en" className="text-black">English</option>
              <option value="hi" className="text-black">हिंदी</option>
              <option value="ja" className="text-black">日本語</option>
            </select>
            <button
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={toggleDarkMode}
              aria-label={t("toggle_theme")}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/login"><Button variant="outline">{t("login")}</Button></Link>
            <Link to="/register"><Button>{t("signup")}</Button></Link>
          </div>
        </div>

       {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 space-y-4 border border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out">
            {/* Language Selector */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {t("language")}
              </label>
              <select
                onChange={changeLanguage}
                defaultValue={i18n.language}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              >
                <option value="en" className="text-black dark:text-white">English</option>
                <option value="hi" className="text-black dark:text-white">हिंदी</option>
                <option value="ja" className="text-black dark:text-white">日本語</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-300">{t("toggle_theme")}</span>
              <button
                className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={toggleDarkMode}
                aria-label={t("toggle_theme")}
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-300" />}
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200 dark:border-gray-700">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {t("login")}
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {t("signup")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      </header>

      {/* Hero Section */}
      <section className="relative text-center px-4 pt-10 pb-20">
        <img
          src="/assets/images/disaster-relief.jpg"
          alt="Disaster relief"
          className={`absolute inset-0 w-full h-full object-cover ${darkMode ? 'opacity-30' : 'opacity-70'}`}
        />
        <div className="relative z-10">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('hero_title')}
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl mb-8 font-semibold dark:font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('hero_subtitle')}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/relief-centers"><Button>{t('explore_centers')}</Button></Link>
            <Link to="/donate"><Button variant="secondary">{t('donate_now')}</Button></Link>
            <Link to="/volunteer"><Button variant="">{t('volunteer')}</Button></Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-semibold text-center mb-8">{t('features_heading')}</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">{t('feature_real_time')}</h4>
            <p className="text-sm">{t('feature_real_time_desc')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">{t('feature_donation_tracker')}</h4>
            <p className="text-sm">{t('feature_donation_tracker_desc')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">{t('feature_multilingual')}</h4>
            <p className="text-sm">{t('feature_multilingual_desc')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">{t('feature_ai_support')}</h4>
            <p className="text-sm">{t('feature_ai_support_desc')}</p>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-white dark:bg-gray-800 rounded-2xl mx-6 shadow-md">
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold mb-4">{t('about_heading')}</h3>
          <p className="text-sm leading-relaxed mb-4">{t('about_text')}</p>
          <Link to="/about"><Button>{t('learn_more')}</Button></Link>
        </div>
        <div className="md:w-1/3 p-4">
          <img
            src="/assets/images/community-support.jpg"
            alt="Community support"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-semibold text-center mb-8">{t('testimonials_heading')}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <p className="italic mb-4">“{t('testimonial_1_quote')}”</p>
            <h4 className="font-semibold">{t('testimonial_1_name')}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('testimonial_1_role')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <p className="italic mb-4">“{t('testimonial_2_quote')}”</p>
            <h4 className="font-semibold">{t('testimonial_2_name')}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('testimonial_2_role')}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <p className="italic mb-4">“{t('testimonial_3_quote')}”</p>
            <h4 className="font-semibold">{t('testimonial_3_name')}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t('testimonial_3_role')}</p>
          </div>
        </div>
      </section>

      <footer className={`text-center text-sm p-4 border-t dark:border-gray-700 ${darkMode ? '' : 'bg-gray-400'}`}>
        &copy; {new Date().getFullYear()} Sahyog | <Link className="underline" to="/about">{t('about')}</Link> | <Link className="underline" to="/faq">{t('faq')}</Link> | <Link className="underline" to="/contact">{t('contact')}</Link>
      </footer>
    </div>
  );
}