import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white p-8 overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
        src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__" // 
      ></video>

      
      <div className="absolute top-0 left-0 w-full h-full opacity-60"></div>

      
      <h1 className="text-6xl font-bold mb-6 text.center m-2">When Innovation <br/> Meets <span className='bg-white text-black rounded-lg'>Investment</span></h1>
      <p className="text-xl mb-8">
        Empowering Trading Though Advanced Technology
      </p>
      <button className="bg-black py-3 px-6 rounded-full text-lg border-gray-400">
        Open dApp
      </button>
    </section>
  );
};

export default Hero;
