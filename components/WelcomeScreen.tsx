
import React from 'react';
import { PlayCircle, ShieldCheck, ChevronRight } from 'lucide-react';

interface WelcomeScreenProps {
  onStartCourse: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartCourse }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-full mb-6">
            <ShieldCheck size={32} />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            Parabéns por Tomar a Decisão Mais <span className="text-indigo-600">Importante da Sua Vida</span>
          </h1>
          
          <div className="max-w-2xl mx-auto text-lg text-slate-600 space-y-4 mb-10 leading-relaxed">
            <p>
              Eu sei que o momento é difícil, mas quero que saiba de uma coisa: <strong>você não está sozinho.</strong> Milhares de pessoas já estiveram onde você está hoje e conseguiram reverter o cenário usando este método.
            </p>
            <p>
              O <strong>Plano de Reversão Relatio</strong> não é apenas um curso, é um mapa estratégico desenhado para reconstruir não apenas seu relacionamento, mas a sua própria força emocional.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-10 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <PlayCircle className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-amber-800">Instrução de Início Imediato</h3>
                <p className="mt-2 text-amber-700">
                  Antes de qualquer outra aula, você deve assistir ao <strong>"Guia de Ação Imediata"</strong>. Ele contém os passos de emergência para as próximas 24 horas. Não pule esta etapa!
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onStartCourse}
            className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Começar Agora pelo Guia de Ação
            <ChevronRight className="ml-2" />
          </button>
        </div>
        
        <div className="bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-around text-white">
          <div className="flex items-center space-y-1 mb-4 md:mb-0">
            <div className="text-indigo-400 font-bold text-2xl mr-3">3</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Módulos Estratégicos</div>
          </div>
          <div className="flex items-center space-y-1 mb-4 md:mb-0">
            <div className="text-indigo-400 font-bold text-2xl mr-3">12</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Aulas Práticas</div>
          </div>
          <div className="flex items-center space-y-1">
            <div className="text-indigo-400 font-bold text-2xl mr-3">100%</div>
            <div className="text-sm opacity-80 uppercase tracking-widest">Foco em Resultado</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
