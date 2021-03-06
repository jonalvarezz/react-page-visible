import Document, { Head, Main, NextScript } from "next/document";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css"
          />
        </Head>
        <body className="container">
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    );
  }
}
