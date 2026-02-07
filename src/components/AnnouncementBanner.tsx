import { Calendar, Bell } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-institutional-blue via-institutional-blue-light to-institutional-blue p-8 md:p-12 shadow-2xl animate-pulse-slow">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-institutional-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-institutional-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon with ping animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping bg-institutional-yellow rounded-full opacity-75" />
          <div className="relative bg-institutional-yellow p-4 rounded-full">
            <Bell className="h-8 w-8 text-institutional-blue animate-bounce" />
          </div>
        </div>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-institutional-yellow text-institutional-blue px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
          <span className="w-2 h-2 bg-institutional-blue rounded-full animate-ping" />
          Atenção
        </span>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          VOLTA ÀS AULAS
        </h2>

        {/* Date highlight */}
        <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border-2 border-institutional-yellow/50">
          <Calendar className="h-10 w-10 text-institutional-yellow" />
          <div className="text-center sm:text-left">
            <p className="text-institutional-yellow font-bold text-lg">Segunda-feira</p>
            <p className="text-4xl md:text-5xl font-black text-white">09 DE FEVEREIRO</p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl max-w-xl">
          Aguardamos todos os alunos e famílias para mais um ano letivo!
        </p>
      </div>
    </section>
  );
};

export default AnnouncementBanner;
