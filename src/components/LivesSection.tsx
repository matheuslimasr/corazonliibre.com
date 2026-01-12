import { Radio, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import live1 from "@/assets/live-1.jpg";
import live2 from "@/assets/live-2.jpg";
import live3 from "@/assets/live-3.jpg";
import live4 from "@/assets/live-4.jpg";

const lives = [
  {
    id: 1,
    name: "Marina",
    age: 28,
    image: live1,
    viewers: 1243,
    isLive: true,
  },
  {
    id: 2,
    name: "Aline",
    age: 27,
    image: live2,
    viewers: 856,
    isLive: true,
  },
  {
    id: 3,
    name: "Beatriz",
    age: 25,
    image: live3,
    viewers: 2104,
    isLive: true,
  },
  {
    id: 4,
    name: "Gaby",
    age: 26,
    image: live4,
    viewers: 678,
    isLive: true,
  },
];

const LivesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 md:gap-2 bg-destructive/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
            <Radio className="w-3 h-3 md:w-4 md:h-4 text-destructive animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-destructive">{t.lives.badge}</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            {t.lives.title} <span className="text-gradient">{t.lives.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            {t.lives.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {lives.map((live, index) => (
            <div
              key={live.id}
              className={`group relative rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Video/Image */}
              <div className="aspect-[3/4] relative">
                <img
                  src={live.image}
                  alt={live.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                
                {/* Live badge */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3 flex items-center gap-1 md:gap-1.5 bg-destructive px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-foreground rounded-full animate-pulse" />
                  <span className="text-[10px] md:text-xs font-bold text-primary-foreground">LIVE</span>
                </div>
                
                {/* Viewers count */}
                <div className="absolute top-2 right-2 md:top-3 md:right-3 flex items-center gap-0.5 md:gap-1 bg-foreground/50 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-full">
                  <Eye className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary-foreground" />
                  <span className="text-[10px] md:text-xs font-medium text-primary-foreground">
                    {live.viewers.toLocaleString()}
                  </span>
                </div>
                
                {/* User info */}
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm md:text-lg font-bold text-primary-foreground">
                        {live.name}, {live.age}
                      </h3>
                    </div>
                    <button className="w-7 h-7 md:w-10 md:h-10 rounded-full gradient-primary flex items-center justify-center hover:scale-110 transition-transform shadow-glow">
                      <Heart className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 md:mt-10">
          <p className="text-muted-foreground text-sm md:text-base">
            <span className="font-semibold text-primary">+500</span> {t.lives.livesCount.replace("+500 ", "")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LivesSection;
