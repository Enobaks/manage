import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-64 w-full bg-primary pt-8 pb-16">
      <div className="mx-auto  px-10 md:px-16 flex flex-col lg:flex-row lg:justify-around lg:gap-5 h-full">
        <div className="brand flex flex-col justify-between items-center h-36 p-4">
          <Link href="/">
            <a>
              <Image src="/logo-alt.svg" alt="" width="196" height="34" />
            </a>
          </Link>
          <div className="media-links flex justify-around w-3/4">
            <Link href="/">
              <a>
                <Image src="/icon-facebook.svg" alt="" width="24" height="24" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src="/icon-instagram.svg"
                  alt=""
                  width="24"
                  height="24"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image
                  src="/icon-pinterest.svg"
                  alt=""
                  width="24"
                  height="24"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src="/icon-twitter.svg" alt="" width="24" height="24" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src="/icon-youtube.svg" alt="" width="24" height="24" />
              </a>
            </Link>
          </div>
        </div>
        <div className="links p-2 flex flex-col justify-around h-36 items-center lg:items-baseline text-white">
          <Link href="/">
            <a>
              <p className="hover:text-burnt-orange-active">Home</p>
            </a>
          </Link>
          <Link href="#">
            <a>
              <p className="hover:text-burnt-orange-active">Pricing</p>
            </a>
          </Link>
          <Link href="#">
            <a>
              <p className="hover:text-burnt-orange-active">Products</p>
            </a>
          </Link>
          <Link href="#">
            <a>
              <p className="hover:text-burnt-orange-active">About Us</p>
            </a>
          </Link>
        </div>
        <div className="careers p-4 flex flex-col  justify-around items-center lg:items-baseline text-white">
          <Link href="/">
            <a>
              <p className="hover:text-burnt-orange-active ">Careers</p>
            </a>
          </Link>
          <Link href="#">
            <a>
              <p className="hover:text-burnt-orange-active">Community</p>
            </a>
          </Link>
          <Link href="#">
            <a>
              <p className="hover:text-burnt-orange-active">Privacy Policy</p>
            </a>
          </Link>
        </div>
        <div className="subscription mt-5 lg:0 flex flex-col justify-around items-center">
          <form>
            <input
              type="text"
              placeholder="johnmadden/mail"
              className="rounded-full w-3/4 px-5 py-1 lg:py-2"
            />
            <button
              type="submit"
              className="rounded-full bg-burnt-orange hover:bg-burnt-orange-active text-white text-sm px-5 py-1 lg:py-2 hover:shadow-xl ml-2"
            >
              Go
            </button>
          </form>
          <p className=" text-gray-500 text-sm lg:text-base mt-10">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
