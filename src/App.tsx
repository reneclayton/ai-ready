import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Scorecard from './components/Scorecard';
import Footer from './components/Footer';

function App() {
  const [showScorecard, setShowScorecard] = useState(false);

  const handleStartAssessment = () => {
    setShowScorecard(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-secondary">
      <Header />
      <main>
        {!showScorecard ? (
          <>
            <Hero onStartAssessment={handleStartAssessment} />
            {/* Additional sections could go here to match landing page fully */}
          </>
        ) : (
          <Scorecard />
        )}
      </main>

      {!showScorecard && <Footer />}
    </div>
  );
}

export default App;
