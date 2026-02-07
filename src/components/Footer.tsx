const Footer = () => {
  return (
    <footer className="bg-primary mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-primary-foreground font-medium">
            Prefeitura Municipal de Heliodora – MG
          </p>
          <p className="text-primary-foreground/80 text-sm mt-1">
            Secretaria Municipal de Educação
          </p>
          <p className="text-primary-foreground/60 text-xs mt-3">
            © {new Date().getFullYear()} – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
