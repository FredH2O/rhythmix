import Image from "next/image";

const Features = () => {
  return (
    <section className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-5 container mx-auto place-items-center justify-center items-center">
      <div className="p-3">
        <Image
          className="overflow-hidden rounded lg:h-full h-[500px] w-[600px] object-cover"
          src="/images/WhyChooseUs.jpg"
          alt="Why choose us?"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="px-5 text-center">
        <h2 className="lg:text-5xl text-4xl pb-3">✨ Why Choose Us?</h2>
        <p className="text-lg">
          Because in Dublin, music is everywhere — but with us, it’s personal.
          We blend passion, rhythm, and community to give you more than lessons:
          we give you an experience that stays with you.”
        </p>
      </div>
    </section>
  );
};

export default Features;
