import Image from 'next/image';

import Button from 'components/UI/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

const RankingCard = ({ image, title, author, price, number }) => {
  // small card with no dektop version
  if (number >= 4)
    return (
      <li className="group relative flex w-full bg-white outline outline-1 outline-black hover:cursor-pointer ">
        <div className="top-0 left-0 z-[2] flex basis-14 items-center justify-center bg-white p-2 px-4 py-6 font-paytone text-3.5xl outline outline-1 outline-black">
          {number}
        </div>
        <div className="relative w-[87px] overflow-hidden bg-cover text-0 outline outline-1 outline-black">
          <div className="absolute inset-0 z-[1] hidden place-items-center bg-[#000000b3] text-lg uppercase text-white after:absolute after:right-0 after:bottom-0  after:border-l-16 after:border-b-16 after:border-l-transparent after:border-b-primary group-hover:grid after:group-hover:content-['']">
            More
          </div>
          <Image
            src={image}
            layout="fill"
            alt={title}
            className="object-cover object-top"
          />
        </div>
        <div className="flex grow flex-col">
          <h5 className="ml-px mt-0 grow p-4 text-lg font-bold outline outline-1 outline-black">
            {title}
          </h5>
          <div className="flex justify-between px-4 py-2">
            <h6>{author}</h6>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEthereum} />
              <p>{price}</p>
            </div>
          </div>
        </div>
      </li>
    );

  return (
    <li className="group relative flex w-full cursor-pointer bg-white outline outline-1 outline-black md:block md:cursor-default">
      <div className="top-0 left-0 z-[2] flex basis-14 items-center justify-center bg-white p-2 px-4 py-6 font-paytone text-3.5xl outline outline-1            outline-black md:absolute md:h-12 md:w-12 md:basis-auto">
        {number}
      </div>
      <div className="relative w-[87px] overflow-hidden bg-cover text-0 outline outline-1 outline-black  md:h-[374px] md:w-auto">
        <div className="absolute inset-0 z-[1] hidden place-items-center bg-[#000000b3] text-lg text-white after:absolute after:right-0 after:bottom-0  after:border-l-16 after:border-b-16 after:border-l-transparent after:border-b-primary group-hover:grid after:group-hover:content-[''] md:bg-[#00000080]">
          <div className="uppercase md:hidden">More</div>
        </div>
        <Image
          src={image}
          layout="fill"
          alt={title}
          className="object-cover object-top"
        />
        <div className="absolute right-0 bottom-0 z-[20] mb-[-1px] mr-[-1px] hidden bg-white group-hover:md:block">
          <Button />
        </div>
      </div>
      <div className="grow">
        <h5 className="ml-px mt-0 p-4 text-lg font-bold outline outline-1 outline-black md:ml-0 md:mt-[1px]">
          {title}
        </h5>
        <div className="flex justify-between px-4 py-2">
          <h6>{author}</h6>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEthereum} />
            <p>{price}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default RankingCard;
