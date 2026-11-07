/**
 * ===================================================================================
 * PORTOFOLIO DATA & KONFIGURASI KONTEN
 * Hugo Antonio Hien Wijaya - Software Engineer & Full-Stack Developer
 * ===================================================================================
 * Berkas ini adalah pusat pengaturan seluruh isi website:
 * 1. FOTO PROFIL & GAMBAR PROYEK -> Lihat bagian [BAGIAN 1] di bawah.
 * 2. DATA DIRI & MEDIA SOSIAL   -> Lihat bagian [BAGIAN 3] `PROFILE_DATA`.
 * 3. DAFTAR PROYEK / PORTFOLIO   -> Lihat bagian [BAGIAN 4] `PROJECTS_DATA`.
 * 4. SERTIFIKASI RESMI           -> Lihat bagian [BAGIAN 5] `CERTIFICATIONS_DATA`.
 * 5. RIWAYAT PENDIDIKAN          -> Lihat bagian [BAGIAN 6] `EDUCATION_DATA`.
 * 6. PENGALAMAN KERJA            -> Lihat bagian [BAGIAN 7] `EXPERIENCE_DATA`.
 * 7. MATRIKS KEAHLIAN (SKILLS)   -> Lihat bagian [BAGIAN 8] `SKILL_CATEGORIES`.
 * ===================================================================================
 */

/* ===================================================================================
 * [BAGIAN 1] FOTO PROFIL & GAMBAR PROYEK
 * -----------------------------------------------------------------------------------
 * Cara Mengganti Foto / Gambar:
 * 1. Simpan berkas foto/gambar baru Anda ke dalam folder: `src/assets/images/`
 * 2. Impor berkas tersebut menggunakan sintaks `import namaVariabel from '../assets/images/nama_file.jpg';`
 * 3. Gunakan namaVariabel tersebut pada `avatar` atau `image` di bawah.
 * =================================================================================== */
import hugoAvatar from '../assets/images/hugo_profile_portrait_1793280037537.jpg';
import projectFintech from '../assets/images/project_fintech_platform_1793280038169.jpg';
import projectMobile from '../assets/images/project_mobile_app_1793280039122.jpg';
import projectAi from '../assets/images/project_ai_workflow_1793280037901.jpg';

/* ===================================================================================
 * [BAGIAN 2] DEFINISI TIPE DATA (TYPESCRIPT INTERFACES)
 * =================================================================================== */
export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Mobile & Fintech' | 'Cloud & AI' | 'Open Source';
  year: string;
  description: string;
  image: string; // Menggunakan variabel import dari [BAGIAN 1]
  technologies: string[];
  metrics?: string;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issuerLogoText: string;
  useNvidiaLogo?: boolean;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  verificationUrl: string;
  category: string;
  skills: string[];
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  honors: string;
  description: string;
  relevantCourses: string[];
  achievements: string[];
  useBinusLogo?: boolean;
  logoUrl?: string;
  logoAlt?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyContributions: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; note: string }[];
}

/* ===================================================================================
 * [BAGIAN 3] DATA DIRI, BIOGRAFI & TAUTAN MEDIA SOSIAL (PROFILE_DATA)
 * -----------------------------------------------------------------------------------
 * Ubah nama, peran, kontak email, nomor WhatsApp, serta tautan akun LinkedIn/GitHub Anda di sini.
 * =================================================================================== */
export const PROFILE_DATA = {
  // Nama Lengkap dan Panggilan
  name: 'Hugo Antonio Hien Wijaya',
  shortName: 'Hugo Antonio',

  // Profesi / Jabatan Utama
  role: 'Undergraduate Student of Computer Science at Bina Nusantara University',

  // Slogan / Tagline Singkat
  tagline: 'If jatuh then bangkit',

  // Lokasi & Ketersediaan Kerja
  location: 'Malang, Indonesia · Tersedia untuk Kolaborasi',

  // Informasi Kontak Langsung
  email: 'djojowyn@gmail.com',
  phone: '+62 857 5467 6175',

  // Tautan Langsung Chat WhatsApp (Pesan Otomatis)
  whatsappUrl: 'https://wa.me/6285754676175?text=Halo%20Hugo%20Antonio,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.',

  // Akun Jejaring Sosial & Media
  socials: {
    linkedin: 'https://www.linkedin.com/in/hugo-antonio-hien-wijaya-a28583372/',
    github: 'https://github.com/alberthugo17',
    email: 'mailto:djojowyn@gmail.com',
  },

  // Statistik Utama di Bagian Hero
  stats: [
    { label: 'Tahun Pengalaman', value: '2+' },
    { label: 'Proyek Selesai', value: '2+' },
    { label: 'Sertifikasi Global', value: '5' },
    { label: 'Uptime & Kualitas', value: '99.9%' },
  ],

  // Biografi Singkat & Latar Belakang
  bio: `Saya berfokus pada Artificial Intelligence, Computer Vision, dan Robotika. Saya senang mengubah gagasan teknologi menjadi solusi praktis yang dapat diterapkan di dunia nyata. Saya selalu antusias untuk terus belajar, memecahkan masalah yang kompleks, serta membangun teknologi hebat bersama tim yang inovatif.`,

  // Foto Profil (mengacu pada import di BAGIAN 1)
  avatar: hugoAvatar,
};

