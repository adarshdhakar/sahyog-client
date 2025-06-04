import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors">
      {/* Hero Section */}
      <section className="relative text-center px-4 pt-10 pb-20">
        <img
          src="/assets/images/disaster-relief.jpg"
          alt="Disaster relief"
          className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-30"
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
    </div>
  );
}