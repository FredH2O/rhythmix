import Image from "next/image";

const quote = [
  {
    id: "1",
    title: "Custom Music Playlists",
    description:
      "Every event deserves its own unique rhythm. With our custom DJ playlists, we tailor music to your taste and the atmosphere you want to create — whether it’s smooth and relaxed or high-energy party vibes. Your celebration gets a soundtrack designed just for you.",
    button: "Get DJ Quote",
    image: "/images/dj-mix-set.jpg",
    alt: "Our DJ's finest kit.",
  },
  {
    id: "2",
    title: "Complete DJ Hire Dublin, Ireland",
    description:
      "From weddings to corporate parties, our complete DJ hire service in Dublin covers everything — professional sound, dynamic lighting, and experienced DJs who know how to read the crowd. We bring the beats, the energy, and the expertise to keep the dancefloor alive.",
    button: "Get DJ Quote",
    image: "/images/dj-sebastian.jpg",
    alt: `DJ Sebastian going crazy at DJ Icon ${new Date().getFullYear()}`,
  },
];

const Quote = () => {
  return (
    <section className="container mx-auto py-10 space-y-10">
      <div className="flex flex-col space-y-10 justify-center items-center p-3">
        {quote.map((item) => (
          <div
            className="flex flex-col lg:gap-0 gap-10 justify-center lg:flex-row items-center"
            key={item.id}
          >
            <div className="lg:w-1/2 space-y-3 lg:px-10 px-5">
              <h3 className="text-3xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
              <button className="border transition-all duration-300 hover:bg-cyan-500 cursor-pointer hover:text-slate-800 px-4 py-2 rounded-full text-sm">
                {item.button}
              </button>
            </div>
            <div className="lg:w-1/2">
              <Image
                className="overflow-hidden h-[500px] object-cover rounded-2xl"
                src={item.image}
                alt={item.alt}
                width={1000}
                height={1000}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quote;