/* ===================================================================================
 * [BAGIAN 4] DAFTAR PROYEK (PROJECTS_DATA)
 * -----------------------------------------------------------------------------------
 * Tambah, edit, atau hapus proyek portofolio Anda di sini.
 * Setiap proyek mencakup judul, gambar tangkapan layar, teknologi, deskripsi, tautan demo & GitHub.
 * =================================================================================== */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fineo-enterprise',
    title: '5-DOF robotic arm with computer vision',
    tagline: 'Project dalam rangka penelitian integrasi kontrol gestur tangan pada lengan.',
    category: 'Open Source',
    year: '2025',
    description: 'Lengan robot 5 derajat DOF yang dikendalikan melalui pelacakan gestur tangan berbasis computer science secara real time. Sistem ini mengintegrasikan Python (OpenCV & MediaPipe) dengan Arduino Uno, menggunakaninverse kinematics dan komunikasi serial untuk pengendalian servo yang presisi.',
    image: projectFintech, // Foto/Screenshot Proyek
    technologies: ['Python', 'C++', 'Mediapipe', 'Open-CV', 'Arduino', 'Robotics', 'Hardware'],
    metrics: 'Berhasil mengintegrasikan kontrol gestur tangan pada perangkat keras lengan robot',
    highlights: [
      'Pengendalian robot dengan bebas namun tetap stabil dan akurat.',
      'Sistem kontrol gestur tangan tanpa sentuhan fisik.',
      'Pengendalian merangkat keras dengan responsif, akurat, dan minim delay.',
      'Integrasi sistem kontrol dengan perangkat keras secara real-time.'
    ],
    liveUrl: 'https://drive.google.com/file/d/10Vf0pqVYaNtOGiDEo6p5sE7-wMWHkfCt/view', // Tautan Live Demo
    githubUrl: 'https://github.com/hugoantonio/fineo-fintech-core', // Tautan Repositori GitHub
    featured: true, // true jika ingin ditampilkan lebih besar di Bento Grid
  },
  {
    id: 'payflex-mobile',
    title: 'PayFlex Digital Wallet & Smart Logistics',
    tagline: 'Aplikasi dompet digital terintegrasi pelacak logistik live berbasis geofencing.',
    category: 'Mobile & Fintech',
    year: '2024',
    description: 'Solusi terpadu untuk UMKM dan pengguna ritel yang memadukan pembayaran instan QRIS, pelacakan rute kurir last-mile secara langsung di peta, dan manajemen multi-akun.',
    image: projectMobile,
    technologies: ['React Native', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Express.js', 'PostGIS'],
    metrics: '99.4% akurasi estimasi kedatangan kurir dan 15.000+ pengguna aktif bulanan',
    highlights: [
      'Integrasi standar QRIS Bank Indonesia untuk transaksi instan yang mulus.',
      'Pelacakan titik kurir real-time menggunakan websocket dan algoritma perataan path rute.',
      'Offline-first caching menggunakan SQLite lokal dan sinkronisasi otomatis saat terhubung kembali.',
      'Desain antarmuka modern yang ramah satu tangan (one-handed thumb zone) untuk efisiensi pengguna.'
    ],
    liveUrl: 'https://payflex-showcase.example.com',
    githubUrl: 'https://github.com/hugoantonio/payflex-mobile-suite',
    featured: true,
  },
  {
    id: 'cloudflow-ai',
    title: 'CloudFlow Pipeline & AI Orchestrator',
    tagline: 'Engine orkestrasi workflow data stream dan deteksi anomali machine learning.',
    category: 'Cloud & AI',
    year: '2023 - 2024',
    description: 'Platform komputasi cloud terdistribusi dengan antarmuka grafis node-based untuk merancang, menguji, dan memantau pipeline data lakehouse skala besar secara otomatis.',
    image: projectAi,
    technologies: ['Next.js', 'Python FastAPI', 'Apache Kafka', 'Docker', 'Google Cloud Run', 'Terraform'],
    metrics: 'Mengolah throughput data 2.4 TB per jam dengan auto-scaling otomatis',
    highlights: [
      'Visual interactive node canvas untuk perancangan alur ingestion, ETL, dan enrich model.',
      'Penerapan model AI untuk deteksi spike anomali transaksi mencurigakan secara otomatis.',
      'Infrastructure as Code (IaC) modular menggunakan Terraform di Google Cloud Platform.',
      'Logging dan monitoring terpusat dengan OpenTelemetry dan Prometheus metrics.'
    ],
    liveUrl: 'https://cloudflow-preview.example.com',
    githubUrl: 'https://github.com/hugoantonio/cloudflow-orchestrator',
    featured: true,
  },
  {
    id: 'hyperdocs-collab',
    title: 'HyperDocs – Real-Time Knowledge Base',
    tagline: 'Sistem dokumentasi teknis kolaboratif instan dengan CRDT synchronization.',
    category: 'Full-Stack',
    year: '2023',
    description: 'Aplikasi catatan dan dokumentasi tim teknik berkecepatan kilat yang memungkinkan ratusan engineer menyunting dokumen bersama tanpa konflik data.',
    image: projectFintech,
    technologies: ['React', 'TypeScript', 'Go', 'Yjs CRDT', 'Tailwind CSS', 'Docker'],
    metrics: 'Sinkronisasi sub-50ms antar klien dengan konsumsi memori 60% lebih hemat',
    highlights: [
      'Resolusi konflik terdistribusi tanpa server locking menggunakan Conflict-free Replicated Data Types (CRDT).',
      'Pencarian teks instan fuzzy-matching yang mengeksekusi di web worker lokal.',
      'Sistem granular permission (Admin, Editor, Reviewer, Viewer) dengan audit trail lengkap.'
    ],
    liveUrl: 'https://hyperdocs.example.com',
    githubUrl: 'https://github.com/hugoantonio/hyperdocs-collaborative',
    featured: false,
  },
  {
    id: 'nusantara-ui',
    title: 'Nusantara UI – Accessible Design System',
    tagline: 'Koleksi komponen UI headless dan accessible (WAI-ARIA) berperforma tinggi.',
    category: 'Open Source',
    year: '2024',
    description: 'Pustaka komponen React dan Tailwind modern tanpa dependensi berat, dioptimalkan untuk aksesibilitas keyboard dan fleksibilitas token desain skala besar.',
    image: projectMobile,
    technologies: ['TypeScript', 'React 19', 'Tailwind CSS', 'Radix Primitives', 'Storybook', 'Vitest'],
    metrics: '1.200+ bintang GitHub & digunakan oleh puluhan proyek web open source',
    highlights: [
      'Kepatuhan 100% pada panduan aksesibilitas WCAG 2.1 Level AA.',
      'Dukungan penuh navigasi keyboard dan screen reader.',
      'Ukuran bundel ultra-ringan dengan tree-shaking native.'
    ],
    liveUrl: 'https://nusantara-ui.dev',
    githubUrl: 'https://github.com/hugoantonio/nusantara-ui',
    featured: false,
  },
];

