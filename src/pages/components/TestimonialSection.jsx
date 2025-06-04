// src/pages/components/TestimonialsSection.jsx
import { useTranslation } from 'react-i18next';

export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('testimonial_1_quote'),
      name: t('testimonial_1_name'),
      role: t('testimonial_1_role'),
    },
    {
      quote: t('testimonial_2_quote'),
      name: t('testimonial_2_name'),
      role: t('testimonial_2_role'),
    },
    {
      quote: t('testimonial_3_quote'),
      name: t('testimonial_3_name'),
      role: t('testimonial_3_role'),
    },
  ];

  return (
    <section className="px-6 py-12">
      <h3 className="text-3xl font-semibold text-center mb-8">{t('testimonials_heading')}</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((tData, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
            <p className="italic mb-4">“{tData.quote}”</p>
            <h4 className="font-semibold">{tData.name}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{tData.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
