import { NavBar } from "./components/NavBar";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Solution } from "./sections/Solution";
import { DemoFlow } from "./sections/DemoFlow";
import { Capabilities } from "./sections/Capabilities";
import { DashboardPreview } from "./sections/DashboardPreview";
import { Tech } from "./sections/Tech";
import { Trust } from "./sections/Trust";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-ink-950 text-ink-50">
      <NavBar />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <Solution />
        <DemoFlow />
        <Capabilities />
        <DashboardPreview />
        <Tech />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
