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
        url: "https://nizamportfolio-henna.vercel.app/avatar-nizam.png",
        width: 1200,
        height: 630,
        alt: "Nizam Shan Portfolio",
      },
    ],
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
  ],
};

export default defaultSEOConfig;
