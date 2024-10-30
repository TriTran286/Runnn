import React from 'react';
import Header from './components/header';
import Navbar from './components/Navbar'
import StoriesSection from './components/StoriesSection';
import BenefitsSection from './components/BenefitsSection';
import NutritionSection from './components/NutritionSection';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <StoriesSection/>
      <BenefitsSection/>
      <NutritionSection/>
    </div>
  ); 
}

export default App;
