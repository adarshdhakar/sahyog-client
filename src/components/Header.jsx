// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header({t, i18n, mobileOpen, setMobileOpen, darkMode, setDarkMode, changeLanguage}) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/login");
  }
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authUser"));
    setUser(userData);
  }, []);

  return (
    <header className="bg-violet-200 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="text-2xl font-bold">Sahyog</button>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-gray-800 dark:text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          <select onChange={changeLanguage} value={i18n.language} className="bg-transparent border rounded border-blue-800 dark:border-gray-500 px-2 py-1">
            <option value="en" className="dark:bg-gray-800">English</option>
            <option value="hi" className="dark:bg-gray-800">हिंदी</option>
            <option value="ja" className="dark:bg-gray-800">日本語</option>
          </select>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Sun /> : <Moon />}</button>
          {localStorage.getItem("authUser") ? (
            <>
              <Link to="/profile">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.displayName || user?.email || 'Anonymous'}`}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />  
              </Link>
              <Button onClick={handleLogout} variant="outline">{t("logout")}</Button>
            </>
          ) : (
            <>
              <Link to="/login"><Button variant="outline">{t("login")}</Button></Link>
              <Link to="/register"><Button>{t("signup")}</Button></Link>
            </>
          )}
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
                value={i18n.language}
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
                onClick={() => setDarkMode(!darkMode)}
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
  );
}
