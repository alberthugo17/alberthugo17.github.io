export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Mobile & Fintech' | 'Cloud & AI' | 'Open Source';
  year: string;
  description: string;
  image: string;
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
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  verificationUrl: string;
  category: 'Cloud' | 'Frontend' | 'DevOps & Architecture';
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

export const PROFILE_DATA = {
  name: 'Hugo Antonio Hien Wijaya',
  shortName: 'Hugo Antonio',
  role: 'Software Engineer & Full-Stack Developer',
  tagline: 'Membangun aplikasi web mutakhir dengan arsitektur tangguh, performa tinggi, dan pengalaman pengguna yang elegan.',
  location: 'Jakarta, Indonesia · Tersedia untuk Kolaborasi Global & Remote',
  email: 'djojowyn@gmail.com',
  phone: '+62 812-8899-2310',
  whatsappUrl: 'https://wa.me/6281288992310?text=Halo%20Hugo%20Antonio,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/hugoantonio/',
    github: 'https://github.com/hugoantonio',
    email: 'mailto:djojowyn@gmail.com',
  },
  stats: [
    { label: 'Tahun Pengalaman', value: '4+' },
    { label: 'Proyek Selesai', value: '25+' },
    { label: 'Sertifikasi Global', value: '5' },
    { label: 'Uptime & Kualitas', value: '99.9%' },
  ],
  bio: `Saya seorang Software Engineer dan Full-Stack Developer yang berfokus pada arsitektur web modern, sistem terdistribusi, dan user interface yang presisi. Berpengalaman dalam merancang aplikasi skala enterprise menggunakan ekosistem TypeScript, React, Node.js, Go, serta orkestrasi cloud modern di AWS dan Google Cloud. Menekankan performa kode yang optimal, desain yang intuitif, dan rekayasa perangkat lunak berstandar industri.`,
  avatar: '/src/assets/images/hugo_profile_portrait_1793280037537.jpg',
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fineo-enterprise',
    title: 'Fineo Core – Real-time Fintech Dashboard',
    tagline: 'Platform analitik portofolio keuangan dan rekonsiliasi transaksi otomatis.',
    category: 'Full-Stack',
    year: '2024',
    description: 'Sistem dashboard finansial komprehensif yang memproses jutaan transaksi mutasi rekening, menyajikan visualisasi analitik real-time, dan mengotomatiskan rekonsiliasi pembayaran antar bank.',
    image: '/src/assets/images/project_fintech_platform_1793280038169.jpg',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets'],
    metrics: 'Memproses $1.2M+ volume transaksi harian dengan latensi respons <80ms',
    highlights: [
      'Arsitektur microservices berorientasi event menggunakan Redis Streams dan message queuing.',
      'Sistem visualisasi data performa tinggi berbasis SVG dan Canvas dengan zero-lag interaction.',
      'Enkripsi multi-layer sesuai standar keamanan perbankan OWASP dan enkripsi transit TLS 1.3.',
      'Dashboard responsif sempurna pada layar mobile hingga monitor ultrawide.'
    ],
    liveUrl: 'https://demo-fineo.example.com',
    githubUrl: 'https://github.com/hugoantonio/fineo-fintech-core',
    featured: true,
  },
  {
    id: 'payflex-mobile',
    title: 'PayFlex Digital Wallet & Smart Logistics',
    tagline: 'Aplikasi dompet digital terintegrasi pelacak logistik live berbasis geofencing.',
    category: 'Mobile & Fintech',
    year: '2024',
    description: 'Solusi terpadu untuk UMKM dan pengguna ritel yang memadukan pembayaran instan QRIS, pelacakan rute kurir last-mile secara langsung di peta, dan manajemen multi-akun.',
    image: '/src/assets/images/project_mobile_app_1793280039122.jpg',
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
    image: '/src/assets/images/project_ai_workflow_1793280037901.jpg',
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
    image: '/src/assets/images/project_fintech_platform_1793280038169.jpg',
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
    image: '/src/assets/images/project_mobile_app_1793280039122.jpg',
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

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'aws-saa',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    issuerLogoText: 'AWS',
    issueDate: 'Februari 2024',
    expiryDate: 'Februari 2027',
    credentialId: 'AWS-SAA-83921849',
    verificationUrl: 'https://aws.amazon.com/verification',
    category: 'Cloud',
    skills: ['Cloud Architecture', 'AWS VPC & Networking', 'Serverless (Lambda)', 'ECS & Containers', 'High Availability'],
    description: 'Memvalidasi kemampuan komprehensif dalam merancang arsitektur cloud AWS yang aman, andal, berkinerja tinggi, dan efisien dari segi biaya.',
  },
  {
    id: 'gcp-pca',
    title: 'Google Cloud Certified: Professional Cloud Architect',
    issuer: 'Google Cloud',
    issuerLogoText: 'GCP',
    issueDate: 'Oktober 2023',
    expiryDate: 'Oktober 2026',
    credentialId: 'GCP-PCA-5729104',
    verificationUrl: 'https://google.accredible.com',
    category: 'Cloud',
    skills: ['Google Kubernetes Engine (GKE)', 'Cloud Run', 'IAM Security', 'BigQuery Analytics', 'Infrastructure as Code'],
    description: 'Sertifikasi profesional tingkat lanjut untuk merancang dan mengelola solusi bisnis berskala enterprise pada ekosistem Google Cloud Platform.',
  },
  {
    id: 'meta-fe',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    issuerLogoText: 'META',
    issueDate: 'Juni 2023',
    expiryDate: 'Seumur Hidup',
    credentialId: 'META-FE-912048',
    verificationUrl: 'https://coursera.org/verify/professional-cert/META-FE-912048',
    category: 'Frontend',
    skills: ['Advanced React Patterns', 'State Architecture', 'Web Performance', 'Responsive Design', 'Jest & Unit Testing'],
    description: 'Program kurikulum mendalam dari Meta yang mencakup pengembangan frontend mutakhir, arsitektur komponen React, dan pengujian aplikasi web modern.',
  },
  {
    id: 'hashicorp-terraform',
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    issuerLogoText: 'TERRAFORM',
    issueDate: 'Desember 2023',
    expiryDate: 'Desember 2025',
    credentialId: 'HC-TA-382910',
    verificationUrl: 'https://hashicorp.credly.com',
    category: 'DevOps & Architecture',
    skills: ['Infrastructure as Code (IaC)', 'Terraform Modules', 'Multi-Cloud Provisioning', 'State Management'],
    description: 'Memvalidasi keahlian operasional penyediaan infrastruktur multi-cloud secara deklaratif dan otomatisasi pipeline CI/CD.',
  },
  {
    id: 'cka-kubernetes',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    issuerLogoText: 'CKA',
    issueDate: 'Mei 2024',
    expiryDate: 'Mei 2027',
    credentialId: 'CKA-2849103',
    verificationUrl: 'https://cncf.io/certification/cka',
    category: 'DevOps & Architecture',
    skills: ['Kubernetes Cluster Admin', 'Pod Scheduling', 'Ingress & Network Policies', 'Cluster Troubleshooting'],
    description: 'Sertifikasi berbasis ujian praktik intensif mengelola konfigurasi, pemecahan masalah, dan keamanan klaster produksi Kubernetes.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'univ-cs',
    degree: 'Sarjana Komputer (S.Kom.) – Teknik Informatika',
    institution: 'Universitas Terkemuka Indonesia (Computer Science)',
    period: '2020 – 2024',
    location: 'Indonesia',
    grade: 'IPK: 3.86 / 4.00 (Predikat Cum Laude)',
    honors: 'Lulusan Terbaik Fakultas Ilmu Komputer dengan Predikat Kehormatan',
    description: 'Fokus mendalam pada rekayasa perangkat lunak skala besar, arsitektur sistem terdistribusi, interaksi manusia-komputer, dan kecerdasan buatan terapan.',
    relevantCourses: [
      'Arsitektur Sistem Terdistribusi',
      'Desain & Analisis Algoritma Lanjut',
      'Manajemen Basis Data & Relasional',
      'Rekayasa Perangkat Lunak Berorientasi Objek',
      'Keamanan Jaringan & Kriptografi',
      'Pengembangan Aplikasi Berbasis Web & Mobile'
    ],
    achievements: [
      'Ketua Divisi Riset & Teknologi pada Himpunan Mahasiswa Teknik Informatika (2022 - 2023).',
      'Juara 1 Hackathon Pengembangan Solusi Digital Tingkat Nasional (2023).',
      'Penulis Skripsi: "Rancang Bangun Arsitektur Microservices Terdistribusi untuk Efisiensi Pemrosesan Transaksi Finansial Skala Besar".'
    ],
  },
  {
    id: 'bangkit-academy',
    degree: 'Bangkit Academy Graduate – Cloud Computing Track',
    institution: 'Google, GoTo, Tokopedia, Traveloka (Kemendikbudristek)',
    period: 'Februari 2023 – Juli 2023',
    location: 'Jakarta, Indonesia',
    grade: 'Predikat: Top Distinction Graduate (Top 5%)',
    honors: 'Top 10 Best Capstone Project Se-Indonesia',
    description: 'Program akselerasi talenta digital teknologi intensif binaan Google yang mencakup Cloud Architecture, deployment skala besar, CI/CD, dan kolaborasi lintas disiplin ilmu.',
    relevantCourses: [
      'Google Cloud Computing Specialization',
      'Automated Testing & Continuous Delivery',
      'Serverless Microservices Architecture',
      'Professional Soft Skills & Tech Leadership'
    ],
    achievements: [
      'Menerima sertifikasi Google Cloud Associate Cloud Engineer (ACE) bersponsor.',
      'Memimpin tim capstone 6 anggota dalam merancang aplikasi rantai pasok digital untuk pedagang lokal.'
    ],
  },
  {
    id: 'sma-highschool',
    degree: 'Pendidikan Menengah Atas – Peminatan MIPA (Matematika & IPA)',
    institution: 'SMA Negeri Unggulan',
    period: '2017 – 2020',
    location: 'Indonesia',
    grade: 'Rata-rata Nilai Akhir: 93.8 / 100',
    honors: 'Siswa Berprestasi Akademik & Olimpiade Sains',
    description: 'Membangun pondasi logika matematika, fisika, dan algoritma dasar serta berpartisipasi aktif dalam kegiatan ekstrakurikuler sains dan pemrograman komputer.',
    relevantCourses: ['Matematika Lanjut & Kalkulus', 'Fisika Teoretis & Eksperimental', 'Pengantar Logika Algoritmik'],
    achievements: [
      'Medali Perunggu Olimpiade Sains Nasional (OSN) Bidang Informatika Tingkat Kota/Provinsi.',
      'Koordinator Klub Robotika dan Pemrograman Komputer Sekolah.'
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Software Engineer',
    company: 'Tech Scale-Up & Digital Solutions',
    period: '2024 – Sekarang',
    location: 'Jakarta (Hybrid)',
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
    location: 'Jakarta',
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
