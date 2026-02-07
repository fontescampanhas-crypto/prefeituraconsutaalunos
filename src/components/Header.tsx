import logo from '@/assets/logo-prefeitura.png';

const Header = () => {
  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6">
          <img 
            src={logo} 
            alt="Prefeitura Municipal de Heliodora" 
            className="h-16 md:h-20 w-auto object-contain bg-white rounded-lg p-2"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
              Consulta Pública – Listas de Alunos
            </h1>
            <p className="text-primary-foreground/90 text-lg mt-1">
              Educação Municipal – Prefeitura de Heliodora – MG
            </p>
            <p className="text-primary-foreground/70 text-sm mt-3 max-w-2xl">
              Nesta página, pais e responsáveis podem consultar as listas oficiais de alunos 
              da rede municipal de ensino.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
