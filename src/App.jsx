import React, { useState, useMemo, useEffect } from 'react';
import { gameLibrary } from './data/games'; // Import data terpisah
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import RetroPlayer from './components/RetroPlayer';

function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const categories = useMemo(() => {
    const cores = gameLibrary.map(game => game.core);
    const uniqueCores = [...new Set(cores)];
    return ["All", ...uniqueCores];
  }, []);

  const filteredGames = gameLibrary.filter((game) => {
    const matchCategory = activeCategory === "All" || game.core === activeCategory;
    const matchSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const totalPages = Math.ceil(filteredGames.length / itemsPerPage);
  
  const currentGames = filteredGames.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="h-screen w-full flex flex-col bg-[#030712] text-white font-sans overflow-hidden">
      
      {/* HEADER DI-IMPORT DARI KOMPONEN */}
      <Header 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* SIDEBAR DI-IMPORT DARI KOMPONEN */}
        <Sidebar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredGamesLength={filteredGames.length}
          currentGames={currentGames}
          activeGame={activeGame}
          setActiveGame={setActiveGame}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />

        <main className="flex-1 flex flex-col p-6 md:p-10 overflow-y-auto h-[60vh] md:h-full relative bg-[#0a0f1c]">
          
          <div className="w-full max-w-5xl mx-auto mb-4 flex items-center justify-between">
             <h2 className="text-xl md:text-2xl font-bold text-gray-200">
               {activeGame ? activeGame.title : 'Pilih Game'}
             </h2>
             {activeGame && (
               <span className="bg-purple-900/50 text-purple-400 border border-purple-500/50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                 {/* BAGIAN YANG DIUBAH: Logika untuk mengubah pcsx_rearmed menjadi PlayStation */}
                 System: {activeGame.core === "pcsx_rearmed" ? "PLAYSTATION" : activeGame.core.toUpperCase()}
               </span>
             )}
          </div>

          <div className="shrink-0 w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-video bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center">
            {activeGame ? (
              <RetroPlayer 
                key={activeGame.gameUrl} 
                core={activeGame.core} 
                gameUrl={activeGame.gameUrl} 
              />
            ) : (
              <div className="flex flex-col items-center gap-4 opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400 font-medium tracking-widest uppercase text-sm">
                  Menunggu Kaset Dimasukkan
                </span>
              </div>
            )}
          </div>

          {/* FOOTER DI-IMPORT DARI KOMPONEN */}
          <Footer />

        </main>
      </div>
    </div>
  );
}

export default App;