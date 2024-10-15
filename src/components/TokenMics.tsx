import React from 'react';
import Image from 'next/image';

const TokenMics: React.FC = () => {
  return (
    <section className="relative w-full h-full">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dwffepf9q/video/upload/v1729004768/rtjcdsyeplcuexlemywy.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-6 lg:py-16 text-white">
        
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <Image
            src="https://res.cloudinary.com/dwffepf9q/image/upload/v1728993051/pbz5orlrino5whjjgnyi.png"
            alt="Token Distribution Chart"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-darkblue-800 bg-opacity-60 rounded-lg p-6 lg:p-8 shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left">Tokenomics</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span className="font-medium">Name:</span>
              <span>EthAi</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Token Name:</span>
              <span>$EthAi</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Token standard:</span>
              <span>ERC20</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Blockchain:</span>
              <span>Ethereum</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Total Supply:</span>
              <span>100 Million</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Tax:</span>
              <span>5%/5%</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Team:</span>
              <span>35%</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Marketing:</span>
              <span>5%</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Liquidity Pool:</span>
              <span>90%</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TokenMics;
