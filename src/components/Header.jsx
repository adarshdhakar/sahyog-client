// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  const changeLanguage = (e) => {
    localStorage.setItem("language", e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="text-2xl font-bold">Sahyog</button>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-800 dark:text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          <select onChange={changeLanguage} defaultValue={i18n.language} className="bg-transparent border rounded px-2 py-1">
            <option value="en" className="dark:bg-gray-800">English</option>
            <option value="hi" className="dark:bg-gray-800">हिंदी</option>
            <option value="ja" className="dark:bg-gray-800">日本語</option>
          </select>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</button>
          <Link to="/login"><Button variant="outline">{t("login")}</Button></Link>
          <Link to="/register"><Button>{t("signup")}</Button></Link>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          {/* mobile dropdowns here */}
        </div>
      )}
    </header>
  );
}
