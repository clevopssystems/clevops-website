import { Header } from "./components/header";
import { HomeHero } from "./components/home-hero";
import { HomeServices } from "./components/home-services";
import { HomeSystem } from "./components/home-system";
import { HomeProcess } from "./components/home-process";
import { HomeWork } from "./components/home-work";
import { HomeProof } from "./components/home-proof";
import { HomeFaq } from "./components/home-faq";
import { HomeCta } from "./components/home-cta";
import { SiteFooter } from "./components/site-footer";
import { ScrollScene } from "./components/scroll-scene";
import "./components/phase-seven.css";
import "./components/home.css";

export default function HomePage() {
  return (
    <div className="hm-page">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HomeHero />
        <ScrollScene>
          <HomeServices />
          <HomeSystem />
          <HomeProcess />
          <HomeWork />
          <HomeProof />
          <HomeFaq />
          <HomeCta />
        </ScrollScene>
      </main>
      <SiteFooter />
    </div>
  );
}
