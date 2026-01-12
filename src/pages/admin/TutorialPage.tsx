import { Image } from "lucide-react";
import AdminTutorialSteps from "@/components/AdminTutorialSteps";

export default function TutorialPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Image className="w-6 h-6 text-primary" />
          Passos do Tutorial
        </h1>
        <p className="text-primary-foreground/60 mt-1">
          Gerencie os passos do tutorial de instalação
        </p>
      </div>

      <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6">
        <AdminTutorialSteps />
      </div>
    </div>
  );
}
