import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-5">
      <div className="flex justify-center items-center">
        <Image
          src="/images/rhythmix-logo.png"
          alt="Rhythmix's logo"
          width={50}
          height={50}
        />
        <h2 className="font-bold text-xl">Rhythmix</h2>
      </div>

      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Wedding Events</li>
          <li>Corporate Events</li>
          <li>Kids Parties</li>
          <li>Enquiries</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
