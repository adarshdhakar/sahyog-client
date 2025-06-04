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
      <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
        {t('features_heading')}
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-sm p-6 text-center transition-colors"
          >
            <h4 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
