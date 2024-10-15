import React from 'react';
import Link from 'next/link';

const Section: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#001820] p-6">
      <div className="bg-[#001F2D] text-center text-white rounded-2xl shadow-lg p-10 max-w-3xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Explore Our <span className="text-[#00d8ff]">dApp</span>
        </h2>
        <p className="text-[#99aabb] mb-8">
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. 
          By tracking smart money flows, monitoring key wallets, and providing real-time market insights, 
          EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, 
          market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
        </p>
        <Link href="#open-dapp" legacyBehavior>
          <a className="inline-block px-6 py-3 text-white bg-[#00d8ff] hover:bg-[#00b5cc] transition-colors rounded-full shadow-lg">
            Open dApp
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Section;
