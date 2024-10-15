import Image from 'next/image';

const Roadmap = () => {
  return (
    <section className="relative bg-black text-white py-16 px-8 md:px-24">
        <h2 className="text-3xl font-semibold mb-6 text-center">Roadmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-black">
      
        <div>
          <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full inline-block mb-4">
            PHASE 1
          </span>
          <h2 className="text-4xl font-bold mb-6">Kicking Off</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>Launch of EthAi: Officially</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>Development of Core AI Agents</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>User Onboarding Campaign</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>Community Engagement Initiatives</span>
            </li>
          </ul>
        </div>

        
        <div className="relative h-72 md:h-full">
          <Image
            src="https://res.cloudinary.com/dwffepf9q/image/upload/v1729005487/jwizs4jlvdu2v83g9f8x.png"
            alt="Roadmap Background"
            objectFit="cover"
            height={400}
            width={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
