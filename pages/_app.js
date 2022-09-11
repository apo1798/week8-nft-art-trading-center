import '../styles/globals.css';

// Solving the flashing super big icon problem in next.js
// https://fontawesome.com/docs/web/use-with/react/use-with
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from 'components/Layout/Layout';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
