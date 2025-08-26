import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?display=swap&family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;500"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
