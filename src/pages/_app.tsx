import "../../public/scss/style.scss";
import type { AppProps } from "next/app";
import Layout from "./Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import FirebaseAuthProvider from "../components/FirebaseAuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FirebaseAuthProvider allowPaths={null}>
          <SnackbarProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </FirebaseAuthProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
