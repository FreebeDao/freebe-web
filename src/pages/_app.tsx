import { AppProps } from 'next/app';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';
import '../../sentry.client.config';

import '@/styles/index.scss';

import Layout from '@/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = () => {
    const layout = (
      <>
        <Script
          id='ga-id'
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id='ga-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Component {...pageProps} />
      </>
    );

    return <Layout>{layout}</Layout>;
  };
  return <RecoilRoot>{getLayout()}</RecoilRoot>;
}

export default MyApp;
