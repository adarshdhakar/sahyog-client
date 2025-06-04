// src/pages/components/FeaturesSection.jsx
import { useTranslation } from 'react-i18next';

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    { title: t('feature_real_time'), desc: t('feature_real_time_desc') },
    { title: t('feature_donation_tracker'), desc: t('feature_donation_tracker_desc') },
    { title: t('feature_multilingual'), desc: t('feature_multilingual_desc') },
    { title: t('feature_ai_support'), desc: t('feature_ai_support_desc') },
  ];

  return (
    <section className="px-6 py-12">
      <h3 className="text-3xl font-semibold text-center mb-8">{t('features_heading')}</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center">
            <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
            <p className="text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
