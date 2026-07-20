import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout/Layout";

const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.Home })),
);
const Jobs = lazy(() =>
  import("./pages/Jobs").then((m) => ({ default: m.Jobs })),
);
const JobDetail = lazy(() =>
  import("./pages/JobDetail").then((m) => ({ default: m.JobDetail })),
);
const Apply = lazy(() =>
  import("./pages/Apply").then((m) => ({ default: m.Apply })),
);
const Services = lazy(() =>
  import("./pages/Services").then((m) => ({ default: m.Services })),
);
const About = lazy(() =>
  import("./pages/About").then((m) => ({ default: m.About })),
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact })),
);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/:id" element={<JobDetail />} />
            <Route path="apply" element={<Apply />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
