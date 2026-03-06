import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SquadSection from './components/PlayerCard'; // This is your 5-player limit section
import SquadPage from './components/SquadPage'; // The full list component we created
import ScrollToTop from './components/ScrollToTop';
import LegendsSection from './components/LegendsSection';
// import TrophyCabinet from './components/TrophyCabinet';
import LiveTable from './components/LiveTable';
import CompetitionsPage from './components/CompetitonsPage';
import ClubHistory from './components/ClubHistory';
import StadiumSection from './components/StadiumSection';
import TrophyCarousel from './components/TrophyCabinet';


// This represents your main landing page
const HomePage = () => (
  <>
    <Hero />
    <SquadSection />
    
    <LegendsSection/>
    <TrophyCarousel/>
    <CompetitionsPage/>
    <ClubHistory/>
    <StadiumSection/>
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#021d3d]">
        <Navbar />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Full Squad Page */}
          <Route path="/squad" element={<SquadPage />} />

          <Route path='/liveTable/:id?' element={<LiveTable/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;