import { Sparkles } from 'lucide-react';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center px-8">
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <Sparkles className="w-16 h-16 text-purple-400 opacity-90 animate-pulse md:w-14 md:h-14" />
            <div
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '0s', animationDuration: '3s' }}
            ></div>
            <div
              className="absolute top-2.5 -right-2.5 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '0.5s', animationDuration: '3s' }}
            ></div>
            <div
              className="absolute bottom-2.5 right-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '1s', animationDuration: '3s' }}
            ></div>
            <div
              className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '1.5s', animationDuration: '3s' }}
            ></div>
            <div
              className="absolute bottom-2.5 -left-2.5 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '2s', animationDuration: '3s' }}
            ></div>
            <div
              className="absolute top-2.5 left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: '2.5s', animationDuration: '3s' }}
            ></div>
          </div>
        </div>
        <h1 className="text-5xl font-semibold mb-4 text-gray-50 tracking-tight md:text-4xl">
          Hairsy App
        </h1>
        <p className="text-lg text-gray-400 md:text-base">Coming Soon</p>
      </div>
    </div>
  );
}

export default App;