/* ===================================================================================
 * [BAGIAN 5] DAFTAR SERTIFIKASI PROFESIONAL (CERTIFICATIONS_DATA)
 * -----------------------------------------------------------------------------------
 * Tambah atau perbarui kredensial sertifikasi resmi Anda di sini.
 * =================================================================================== */
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'nvidia-fundamentals-deep-learning',
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    issuerLogoText: 'NVIDIA',
    useNvidiaLogo: true,
    issueDate: '2024',
    expiryDate: 'Seumur Hidup',
    credentialId: '7rK4fCPJTyKB5HP7bjZNFQ',
    verificationUrl: 'https://learn.nvidia.com/certificates?id=7rK4fCPJTyKB5HP7bjZNFQ#',
    category: 'Artificial Intelligence',
    skills: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'PyTorch', 'GPU Acceleration', 'Model Optimization'],
    description: 'Sertifikasi kompetensi resmi dari NVIDIA yang memvalidasi kemampuan praktis dalam merancang, melatih, dan mengoptimalkan arsitektur neural networks untuk computer vision serta akselerasi komputasi GPU.',
  },
];

/* ===================================================================================
 * [BAGIAN 6] RIWAYAT PENDIDIKAN FORMAL & AKADEMIK (EDUCATION_DATA)
 * -----------------------------------------------------------------------------------
 * Atur riwayat perkuliahan, universitas, IPK, dan mata kuliah inti di sini.
 * =================================================================================== */
