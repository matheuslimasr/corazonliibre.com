import { Heart, MessageCircle, Shield, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: t.features.smartMatches,
      description: t.features.smartMatchesDesc,
    },
    {
      icon: MessageCircle,
      title: t.features.secureChat,
      description: t.features.secureChatDesc,
    },
    {
      icon: Shield,
      title: t.features.verifiedProfiles,
      description: t.features.verifiedProfilesDesc,
    },
    {
      icon: Sparkles,
      title: t.features.superLikes,
      description: t.features.superLikesDesc,
    },
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 animate-slide-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            {t.features.title} <span className="text-gradient">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            {t.features.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`gradient-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 animate-slide-up animation-delay-${(index + 1) * 200}`}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl gradient-primary flex items-center justify-center mb-3 md:mb-4">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
