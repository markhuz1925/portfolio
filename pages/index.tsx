import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-slate-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Marko Luther Antiola&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <div className="fixed bottom-10 right-10">
        <Link href="#hero">
          <button className="heroButton">Go to top</button>
        </Link>
      </div>
    </div>
  );
}
