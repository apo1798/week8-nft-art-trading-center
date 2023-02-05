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
        <p className='' suppressHydrationWarning>{new Date().toLocaleDateString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T00:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T01:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T02:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T03:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T04:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T05:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T06:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T07:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T08:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T09:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T10:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning>{new Date("2022-01-12T11:00:00.000Z").toLocaleString()}</p>
        <p className='' suppressHydrationWarning >{new Date("2022-01-12T12:00:00.000Z").toLocaleString()}</p>

      </main>
    </>
  );
}
