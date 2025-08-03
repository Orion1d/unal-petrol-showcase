const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ünal Petrol</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Kaliteli yakıt ve güvenilir hizmet anlayışıyla müşterilerimizin memnuniyetini ön planda tutan bir markayız.
          </p>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60">
              © 2024 Ünal Petrol. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;