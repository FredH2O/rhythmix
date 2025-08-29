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
          energy and expertise to make your celebration truly unforgettable.
        </p>

        <p className="mb-4">
          Every event has its own heartbeat, its own story told through music.
          That’s why we don’t just press play — we craft soundtracks that
          reflect your vision, your guests, and your atmosphere. From elegant
          evenings to lively dance floors, our DJs keep the rhythm flowing from
          the first beat to the final song.
        </p>

        <p className="mb-4">
          With years of experience across weddings, parties, and corporate
          events, our team blends professionalism with creativity. We handle the
          details so you can enjoy the moment — confident that every transition,
          track, and announcement will be delivered seamlessly. Whether you want
          timeless classics or modern hits, we’ll create a setlist as personal
          as your occasion.
        </p>

        <p>
          At Rhythmix, we believe music should do more than fill a room — it
          should create memories that last. From the first dance to the last
          encore, we’ll make sure your event is one to remember. Together, let’s
          bring your celebration to life with sound, style, and atmosphere that
          guests will talk about long after the night is over.
        </p>
      </div>
    </section>
  );
};

export default Features;
