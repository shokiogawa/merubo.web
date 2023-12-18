import { NextPage } from "next";
import Head from "next/head";
const HeadSeo: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{"Merubo | 寄せ書き作成 & 管理アプリ"}</title>
        <meta
          name="description"
          content={
            "寄せ書きをアプリ上で作成し、オンライン上でメッセージを集め、お世話になった親戚、友達、同僚に送ることができるアプリです。また、受け取った相手は、寄せ書きをアプリ上で管理することができます。"
          }
        />
        <meta
          property="og:description"
          content={
            "寄せ書きをアプリ上で作成し、オンライン上でメッセージを集め、お世話になった親戚、友達、同僚に送ることができるアプリです。また、受け取った相手は、寄せ書きをアプリ上で管理することができます。"
          }
        ></meta>
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={"Merubo ~寄せ書き作成 & 管理 アプリ~"}
        />
        <meta property="og:site_name" content="Merubo(メルボ)" />
        <meta
          property="og:image"
          content={
            "https://merubo-web.vercel.app/_next/image?url=%2Fimage%2Fmerubo_icon_figure.png&w=256&q=75"
          }
        />
        <meta property="og:url" content={"https://merubo-web.vercel.app/"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@merubo_app" />
        <meta
          name="twitter:title"
          content="寄せ書きをアプリ上で作成し、オンライン上でメッセージを集め、お世話になった親戚、友達、同僚に送ることができるアプリです。また、受け取った相手は、寄せ書きをアプリ上で管理することができます。"
        />
        <meta
          name="twitter:image"
          content="https://merubo-web.vercel.app/_next/image?url=%2Fimage%2Fmerubo_icon_figure.png&w=256&q=75"
        />
      </Head>
    </>
  );
};

export default HeadSeo;
