import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <ul className="hidden h-full items-stretch lg:flex">
        <li className="border-l border-black px-12 py-10">
          <div className="items-cetner flex">
            <input
              type="text"
              className="w-72 bg-transparent px-2 py-1 focus-visible:outline-primary"
              placeholder="搜尋作品名稱、藝術家名稱"
              id="search"
            />
            <label htmlFor="search" className="ml-6 align-middle">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-2xl hover:cursor-pointer hover:text-primary"
              />
            </label>
          </div>
        </li>
        <li className="flex items-center border-l border-black px-12 py-10">
           <Link href="/artist/michael">
            <a className="font-bold hover:text-primary">探索</a>
          </Link>
        </li>
        <li className="flex items-center border-l border-black px-12 py-10">
           <Link href="/artist/michael">
            <a className="font-bold hover:text-primary">市值</a>
          </Link>
        </li>
        <li className="flex items-center border-l border-black px-12 py-10">
           <Link href="/artist/michael">
            <a href="">
              <FontAwesomeIcon
                icon={faWallet}
                className="text-2xl font-bold hover:cursor-pointer hover:text-primary"
              />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
