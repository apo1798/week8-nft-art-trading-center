import Image from 'next/image';
// import Image from 'next/future/image'
import Button from 'components/UI/Button/Button';

import Image01 from 'public/images/art01.jpg';
import Image02 from 'public/images/art02.jpg';
import Image03 from 'public/images/art21.jpg';

const Feature = () => {
  return (
    <section className="mx-auto pt-0 pb-20 md:container md:pt-10">
      <div
        data-aos="fade-up"
        className="flex flex-col bg-white outline outline-1 outline-black lg:flex-row"
      >
        <h1 className="hidden items-center bg-black p-6 text-xl text-white [writing-mode:vertical-lr] lg:flex">
          <span className="pb-4 text-5xl">Recommend</span>
          推薦系列
        </h1>
        <div className="relative shrink-0 grow text-0 lg:basis-[756px]">
          <Image
            src={Image01}
            alt="瞳孔:流動的脈絡"
            width={756}
            height={500}
            layout="responsive"
            priority={true}
          />
        </div>
        <div className="flex flex-col px-3 py-8 lg:px-6 lg:pt-20 lg:pb-6">
          <h6 className="pb-2">Kemus Wu</h6>
          <h5 className="pb-6 text-2xl font-bold md:text-5xl">
            瞳孔:流動的脈絡
          </h5>
          <p className="mb-6 lg:mb-0">
            眼睛，總是吸引著我們的注意力，看、被看，也許眼睛裡有著從另一個世界看我們的世界。
          </p>
          <div className="flex grow items-end justify-end">
            <Button />
          </div>
        </div>
      </div>

      <div className="bg-white md:flex" data-aos="fade-up">
        <div className="mt-[1px] mr-[1px] flex w-full grow flex-col outline outline-1 outline-black sm:flex-row-reverse md:w-1/2">
          <div className="relative min-h-[372px] shrink-0 grow text-0 md:min-h-[340px] lg:basis-[329px]">
            <Image
              src="/images/art02.jpg"
              alt="海洋波度"
              className="object-cover"
              layout="fill"
            />
          </div>
          <div className="flex w-full flex-col px-3 py-8 sm:w-1/2 md:px-6 md:pt-12 md:pb-6">
            <h6 className="pb-2">Joanne</h6>
            <h5 className="pb-6 text-2xl font-bold  md:text-3.5xl">海洋波度</h5>
            <p className="mb-6 md:mb-0">
              海洋的奧秘向我們揭示了深不可測的一面，它的深度——反映了我們的恐懼、同時也吸引著我們。
            </p>
            <div className="flex grow items-end justify-end">
              <Button />
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-[1px] flex w-full grow flex-col outline outline-1 outline-black sm:flex-row md:w-1/2 md:flex-row-reverse"
        >
          <div className="relative min-h-[372px] shrink-0 grow text-0 md:min-h-[340px] lg:basis-[329px]">
            <Image
              src={Image03}
              alt="我家窗前的鳥"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col px-3 py-8 sm:w-1/2 md:px-6 md:pt-12 md:pb-6">
            <h6 className="pb-2">Michael</h6>
            <h5 className="pb-6 text-2xl font-bold md:text-3.5xl">
              我家窗前的鳥
            </h5>
            <p className="mb-6 md:mb-0">
              家門前每天都有不同的小鳥，大多數的小鳥都有特殊能力，特殊能力是什麼我就不說了，希望大家能從作品感受到小鳥的快樂。
            </p>
            <div className="flex grow items-end justify-end">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;
