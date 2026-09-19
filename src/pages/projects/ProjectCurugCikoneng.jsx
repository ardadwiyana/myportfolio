import ProjectShell from "../../components/ProjectShell";
import ProjectHeader from "../../components/ProjectHeader";
import JournalCard from "../../components/JournalCard";
import { Icon } from "../../components/icons";

// ==== Edit konten halaman Curug Cikoneng di sini ====

const CATEGORY = "Internet of Things";
const TITLE = "Web Curug Cikoneng";
const SUMMARY =
  "Web application responsif untuk wisata Curug Cikoneng, dilengkapi pemesanan tiket online, penjualan UMKM, pembayaran elektronik, dan QR Code scanner berbasis mikrokontroler untuk verifikasi tiket di pintu masuk.";
const DEMO_URL = null;

const GALLERY = ["/myportfolio/images/CC.jpg"];

const FEATURES = [
  "Pemesanan tiket online yang terintegrasi dengan sistem verifikasi otomatis.",
  "Etalase penjualan produk UMKM lokal langsung dari platform wisata.",
  "Pembayaran elektronik untuk mempermudah transaksi pengunjung.",
  "QR Code scanner berbasis mikrokontroler untuk verifikasi tiket di pintu masuk secara real-time.",
];

const SKILLS = [
  { icon: "cpu", label: "ESP32-CAM" },
  { icon: "wrench", label: "Hardware & Software Installation" },
  { icon: "bug", label: "Hardware & Software Troubleshooting" },
  { icon: "puzzle", label: "Hardware & Software Integration" },
];

const JOURNAL_IMAGE = "/myportfolio/images/Journal1.png";

export default function ProjectCurugCikoneng() {
  return (
    <ProjectShell gallery={GALLERY} galleryAlt={TITLE} features={FEATURES}>
      <ProjectHeader category={CATEGORY} title={TITLE} summary={SUMMARY} demoUrl={DEMO_URL} />

      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold">
          <Icon name="code" className="h-4 w-4 text-purple-light" /> Skill
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span key={s.label} className="pill-tag">
              <Icon name={s.icon} className="h-3.5 w-3.5" />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold">
          <Icon name="book-open" className="h-4 w-4 text-purple-light" /> Journal
        </div>
        <JournalCard image={JOURNAL_IMAGE} label="Journal Curug Cikoneng" />
      </div>
    </ProjectShell>
  );
}
