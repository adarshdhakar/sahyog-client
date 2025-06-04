// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Render nested route pages here */}
      </main>
      <Footer />
    </div>
  );
}
