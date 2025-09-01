const defaultSEOConfig = {
  titleTemplate: "%s | Nizam Shan — Software Engineer",
  defaultTitle: "Nizam Shan — Software Engineer",
  description:
    "Senior Software Engineer portfolio showcasing React, Next.js, Spring Boot, data visualizations, and scalable systems.",
  canonical: "https://nizamportfolio-henna.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nizamportfolio-henna.vercel.app/",
    site_name: "Nizam Shan Portfolio",
    images: [
      {
        url: "https://nizamportfolio-henna.vercel.app/avatar/avatar3.jpeg",
        width: 512,
        height: 512,
        alt: "Nizam Shan Portfolio",
      },
    ],
  },
  icons: {
    icon: "https://nizamportfolio-henna.vercel.app/favicon/favicon.svg",
    apple:
      "https://nizamportfolio-henna.vercel.app/favicon/apple-touch-icon.png",
  },
  twitter: {
    handle: "@nizamshan",
    site: "@nizamshan",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Nizam, Nizam Shan, Nizam Shan KN, Software Engineer, Full-Stack Developer, React, Next.js, Spring Boot, Portfolio",
    },
    {
      name: "google-site-verification",
      content: "Z5-09igrGm-w9AuFBEvLmdQbf1zurrBk2ObExDOTruk",
    },
  ],
};

export default defaultSEOConfig;
