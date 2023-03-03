import Head from 'next/head';
import { titleTemplate } from 'components/helpers/setttings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Feature from 'components/Page/IndexPage/Feature';
import Ranking from 'components/Page/IndexPage/Ranking';
import Artist from 'components/Page/IndexPage/Artist';
import Artwork from 'components/Page/IndexPage/Artwork';
import JoinUs from 'components/Page/IndexPage/JoinUs';

export default function index() {
  return (
    <>
      <Head>
        <title>{titleTemplate('首頁')}</title>
      </Head>
      <main>
        <Feature />
        <Ranking />
        <Artist />
        <Artwork />
        <JoinUs />
      </main>
    </>
  );
}
