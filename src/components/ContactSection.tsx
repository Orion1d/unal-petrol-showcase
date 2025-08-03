import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const ContactSection = () => {
  const branches = [
    {
      id: 1,
      name: "Merkez Şube",
      address: "Atatürk Caddesi No: 123, Çankaya/Ankara",
      phone: "+90 312 456 78 90",
      email: "merkez@unalpetrol.com.tr",
      hours: "7/24 Açık",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0!2d32.8597!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU2JzAwLjIiTiAzMsKwNTEnMzQuOSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
    },
    {
      id: 2,
      name: "İkinci Şube", 
      address: "Kızılay Meydanı No: 456, Çankaya/Ankara",
      phone: "+90 312 789 01 23",
      email: "ikinci@unalpetrol.com.tr", 
      hours: "06:00 - 24:00",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.5!2d32.8506!3d39.9208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU1JzE0LjkiTiAzMsKwNTEnMDIuMiJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            İletişim Bilgileri
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Şubelerimizin detaylı iletişim bilgileri ve konum bilgileri. Size en yakın şubemizi seçin ve bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {branches.map((branch, index) => (
            <div 
              key={branch.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <Card className="mb-8 border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {branch.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Adres</h4>
                      <p className="text-muted-foreground">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-energy-orange/10">
                      <Phone className="h-5 w-5 text-energy-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                      <p className="text-muted-foreground">{branch.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">E-posta</h4>
                      <p className="text-muted-foreground">{branch.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-energy-orange/10">
                      <Clock className="h-5 w-5 text-energy-orange" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h4>
                      <p className="text-muted-foreground">{branch.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-elegant border border-border">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} Haritası`}
                  className="w-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;