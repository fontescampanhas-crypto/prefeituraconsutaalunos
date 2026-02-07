import { Search, X } from 'lucide-react';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  etapaFilter: string;
  onEtapaChange: (value: string) => void;
  periodoFilter: string;
  onPeriodoChange: (value: string) => void;
  turnoFilter: string;
  onTurnoChange: (value: string) => void;
}

const SearchAndFilters = ({
  searchQuery,
  onSearchChange,
  etapaFilter,
  onEtapaChange,
  periodoFilter,
  onPeriodoChange,
  turnoFilter,
  onTurnoChange,
}: SearchAndFiltersProps) => {
  const hasActiveFilters = searchQuery || etapaFilter || periodoFilter || turnoFilter;

  const clearAll = () => {
    onSearchChange('');
    onEtapaChange('');
    onPeriodoChange('');
    onTurnoChange('');
  };

  return (
    <section className="section-container">
      <h2 className="text-lg font-semibold text-foreground mb-4">Buscar Aluno</h2>
      
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar pelo nome do aluno"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-institutional pl-12"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Limpar busca"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="text-sm text-muted-foreground">Filtrar por:</span>
        
        <select
          value={etapaFilter}
          onChange={(e) => onEtapaChange(e.target.value)}
          className="filter-institutional min-w-[160px]"
          aria-label="Filtrar por etapa de ensino"
        >
          <option value="">Etapa de Ensino</option>
          <option value="maternal">Maternal</option>
          <option value="pre-escola">Pré-escola</option>
          <option value="fundamental">Ensino Fundamental</option>
        </select>

        <select
          value={periodoFilter}
          onChange={(e) => onPeriodoChange(e.target.value)}
          className="filter-institutional min-w-[120px]"
          aria-label="Filtrar por período"
        >
          <option value="">Período</option>
          <option value="integral">Integral</option>
          <option value="parcial">Parcial</option>
        </select>

        <select
          value={turnoFilter}
          onChange={(e) => onTurnoChange(e.target.value)}
          className="filter-institutional min-w-[100px]"
          aria-label="Filtrar por turno"
        >
          <option value="">Turno</option>
          <option value="manhã">Manhã</option>
          <option value="tarde">Tarde</option>
        </select>

        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="text-sm text-primary hover:text-primary/80 transition-colors underline underline-offset-2"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </section>
  );
};

export default SearchAndFilters;
