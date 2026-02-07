
import React from 'react';
import { Lesson, Module } from '../types';
import { Clock, Download, CheckCircle, FileText, Share2, Lock, Calendar } from 'lucide-react';

interface LessonContentProps {
  lesson: Lesson;
  module: Module;
  onComplete: () => void;
  isCompleted: boolean;
  isLocked?: boolean;
  daysUntilUnlock?: number;
}

const LessonContent: React.FC<LessonContentProps> = ({ 
  lesson, 
  module, 
  onComplete, 
  isCompleted, 
  isLocked,
  daysUntilUnlock 
}) => {
  if (isLocked) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-100 text-slate-400 rounded-full mb-8">
          <Lock size={48} />
        </div>
        <h1 className="text-3xl font-serif text-slate-900 mb-4">Esta aula ainda está bloqueada</h1>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          Para garantir que você absorva o conteúdo e aplique os passos corretamente, esta aula será desbloqueada em breve.
        </p>
        
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 max-w-lg mx-auto mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Calendar className="text-amber-600" size={24} />
            <div className="text-left">
              <p className="text-sm font-bold text-amber-800 uppercase tracking-wider">Desbloqueio Previsto</p>
              <p className="text-amber-700">Em aproximadamente {daysUntilUnlock} {daysUntilUnlock === 1 ? 'dia' : 'dias'}</p>
            </div>
          </div>
          <p className="text-sm text-amber-700 opacity-80 italic">
            "A pressa é inimiga da reconciliação. Use este tempo para revisar o conteúdo anterior e praticar os exercícios propostos."
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition-colors">
            Revisar Aula Anterior
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg">
            Ir para Comunidade
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-6">
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">
        <span>{module.title}</span>
        <span className="text-slate-300">/</span>
        <span className="text-indigo-600">Aula {lesson.id}</span>
      </div>

      {/* Video Player Placeholder */}
      <div className="aspect-video bg-slate-900 rounded-2xl shadow-2xl relative flex items-center justify-center overflow-hidden mb-8 group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10">
          <div className="ml-1 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent"></div>
        </div>
        <img 
          src={`https://picsum.photos/seed/${lesson.id}/1280/720`} 
          alt="Thumbnail" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute bottom-6 left-8 text-white z-10 text-left">
          <p className="text-sm opacity-80 mb-1">Assistindo agora:</p>
          <h2 className="text-xl font-bold">{lesson.title}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-serif text-slate-900 leading-tight text-left">
                {lesson.title}
              </h1>
              <div className="flex items-center text-slate-400 text-sm shrink-0 ml-4">
                <Clock size={16} className="mr-1" />
                {lesson.duration}
              </div>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed text-left">
              {lesson.description}
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
              <FileText size={20} className="mr-2 text-indigo-600" />
              Resumo Estratégico da Aula
            </h3>
            <div className="prose prose-slate max-w-none text-slate-600 text-left">
              <p>Nesta aula, exploramos profundamente como a sua mudança de postura é o gatilho principal para a reversão. Lembre-se:</p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>O desespero afasta; a segurança atrai.</li>
                <li>Mantenha o protocolo de distanciamento até o momento da reconexão.</li>
                <li>Suas ações silenciosas dizem mais que mil palavras.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <button
            onClick={onComplete}
            className={`w-full flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all shadow-md ${
              isCompleted 
                ? 'bg-green-100 text-green-700 border-2 border-green-200 cursor-default' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700 transform hover:-translate-y-1'
            }`}
          >
            {isCompleted ? <CheckCircle className="mr-2" /> : null}
            {isCompleted ? 'Aula Concluída' : 'Marcar como Concluída'}
          </button>

          <div className="bg-slate-100 rounded-2xl p-6">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Materiais de Apoio</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all group">
                <Download size={18} className="mr-3 text-slate-400 group-hover:text-indigo-600" />
                <span className="text-sm font-medium">Material Complementar (PDF)</span>
              </a>
              <a href="#" className="flex items-center p-3 bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all group">
                <FileText size={18} className="mr-3 text-slate-400 group-hover:text-indigo-600" />
                <span className="text-sm font-medium">Resumo em Áudio (MP3)</span>
              </a>
            </div>
          </div>

          <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-lg">
            <h4 className="text-sm font-bold mb-3 flex items-center">
              <Share2 size={16} className="mr-2 text-indigo-400" />
              Suporte Exclusivo
            </h4>
            <p className="text-xs opacity-70 leading-relaxed mb-4 text-left">
              Ficou com alguma dúvida sobre como aplicar o conteúdo desta aula? Chame nosso suporte no WhatsApp agora mesmo.
            </p>
            <button className="w-full bg-white text-indigo-900 py-2 rounded-lg font-bold text-sm hover:bg-indigo-50 transition-colors">
              Falar com Tutor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
