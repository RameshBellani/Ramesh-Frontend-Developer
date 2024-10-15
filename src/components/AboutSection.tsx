import React from 'react';
import { FcNeutralTrading } from "react-icons/fc";
import { IoMdWallet } from "react-icons/io";
import { GrTroubleshoot } from "react-icons/gr";
import { FaHandsHoldingCircle } from "react-icons/fa6";
const AboutSection: React.FC = () =>{
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">About EthAi</h2>
      <p className="text-center max-w-2xl mx-auto mb-8">
        At EthAi, we&apos;re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders&lsoquo;movements.
      </p>
      <div className="flex justify-center mb-10">
        <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">
          Read more
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 bg-gray m-6 rounded-3xl bg-gray-800">
        <div className="bg-darkblue-800 p-6 rounded-lg text-center">
          <i className="fa fa-line-chart text-teal-400 text-3xl mb-4"><FcNeutralTrading size={40}/></i>
          <h3 className="text-xl font-semibold mb-2">Stay Ahead</h3>
          <p className="text-gray-400">
            No more guesswork—get clear, trustable insights.
          </p>
        </div>
        <div className="bg-darkblue-800 p-6 rounded-lg text-center ">
          <i className="fa fa-cogs text-teal-400 text-3xl mb-4 items-center"><IoMdWallet size={40}/></i>
          <h3 className="text-xl font-semibold mb-2">Simple, Not Overwhelming</h3>
          <p className="text-gray-400">
            Our tools are designed to make complex market analysis easy to understand and act on.
          </p>
        </div>
        <div className="bg-darkblue-800 p-6 rounded-lg text-center">
          <i className="fa fa-shield-alt text-teal-400 text-3xl mb-4"><GrTroubleshoot size={40}/></i>
          <h3 className="text-xl font-semibold mb-2">Future-Proof</h3>
          <p className="text-gray-400">
            We&apos;re constantly improving, adding new features to help you make the most informed decisions possible.
          </p>
        </div>
        <div className="bg-darkblue-800 p-6 rounded-lg text-center">
          <i className="fa fa-shield-alt text-teal-400 text-3xl mb-4"><FaHandsHoldingCircle size={40}/></i>
          <h3 className="text-xl font-semibold mb-2">Know Your Assets</h3>
          <p className="text-gray-400">
          Always stay on top of how your investments are performing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
