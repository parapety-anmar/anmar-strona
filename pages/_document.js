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
            content="Parapety Anmar. Produkcja i sprzedaż parapetów zewnętrznych, parapetów wewnętrznych oraz okien. Zapraszamy do zapoznania się z naszą ofertą."
          />
          <meta
            name="keywords"
            content="anmar, an-mar, ANMAR, AN-MAR, parapety, okna, konglomerat, marmur, zewnetrzne, wewnetrzne, olsztynek, sprzedaż, produkcja, granit, kwarc, mdf, pcv"
          />
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
