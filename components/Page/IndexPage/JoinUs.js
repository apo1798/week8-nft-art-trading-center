import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWallet,
  faPenRuler,
  faIcons,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

const joinUsContent = [
  {
    icon: faWallet,
    title: '設置你的錢包',
    content: '設置好您選擇的錢包後 點擊右上角的錢包圖標進行連接',
  },
  {
    icon: faPenRuler,
    title: '創建您的主頁',
    content: '註冊成為會員，編輯您的資料 讓大家了解你',
  },
  {
    icon: faIcons,
    title: '添加你的 NFT',
    content: '上傳你的作品 添加標題和描述',
  },
  {
    icon: faTags,
    title: '列出它們出售',
    content: '選擇出售NFT的方式 並設定價格，等待有緣人',
  },
];

const JoinUs = () => {
  return (
    <section>
      <div className="container mb-10">
        <h4 className="mb-4 text-center text-3.5xl md:text-5xl">Join Us</h4>
        <p className="text-center text-xl font-bold">創建並出售你的藝術品</p>
      </div>
      <div className="border-t-4 border-black pt-1">
        <div className="border-t border-black">
          <div className="grid-col-1 container grid gap-y-12 gap-x-6 py-12 font-noto-sans-tc sm:grid-cols-2 md:py-20 lg:grid-cols-4">
            {joinUsContent.map((point) => (
              // eslint-disable-next-line react/no-unknown-property
              <div key={point.title} className="text-center">
                <FontAwesomeIcon
                  icon={point.icon}
                  className="mb-4 text-[40px] text-primary"
                />
                <h4 className="mb-6 text-lg font-bold">{point.title}</h4>
                <p className="whitespace-pre-wrap">
                  {point.content.replace(' ', '\n')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default JoinUs;
