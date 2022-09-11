import SectionHeader from 'components/Layout/SectionHeader';

import Image01 from 'public/images/art04.jpg';
import Image02 from 'public/images/art05.jpg';
import Image03 from 'public/images/art06.jpg';
import Image04 from 'public/images/art13.jpg';
import Image05 from 'public/images/art07.jpg';
import Image06 from 'public/images/art08.jpg';

import RankingCard from './RankingCard';

const rankingContent = [
  {
    image: Image01,
    title: '散步遇到的女人',
    author: 'Zoe Jiang',
    price: '300',
  },
  {
    image: Image02,
    title: '爆炸頭的母親',
    author: 'Yui',
    price: '300',
  },
  {
    image: Image03,
    title: '夏天的時候',
    author: 'Bug Lin',
    price: '300',
  },
  {
    image: Image04,
    title: '追求者送我的花',
    author: 'Michael',
    price: '300',
  },
  {
    image: Image05,
    title: '今天釣到的魚',
    author: 'Wei JJ',
    price: '300',
  },
  {
    image: Image06,
    title: '人生中的貓咪們',
    author: 'Even Lai',
    price: '300',
  },
];

const Ranking = () => {
  return (
    <section className="container">
      <SectionHeader mainTitle="Ranking" subTitle="市價排行榜" />
      <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-3 md:gap-6 md:py-12">
        {rankingContent.map((content, i) => (
          <RankingCard
            key={content.title}
            image={content.image}
            title={content.title}
            author={content.author}
            price={content.price}
            number={i + 1}
          />
        ))}
      </div>
    </section>
  );
};
export default Ranking;
