import React from 'react';
import FeatureCard from './FeatureCard';
import { FaChartLine, FaShieldAlt, FaSync, FaSearch } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <h1 className="block md:hidden text-white text-center m-1 text-base">Our Features</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
        <FeatureCard
          title="Trade Optimizer"
          description="Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity."
          icon={<FaChartLine size={40} />} 
          className="w-full md:w-56 md:h-95 md:rounded-tr-lg rounded-xl rounded-lg md:rounded-xl lg:rounded-2xl p-6 text-white" 
        />
        <FeatureCard
          title="Market Insight"
          description="Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers."
          icon={<FaChartLine size={40} />} 
          className="md:w-90 h-48 md:h-60 lg:h-90 rounded-lg" 
        />
        <FeatureCard
          title="Risk Guard"
          description="Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility."
          icon={<FaShieldAlt size={40} />} 
          className="w-full h-60 md:h-68 lg:h-80 rounded-2xl" 
        />
        <FeatureCard
          title="Portfolio Sync"
          description="Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed."
          icon={<FaSync size={40} />} 
          className="w-full h-56 md:h-64 lg:h-72 rounded-md" 
        />
        <FeatureCard
          title="Opportunity Scout"
          description="Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early."
          icon={<FaSearch size={40} />} 
          className="w-full h-64 md:h-72 lg:h-80 rounded-3xl" 
        />
      </div>
    </div>
  );
};

export default Dashboard;
