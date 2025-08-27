import Prism from "../Reactbits/Prism";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full h-[600px] lg:h-screen">
        <div className="absolute top-0 bg-black/50 inset-0 z-10"></div>
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
        <div className="absolute w-full h-full top-0 left-0 z-20 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center pb-5 gap-2">
            <h1 className="text-7xl">Rhythmix</h1>
            <p className="text-lg italic font-light">
              The Heartbeat of Dublin&apos;s Nightlife.
            </p>
          </div>

          <div className="flex justify-center gap-5 w-full">
            <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-400 hover:text-black text-slate-900 px-5 py-2 rounded-full">
              Get a DJ Quote
            </button>
            <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-400 hover:text-black text-slate-900 px-5 py-2 rounded-full">
              (01) 345 6789
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
