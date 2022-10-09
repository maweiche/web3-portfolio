import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />


      <title>Matt Weichel | Portfolio</title>
      <meta name="title" content="*websitehere*" />
      <meta
        name="description"
        content="Portfolio designed to showcase my work as a Web2/3 Developer, Designer, and Artist."
      />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="**" />
      <meta
        property="og:description"
        content="Portfolio designed to showcase my work as a Web2/3 Developer, Designer, and Artist."
      />
      <meta
        property="og:image"
        content="**link2imagehere**"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="**" />
      <meta
        property="twitter:description"
        content="Portfolio designed to showcase my work as a Web2/3 Developer, Designer, and Artist."
      />
      <meta
        property="twitter:image"
        content="**link2imagehere**"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
      />
    </Head>
  );
}
