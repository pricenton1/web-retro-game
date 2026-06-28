# 🕹️ Retro Arcade Web Emulator

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![EmulatorJS](https://img.shields.io/badge/EmulatorJS-FF4500.svg?style=for-the-badge&logo=javascript&logoColor=white)

<div align="center">
  <img src="https://via.placeholder.com/800x400.png?text=Retro+Arcade+Screenshot" alt="Retro Arcade Interface Preview" width="100%" />
</div>

<br />

**Retro Arcade** is a modern, browser-based emulation dashboard built to bring classic video games back to life. Designed with a sleek, cinematic interface, this platform allows users to browse, search, and play their favorite 8-bit, 16-bit, and 32-bit console games directly in the browser—no external software installation required.

## ✨ Key Features

* **Cinematic & Responsive UI:** A dark-themed, Netflix-style interface crafted with Tailwind CSS that looks great on both desktop and mobile devices.
* **Smooth 60 FPS Rendering:** Optimized implementation of EmulatorJS ensuring high-quality, lag-free gameplay with smooth 60 fps output.
* **Smart Organization:** 
  * **Dynamic Categories:** Auto-generated navigation tabs based on console systems (NES, SNES, PSX, etc.).
  * **Real-time Search:** Lightning-fast filtering to find specific game titles.
  * **Pagination:** Efficiently handles large game libraries without compromising browser performance.
* **Modular Architecture:** Clean, maintainable, and scalable React codebase separating UI components, data, and logic.

## 🚀 Getting Started (Local Development)

Follow these instructions to set up and run the project on your local machine.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16.x or higher)
* npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   npm install
   npm run dev

## 🎮 How to Add Games (ROMs)
Due to GitHub's file size limits and strict copyright policies, game ROMs are NOT included in this repository. You must provide your own legally obtained files.

To add a game:

Place your ROM file (e.g., mario.nes) into the public/roms/ directory.

Place the corresponding cover image (ideally 600x800px WebP) into the public/covers/ directory.

Open src/data/games.js and add a new entry to the array:

JavaScript
{
  id: 99,
  title: "Your Game Title",
  core: "nes", // Must match EmulatorJS core names (e.g., nes, snes, psx)
  gameUrl: "/roms/your_game_file.nes",
  cover: "/covers/your_cover_image.webp"
}
Note: The .gitignore file is configured to prevent .nes, .sfc, .bin, and .iso files from being pushed to the remote repository.

## ⚖️ Legal Disclaimer
This project is created strictly for educational and historical preservation purposes.

No ROMs are hosted, distributed, or monetized by this repository.

Retro Arcade operates purely as a frontend web interface. Users are solely responsible for ensuring they possess the legal rights to any ROM files they play using this platform.

All trademarks, logos, and game intellectual properties belong to their respective copyright holders.