# Arda Dwiyana — Portfolio (React + Tailwind v4)

Rebuild dari portfolio statis (HTML/CSS/JS) menjadi struktur React modern, tanpa mengubah tata letak asli.

## Tech Stack

- **React 18** + **Vite 5** — struktur komponen, routing per-halaman project
- **Tailwind CSS v4** (`@tailwindcss/vite`, CSS-first `@theme`) — styling utility-first
- **lucide-react** — seluruh ikon (menggantikan Font Awesome)
- **framer-motion** — animasi reveal-on-scroll, transisi navbar, hover, modal, slider gambar
- **react-router-dom** — routing SPA (`/`, `/project/:slug`)

## Struktur Proyek

```
src/
  data/portfolio.js        # semua konten (profil, experience, project, skill) — edit di sini
  hooks/                    # useTyping (efek ketik), useScrollSpy (navbar aktif)
  context/ModalContext.jsx  # state global untuk preview gambar fullscreen
  components/
    icons.jsx                # mapping nama ikon -> lucide-react
    Navbar.jsx, Footer.jsx, ImageModal.jsx, Reveal.jsx, TechStack.jsx
    sections/                # Hero, Experience, Projects, Skills
  pages/
    Home.jsx
    ProjectDetail.jsx        # halaman detail generik untuk semua project (data-driven)
public/images/               # seluruh aset gambar asli
```

## Menjalankan Secara Lokal

```bash
npm install
npm run dev       # buka http://localhost:5173
npm run build     # build produksi ke folder dist/
npm run preview   # preview hasil build
```

## Yang Baru Dibanding Versi Asli

- **Tech Stack section** (di bagian Skills) — logo brand asli (Arduino, ESP32, C++, Python, Firebase, MySQL, MQTT, KiCad, dll) diambil dari CDN `simpleicons.org`, dengan fallback teks otomatis jika logo gagal dimuat.
- **Slider galeri project** pada halaman detail HRIS kini benar-benar berfungsi (versi asli punya tombol slider yang tidak terhubung ke apa pun).
- Animasi halus (fade + slide reveal saat scroll, hover lift pada card, transisi navbar aktif, modal gambar dengan scale/fade) menggunakan `framer-motion` — tata letak & urutan konten tetap sama seperti desain asli.

## Mengganti Konten

Seluruh teks, tag skill, pengalaman kerja, dan daftar project ada di satu file: `src/data/portfolio.js`. Tidak perlu menyentuh komponen untuk mengubah isi.
