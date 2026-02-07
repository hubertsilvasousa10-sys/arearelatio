
import React, { useState } from 'react';
import { Bonus } from '../types';
import { 
  MessageCircle, 
  Calendar, 
  Users, 
  Lock, 
  Download, 
  ChevronRight, 
  FileText, 
  Tv, 
  Headphones,
  Key,
  AlertCircle
} from 'lucide-react';

interface BonusScreenProps {
  bonuses: Bonus[];
}

const BonusScreen: React.FC<BonusScreenProps> = ({ bonuses }) => {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());
  const [passwordAttempts, setPasswordAttempts] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showInputFor, setShowInputFor] = useState<string | null>(null);

  const getIcon = (iconName: string, isLocked: boolean) => {
    if (isLocked) return <Lock size={32} />;
    
    switch (iconName) {
      case 'message-circle': return <MessageCircle size={32} />;
      case 'calendar': return <Calendar size={32} />;
      case 'users': return <Users size={32} />;
      case 'file-text': return <FileText size={32} />;
      case 'tv': return <Tv size={32} />;
      case 'headphones': return <Headphones size={32} />;
      default: return <Lock size={32} />;
    }
  };

  const handleUnlock = (id: string, correctPassword?: string) => {
    const inputPassword = passwordAttempts[id] || '';
    if (inputPassword === correctPassword) {
      setUnlockedIds(new Set([...Array.from(unlockedIds), id]));
      setErrors(prev => ({ ...prev, [id]: '' }));
      setShowInputFor(null);
    } else {
      setErrors(prev => ({ ...prev, [id]: 'Senha incorreta. Tente novamente.' }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6 text-left">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-serif text-slate-900 mb-4">Materiais <span className="text-indigo-600">Complementares & VIP</span></h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Turbine seus resultados com nossas ferramentas exclusivas. Alguns conteúdos VIP requerem as senhas fornecidas durante as aulas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bonuses.map((bonus) => {
          // Correção do erro TS: Forçando o resultado para booleano com !!
          const isLocked = !!(bonus.requiresPassword && !unlockedIds.has(bonus.id));
          const isAttempting = showInputFor === bonus.id;
          
          return (
            <div key={bonus.id} className={`bg-white rounded-2xl shadow-lg border overflow-hidden group transition-all duration-300 transform hover:-translate-y-2 ${isLocked ? 'border-amber-100' : 'border-slate-100'}`}>
              <div className="p-8 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isLocked 
                    ? 'bg-amber-50 text-amber-600' 
                    : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
                }`}>
                  {getIcon(bonus.icon, isLocked && !isAttempting)}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  {bonus.title}
                  {isLocked && <Lock size={16} className="ml-2 text-amber-500" />}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                  {bonus.description}
                </p>

                {isLocked ? (
                  <div className="space-y-3">
                    {isAttempting ? (
                      <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="relative">
                          <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input 
                            type="password"
                            placeholder="Digite a senha..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            value={passwordAttempts[bonus.id] || ''}
                            onChange={(e) => setPasswordAttempts({ ...passwordAttempts, [bonus.id]: e.target.value })}
                            onKeyDown={(e) => e.key === 'Enter' && handleUnlock(bonus.id, bonus.password)}
                            autoFocus
                          />
                        </div>
                        {errors[bonus.id] && (
                          <p className="text-[11px] text-red-500 flex items-center font-semibold">
                            <AlertCircle size={12} className="mr-1" />
                            {errors[bonus.id]}
                          </p>
                        )}
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleUnlock(bonus.id, bonus.password)}
                            className="flex-1 py-3 bg-amber-600 text-white font-bold rounded-xl text-sm hover:bg-amber-700 transition-colors"
                          >
                            Desbloquear
                          </button>
                          <button 
                            onClick={() => setShowInputFor(null)}
                            className="px-4 py-3 bg-slate-100 text-slate-500 font-bold rounded-xl text-sm hover:bg-slate-200 transition-colors"
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setShowInputFor(bonus.id)}
                        className="flex items-center justify-center w-full py-3 px-4 bg-amber-50 text-amber-700 font-bold rounded-xl hover:bg-amber-100 transition-colors"
                      >
                        <Lock size={16} className="mr-2" />
                        Desbloquear Conteúdo
                      </button>
                    )}
                  </div>
                ) : (
                  <a 
                    href={bonus.downloadUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-3 px-4 bg-slate-50 text-indigo-600 font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition-all group-hover:bg-indigo-600 group-hover:text-white"
                  >
                    <span className="flex items-center">
                      <Download size={18} className="mr-2" />
                      {bonus.icon === 'users' ? 'Entrar Agora' : 'Baixar Material'}
                    </span>
                    <ChevronRight size={18} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-16 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Key size={120} />
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-serif mb-4">Segurança & Privacidade</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Os materiais bloqueados contêm estratégias de alto impacto emocional. Recomendamos que você os acesse apenas quando instruído durante os módulos correspondentes.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Falar com Suporte VIP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusScreen;
