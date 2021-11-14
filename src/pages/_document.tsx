import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocuments extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="author" content="Bruno Carvalho Feitosa" />
          <meta name="description" content="Poadcast voltado para programadores e programadoras, tendo conteúdos das stacks mais utilizadas no mercado produzidos diáriamente por profissionais de diversos segmentos" />
          <meta name="keywords" content="Poadcast, conteúdos, stacks, produzidos diáriamente por profissionais" />
          <meta name="theme-color" content="#6f48c9" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}