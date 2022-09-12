/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { titleTemplate } from 'components/helpers/setttings';
import Head from 'next/head';

import Image from 'next/image';
import Button from 'components/UI/Button/Button';
import MichaelImage from 'public/images/artist01.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Artwork from 'components/Page/IndexPage/Artwork';

import Flower01 from 'public/images/art28.jpg';
import Flower02 from 'public/images/art30.jpg';
import Flower03 from 'public/images/art14.jpg';
import Flower04 from 'public/images/art29.jpg';

import Bird01 from 'public/images/art27.jpg';
import Bird02 from 'public/images/art20.jpg';
import Bird03 from 'public/images/art26.jpg';
import Bird04 from 'public/images/art22.jpg';

const content = {
  image: MichaelImage,
  name: 'Michael',
  code: '0x3ya666…88ef',
  description:
    'Michael自小在山林長大，能夠與花草樹木大自然進行靈體溝通，創作題材常見大山、大水、花草與樹木，從日常生活出發，擁有個⼈獨樹⼀格的創作風格，作品觸及靈魂深處、探索未知宇宙，透過與大自然的溝通，探討著存在的本質。',
  sellingNumber: 168,
  floorPrice: { price: 0.6, unit: 'ETH' },
  saleRecentWeek: { price: 8.8, unit: 'ETH' },
  saleRecentMonth: { price: 23.1, unit: 'ETH' },
};

const artWorksContent = [
  {
    title: '追求者送我的花',
    description:
      '我又沒有特別喜歡花，但每次的展演都有很多粉絲送花給我，但是花擺在那也不知道要幹嘛，只好畫起來看有沒有人要買，讓他們成為我創作的一部分。',
    images: [
      { src: Flower01, title: 'flower' },
      { src: Flower02, title: 'flower' },
      { src: Flower03, title: 'flower' },
      { src: Flower04, title: 'flower' },
    ],
  },
  {
    title: '我家窗前的鳥',
    description:
      '家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。',
    images: [
      { src: Bird01, title: 'bird' },
      { src: Bird02, title: 'bird' },
      { src: Bird03, title: 'bird' },
      { src: Bird04, title: 'bird' },
    ],
  },
];

const AosAnimation = [
  'fade',
  'fade-up',
  'fade-down',
  'fade-left',
  'fade-right',
  'fade-up-right',
  'fade-up-left',
  'fade-down-right',
  'fade-down-left',
];

const michael = () => {
  const [section, setSection] = useState('artWorks');

  return (
    <>
      <Head>
        <title>{titleTemplate('藝術家 Michael ')}</title>
      </Head>
      <section>
        <div className="container mb-10 mt-6 flex flex-col gap-6 md:mt-10 md:mb-20 md:flex-row">
          <div
            data-aos="fade-up"
            className="border border-black bg-white md:flex md:basis-[996px]"
          >
            <div className="relative h-[213px] md:h-full md:w-5/12">
              <Image
                src={content.image}
                alt={content.name}
                layout="fill"
                className="object-cover"
                priority={true}
              />
            </div>
            <div className="px-[14px] py-6 md:w-7/12 md:p-6">
              <div className="mb-2 flex items-center justify-between md:mb-4">
                <h1 className="text-[32px] leading-none md:text-5xl">
                  {content.name}
                </h1>
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
              <p className="mb-6 md:mb-4">{content?.code}</p>
              <p className="font-noto-sans-tc">{content?.description}</p>
            </div>
          </div>
          <ul
            data-aos="fade-down"
            className="border border-black bg-white font-noto-sans-tc md:basis-[306px]"
          >
            <li className="flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              販售中
              <span className="font-squada text-3.5xl leading-[34px]">
                {content?.sellingNumber}
              </span>
            </li>
            <li className="flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              地板價格
              <div>
                <span className="mr-1 font-squada text-3.5xl leading-[34px]">
                  {content?.floorPrice?.price}
                </span>
                <span className="font-squada text-2xl">
                  {content?.floorPrice?.unit}
                </span>
              </div>
            </li>
            <li className="flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              7 日成交
              <div>
                <span className="mr-1 font-squada text-3.5xl leading-[34px]">
                  {content?.saleRecentWeek?.price}
                </span>
                <span className="font-squada text-2xl">
                  {content?.saleRecentWeek?.unit}
                </span>
              </div>
            </li>
            <li className="mb-[-1px] flex items-center justify-between border-b border-black px-6 py-4 font-bold">
              30 日成交
              <div>
                <span className="mr-1 font-squada text-3.5xl leading-[34px]">
                  {content?.saleRecentMonth?.price}
                </span>
                <span className="font-squada text-2xl">
                  {content?.saleRecentMonth?.unit}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mb-10 md:mb-20">
        <nav className="border-b border-black">
          <ul className="flex">
            <li>
              <h2
                onClick={() => {
                  setSection('artWorks');
                }}
                className={`mb-[-1px] cursor-pointer py-4 px-4 text-3.5xl sm:px-6 md:px-12 lg:text-5xl ${
                  section === 'artWorks'
                    ? 'border border-b border-black border-b-gray-light text-black'
                    : 'border border-transparent text-gray-dark'
                }`}
              >
                Art Works
                <span className="ml-2 hidden text-xl sm:inline">系列作品</span>
              </h2>
            </li>
            <li>
              <h2
                onClick={() => {
                  setSection('collection');
                }}
                className={`mb-[-1px] cursor-pointer py-4 px-4 text-3.5xl sm:px-6 md:px-12 lg:text-5xl ${
                  section === 'collection'
                    ? 'border border-b border-black border-b-gray-light text-black'
                    : 'border border-transparent text-gray-dark'
                }`}
              >
                Collection
                <span className="ml-2 hidden text-xl sm:inline">收藏品</span>
              </h2>
            </li>
          </ul>
        </nav>

        {section === 'artWorks' && (
          <>
            {artWorksContent.map((work) => (
              // eslint-disable-next-line react/no-unknown-property
              <div key={work.title} className="relative mt-6 mb-4 md:my-10">
                {/* White background and top triangles */}
                <div className="bh-white absolute top-0 right-0 left-0 bottom-0 -z-10 border border-black bg-white md:bottom-[48px]">
                  <div className="absolute top-0 left-0 border-t-24 border-r-24 border-t-black border-r-transparent"></div>
                  <div className="absolute top-0 right-0 border-t-24 border-l-24 border-t-black border-l-transparent"></div>
                </div>
                <div className="px-4 pt-8 md:px-10 md:pt-12 lg:px-[110px]">
                  <h3 data-aos="fade-up" className="mb-4 text-2xl font-bold">
                    {work.title}
                  </h3>
                  <div
                    data-aos="fade-up"
                    className="mb-6 flex items-end justify-between gap-[88px] md:mb-12"
                  >
                    <p>{work.description}</p>
                    <Button className="hidden md:block" />
                  </div>
                  <div className="mb-4 flex gap-2 md:mb-0">
                    {work.images.map((image, i) => (
                      <div
                        data-aos={AosAnimation[i]}
                        key={i}
                        className={` h-[313px] grow bg-black p-2 md:h-[270px] ${
                          i !== 0 ? 'hidden md:block' : ''
                        }`}
                      >
                        <div className="relative h-full p-2 ">
                          <Image
                            src={image.src}
                            alt={image.title}
                            layout="fill"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pb-8 text-center md:hidden">
                    <Button />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {section === 'collection' && (
          <>
            <Artwork noSectionHeader={true} />
          </>
        )}
      </section>
    </>
  );
};
export default michael;
