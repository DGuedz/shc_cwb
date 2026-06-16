import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing-sections/01_HeroSection';
import { ProblemSolutionSplit } from '@/components/landing-sections/02_ProblemSolutionSplit';
import { VideoTransition } from '@/components/landing-sections/02b_VideoTransition';
import { Solution } from '@/components/landing-sections/03_Solution';
import { Impact } from '@/components/landing-sections/04_Impact';
import { Conversion } from '@/components/landing-sections/05_Conversion';

export default function Home() {
  return (
    <div className="bg-background text-white font-archivo">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSplit />
        <VideoTransition />
        <Solution />
        <Impact />
        <Conversion />
      </main>
      <Footer />
    </div>
  );
}
