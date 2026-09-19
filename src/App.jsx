import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ModalProvider } from "./context/ModalContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageModal from "./components/ImageModal";
import Home from "./pages/Home";
import ProjectHRIS from "./pages/projects/ProjectHRIS";
import ProjectHidroponik from "./pages/projects/ProjectHidroponik";
import ProjectCurugCikoneng from "./pages/projects/ProjectCurugCikoneng";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ModalProvider>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/hris" element={<ProjectHRIS />} />
          <Route path="/project/hidroponik" element={<ProjectHidroponik />} />
          <Route path="/project/curug-cikoneng" element={<ProjectCurugCikoneng />} />
        </Routes>
      </main>

      <Footer />
      <ImageModal />
    </ModalProvider>
  );
}
