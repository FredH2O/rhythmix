import Features from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import Quote from "@/components/Quote/Quote";
import ScrollVelocity from "@/components/Reactbits/ScrollVelocity";
import ReviewMarquee from "@/components/ReviewMarquee/ReviewMarquee";

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
      <ReviewMarquee />
      <Quote />
    </div>
  );
}
