This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 【要件定義】

## 【要求】

- 概要
  ユーザーがプロダクトに対する意見を投稿する機能が欲しい。
  なお、管理者は、LINE などのチャットで確認できるようにすること。(メールではない)

- 目的
  お客様の意見を聞き、プロダクトの改善を行うため。

- 背景
  現在、お客様の意見を反映する機能がない。
  そのため、ユーザーがどう思っているのか確認できない。
  ユーザーの意見を聞くためん、お問合せフォーム的なものを用意して、ユーザーの意見をプロダクトに活かしたい。

# index.tsx

```
「サービスの流れ」
⚪︎ 寄せ書き作成者
1. アプリをインストール
2. 寄せ書きを作成
3. メッセージを集める
4. 寄せ書きを送る(URL)

⚪︎ 寄せ書き受け取る側
1. 寄せ書きURLを受け取る
2. コードを入力し寄せ書きを確認(WEB)
3. アプリをインストールし寄せ書きを管理 (任意)

「できること」（箇条書き＋具体）
- 寄せ書きをアプリで作成し、オンラインでメッセージを集めることができる
- メッセージに画像を添付できる
- 複数のテンプレートからおしゃれな寄せ書きを作成できる
- 受け取ったユーザーはアプリで寄せ書きを管理できる


「FAQ（5〜10問）」
- Q メッセージに画像は添付できるか？
- A はい、できます。1人1画像まで添付可能です

- Q どのように寄せ書きを渡すのか？
- A アプリからURLを発行できます。そのURLをLINE、メールなどで送りたい相手に共有すると寄せ書きを渡すことができます。受け取った側は受け取りコードを同時に受け取り寄せ書きをweb上で受け取ることが可能です。

- Q 動画は添付可能か？
- A 現在動画の添付は不可ですが今後開発を行う可能性はあります。

- Q メッセージはいくつまで登録可能か？
- A 現在制限はしていませんが、100メッセージまでに収めてもらえればと思います


```
