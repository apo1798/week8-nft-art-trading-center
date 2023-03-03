import { useEffect } from 'react';

import '../styles/globals.css';

// Solving the flashing super big icon problem in next.js
// https://fontawesome.com/docs/web/use-with/react/use-with
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from 'components/Layout/Layout';

import Script from 'next/script';

// importing aos
import Aos from 'aos';
import 'aos/dist/aos.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-sine',
      once: true,
      offset: 50,
      duration: 700,
    });
  }, []);

  return (
    <>
      <Script
        data-domain="plausible-demo-test.vercel.app"
        src="http://stage.42.pansci.asia/js/script.js"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
