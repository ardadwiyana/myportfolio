// Semua konten portfolio dipusatkan di sini agar mudah diubah tanpa menyentuh komponen.

export const profile = {
  name: "Arda Dwiyana",
  roles: ["IoT Engineer", "Embedded System", "Automation"],
  badge: "Available for opportunities",
  intro:
    "Lulusan Teknologi Rekayasa Komputer IPB University dengan minat di bidang Internet of Things, Embedded System, dan Sistem Otomatisasi berbasis mikrokontroler ESP32.",
  education: {
    degree: "D4 · Institut Pertanian Bogor",
    detail: "Teknologi Rekayasa Komputer · IPK 3.49/4.00",
  },
  photo: "/myportfolio/images/profil.jpg",
  socials: [
    { icon: "linkedin", url: "https://www.linkedin.com/in/ardadwiyana", label: "LinkedIn" },
    { icon: "instagram", url: "https://www.instagram.com/ardadwiyana", label: "Instagram" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Skills", href: "#skills" },
];

export const experiences = [
  {
    id: "bni",
    company: "PT Bank Negara Indonesia",
    role: "Digital Assistant Intern",
    duration: "6 Bulan",
    description:
      "Staf Operasional & Pelayanan Perbankan yang berfokus pada keunggulan layanan frontline, verifikasi data nasabah, dan pembukaan rekening.",
    tags: [
      { icon: "users", label: "Pelayanan Nasabah" },
      { icon: "mic", label: "Public Speaking" },
      { icon: "lightbulb", label: "Problem Solving" },
      { icon: "landmark", label: "Administrasi Perbankan" },
      { icon: "handshake", label: "Kerjasama Tim" },
    ],
    jobdesc: [
      "Memberikan dukungan teknis dan layanan informasi kepada 70-90 nasabah per hari terkait penggunaan aplikasi dan layanan digital banking.",
      "Melakukan troubleshooting pada aplikasi, akun, dan transaksi digital.",
      "Melakukan verifikasi data dan pengelolaan dokumen administrasi perbankan.",
      "Berkoordinasi dengan tim internal untuk penyelesaian kendala teknis yang lebih kompleks.",
      "Mendukung operasional layanan dan pengelolaan antrean untuk memastikan efisiensi pelayanan.",
    ],
    gallery: ["/myportfolio/images/BNI.jpg", "/myportfolio/images/SertifikatBNI.jpg"],
  },
  {
    id: "bpsi",
    company: "BPSI Agroklimat & Hidrologi Pertanian",
    role: "IoT Engineer Intern",
    duration: "4 Bulan",
    description:
      "Merancang sistem paranet otomatis berbasis IoT untuk mengoptimalkan kondisi greenhouse melalui pengaturan intensitas cahaya dan suhu. Sistem mendukung monitoring real-time, kontrol jarak jauh, kontrol manual, perintah suara, serta otomatisasi buka-tutup paranet berdasarkan data sensor.",
    tags: [
      { icon: "cpu", label: "IoT" },
      { icon: "trending-up", label: "Blynk" },
      { icon: "code", label: "ESP32" },
      { icon: "git-branch", label: "Kicad" },
      { icon: "plug-zap", label: "Wiring" },
      { icon: "bug", label: "Troubleshooting" },
      { icon: "box", label: "Autodesk Fusion 360" },
      { icon: "network", label: "MQTT / I2C" },
      { icon: "wrench", label: "Hand Tools" },
    ],
    jobdesc: [
      "Merancang sistem paranet otomatis berbasis IoT untuk pengendalian cahaya dan suhu greenhouse.",
      "Mengembangkan kontrol logika otomatisasi sistem menggunakan ESP32 dengan bahasa pemograman C/C++.",
      "Mengembangkan mekanisme buka-tutup paranet otomatis menggunakan motor DC.",
      "Membangun dashboard untuk kendali jarak jauh dan monitoring secara real-time menggunakan platform Blynk.",
      "Mengimplementasikan kontrol perintah suara menggunakan Google Assistant.",
      "Melakukan pengujian, kalibrasi, troubleshooting dan optimasi sistem secara menyeluruh.",
    ],
    gallery: [
      "/myportfolio/images/Snaper.jpg",
      "/myportfolio/images/Desain.jpg",
      "/myportfolio/images/Wiring.jpg",
      "/myportfolio/images/SertifikatBPSI.jpg",
      "/myportfolio/images/Journal3.png",
    ],
  },
];

// Data ini hanya untuk kartu preview di grid "Projects" pada halaman Home.
// Konten lengkap tiap halaman detail (skill, journal/tech stack, galeri, fitur)
// sudah dipindah langsung ke masing-masing file di src/pages/projects/,
// supaya tiap halaman project bisa disesuaikan sendiri-sendiri.
export const projects = [
  {
    slug: "hris",
    category: "Web Application",
    title: "HR Information System",
    image: "/myportfolio/images/dashboard.png",
    summary:
      "Aplikasi manajemen sumber daya manusia berbasis web untuk mengelola data karyawan, presensi, pengajuan cuti, dan payroll dalam satu dashboard terpusat. Dilengkapi visualisasi data real-time dan sistem akses berbasis peran (admin, HR, karyawan) untuk mendukung proses administrasi kepegawaian yang lebih efisien dan transparan.",
    journal: "/myportfolio/images/Journal2.png",
  },
  {
    slug: "hidroponik",
    category: "Internet of Things",
    title: "Hidroponik Joglo Kebun Wangi",
    image: "/myportfolio/images/JKW.jpg",
    summary:
      "Sistem kontrol hidroponik cerdas berbasis IoT dan logika fuzzy untuk mengoptimalkan pertumbuhan tanaman kale secara presisi. Monitoring real-time nutrisi, suhu, dan pH dengan kontrol manual dan otomatis berbasis fuzzy.",
    journal: "/myportfolio/images/Journal2.png",
  },
  {
    slug: "curug-cikoneng",
    category: "Internet of Things",
    title: "Web Curug Cikoneng",
    image: "/myportfolio/images/CC.jpg",
    summary:
      "Web application responsif untuk wisata Curug Cikoneng, dilengkapi pemesanan tiket online, penjualan UMKM, pembayaran elektronik, dan QR Code scanner berbasis mikrokontroler untuk verifikasi tiket di pintu masuk.",
    journal: "/myportfolio/images/Journal1.png",
  },
];

export const hardSkills = [
  {
    label: "Technical Support",
    items: [
      { icon: "wrench", label: "Hardware & Software Installation" },
      { icon: "bug", label: "Hardware & Software Troubleshooting" },
      { icon: "puzzle", label: "Hardware & Software Integration" },
    ],
  },
  {
    label: "Computer Networking",
    items: [
      { icon: "network", label: "LAN / WAN" },
      { icon: "globe", label: "TCP/IP" },
    ],
  },
  {
    label: "Microcontroller & Protocol",
    items: [
      { icon: "cpu", label: "ESP32, Arduino" },
      { icon: "git-branch", label: "UART / I2C / SPI / RS-485" },
      { icon: "radio-tower", label: "MQTT" },
      { icon: "lock", label: "HTTP/HTTPS" },
    ],
  },
  {
    label: "Programming Language",
    items: [
      { icon: "code", label: "C/C++, Python, Javascript" },
    ],
  },
  {
    label: "Operating System",
    items: [
      { icon: "monitor", label: "Windows" },
      { icon: "terminal", label: "Linux" },
    ],
  },
];

export const softSkills = [
  { icon: "lightbulb", label: "Problem Solving" },
  { icon: "users", label: "Kerja Sama Tim" },
  { icon: "refresh-cw", label: "Kemampuan Beradaptasi" },
  { icon: "file-text", label: "Dokumentasi Teknis" },
];

export const certifications = [
  {
    name: "Hardware Installation Supervisor",
    issuer: "BNSP — Badan Nasional Sertifikasi Profesi",
    image: "/myportfolio/images/SertifikatBNSP.jpg",
  },
  {
    name: "Digital Assistant",
    issuer: "MagangHub",
    image: "/myportfolio/images/SertifikatBNI.jpg",
  },
  {
    name: "IoT Engineer Intern",
    issuer: "BPSI Agroklimat dan Hidrologi Pertanian",
    image: "/myportfolio/images/SertifikatBPSI.jpg",
  },
];

// Tech stack (logo resmi, diambil dari CDN simple-icons) — bagian baru yang diminta.
export const techStack = [
  { name: "Arduino IDE", slug: "arduino", color: "00979D" },
  { name: "MQTT", slug: "mqtt", color: "660066" },
  { name: "KiCad", slug: "kicad", color: "314CB0" },
  { name: "Fusion 360", slug: "autodesk", color: "0696D7" },
  { name: "MATLAB", slug: "/myportfolio/images/matlab.jpeg", color: "660066" },
  { name: "Blynk", slug: "/myportfolio/images/Blynk.png", color: "660066"},
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },
  { name: "Vite", slug: "vite", color: "646CFF" },
  { name: "Vercel", slug: "vercel", color: "ffffff" },
  { name: "Node.js", slug: "/myportfolio/images/nodejs.png", color: "ffffff" },
  { name: "Express.js", slug: "express", color: "ffffff" },
  { name: "Prisma", slug: "prisma", color: "646CFF" },
  { name: "PostgreSQL", slug: "postgresql", color: "646CFF" },
  { name: "Firebase", slug: "firebase", color: "FFCA28" },
];
