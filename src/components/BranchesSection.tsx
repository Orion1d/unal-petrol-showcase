import { Card, CardContent } from "@/components/ui/card";
import branch1Image from "@/assets/gas-station-branch-1.jpg";
import branch2Image from "@/assets/gas-station-branch-2.jpg";

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      name: "Ünal Petrol Merkez Şube",
      image: branch1Image,
      description: "Ana şubemiz, geniş servis alanı ve modern ekipmanlar ile 7/24 hizmet vermektedir.",
      features: ["7/24 Açık", "Oto Yıkama", "Market", "Cafe"]
    },
    {
      id: 2,
      name: "Ünal Petrol İkinci Şube", 
      image: branch2Image,
      description: "İkinci şubemiz, stratejik konumu ile hızlı ve kaliteli yakıt hizmeti sunmaktadır.",
      features: ["Hızlı Servis", "Otopark", "ATM", "Restoran"]
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Şubelerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Türkiye'nin farklı bölgelerinde kaliteli hizmet veren şubelerimizle sizlere en yakın noktada hizmet sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {branches.map((branch, index) => (
            <Card 
              key={branch.id}
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-all duration-500 animate-slide-up bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {branch.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {branch.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {branch.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm font-medium text-primary"
                    >
                      <div className="w-2 h-2 bg-energy-orange rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;