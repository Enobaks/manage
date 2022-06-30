import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="wrap">
      <nav className="flex flex-col lg:flex-row items-center lg:justify-between lg:container mx-auto h-14 mt-5 lg:px-16 relative">
        <div className="w-full lg:w-auto h-auto flex justify-between p-3">
          <Image src="/logo.svg" alt="" width="146" height="24" />
          <div className="lg:hidden">
            <Image
              src={display ? "/icon-close.svg" : "/icon-hamburger.svg"}
              alt=""
              width="25"
              height="18"
              onClick={handleClick}
            />
          </div>
        </div>
        <ul className="hidden lg:flex justify-between w-auto">
          <li className="pr-7 text-primary text-sm hover:text-secondary">
            <Link href="">
              <a>Pricing</a>
            </Link>
          </li>
          <li className="pr-7 text-primary text-sm hover:text-secondary">
            <Link href="">
              <a>Product</a>
            </Link>
          </li>
          <li className="pr-7 text-primary text-sm hover:text-secondary">
            <Link href="">
              <a>About Us</a>
            </Link>
          </li>
          <li className="pr-7 text-primary text-sm hover:text-secondary">
            <Link href="">
              <a>Careers</a>
            </Link>
          </li>
          <li className="pr-7 text-primary text-sm hover:text-secondary">
            <Link href="">
              <a>Community</a>
            </Link>
          </li>
        </ul>
        <button className="hidden lg:block rounded-full bg-burnt-orange hover:bg-burnt-orange-active text-white text-sm px-5 py-2 hover:shadow-xl font-medium">
          Get Started
        </button>
        <div
          className={
            display ? "p-3 flex w-10/12 flex-col bg-zinc-200 z-20 " : "hidden"
          }
        >
          <Link href="#">
            <a className="text-primary font-medium text-center pb-2">Pricing</a>
          </Link>
          <Link href="#">
            <a className="text-primary font-medium text-center pb-2">Product</a>
          </Link>
          <Link href="#">
            <a className="text-primary font-medium text-center pb-2">
              About Us
            </a>
          </Link>
          <Link href="#">
            <a className="text-primary font-medium text-center pb-2">Careers</a>
          </Link>
          <Link href="#">
            <a className="text-primary font-medium text-center pb-2">
              Community
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
