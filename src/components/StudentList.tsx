import { useMemo } from 'react';
import { ChevronDown, User } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ClassInfo, etapaLabels, periodoLabels, turnoLabels } from '@/data/studentData';

interface StudentListProps {
  classes: ClassInfo[];
  searchQuery: string;
}

const highlightMatch = (text: string, query: string): React.ReactNode => {
  if (!query.trim()) return text;
  
  const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const normalizedText = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  const index = normalizedText.indexOf(normalizedQuery);
  if (index === -1) return text;
  
  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);
  
  return (
    <>
      {before}
      <mark className="highlight-match">{match}</mark>
      {after}
    </>
  );
};

const StudentList = ({ classes, searchQuery }: StudentListProps) => {
  const normalizedQuery = useMemo(() => 
    searchQuery.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
    [searchQuery]
  );

  const isStudentMatch = (studentName: string): boolean => {
    if (!normalizedQuery) return true;
    const normalizedName = studentName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return normalizedName.includes(normalizedQuery);
  };

  // Group classes by etapa
  const groupedClasses = useMemo(() => {
    const groups: Record<string, ClassInfo[]> = {
      maternal: [],
      'pre-escola': [],
      fundamental: [],
    };
    
    classes.forEach((classInfo) => {
      groups[classInfo.etapa].push(classInfo);
    });
    
    return groups;
  }, [classes]);

  const countMatchesInClass = (classInfo: ClassInfo): number => {
    if (!normalizedQuery) return classInfo.students.length;
    return classInfo.students.filter(s => isStudentMatch(s.name)).length;
  };

  if (classes.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-lg">Nenhuma turma encontrada com os filtros selecionados.</p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">Listas de Alunos por Turma</h2>
      
      {Object.entries(groupedClasses).map(([etapa, etapaClasses]) => {
        if (etapaClasses.length === 0) return null;
        
        return (
          <div key={etapa} className="space-y-3">
            <h3 className="text-lg font-medium text-primary flex items-center gap-2">
              <span className="w-1 h-5 bg-accent rounded-full" />
              {etapaLabels[etapa]}
            </h3>
            
            <Accordion type="multiple" className="space-y-2">
              {etapaClasses.map((classInfo) => {
                const matchCount = countMatchesInClass(classInfo);
                const totalCount = classInfo.students.length;
                
                return (
                  <AccordionItem
                    key={classInfo.id}
                    value={classInfo.id}
                    className="border border-border/60 rounded-lg bg-background overflow-hidden"
                  >
                    <AccordionTrigger className="accordion-trigger-institutional px-4 hover:no-underline group">
                      <div className="flex flex-col items-start gap-1 text-left flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {classInfo.name}
                          </span>
                          <span className="count-badge">
                            {normalizedQuery ? `${matchCount} de ${totalCount}` : `${totalCount}`} alunos
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span>{periodoLabels[classInfo.periodo]}</span>
                          <span>Turno: {turnoLabels[classInfo.turno]}</span>
                          <span>Prof(a): {classInfo.professor}</span>
                          {classInfo.sala && <span>Sala: {classInfo.sala}</span>}
                        </div>
                      </div>
                      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-4 pb-4">
                      <div className="border-t border-border/40 pt-3">
                        <ul className="divide-y divide-border/30">
                          {classInfo.students.map((student, index) => {
                            const matches = isStudentMatch(student.name);
                            
                            return (
                              <li
                                key={`${classInfo.id}-${index}`}
                                className={`student-row flex items-center gap-3 ${
                                  index % 2 === 1 ? 'student-row-alt' : ''
                                } ${
                                  normalizedQuery && matches ? 'student-row-match' : ''
                                } ${
                                  normalizedQuery && !matches ? 'student-row-dimmed' : ''
                                }`}
                              >
                                <User className="h-4 w-4 text-muted-foreground/60 shrink-0" />
                                <span className="text-foreground">
                                  {highlightMatch(student.name, searchQuery)}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        );
      })}
    </section>
  );
};

export default StudentList;
