import styles from '../styles/App.module.css'
import { Layout } from '../components';
import Head from "next/head";
import '../styles/globals.css'

export default function App({Component, pageProps: {...pageProps }}) {

  return (


      <>
          <Head>
              <meta name='description' content='ecommerce store'/>
              <meta name='author' content='Peachpuff'/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <Layout>
              <div className={styles.app}>
                  <Component {...pageProps}/>
              </div>

          </Layout>
      </>


  );
}

