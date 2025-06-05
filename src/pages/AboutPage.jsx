import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-300 mb-4">
            {t("about_title", "About Sahyog")}
          </h1>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {t(
              "about_intro",
              "Sahyog is a compassionate platform designed to provide emotional, psychological, and crisis support for individuals facing mental health challenges. We believe no one should suffer in silence."
            )}
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            {t("our_mission", "Our Mission")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t(
              "about_mission",
              "We aim to build a safe, accessible, and multilingual digital space where people can seek help, talk to trained volunteers, and access resources without fear or stigma. Sahyog empowers communities through awareness, empathy, and collective healing."
            )}
          </p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            {t("our_services", "What We Offer")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t("anonymous_support", "Anonymous crisis support via chat")}</li>
            <li>{t("multilingual_assistance", "Multilingual assistance in English, Hindi & Japanese")}</li>
            <li>{t("volunteer_programs", "Volunteer & training programs for youth")}</li>
            <li>{t("resources_and_guides", "Self-help resources and wellness guides")}</li>
            <li>{t("partnerships", "Collaboration with mental health NGOs and institutes")}</li>
          </ul>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            {t("our_team", "Who We Are")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t(
              "about_team",
              "Sahyog is driven by students, mental health advocates, and volunteers from diverse backgrounds. We collaborate with psychologists, social workers, and academic institutions to ensure meaningful impact."
            )}
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg text-center"
        >
          <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
            {t("join_us", "Join the Movement")}
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t(
              "about_cta",
              "Whether you want to volunteer, donate, or just spread the word — every effort counts. Let's build a kinder, stronger support system together."
            )}
          </p>
          <Link 
            to="/volunteer"
            className="inline-block px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            {t("become_volunteer", "Become a Volunteer")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
