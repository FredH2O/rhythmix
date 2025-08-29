import Image from "next/image";

const quote = [
  {
    id: "1",
    title: "Custom Music Playlists",
    description:
      "Since the time of our inception in DJing, our quest has been to raise the bar of excellence in the DJ and entertainment services in Dublin by providing our clients with amazing DJ entertainment every time at the most reasonable rates. We listen to our clients to understand the event and the purpose of throwing a party. This helps us plan exactly to make the celebration a memorable one. Our topnotch quality service, DJ hire plan, outstanding event lighting service, and reasonable rates have made us one of the leading DJ entertainment suppliers in Dublin.",
    button: "Get DJ Quote",
    image: "/images/dj-mix-set.jpg",
    alt: "Our DJ's finest kit.",
  },
  {
    id: "2",
    title: "Complete DJ Hire Dublin, Ireland",
    description:
      "Since the time of our inception in DJing, our quest has been to raise the bar of excellence in the DJ and entertainment services in Dublin by providing our clients with amazing DJ entertainment every time at the most reasonable rates. We listen to our clients to understand the event and the purpose of throwing a party. This helps us plan exactly to make the celebration a memorable one. Our topnotch quality service, DJ hire plan, outstanding event lighting service, and reasonable rates have made us one of the leading DJ entertainment suppliers in Dublin.",
    button: "Get DJ Quote",
    image: "/images/dj-sebastian.jpg",
    alt: `DJ Sebastian going crazy at DJ Icon ${new Date().getFullYear()}`,
  },
];

const Quote = () => {
  return (
    <section className="container mx-auto py-10 space-y-10">
      <div className="flex flex-col space-y-10 justify-center items-center p-3">
        {quote.map((index) => (
          <div className="flex" key={index.id}>
            <div className="w-1/2 space-y-3 px-10">
              <h3 className="text-3xl font-bold">{index.title}</h3>
              <p>{index.description}</p>
              <button className="border hover:bg-cyan-500 cursor-pointer hover:text-slate-800 px-4 py-2 rounded-full text-sm">
                {index.button}
              </button>
            </div>
            <div className="w-1/2">
              <Image
                className="overflow-hidden rounded-2xl"
                src={index.image}
                alt={index.alt}
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
