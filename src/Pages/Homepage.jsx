import React from 'react';
import Header from '../../components/Header/Header';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
  const features = [
    {
      title: "AI Shopping Assistant",
      description: "Get instant answers via voice or text",
      icon: "💬"
    },
    {
      title: "AR Try-On",
      description: "See products in your space b startefore buying",
      icon: "👓"
    },
    {
      title: "Smart Lists",
      description: "AI predicts what you need",
      icon: "📋"
    }
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <h1>Your Personal AI Shopping Companion</h1>
          <p>Smart shopping powered by AI</p>
          <button>Try Demo</button>
        </section>
        
        <section className="features">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;