import React from 'react';

const Sidebar = ({
  searchTerm,
  setSearchTerm,
  filteredGamesLength,
  currentGames,
  activeGame,
  setActiveGame,
  currentPage,
  setCurrentPage,
  totalPages
}) => {
  return (
    <aside className="w-full md:w-[350px] border-b md:border-b-0 md:border-r border-gray-800 flex flex-col h-[40vh] md:h-full shrink-0 bg-gray-950/50 z-10">
      
      <div className="p-4 border-b border-gray-800 shrink-0 bg-[#030712]">
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Cari game..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 text-white text-sm rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          {filteredGamesLength === 0 && (
            <div className="text-center text-gray-500 text-sm mt-8">
              Tidak ada game ditemukan.
            </div>
          )}

          {currentGames.map((game) => (
            <div 
              key={game.id}
              onClick={() => setActiveGame(game)}
              className={`cursor-pointer group flex items-center justify-between p-3 rounded-lg transition-all duration-200 border border-transparent ${
                activeGame?.id === game.id 
                  ? 'bg-purple-900/40 border-purple-500/50 text-white' 
                  : 'hover:bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${activeGame?.id === game.id ? 'text-purple-400' : 'text-gray-500 group-hover:text-gray-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                <span className="font-medium text-sm tracking-wide line-clamp-1">
                  {game.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-900 px-2 py-1 rounded shrink-0">
                  {game.core}
                </span>
                {activeGame?.id === game.id && (
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shrink-0"></span>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800 shrink-0">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded text-xs font-bold transition-colors ${
                currentPage === 1 
                  ? 'bg-gray-900 text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Prev
            </button>
            <span className="text-xs text-gray-500 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded text-xs font-bold transition-colors ${
                currentPage === totalPages 
                  ? 'bg-gray-900 text-gray-600 cursor-not-allowed' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;