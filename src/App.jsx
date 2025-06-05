import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Donate from "./pages/Donate.jsx";
import MainLayout from "./layouts/MainLayout.jsx"; 
import FindReliefCenters from "./pages/FindReliefCenters.jsx";
import './App.css';
import Volunteer from "./pages/Volunteer.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FAQ from "./pages/FAQ.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/relief-centers" element={<FindReliefCenters />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
