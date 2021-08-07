import Head from "next/head";

const HeadMeta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta property="og:url" content={url} /> */}
      {/* <meta property="og:image" content={"/favicon.png"} /> */}
      <meta property="og:site_name" content={title} />
      {/* <meta name="keywords" content={keyword} /> */}
      <meta name="description" content={description} />
      <link rel="apple-touch-icon" href={"/favicon.png"} />
    </Head>
  );
};
export default HeadMeta;
