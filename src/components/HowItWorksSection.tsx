import { UserPlus, Heart, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: t.howItWorks.step1Title,
      description: t.howItWorks.step1Desc,
    },
    {
      icon: Heart,
      step: "02",
      title: t.howItWorks.step2Title,
      description: t.howItWorks.step2Desc,
    },
    {
      icon: MessageCircle,
      step: "03",
      title: t.howItWorks.step3Title,
      description: t.howItWorks.step3Desc,
    },
    {
      icon: Sparkles,
      step: "04",
      title: t.howItWorks.step4Title,
      description: t.howItWorks.step4Desc,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            {t.howItWorks.title} <span className="text-gradient">{t.howItWorks.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            {t.howItWorks.description}
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20 transform -translate-y-1/2" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative text-center group">
                <div className="relative z-10 bg-background">
                  <div className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent text-accent-foreground text-xs md:text-sm font-bold flex items-center justify-center shadow-soft">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 md:mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm lg:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
