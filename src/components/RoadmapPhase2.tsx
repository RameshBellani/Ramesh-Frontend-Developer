import Image from 'next/image';

const RoadmapPhase2 = () => {
  return (
    <section className="relative bg-black text-white py-16 px-8 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-black">
        <div className="relative h-72 md:h-full">
          <Image
            src="https://res.cloudinary.com/dwffepf9q/image/upload/v1729006303/b1acpxkupqwcnwpxclgv.png"
            alt="Roadmap Background"
            objectFit="cover"
            height={400}
            width={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <span className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full inline-block mb-4">
            PHASE 2
          </span>
          <h2 className="text-4xl font-bold mb-6">Bigger Insights</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>Intrudection of Advanced AI Agenda</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>Strategic Partnership</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>User Interface Optimization</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500">✔</span>
              <span>Comprehnsive Marketing Campaign</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RoadmapPhase2;
