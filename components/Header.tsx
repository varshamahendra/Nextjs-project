import Image from "next/image";
import { Logoicon, Mobilehamburgericon } from "./Icons";
import Link from "next/link";
const Header = () => {
  interface Data {
    name: string;
    path: string;
    index: string;
  }
  const Navlinks: Data[] = [
    {
      index: "00",
      name: "Home",
      path: "/Home",
    },
    {
      index: "01",
      name: "Destination",
      path: "/Destination",
    },
    {
      index: "02",
      name: "Crew",
      path: "/crew",
    },
    {
      index: "03",

      name: "Technology",
      path: "/technology",
    },
  ];
  return (
    <header className="grid  w-full md:grid-cols-[48px_1fr] grid-cols-2 gap-x-16 lg:pt-25  md:pt-0 items-center lg:pl-25 md:pl-12.5 p-[30px]">
      <div>
        <Logoicon />
      </div>
      <div className="md:flex items-center flex-1 hidden">
        <div className="border-t border-[#c0c7d1] flex-1 sm:invisible lg:visible relative mr-[-25px]" />
        <div className="box_container flex-2 ">
          <ul className="flex justify-center gap-11.25 ">
            {Navlinks &&
              Navlinks.map((item) => (
                <li key={item.name} className="cursor-pointer uppercase">
                  <Link href={item.path} className="text-white">
                    <div className="flex gap-5">
                      <h4 className="md:hidden lg:block"> {item.index}</h4>
                      <h4>{item.name}</h4>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="justify-self-end md:hidden block">
        <Mobilehamburgericon />
      </div>
    </header>
  );
};

export default Header;

{
}
