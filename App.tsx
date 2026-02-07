
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';
import LessonContent from './components/LessonContent';
import BonusScreen from './components/BonusScreen';
import LoginScreen from './components/LoginScreen';
import UpsellScreen from './components/UpsellScreen';
import { courseData, bonuses } from './data';
import { Lesson, ViewType, Module } from './types';
import { Menu, X, Bell, LogOut } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [activeView, setActiveView] = useState<ViewType>('welcome');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [enrollmentDate, setEnrollmentDate] = useState<number>(0);

  useEffect(() => {
    // Check authentication in localStorage
    const authStatus = localStorage.getItem('relatio_auth');
    const savedEmail = localStorage.getItem('relatio_user_email');
    if (authStatus === 'true' && savedEmail) {
      setIsAuthenticated(true);
      setUserEmail(savedEmail);
    }

    // Check if enrollment date is already set in localStorage
    const savedDate = localStorage.getItem('relatio_enrollment_date');
    if (savedDate) {
      setEnrollmentDate(parseInt(savedDate, 10));
    } else {
      const now = Date.now();
      localStorage.setItem('relatio_enrollment_date', now.toString());
      setEnrollmentDate(now);
    }
  }, []);

  const handleLogin = (email: string) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    localStorage.setItem('relatio_auth', 'true');
    localStorage.setItem('relatio_user_email', email);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('relatio_auth');
    localStorage.removeItem('relatio_user_email');
  };

  const getDaysSinceEnrollment = () => {
    if (!enrollmentDate) return 0;
    const diff = Date.now() - enrollmentDate;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  };

  const isLessonLocked = (lesson: Lesson) => {
    return getDaysSinceEnrollment() < lesson.releaseDays;
  };

  const handleSelectLesson = (lesson: Lesson) => {
    const parentModule = courseData.find(m => m.lessons.find(l => l.id === lesson.id));
    setActiveModule(parentModule || null);
    setActiveLesson(lesson);
    setActiveView('lesson');
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = () => {
    if (!activeLesson) return;
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(activeLesson.id)) {
      newCompleted.delete(activeLesson.id);
    } else {
      newCompleted.add(activeLesson.id);
    }
    setCompletedLessons(newCompleted);
  };

  const totalLessons = courseData.reduce((acc, module) => acc + module.lessons.length, 0);
  const progress = totalLessons > 0 ? Math.round((completedLessons.size / totalLessons) * 100) : 0;

  const startCourse = () => {
    handleSelectLesson(courseData[0].lessons[0]);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Mobile Menu Trigger */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-2xl active:scale-95 transition-transform"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 fixed lg:static z-40`}>
        <Sidebar 
          modules={courseData}
          activeLessonId={activeLesson?.id || null}
          onSelectLesson={handleSelectLesson}
          activeView={activeView}
          onSelectView={(view) => {
            setActiveView(view);
            if (window.innerWidth < 1024) setIsSidebarOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          progress={progress}
          isLessonLocked={isLessonLocked}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
          <div className="flex items-center space-x-4">
            <p className="text-sm font-bold text-slate-800 hidden sm:block">Plano de Reversão Relatio</p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
              Dia {getDaysSinceEnrollment() + 1} da Jornada
            </div>
            <button className="text-slate-400 hover:text-indigo-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Logado como</p>
                <p className="text-xs font-bold text-slate-700 truncate max-w-[150px]">{userEmail}</p>
              </div>
              <button 
                onClick={handleLogout}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"
                title="Sair"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1">
          {activeView === 'welcome' && (
            <WelcomeScreen onStartCourse={startCourse} />
          )}

          {activeView === 'lesson' && activeLesson && activeModule && (
            <LessonContent 
              lesson={activeLesson} 
              module={activeModule}
              onComplete={handleToggleComplete}
              isCompleted={completedLessons.has(activeLesson.id)}
              isLocked={isLessonLocked(activeLesson)}
              daysUntilUnlock={activeLesson.releaseDays - getDaysSinceEnrollment()}
            />
          )}

          {activeView === 'bonuses' && (
            <BonusScreen bonuses={bonuses} />
          )}

          {activeView === 'upsell' && (
            <UpsellScreen />
          )}
        </div>

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-slate-100 text-center text-slate-400 text-xs">
          <p>© 2024 Plano de Reversão Relatio - Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-indigo-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Suporte</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
