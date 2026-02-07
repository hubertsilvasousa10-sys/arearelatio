
import React, { useState } from 'react';
import { Lock, Zap, ArrowRight, ShieldCheck, CheckCircle2, Key, AlertCircle } from 'lucide-react';

const UpsellScreen: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha atualizada conforme solicitação do usuário
    if (password === 'reversao7d7') {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Acesso negado. Esta senha é exclusiva para membros do Plano 7 Dias.');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white rounded-3xl shadow-2xl border border-amber-100 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-4">
              <Lock size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-serif font-bold mb-2">Área de Acesso Restrito</h1>
            <p className="opacity-90">Insira a senha do seu Upgrade para desbloquear o Protocolo de 7 Dias.</p>
          </div>
          
          <div className="p-10 max-w-md mx-auto">
            <form onSubmit={handleUnlock} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Senha de Acesso</label>
                <div className="relative">
                  <Key size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    placeholder="Sua senha VIP..."
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <div className="flex items-center space-x-2 text-red-500 text-xs font-bold mt-2 animate-pulse">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-amber-200 hover:bg-amber-600 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <span>Desbloquear Protocolo</span>
                <ArrowRight size={18} />
              </button>
            </form>
            
            <p className="mt-8 text-center text-slate-400 text-xs leading-relaxed">
              Não possui o Plano de 7 Dias? Entre em contato com nossa equipe de vendas para adquirir seu acesso exclusivo e acelerar sua reversão.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 animate-in fade-in duration-700">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          <Zap size={14} className="fill-current" />
          <span>Acesso VIP Desbloqueado</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6 leading-tight">
          Plano de Reversão <span className="text-amber-600">Intensivo em 7 Dias</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Você acaba de entrar no protocolo de alta velocidade. Esqueça meses de espera; se você seguir estas 7 etapas à risca, a reversão começa hoje.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { day: '1', title: 'O Choque de Realidade', desc: 'Como quebrar o padrão de frieza do parceiro nas primeiras 24h.' },
          { day: '2', title: 'Infiltração Mental', desc: 'Gatilhos de subconsciente para fazer ele(a) pensar em você sem parar.' },
          { day: '3', title: 'A Prova Social Magnética', desc: 'O que postar e como se comportar para gerar o medo da perda instantâneo.' },
          { day: '4', title: 'A Isca da Saudade', desc: 'A técnica do vácuo planejado que força uma mensagem de contato.' },
          { day: '5', title: 'Reencontro Estratégico', desc: 'O guia passo a passo para o "primeiro café" após a crise.' },
          { day: '6', title: 'Blindagem de Conexão', desc: 'Eliminando as feridas do passado em uma única conversa profunda.' },
          { day: '7', title: 'A Nova Aliança', desc: 'Selando o compromisso e garantindo que o relacionamento nunca mais esfrie.' },
        ].map((item) => (
          <div key={item.day} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:border-amber-200 transition-all group">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              {item.day}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}

        <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-10 text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-serif mb-4 flex items-center">
            <ShieldCheck size={28} className="mr-3 text-indigo-400" />
            O Protocolo de Emergência
          </h3>
          <p className="text-indigo-100/80 mb-8 max-w-md">
            Este conteúdo é restrito e não deve ser compartilhado. As técnicas contidas aqui são de alta voltagem emocional. Use com responsabilidade.
          </p>
          <button className="bg-amber-500 text-white font-bold py-3 px-8 rounded-xl w-fit hover:bg-amber-600 transition-all flex items-center space-x-2 shadow-lg shadow-black/20">
            <span>Baixar Plano Completo (PDF)</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-6 md:mb-0">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Suporte 24h Disponível</h4>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Membros VIP do Plano 7 Dias</p>
          </div>
        </div>
        <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors">
          Falar com Analista de Reversão
        </button>
      </div>
    </div>
  );
};

export default UpsellScreen;
