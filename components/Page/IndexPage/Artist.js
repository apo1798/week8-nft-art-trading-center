import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import SectionHeader from 'components/Layout/SectionHeader';

import Artist01 from 'public/images/artist01.jpg';
import Artist02 from 'public/images/artist02.jpg';
import Artist03 from 'public/images/artist03.jpg';
import Artist04 from 'public/images/artist04.jpg';

import styles from './Artist.module.scss';

import Button from 'components/UI/Button/Button';

const artistContent = [
  {
    image: Artist01,
    name: 'El Truco',
    description: 'Trick2G中文- 新烏迪爾的感想? 就是麥噹噹的代言人啊。',
    link: '/artist/michael',
  },
  {
    image: Artist02,
    name: 'Anthony Wu',
    description: '喜愛大自然，創作題材常見大山、大水、花草與樹木。',
    link: '/artist/michael',
  },
  {
    image: Artist03,
    name: 'Trick2g',
    description: 'Trick2G中文- 大家掌聲歡迎 新迪爾正式到來!!! ',
    link: '/artist/michael',
  },
  {
    image: Artist04,
    name: 'Udyr Volibear',
    description:
      'Trick2G中文- 一定是看老子的熊太強 想削弱 擺明不想讓老子上分!!!!',
    link: '/artist/michael',
  },
];

const Artist = () => {
  return (
    <section className="container">
      <SectionHeader mainTitle="Artist" subTitle="熱門藝術家" />
      <div className="pt-6 pb-10 md:pb-20 md:pt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            960: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className={styles['slide-container']}
          initialSlide={1}
        >
          {artistContent.map((artist) => (
            <SwiperSlide className="relative" key={artist.name}>
              <div className="relative h-[inherit] w-auto">
                <Image
                  src={artist.image}
                  alt={'Bob'}
                  className="object-cover"
                  layout="fill"
                />
                <div className="artist-description absolute inset-0 flex flex-col p-6">
                  <h6 className="max-w-[100px] grow text-7.5xl text-white drop-shadow-2xl">
                    {artist.name}
                  </h6>
                  <div className="flex items-end justify-end md:justify-between">
                    <p className="hidden bg-[#ffffffd9] p-6 md:block md:max-w-[250px] lg:max-w-[307px]">
                      {artist.description}
                    </p>
                    <div className="bg-white text-end">
                      <Button className="bg-white" href={artist.link} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="my-4 truncate bg-[#fff] p-6 md:hidden">
                {artist.description}
              </p>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide className="w-[306px]">
            <Image src={Artist02} alt={'Bob'} />
          </SwiperSlide>
          <SwiperSlide className="w-[306px]">
            <Image src={Artist03} alt={'Bob'} />
          </SwiperSlide>
          <SwiperSlide className="w-[306px]">
            <Image src={Artist03} alt={'Bob'} />
          </SwiperSlide>
          <SwiperSlide className="w-[306px]">
            <Image src={Artist02} alt={'Bob'} />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};
export default Artist;
