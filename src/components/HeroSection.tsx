import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";
import heroMainBg from "@/assets/hero-main-bg.jpg";
import { useAppVersion } from "@/contexts/AppVersionContext";
import { useAnalytics } from "@/contexts/AnalyticsContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = ({handledButton}) => {
  const { downloadApp, currentVersion, loading } = useAppVersion();
  const { trackDownloadClick } = useAnalytics();
  const { t } = useLanguage();

  const handleDownload = async () => {
    await trackDownloadClick();
    downloadApp();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMainBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-secondary px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
              <span className="text-xs md:text-sm font-medium text-secondary-foreground">
                {t.hero.badge}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              {t.hero.title}{" "}
              <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                variant="download" 
                size="lg" 
                onClick={handledButton}
                className="group text-sm md:text-base"
                disabled={loading}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-bounce" />
                {currentVersion ? `${t.hero.downloadButton} Ahora` : t.header.downloadApp}
              </Button>

            </div>
            
            <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start pt-2 md:pt-4">
              <div className="text-center">
                <p className="text-lg md:text-2xl font-bold text-foreground">5M+</p>
                <p className="text-xs md:text-sm text-muted-foreground">{t.hero.users}</p>
              </div>
              <div className="w-px h-8 md:h-10 bg-border" />
              <div className="text-center">
                <p className="text-lg md:text-2xl font-bold text-foreground">4.8</p>
                <p className="text-xs md:text-sm text-muted-foreground">{t.hero.rating}</p>
              </div>
              <div className="w-px h-8 md:h-10 bg-border" />
              <div className="text-center">
                <p className="text-lg md:text-2xl font-bold text-foreground">100K+</p>
                <p className="text-xs md:text-sm text-muted-foreground">{t.hero.couples}</p>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-up animation-delay-200">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-3xl opacity-30 scale-90" />
              <img
                src={phoneMockup}
                alt="App de relacionamentos"
                className="relative z-10 w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
