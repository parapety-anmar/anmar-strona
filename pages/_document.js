import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            name="description"
            content="Produkcja i sprzedaż parapetów zewnętrznych,parapetów wewnętrznych oraz okien. Zapraszamy do zapoznania się z naszą ofertą."
          />
          <meta
            name="keywords"
            content="Parapety, okna, konglomerat, marmur, Parapety zewnetrzne, Parapety wewnetrzne, Olsztynek, Sprzedaż, Produkcja, granit, kwarc, MDF, PCV, ANMAR, AN-MAR"
          />
          <title>An-mar Parapety</title>
          <link rel="icon" href="/favicon.ico?v=3" />
        </Head>
        <body id="home">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
