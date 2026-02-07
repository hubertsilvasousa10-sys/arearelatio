
import React from 'react';
import { Module, Lesson, ViewType } from '../types';
import { ChevronDown, ChevronRight, PlayCircle, Home, Gift, Lock as LockIcon, Zap } from 'lucide-react';

interface SidebarProps {
  modules: Module[];
  activeLessonId: string | null;
  onSelectLesson: (lesson: Lesson) => void;
  activeView: ViewType;
  onSelectView: (view: ViewType) => void;
  progress: number;
  isLessonLocked: (lesson: Lesson) => boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  modules, 
  activeLessonId, 
  onSelectLesson, 
  activeView, 
  onSelectView,
  progress,
  isLessonLocked
}) => {
  const [openModules, setOpenModules] = React.useState<Record<string, boolean>>({ 
    'm1': true, 
    'm2': true, 
    'm3': true,
    'm4': true 
  });

  const toggleModule = (id: string) => {
    setOpenModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-screen w-80 bg-white border-r border-slate-200 flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6 border-b border-slate-100 bg-indigo-900 text-white">
        <h1 className="text-xl font-serif font-bold tracking-tight mb-4">
          Relatio<span className="text-indigo-400">.</span>
        </h1>
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1 opacity-80 font-semibold uppercase">
            <span>Seu Progresso</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-indigo-800 rounded-full h-1.5">
            <div 
              className="bg-indigo-400 h-1.5 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-6">
        <div className="space-y-1">
          <button 
            onClick={() => onSelectView('welcome')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${activeView === 'welcome' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Home size={18} />
            <span>Página Inicial</span>
          </button>
          <button 
            onClick={() => onSelectView('bonuses')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${activeView === 'bonuses' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Gift size={18} />
            <span>Materiais Bônus</span>
          </button>
          
          <div className="pt-2">
            <button 
              onClick={() => onSelectView('upsell')}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all border-2 ${
                activeView === 'upsell' 
                ? 'bg-amber-50 border-amber-200 text-amber-700 font-bold' 
                : 'bg-gradient-to-r from-amber-50 to-white border-amber-100 text-amber-600 hover:border-amber-300'
              }`}
            >
              <Zap size={18} className="fill-current" />
              <span>Plano Reversão 7 Dias</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-widest">Conteúdo do Curso</p>
          
          {modules.map((module) => {
            const allLessonsLocked = module.lessons.every(lesson => isLessonLocked(lesson));
            const moduleDisplayName = module.title.includes(':') ? module.title.split(': ')[1] : module.title;

            return (
              <div key={module.id} className="space-y-1">
                <button
                  onClick={() => toggleModule(module.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-bold transition-colors rounded-lg ${
                    allLessonsLocked 
                      ? 'text-slate-300 opacity-60 bg-slate-50/50' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 flex items-center justify-center rounded text-xs transition-colors ${
                      allLessonsLocked 
                        ? 'bg-slate-200 text-slate-400' 
                        : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {allLessonsLocked ? <LockIcon size={12} /> : module.id.replace('m', '')}
                    </div>
                    <span className="text-left">{moduleDisplayName}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {allLessonsLocked && <span className="text-[9px] font-normal uppercase tracking-tighter opacity-60">Em breve</span>}
                    {openModules[module.id] ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </div>
                </button>

                {openModules[module.id] && (
                  <div className={`ml-4 pl-4 border-l space-y-1 mt-1 transition-colors ${allLessonsLocked ? 'border-slate-100' : 'border-slate-100'}`}>
                    {module.lessons.map((lesson) => {
                      const locked = isLessonLocked(lesson);
                      return (
                        <button
                          key={lesson.id}
                          disabled={locked}
                          onClick={() => onSelectLesson(lesson)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all flex items-center justify-between ${
                            activeLessonId === lesson.id && activeView === 'lesson'
                              ? 'bg-indigo-50 text-indigo-700 font-medium'
                              : locked 
                                ? 'text-slate-300 cursor-not-allowed opacity-60' 
                                : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            {locked ? (
                              <LockIcon size={14} className="text-slate-300 shrink-0" />
                            ) : (
                              <PlayCircle size={14} className={activeLessonId === lesson.id && activeView === 'lesson' ? 'text-indigo-600 shrink-0' : 'opacity-40 shrink-0'} />
                            )}
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          {locked && (
                            <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-400 shrink-0">
                              {lesson.releaseDays}d
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100 bg-slate-50">
        <div className="flex items-center p-3 space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 font-bold overflow-hidden border-2 border-white shadow-sm">
            <img src="https://picsum.photos/100/100" alt="Avatar" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Aluno Premium</p>
            <p className="text-xs text-slate-500">Meu Perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
