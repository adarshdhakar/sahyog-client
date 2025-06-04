// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-center text-sm p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
      &copy; {new Date().getFullYear()} Sahyog |{" "}
      <Link to="/about" className="underline">{t("about")}</Link> |{" "}
      <Link to="/faq" className="underline">{t("faq")}</Link> |{" "}
      <Link to="/contact" className="underline">{t("contact")}</Link>
    </footer>
  );
}
