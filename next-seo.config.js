const defaultSEOConfig = {
  titleTemplate: "%s | Nizam Shan",
  defaultTitle: "Nizam Shan | Full-Stack Software Engineer Portfolio",
  description:
    "Official portfolio of Nizam Shan, Full-Stack Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, and scalable enterprise systems. Based in Bangalore, India.",
  canonical: "https://nizamportfolio-henna.vercel.app/",
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: "https://nizamportfolio-henna.vercel.app/",
    siteName: "Nizam Shan Portfolio",
    title: "Nizam Shan | Full-Stack Software Engineer",
    description:
      "Explore the software engineering portfolio, enterprise projects, and technical skills of Nizam Shan.",
    profile: {
      firstName: "Nizam",
      lastName: "Shan",
      username: "Nizam-shan",
      gender: "male",
    },
    images: [
      {
        url: "https://nizamportfolio-henna.vercel.app/avatar/avatar3.jpeg",
        width: 1200,
        height: 630,
        alt: "Nizam Shan - Full-Stack Software Engineer",
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
      name: "author",
      content: "Nizam Shan",
    },
    {
      name: "keywords",
      content:
        "Nizam Shan, Nizamshan, Nizam Shan KN, Nizam-shan, Nizam Shan portfolio, Nizam Shan software engineer, Nizam Shan developer, Nizam Shan Bangalore, full stack developer Nizam Shan, React, Next.js, Spring Boot, Software Engineer India",
    },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
    {
      name: "google-site-verification",
      content: "Z5-09igrGm-w9AuFBEvLmdQbf1zurrBk2ObExDOTruk",
    },
  ],
};

export default defaultSEOConfig;
