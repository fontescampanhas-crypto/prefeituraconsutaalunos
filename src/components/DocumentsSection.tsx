import { FileText, Download, FileIcon } from 'lucide-react';
import { Document } from '@/data/studentData';

interface DocumentsSectionProps {
  documents: Document[];
}

const DocumentsSection = ({ documents }: DocumentsSectionProps) => {
  return (
    <section className="section-container">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        Documentos Oficiais
      </h2>
      
      <p className="text-muted-foreground text-sm mb-4">
        Baixe as listas oficiais de alunos em formato digital.
      </p>
      
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc) => (
          <div key={doc.id} className="document-card flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileIcon className="h-5 w-5 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground text-sm truncate">
                {doc.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {doc.description}
              </p>
              <span className="inline-block text-xs text-muted-foreground/60 mt-1 uppercase">
                {doc.type}
              </span>
            </div>
            
            <button
              onClick={() => window.open(doc.url, '_blank')}
              className="shrink-0 w-9 h-9 rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center transition-colors"
              aria-label={`Baixar ${doc.name}`}
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentsSection;
