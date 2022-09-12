/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import SectionHeader from 'components/Layout/SectionHeader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import Button from 'components/UI/Button/Button';

import Art01 from 'public/images/art09.jpg';
import Art02 from 'public/images/art12.jpg';
import Art03 from 'public/images/art10.jpg';
import Art04 from 'public/images/art03.jpg';
import Art05 from 'public/images/art02.jpg';
import Art06 from 'public/images/art04.jpg';
import Art07 from 'public/images/art11.jpg';
import Art08 from 'public/images/art27.jpg';

const artworkContent = [
  {
    image: Art01,
    title: '區塊戀-他的私生活',
    description: '彩色碎紙拼貼而成的作品',
    price: '300',
    height: '254',
  },
  {
    image: Art02,
    title: '不哭不哭眼淚是珍珠',
    description: 'Eslint跟Prettier一直衝突，哭啊。',
    price: '300',
    height: '174',
  },
  {
    image: Art03,
    title: '夏娃的醜聞',
    description: '唯一想擁有的人，唯一不可以擁有的。',
    price: '300',
    height: '327',
  },
  {
    image: Art04,
    title: '十分鐘就到',
    description: '（在床上）你們到了？我在北車了。再十分鐘就到了（？。',
    price: '300',
    height: '254',
  },
  {
    image: Art05,
    title: '藍色啤酒海',
    description: '但是我跟喜歡喝水果酒嘻嘻。',
    price: '300',
    height: '254',
  },
  {
    image: Art06,
    title: '我這樣有美嗎',
    description: '顏色搭配很像睡衣。',
    price: '300',
    height: '395',
  },
  {
    image: Art07,
    title: '沒有人愛我',
    description: '出去玩開心一下啦。',
    price: '300',
    height: '169',
  },
  {
    image: Art08,
    title: '我真的受傷了',
    description: '可愛的鳥鳥。',
    price: '300',
    height: '254',
  },
];

const Artwork = ({ noSectionHeader = false }) => {
  return (
    <section className="container">
      {!noSectionHeader && (
        <SectionHeader mainTitle="Artwork" subTitle="最新藝術品" />
      )}
      <div className=" columns-2 gap-x-4 pt-6 pb-12 md:columns-3  md:gap-x-6 md:pb-20 md:pt-12 lg:columns-4">
        {artworkContent.map((artwork, i) => (
          // eslint-disable-next-line react/no-unknown-property
          <div
            key={artwork.title}
            className={`cursor-pointer break-inside-avoid md:mb-12 md:cursor-default ${
              i + 1 >= 6 ? 'hidden sm:block' : ''
            }`}
          >
            <div className="group relative bg-white p-2 md:p-4">
              <div
                className="relative h-full md:p-4"
                style={{ height: `${artwork.height}px` }}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute inset-0 hidden flex-col p-4 text-white group-hover:bg-[#0009]  md:group-hover:grid">
                  <div className="flex flex-col border border-white p-4">
                    <p>{artwork.description}</p>
                    <p className="flex h-auto  items-center gap-2">
                      <FontAwesomeIcon icon={faEthereum} />
                      {artwork.price}
                    </p>
                    <div className="flex grow items-end justify-end text-end text-black">
                      <div className="bg-white">
                        <Button />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="border-black pt-2 pb-6 text-lg md:border-b md:py-4 md:font-bold">
              {artwork.title}
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Artwork;
