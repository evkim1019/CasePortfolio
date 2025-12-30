import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { CaseStudy1 } from "./components/CaseStudy1";
import { CaseStudy2 } from "./components/CaseStudy2";
import { CaseStudy3 } from "./components/CaseStudy3";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/casestudy1" element={<CaseStudy1 />} />
      <Route path="/casestudy2" element={<CaseStudy2 />} />
      <Route path="/casestudy3" element={<CaseStudy3 />} />   
    </Routes>
  );
}
