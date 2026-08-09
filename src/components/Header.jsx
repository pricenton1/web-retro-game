import React from 'react';
import iconNes from '../assets/icons/iconNes.png';
import iconSnes from '../assets/icons/iconSnes.png';
import iconPsx from '../assets/icons/iconPsx.png';

const coreIcons = {
  "nes": iconNes,
  "snes": iconSnes,
  "psx": iconPsx,
  "pcsx_rearmed": iconPsx, 
};

// TAMBAHKAN INI: Kamus untuk mengubah nama asli core menjadi nama keren di layar
const categoryLabels = {
  "All": "All",
  "nes": "NES",
  "snes": "SNES",
  "pcsx_rearmed": "PlayStation" // <-- Di sini keajaibannya terjadi
};

const Header = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <header className="w-full h-auto md:h-20 border-b border-gray-800 bg-[#030712] flex flex-col md:flex-row items-center justify-between px-6 py-4 md:py-0 shrink-0 z-20 gap-4">
      <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg shrink-0">
        RETRO ARCADE
      </h1>

      <div className="flex gap-2 overflow-x-auto custom-scrollbar w-full md:w-auto pb-2 md:pb-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
              activeCategory === category
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
            }`}
          >
            {category === "All" ? (
              <span className="text-lg">🎮</span>
            ) : coreIcons[category] ? (
              <img 
                src={coreIcons[category]} 
                alt={`Ikon ${category}`} 
                className="w-5 h-5 object-contain" 
              />
            ) : (
              <span className="text-lg">🕹️</span>
            )}
            
            {/* UBAH BAGIAN INI: Gunakan kamus label. 
                Jika namanya tidak ada di kamus, tampilkan nama aslinya */}
            <span>{categoryLabels[category] || category}</span>
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;