import ProjectShell from "../../components/ProjectShell";
import ProjectHeader from "../../components/ProjectHeader";
import TechLogoGrid from "../../components/TechLogoGrid";
import { Icon } from "../../components/icons";

// ==== Edit konten halaman HRIS di sini ====

const CATEGORY = "Web Application";
const TITLE = "HR Information System";
const SUMMARY =
  "Aplikasi manajemen sumber daya manusia berbasis web untuk mengelola data karyawan, presensi, pengajuan cuti, dan payroll dalam satu dashboard terpusat. Dilengkapi visualisasi data real-time dan sistem akses berbasis peran (admin, HR, karyawan) untuk mendukung proses administrasi kepegawaian yang lebih efisien dan transparan.";
const DEMO_URL = "https://hris-frontend-mu.vercel.app";

const GALLERY = [
  "/myportfolio/images/dashboard.png",
  "/myportfolio/images/employees.png",
  "/myportfolio/images/attendances.png",
  "/myportfolio/images/leaves.png",
  "/myportfolio/images/Organitations.png",
];

const FEATURES = [
  "Dashboard & Visualisasi Data Real-Time: Menampilkan ringkasan statistik kepegawaian, grafik kehadiran, dan metrik penting lainnya dalam bentuk visual yang interaktif.",
  "Manajemen Data Karyawan: Mengelola profil lengkap pegawai, struktur organisasi, dan informasi administratif dalam satu database terpusat yang aman.",
  "Sistem Presensi & Kehadiran: Pencatatan kehadiran harian secara real-time yang terintegrasi dengan alat presensi.",
  "Pengajuan Cuti & Izin Online: Memfasilitasi karyawan untuk mengajukan cuti atau izin secara digital, lengkap dengan alur persetujuan (approval workflow) berjenjang.",
  "Kontrol Akses Berbasis Peran (RBAC): Sistem hak akses berlapis untuk membedakan fungsionalitas bagi admin, HR, dan karyawan biasa guna menjaga keamanan data.",
];

// Logo teknologi yang dipakai di project ini (menggantikan bagian "Skill" + "Journal")
const TECHNOLOGIES = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },
  { name: "Vite", slug: "vite", color: "646CFF" },
  { name: "Vercel", slug: "vercel", color: "ffffff" },
  { name: "Node.js", slug: "/myportfolio/images/nodejs.png", color: "ffffff" },
  { name: "Express.js", slug: "express", color: "ffffff" },
  { name: "Prisma", slug: "prisma", color: "646CFF" },
  { name: "PostgreSQL", slug: "postgresql", color: "646CFF" },
];

export default function ProjectHRIS() {
  return (
    <ProjectShell gallery={GALLERY} galleryAlt={TITLE} features={FEATURES}>
      <ProjectHeader category={CATEGORY} title={TITLE} summary={SUMMARY} demoUrl={DEMO_URL} />

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2 text-sm font-bold">
          <Icon name="layout-dashboard" className="h-4 w-4 text-purple-light" /> Technology Used
        </div>
        <TechLogoGrid techs={TECHNOLOGIES} size="sm" columnsClass="grid-cols-3 sm:grid-cols-4" />
      </div>
    </ProjectShell>
  );
}
