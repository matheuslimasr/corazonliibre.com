import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LivesSection from "@/components/LivesSection";
import InstallationTutorial from "@/components/InstallationTutorial";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";
import { useAppVersion } from "@/contexts/AppVersionContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAnalytics } from "@/contexts/AnalyticsContext";

const Index = () => {

  const bottomRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const { downloadApp, currentVersion, loading } = useAppVersion();
  const { t } = useLanguage();
  const { trackDownloadClick } = useAnalytics();

  // ###########################################################################
  function isWebView() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const lcaseUA = ua.toLowerCase();

    // Detecta WebView genérico (Android ou iOS)
    const isAndroidWebView = /\bwv\b/.test(lcaseUA) || /version\/[\d.]+.*chrome/.test(lcaseUA);
    const isiOSWebView = /(iphone|ipod|ipad).*applewebkit(?!.*safari)/i.test(lcaseUA);

    // Detecta apps específicos
    const isFacebook = /fbav|fban|fbios|fb_iab|facebook/i.test(lcaseUA);
    const isInstagram = /instagram/i.test(lcaseUA);
    const isTikTok = /tiktok/i.test(lcaseUA);

    // Se for webview ou um desses apps, retorna verdadeiro
    const result = isAndroidWebView || isiOSWebView || isFacebook || isInstagram || isTikTok;

    return {
      isWebView: result,
      source: isFacebook ? 'facebook' :
              isInstagram ? 'instagram' :
              isTikTok ? 'tiktok' :
              (isAndroidWebView || isiOSWebView ? 'generic_webview' : 'browser')
    };
  }

  function openInBrowser() {
    const url = window.location.href; // ou coloque seu link fixo
    const isAndroid = /android/i.test(navigator.userAgent);
    const isiOS = /iphone|ipod|ipad/i.test(navigator.userAgent);

    if (isAndroid) {
      // Tenta abrir diretamente no Chrome
      window.location.href = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
    } else if (isiOS) {
      // Em iOS, o melhor é apenas abrir o link padrão
      window.open(url, '_blank');
    } else {
      // fallback
      window.open(url, '_blank');
    }
  }

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // #########################################################################

  async function handledButton(){
    const detect = isWebView();
    if (detect.isWebView) {
      openInBrowser();
    } else {
      scrollToBottom();
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Pega a posição atual do scroll vertical
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = async () => {
    await trackDownloadClick();
    downloadApp();
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingHearts />
      <Header />
      <main className="pt-16">
        <HeroSection handledButton={handledButton} />
        <section id="lives">
          <LivesSection />
        </section>
        <InstallationTutorial bottomRef={bottomRef} />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="download">
          <CTASection />
        </section>

        <div style={{
          backgroundColor: "hsl(350, 61%, 41%)",
          width: '100%',
          height: "auto",
          position: "fixed",
          bottom: 0,
          left:0,
          right: 0,
          display: scrollY >= 1439 ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          zIndex:2000
        }}>
          <Button 
            variant="download" 
            size="lg" 
            onClick={handleDownload}
            className="group text-sm md:text-base"
            disabled={loading}
          >
            <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
            {currentVersion ? `${t.hero.downloadButton} Ahora` : t.header.downloadApp}
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
