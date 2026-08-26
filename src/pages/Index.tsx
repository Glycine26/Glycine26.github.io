import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  useReveal();
  return <div className="site-shell"><Navbar /><main><Hero /><Projects /><About /><Experience /><Skills /><Education /><Contact /></main><Footer /></div>;
}
