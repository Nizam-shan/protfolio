import "../styles/globals.css";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Nizam Shan — Software Engineer"
        defaultTitle="Nizam Shan — Software Engineer"
        description="Senior Software Engineer portfolio showcasing React, Next.js, Spring Boot, data visualizations, and scalable systems."
        openGraph={{
          type: "website",
          locale: "en_IN",
          url: "https://nizamportfolio-henna.vercel.app/",
          site_name: "Nizam Shan Portfolio",
        }}
        twitter={{
          handle: "@nizamshan",
          site: "@nizamshan",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          { rel: "icon", href: "/favicon.ico" },
          {
            rel: "canonical",
            href: "https://nizamportfolio-henna.vercel.app/",
          },
        ]}
        additionalMetaTags={[
          { name: "theme-color", content: "#0ea5e9" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
