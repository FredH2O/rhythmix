import Features from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import ScrollVelocity from "@/components/Reactbits/ScrollVelocity";

export default function Home() {
  return (
    <div>
      <Hero />
      <ScrollVelocity
        texts={[
          "“Turn Up the Night, Book Your DJ Today.”",
          "“Your Soundtrack, Our DJ.”",
        ]}
        velocity={40}
        className="custom-scroll-text text-slate-500"
      />
      <Features />
    </div>
  );
}
