import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Rest Countries API</title>
        <meta property="og:title" content="Rest Countries API" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Select a country to view information."
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/rest-countries-api_Mnr3UDYWm.webp?updatedAt=1679460276991"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