export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'binus-university',
    degree: 'Sarjana Komputer (S.Kom.) – Computer Science / Teknik Informatika',
    institution: 'BINUS University (Bina Nusantara)',
    useBinusLogo: true,
    period: '2026 – Sekarang',
    location: 'Malang, Jawa Timur',
    grade: 'Mahasiswa Aktif',
    honors: 'BNCC · HIMTI · KMK BINUS University',
    description: 'Menempuh pendidikan tinggi di bidang Computer Science dengan fokus mendalam pada rekayasa perangkat lunak modern, komputasi terdistribusi, algoritma lanjutan, serta eksplorasi riset Machine Learning dan Deep Learning.',
    relevantCourses: [
      'Struktur Data & Analisis Algoritma',
      'Pemrograman Berorientasi Objek Lanjut',
      'Sistem Basis Data & Cloud Computing',
      'Artificial Intelligence & Deep Learning Foundations'
    ],
    achievements: [
      'Anggota aktif Bina Nusantara Computer Club (BNCC).',
      'Anggota aktif Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS University.',
      'Anggota aktif Keluarga Mahasiswa Katolik (KMK) BINUS University.',
      'Eksplorasi riset kecerdasan buatan terapan, workshop teknologi, dan pengembangan proyek perangkat lunak modern.'
    ],
  },
  {
    id: 'sma-vanlith',
    degree: 'Pendidikan Menengah Atas (SMA)',
    institution: 'SMA Pangudi Luhur Van Lith Muntilan',
    period: '2023 – 2026',
    location: 'Muntilan, Magelang, Jawa Tengah',
    grade: 'Siswa Aktif Berprestasi',
    honors: 'Kepanitiaan Sidang Akademi & Kepemimpinan Berasrama',
    description: 'Menempuh pendidikan di sekolah berasrama dengan fokus pembentukan karakter, kepemimpinan, integritas, keunggulan akademik, serta eksplorasi sains, matematika lanjut, dan teknologi komputasi.',
    relevantCourses: [
      'Matematika Lanjut & Logika Algoritmik',
      'Fisika & Ilmu Pengetahuan Alam',
      'Pengembangan Kepemimpinan & Organisasi',
      'Teknologi Informasi & Eksplorasi AI'
    ],
    achievements: [
      'Panitia Sidang Akademi Istimewa SMA Pangudi Luhur Van Lith Muntilan.',
      'Aktif dalam kegiatan akademik berasrama serta pengembangan minat bakat di bidang kecerdasan buatan (Artificial Intelligence & Deep Learning).'
    ],
  },
  {
    id: 'smp-wijayakusuma',
    degree: 'Pendidikan Menengah Pertama (SMP)',
    institution: 'SMP Wijaya Kusuma',
    period: '2020 – 2023',
    location: 'Seruyan, Kalimantan Tengah',
    grade: 'Lulusan Berprestasi Akademik',
    honors: 'Peserta & Peraih Prestasi Kompetisi Sains Nasional (KSN/OSN)',
    description: 'Membangun fondasi logika matematika dan sains yang kuat serta aktif berpartisipasi dan meraih prestasi dalam ajang seleksi olimpiade sains tingkat kabupaten dan provinsi.',
    relevantCourses: [
      'Matematika Lanjut & Pemecahan Masalah',
      'Ilmu Pengetahuan Alam (Fisika & Biologi)',
      'Dasar Algoritma & Logika Berpikir'
    ],
    achievements: [
      'Meraih peringkat dan mewakili sekolah dalam ajang Kompetisi Sains Nasional (KSN / OSN) Tingkat Kabupaten/Provinsi Bidang IPA & Matematika.',
      'Siswa berprestasi akademik di tingkat sekolah.'
    ],
  },
];

