import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { SplashLoader } from "../../SplashLoader/SplashLoader";
import { ScrollToTop } from "../../ScrollToTop/ScrollToTop";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <SplashLoader />
      <Navbar />
      <main className="page">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
