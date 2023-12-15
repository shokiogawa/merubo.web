import "../../public/scss/style.scss";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FirebaseAuthProvider from "../components/FirebaseAuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FirebaseAuthProvider allowPaths={null}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FirebaseAuthProvider>
    </>
  );
}
export default MyApp;
