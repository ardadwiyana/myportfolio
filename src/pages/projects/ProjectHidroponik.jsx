import ProjectShell from "../../components/ProjectShell";
import ProjectHeader from "../../components/ProjectHeader";
import JournalCard from "../../components/JournalCard";
import { Icon } from "../../components/icons";

// ==== Edit konten halaman Hidroponik di sini ====

const CATEGORY = "Internet of Things";
const TITLE = "Hidroponik Joglo Kebun Wangi";
const SUMMARY =
  "Sistem kontrol hidroponik cerdas berbasis IoT dan logika fuzzy untuk mengoptimalkan pertumbuhan tanaman kale secara presisi dan adaptif. Sistem mendukung pemantauan real-time terhadap parameter nutrisi, suhu, dan pH, serta dilengkapi fitur kontrol manual pada katup dan pompa serta kontrol otomatis berbasis logika fuzzy guna menjaga stabilitas ekosistem hidroponik secara efisien, responsif, dan minim intervensi.";
const DEMO_URL = "https://monitoring-iot-main-final.vercel.app/";

const GALLERY = ["/myportfolio/images/JKW.jpg"];

const FEATURES = [
  "Merancang dan merakit hardware sistem hidroponik berbasis IoT, termasuk integrasi sensor, relay, pompa, dan katup.",
  "Mengintegrasikan hardware dengan Firebase dan web dashboard untuk monitoring serta kontrol perangkat secara real-time.",
  "Melakukan instalasi, pengkabelan, dan kalibrasi sensor pH, suhu, dan nutrisi agar pembacaan data akurat dan stabil.",
  "Menguji performa sistem kontrol otomatis berbasis logika fuzzy serta memastikan komunikasi data antar perangkat berjalan responsif.",
  "Melakukan troubleshooting dan optimasi pada perangkat keras, koneksi IoT, dan sistem monitoring berbasis web.",
];

const SKILLS = [
  { icon: "cpu", label: "ESP8266, Arduino" },
  { icon: "droplets", label: "Sensor TDS" },
  { icon: "flask-conical", label: "Sensor pH" },
  { icon: "thermometer", label: "Sensor Suhu" },
  { icon: "flame", label: "Firebase" },
  { icon: "sigma", label: "MATLAB" },
];

const JOURNAL_IMAGE = "/myportfolio/images/Journal2.png";

export default function ProjectHidroponik() {
  return (
    <ProjectShell gallery={GALLERY} galleryAlt={TITLE} features={FEATURES} featuresTitle="Job Description">
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
        <JournalCard image={JOURNAL_IMAGE} label="Journal Hidroponik" />
      </div>
    </ProjectShell>
  );
}
