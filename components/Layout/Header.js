import Image from 'next/image';
// import Image from "next/future/image";
import Logo from '/public/images/logo.svg';
// import Navbar from "components/Layout/Header";
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className="fixed  z-50  w-screen max-w-full md:static">
        <header className="relative border-b border-black bg-gray-light">
          <div className="container flex items-center justify-between lg:items-stretch">
            <div className="relative flex h-[18px] w-[85px] shrink-0 items-center lg:h-auto lg:w-auto">
              <Link href="/">
                <a href="" className="text-0">
                  <Image
                    src={Logo}
                    width={190}
                    height={40}
                    alt=" NFT交易平台Logo"
                    className="py-8"
                  />
                </a>
              </Link>
            </div>
            <Navbar />
            <MobileNavbar />
          </div>
        </header>
      </div>
      {/* To spare space for header using the same component 
        // changing 1) z-index, 2) display, 3) position
      */}
      <div className="static -z-50  w-screen max-w-full md:hidden">
        <header className="relative border-b border-black bg-gray-light">
          <div className="container flex items-center justify-between lg:items-stretch">
            <div className="relative flex h-[18px] w-[85px] shrink-0 items-center lg:h-auto lg:w-auto">
              <Link href="/artist/michael">
                <a href="" className="text-0">
                  <Image
                    src={Logo}
                    width={190}
                    height={40}
                    alt=" NFT交易平台Logo"
                    className="py-8"
                  />
                </a>
              </Link>
            </div>
            <Navbar />
            <MobileNavbar />
          </div>
        </header>
      </div>
    </>
  );
};
export default Header;
