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
          Welcome to Rhythmix — your #1 choice for professional DJs, bringing
          tailored entertainment for weddings, corporate events, birthdays, and
          more. We mix energy and expertise to make every celebration
          unforgettable.
        </p>

        <p className="mb-4">
          Every event has its own heartbeat. That’s why we don’t just press play
          — we craft soundtracks that reflect your vision, your guests, and your
          atmosphere. From elegant evenings to lively dance floors, our DJs keep
          the rhythm alive all night long.
        </p>

        <p className="mb-4">
          With years of experience, our team blends professionalism with
          creativity. We handle the details so you can enjoy the moment, knowing
          every transition and track will be seamless. Whether you want
          classics, hits, or both, we’ll make it personal.
        </p>

        <p>
          At Rhythmix, music is more than sound — it’s memories. From the first
          dance to the last encore, we’ll make your event one to remember, with
          an atmosphere your guests will talk about long after the night ends.
        </p>
      </div>
    </section>
  );
};

export default Features;
