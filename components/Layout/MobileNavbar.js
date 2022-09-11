import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  faNavicon,
  faSearch,
  faAngleLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const MobileNavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className="flex items-center gap-6 py-4 lg:hidden ">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-lg hover:cursor-pointer hover:text-primary"
          onClick={() => {
            setSearchOpen(true);
          }}
        />
        {menuOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="text-lg hover:cursor-pointer hover:text-primary"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faNavicon}
            className="text-lg hover:cursor-pointer hover:text-primary"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        )}
        {searchOpen && (
          <div className="container absolute inset-0 flex items-center gap-4 bg-gray-light">
            <div className="flex grow items-center gap-4">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-lg hover:cursor-pointer hover:text-primary"
                onClick={() => {
                  setSearchOpen(false);
                }}
              />
              <input
                type="text"
                className="w-72 grow bg-transparent px-2 py-1 text-sm focus-visible:outline-primary"
                placeholder="搜尋作品名稱、藝術家名稱"
                id="search"
              />
            </div>
            <FontAwesomeIcon
              icon={faSearch}
              className="text-lg hover:cursor-pointer hover:text-primary"
            />
          </div>
        )}
        {menuOpen && (
          <>
            <div
              className="fixed top-[50px] left-0 right-0
            z-[5] h-screen bg-black bg-opacity-[0.65]"
              onClick={() => {
                setMenuOpen(false);
              }}
            ></div>
            <nav className="absolute top-full left-0 z-20 w-full border-t border-black bg-white">
              <ul className="px-3 pb-3 text-center">
                <li>
                  <Link href="/">
                    <a className="my-3 block py-3 text-lg font-bold hover:text-primary">
                      探索
                    </a>
                  </Link>
                </li>
                <div className="h-[1px] bg-black"></div>
                <li>
                  <Link href="/">
                    <a className="my-3 block py-3 text-lg font-bold hover:text-primary">
                      市值
                    </a>
                  </Link>
                </li>
                <li>
                  <button type="button" className="mb-3 block w-full">
                    <Link href="/">
                      <a className="block border border-black bg-primary py-3 text-lg text-white hover:bg-orange-500">
                        連結錢包
                      </a>
                    </Link>
                  </button>
                </li>
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};
export default MobileNavbar;
