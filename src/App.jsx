import Header from './components/Header';
import MainBanner from './components/MainBanner';
import WorkshopIntro from './components/WorkshopIntro';
import TargetAudience from './components/TargetAudience';
import Transformations from './components/Transformations';
import HolisticApproach from './components/HolisticApproach';
import Testimonials from './components/Testimonials';
import Bonuses from './components/Bonuses';
import FAQ from './components/FAQ';
import MeetMentor from './components/MeetMentor';
import FinalCTA from './components/FinalCTA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <WorkshopIntro />
      <TargetAudience />
      <Transformations />
      <HolisticApproach />
      <Testimonials />
      <Bonuses />
      <FAQ />
      <MeetMentor />
      <FinalCTA />
    </div>
  );
}

export default App;
