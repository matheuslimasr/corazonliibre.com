import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="text-lg md:text-xl font-bold">LoveMatch</span>
          </div>
          
          <p className="text-primary-foreground/50 text-xs md:text-sm text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