/* ===================================================================================
 * [BAGIAN 7] PENGALAMAN KERJA & KARIER (EXPERIENCE_DATA)
 * -----------------------------------------------------------------------------------
 * Atur linimasa karier, nama perusahaan, deskripsi pekerjaan, dan capaian terukur.
 * =================================================================================== */
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Software Engineer',
    company: 'Tech Scale-Up & Digital Solutions',
    period: '2024 – Sekarang',
    location: 'Malang (Hybrid)',
    type: 'Purna Waktu (Full-time)',
    description: 'Bertanggung jawab memimpin arsitektur sistem frontend dan backend pada layanan aplikasi berorientasi pelanggan dengan trafik tinggi.',
    keyContributions: [
      'Memangkas waktu render halaman web sebesar 42% melalui implementasi SSR terarah, code-splitting otomatis, dan caching aset di CDN.',
      'Membangun API gateway terpusat yang melayani 200.000+ request harian dengan tingkat uptime 99.98%.',
      'Menerapkan standardisasi code review dan pipeline automated testing yang menekan bug rilis ke produksi sebesar 35%.'
    ],
    skills: ['TypeScript', 'React 19', 'Next.js', 'Go', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineer Associate / Intern',
    company: 'Fintech Innovation Lab',
    period: '2023 – 2024',
    location: 'Malang',
    type: 'Magang & Kontrak',
    description: 'Mengembangkan fitur modul perbankan terbuka (open banking), integrasi payment gateway QRIS, dan sistem rekonsiliasi data.',
    keyContributions: [
      'Mengembangkan microservice integrasi QRIS dan virtual account antar bank.',
      'Meningkatkan cakupan pengujian unit test dan integration test dari 60% menjadi 92%.',
      'Berkolaborasi erat dengan tim Product Designer untuk memastikan UX memenuhi standar aksesibilitas tinggi.'
    ],
    skills: ['React', 'Node.js', 'Express', 'Redis', 'Jest', 'Tailwind CSS'],
  },
];

/* ===================================================================================
 * [BAGIAN 8] KEAHLIAN TEKNIS & SKILL MATRIX (SKILL_CATEGORIES)
 * -----------------------------------------------------------------------------------
 * Atur nama teknologi, persentase keahlian (level 0 - 100), dan deskripsi pendukung.
 * =================================================================================== */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Membangun antarmuka modern yang cepat, accessible, responsif, dan interaktif.',
    skills: [
      { name: 'TypeScript & JavaScript (ESNext)', level: 95, note: 'Strict typing, modern patterns' },
      { name: 'React 19 & Next.js', level: 94, note: 'Server Components, Hooks, State' },
      { name: 'Tailwind CSS & Modern CSS', level: 96, note: 'Zero-runtime, responsive layouts' },
      { name: 'Framer Motion & Animasi Web', level: 90, note: 'Smooth gestures, micro-interactions' },
      { name: 'Performance Optimization & Web Vitals', level: 88, note: 'LCP, CLS, tree-shaking, lazy load' },
    ],
  },
  {
    title: 'Backend & Sistem Terdistribusi',
    description: 'Merancang API andal, komunikasi event-driven, dan struktur data yang efisien.',
    skills: [
      { name: 'Node.js & Express.js', level: 92, note: 'High concurrency, async pipelines' },
      { name: 'Golang (Go)', level: 85, note: 'Microservices, goroutines, REST API' },
      { name: 'Python (FastAPI)', level: 84, note: 'Data processing, async web services' },
      { name: 'RESTful API & GraphQL', level: 90, note: 'Contract-first design, type-safe schema' },
      { name: 'WebSockets & Real-time Sync', level: 88, note: 'Bidirectional streaming, low-latency' },
    ],
  },
  {
    title: 'Basis Data & Cache',
    description: 'Pemodelan skema relasional, indeksasi kueri teroptimasi, dan memori cache.',
    skills: [
      { name: 'PostgreSQL & MySQL', level: 91, note: 'ACID compliance, complex queries, indexing' },
      { name: 'Redis In-Memory Cache', level: 89, note: 'Pub/Sub, rate-limiting, session store' },
      { name: 'MongoDB & NoSQL', level: 82, note: 'Document stores, flexible schemas' },
      { name: 'Prisma & Drizzle ORM', level: 90, note: 'Type-safe database migrations' },
    ],
  },
  {
    title: 'Cloud, DevOps & Tooling',
    description: 'Otomatisasi penyediaan infrastruktur, kontainerisasi, dan pipeline rilis aman.',
    skills: [
      { name: 'Amazon Web Services (AWS)', level: 88, note: 'EC2, S3, RDS, Lambda, CloudFront' },
      { name: 'Google Cloud Platform (GCP)', level: 87, note: 'Cloud Run, GKE, IAM, Cloud Build' },
      { name: 'Docker & Kubernetes', level: 86, note: 'Containerization, cluster management' },
      { name: 'Terraform (IaC)', level: 82, note: 'Automated reproducible infrastructure' },
      { name: 'Git, GitHub Actions CI/CD', level: 93, note: 'Automated testing, continuous deployment' },
    ],
  },
];
