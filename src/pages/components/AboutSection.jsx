// src/pages/components/AboutSection.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/ui/Button';

export default function AboutSection() {
  const { t } = useTranslation();

  return (
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
  );
}
