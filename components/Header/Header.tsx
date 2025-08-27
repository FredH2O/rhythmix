import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-5 absolute z-50 top-0 left-0 w-full">
      <div className="flex max-w-5xl rounded-full px-10 py-2 bg- justify-between items-center w-full border">
        <div className="flex justify-center items-center">
          <Image
            src="/images/rhythmix-logo.png"
            alt="Rhythmix's logo"
            width={50}
            height={50}
          />
          <h2 className="font-light text-xl">Rhythmix</h2>
        </div>

        <div>
          <ul className="flex gap-6 items-center text-white">
            <li>
              <Link href="/" className="hover:text-slate-500 transition">
                Home
              </Link>
            </li>

            <li className="relative group">
              <button className="hover:text-slate-500 transition cursor-pointer">
                Events
              </button>
              <ul className="absolute text-slate-800 -left-10 hidden group-hover:block bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg shadow-lg min-w-[200px]">
                <li>
                  <Link
                    href="/wedding"
                    className="block px-4 py-2 rounded hover:bg-slate-100 transition"
                  >
                    Wedding Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate"
                    className="block px-4 py-2 hover:bg-slate-100 transition"
                  >
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kids"
                    className="block px-4 py-2 hover:bg-slate-100 transition"
                  >
                    Kids Parties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/enquiries"
                    className="block px-4 py-2 rounded hover:bg-slate-100 transition"
                  >
                    Enquiries
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
