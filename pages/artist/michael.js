import MichaelImage from 'public/images/artist01.jpg';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const content = {
  image: MichaelImage,
  name: 'Michael',
  code: '0x3ya666…88ef',
  description:
    'Michael自小在山林長大，能夠與花草樹木大自然進行靈體溝通，創作題材常見大山、大水、花草與樹木，從日常生活出發，擁有個⼈獨樹⼀格的創作風格，作品觸及靈魂深處、探索未知宇宙，透過與大自然的溝通，探討著存在的本質。​',
  sellingNumber: 168,
  floorPrice: { price: 0.6, unit: 'ETH' },
  saleRecentWeek: { price: 8.8, unit: 'ETH' },
  saleRecentMonth: { price: 23.1, unit: 'ETH' },
};

const michael = () => {
  return (
    <>
      <section>
        <div className="container mt-10 mb-20 flex flex-col gap-6 md:flex-row">
          <div className="border border-black md:flex md:basis-[996px]">
            <div className="relative h-[213px] md:h-full md:w-5/12">
              <Image
                src={content.image}
                alt={content.name}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="bg-white px-[14px] py-6 md:w-7/12 md:p-6">
              <div className="mb-2 flex items-center justify-between md:mb-4">
                <h1 className="text-5xl">{content.name}</h1>
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://discord.com"
                  >
                    <FontAwesomeIcon
                      icon={faDiscord}
                      className="hover:cursor-pointer hover:text-primary"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://facebook.com"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="hover:cursor-pointer hover:text-primary"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://google.com"
                  >
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="hover:cursor-pointer hover:text-primary"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="hover:cursor-pointer hover:text-primary"
                    />
                  </a>
                </div>
              </div>
              <p className="mb-6 md:mb-4">{content.code}</p>
              <p className="font-noto-sans-tc">{content.description}</p>
            </div>
          </div>
          <ul className="border border-black bg-white font-noto-sans-tc md:basis-[306px]">
            <li className="flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              販售中
              <span className="font-squada text-3.5xl leading-[34px]">
                {content.sellingNumber}
              </span>
            </li>
            <li className="flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              地板價格
              <div>
                <span className="mr-1 font-squada text-3.5xl leading-[34px]">
                  {content.floorPrice.price}
                </span>
                <span className="font-squada text-2xl">
                  {content.floorPrice.unit}
                </span>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              7 日成交
              <div>
                <span className="mr-1 font-squada text-3.5xl leading-[34px]">
                  {content.saleRecentWeek.price}
                </span>
                <span className="font-squada text-2xl">
                  {content.saleRecentWeek.unit}
                </span>
              </div>
            </li>
            <li className="mb-[-1px] flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              30 日成交
              <div>
                <span className="mr-1 font-squada text-3.5xl leading-[34px]">
                  {content.saleRecentMonth.price}
                </span>
                <span className="font-squada text-2xl">
                  {content.saleRecentMonth.unit}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default michael;
