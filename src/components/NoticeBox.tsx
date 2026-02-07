import { Info } from 'lucide-react';

const NoticeBox = () => {
  return (
    <section className="notice-box">
      <div className="flex gap-3">
        <Info className="h-5 w-5 text-institutional-blue-light shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-foreground mb-1">Aviso Importante</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            As informações aqui publicadas são de caráter oficial, destinadas exclusivamente 
            à consulta pública. Em caso de dúvidas, procure a Secretaria Municipal de Educação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoticeBox;
