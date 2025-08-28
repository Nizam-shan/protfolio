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
    "@type": "Person",
    name: "Nizam Shan K N",
    url: "/",
    email: "mailto:nizamshan27@gmail.com",
    telephone: "+91 9481267420",
    sameAs: [
      "https://github.com/Nizam-shan",
      "https://www.linkedin.com/in/nizamshan27/",
    ],
    jobTitle: "Senior Software Engineer",
  };

  return (
    <>
      <Head>
        <title>Nizam Shan K N — Software Engineer</title>
        <meta
          name="description"
          content="Portfolio of Nizam Shan — full-stack developer: React, Next.js, Spring Boot, Plotly, InfluxDB, Grafana."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="min-h-screen bg-dark-950 text-slate-100">
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
