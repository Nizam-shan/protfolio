import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nizamportfolio-henna.vercel.app/#person",
        name: "Nizam Shan",
        alternateName: ["Nizamshan", "Nizam Shan KN", "Nizam-shan"],
        url: "https://nizamportfolio-henna.vercel.app/",
        image: "https://nizamportfolio-henna.vercel.app/avatar/avatar3.jpeg",
        email: "mailto:nizamshan27@gmail.com",
        telephone: "+91 9481267420",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangalore",
          addressRegion: "Karnataka",
          addressCountry: "India",
        },
        sameAs: [
          "https://github.com/Nizam-shan",
          "https://www.linkedin.com/in/nizamshan27/",
        ],
        jobTitle: "Senior Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Arnest Solutions",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "Spring Boot",
          "Java",
          "JavaScript",
          "TypeScript",
          "Full Stack Web Development",
          "Microservices",
          "Docker",
          "AWS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://nizamportfolio-henna.vercel.app/#website",
        url: "https://nizamportfolio-henna.vercel.app/",
        name: "Nizam Shan Portfolio",
        alternateName: "Nizam Shan",
        publisher: {
          "@id": "https://nizamportfolio-henna.vercel.app/#person",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://nizamportfolio-henna.vercel.app/#webpage",
        url: "https://nizamportfolio-henna.vercel.app/",
        name: "Nizam Shan — Full-Stack Software Engineer Portfolio",
        mainEntity: {
          "@id": "https://nizamportfolio-henna.vercel.app/#person",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Nizam Shan | Full-Stack Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Nizam Shan — Full-Stack Software Engineer specializing in React, Next.js, TypeScript, Spring Boot, and scalable cloud applications. Based in Bangalore, India."
        />
        <meta name="author" content="Nizam Shan" />
        <meta
          name="keywords"
          content="Nizam Shan, Nizamshan, Nizam Shan KN, Nizam-shan, Nizam Shan portfolio, Nizam Shan software engineer, Nizam Shan developer, Nizam Shan Bangalore, full stack developer Nizam Shan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://nizamportfolio-henna.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative selection:bg-indigo-500/20">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
