import React from 'react';

const RetroPlayer = ({ core, gameUrl }) => {
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
      <iframe
        // Memanggil file emulator.html sambil mengirimkan data game-nya
        src={`/emulator.html?core=${core}&gameUrl=${gameUrl}`}
        className="w-full h-full border-none absolute top-0 left-0"
        title="Retro Emulator"
        // Izin ini penting agar suara bisa keluar dan stik/gamepad bisa terbaca
        allow="autoplay; gamepad; cross-origin-isolated"
      ></iframe>
    </div>
  );
};

export default RetroPlayer;