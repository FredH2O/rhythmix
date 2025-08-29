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
        <h2 className="lg:text-5xl text-4xl pb-3 font-bold">
          ✨ Why Choose Us?
        </h2>
        <p className="text-lg mb-4 font-semibold">
          Welcome to Rhythmix — your #1 choice for professional DJs, delivering
          tailored parties and unforgettable entertainment for weddings,
          corporate events, birthdays, and more. We bring the perfect mix of
          energy, expertise, and passion to make sure your celebration feels
          unique, personal, and truly unforgettable.
        </p>

        <p className="mb-4">
          Every event has its own heartbeat, its own story waiting to be told
          through music. That’s why we don’t just press play — we craft
          soundtracks that reflect your vision, your guests, and your
          atmosphere. From elegant evenings to lively dance floors, our DJs know
          how to read the crowd, lift the energy, and keep the rhythm flowing
          from the very first beat to the last song of the night.
        </p>

        <p className="mb-4">
          With years of experience across weddings, parties, and corporate
          events, our team blends professionalism with creativity. We handle the
          details so you can focus on the moment — confident that every
          transition, every track, and every announcement will be delivered
          seamlessly. Whether you want timeless classics, modern hits, or a mix
          of both, we’ll design a setlist that feels as personal as the occasion
          itself.
        </p>

        <p className="">
          At Rhythmix, we believe music should do more than fill a room — it
          should create memories that last. From the first dance to the last
          encore, we’ll make sure your event is one to remember. Let’s bring
          your celebration to life with sound, style, and the kind of atmosphere
          people will talk about long after the night is over.
        </p>
      </div>
    </section>
  );
};

export default Features;
