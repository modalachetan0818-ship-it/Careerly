import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { SplashLoader } from "../../SplashLoader/SplashLoader";
import { ScrollToTop } from "../../ScrollToTop/ScrollToTop";

export function Layout() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <>
      <ScrollToTop />
      <SplashLoader />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="page"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
