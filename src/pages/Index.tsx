import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchAndFilters from '@/components/SearchAndFilters';
import StudentList from '@/components/StudentList';
import DocumentsSection from '@/components/DocumentsSection';
import NoticeBox from '@/components/NoticeBox';
import Footer from '@/components/Footer';
import { classData, documents } from '@/data/studentData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [etapaFilter, setEtapaFilter] = useState('');
  const [periodoFilter, setPeriodoFilter] = useState('');
  const [turnoFilter, setTurnoFilter] = useState('');

  const filteredClasses = useMemo(() => {
    return classData.filter((classInfo) => {
      if (etapaFilter && classInfo.etapa !== etapaFilter) return false;
      if (periodoFilter && classInfo.periodo !== periodoFilter) return false;
      if (turnoFilter && classInfo.turno !== turnoFilter) return false;
      return true;
    });
  }, [etapaFilter, periodoFilter, turnoFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 space-y-8">
        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          etapaFilter={etapaFilter}
          onEtapaChange={setEtapaFilter}
          periodoFilter={periodoFilter}
          onPeriodoChange={setPeriodoFilter}
          turnoFilter={turnoFilter}
          onTurnoChange={setTurnoFilter}
        />
        
        <StudentList 
          classes={filteredClasses} 
          searchQuery={searchQuery} 
        />
        
        <DocumentsSection documents={documents} />
        
        <NoticeBox />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
