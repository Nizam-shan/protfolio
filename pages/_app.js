import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from "../next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}
