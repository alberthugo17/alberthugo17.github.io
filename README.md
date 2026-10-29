# Panduan & Dokumentasi Portofolio
**Hugo Antonio Hien Wijaya — Software Engineer & Full-Stack Developer**

Website ini dibangun menggunakan **React 19**, **TypeScript**, **Tailwind CSS v4**, dan **Motion** untuk animasi yang halus dan responsif.

---

## 📁 Peta Struktur Berkas Penting

| Berkas / Direktori | Fungsi & Penggunaan |
| :--- | :--- |
| `src/data/portfolioData.ts` | **Pusat seluruh data konten**: Foto, biografi, proyek, sertifikasi, pendidikan, pengalaman, dan keahlian. |
| `src/assets/images/` | Folder tempat menyimpan seluruh foto profil dan tangkapan layar proyek. |
| `index.html` | Mengatur **Google Fonts**, judul website (`<title>`), dan metadata SEO/OpenGraph. |
| `src/index.css` | Pengaturan gaya global, pemetaan nama font Tailwind, dan desain scrollbar. |
| `src/App.tsx` | Komponen utama yang menyusun susunan halaman (Navbar, Hero, Tabs, Kontak, Footer). |
| `src/components/` | Komponen UI modular (Navbar, HeroSection, TabNavigation, ProjectsTab, CertificationsTab, dll). |
| `vite.config.ts` | Konfigurasi bundler Vite (termasuk `base: './'` untuk hosting GitHub Pages). |
| `.github/workflows/deploy.yml` | Alur kerja otomatis CI/CD GitHub Actions untuk build dan deploy ke GitHub Pages. |

---

## 🎨 1. Cara Mengganti Font (Tipografi)

Font yang digunakan saat ini adalah **Plus Jakarta Sans** (teks utama) dan **JetBrains Mono** (angka/kode).

Jika Anda ingin mengganti font:
1. **Buka berkas `index.html`** (sekitar baris 25):
   Cari tag `<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />` dan ganti dengan font Google Fonts pilihan Anda (misalnya *Outfit*, *Inter*, atau *DM Sans*).
2. **Buka berkas `src/index.css`** (sekitar baris 15):
   Ganti nilai `font-family` pada blok `html`:
   ```css
   html {
     font-family: 'NamaFontBaru', system-ui, sans-serif;
   }
   ```

---

## 🖼️ 2. Cara Mengganti Foto Profil & Gambar Proyek

1. **Tambahkan foto baru**:
   Masukkan file foto/gambar Anda (format `.jpg`, `.png`, atau `.webp`) ke dalam folder `src/assets/images/`. Contoh: `src/assets/images/foto_hugo_terbaru.jpg`.
2. **Buka berkas `src/data/portfolioData.ts`**:
   - Pada baris paling atas ([BAGIAN 1]), tambahkan atau sesuaikan impor foto:
     ```typescript
     import hugoAvatar from '../assets/images/foto_hugo_terbaru.jpg';
     import projectBaru from '../assets/images/screenshot_project_baru.jpg';
     ```
   - Untuk **Foto Profil**: Di objek `PROFILE_DATA`, ubah baris `avatar`:
     ```typescript
     avatar: hugoAvatar,
     ```
   - Untuk **Gambar Proyek**: Di array `PROJECTS_DATA`, sesuaikan properti `image` pada masing-masing item proyek:
     ```typescript
     image: projectBaru,
     ```

---

## 💼 3. Cara Menambah atau Mengubah Proyek (Projects)

Buka `src/data/portfolioData.ts` pada bagian **`PROJECTS_DATA`**. Tambahkan objek baru dengan format:

```typescript
{
  id: 'nama-proyek-unik',
  title: 'Judul Proyek Anda',
  tagline: 'Ringkasan singkat fungsi aplikasi dalam satu kalimat.',
  category: 'Full-Stack', // Pilihan: 'Full-Stack' | 'Mobile & Fintech' | 'Cloud & AI' | 'Open Source'
  year: '2024',
  description: 'Deskripsi lengkap masalah yang diselesaikan dan solusi yang dibangun.',
  image: projectImageVariable, // Variabel foto yang sudah diimpor
  technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  metrics: 'Peningkatan performa 40% dan latensi <50ms', // Opsional
  highlights: [
    'Poin keunggulan arsitektur 1',
    'Poin keunggulan arsitektur 2'
  ],
  liveUrl: 'https://demo-anda.com', // Tautan demo langsung
  githubUrl: 'https://github.com/username/repo', // Tautan kode sumber GitHub
  featured: true, // Berikan nilai true jika ingin kartu ditampilkan lebih lebar
}
```

---

## 🏆 4. Cara Mengubah Sertifikasi (Certifications)

Buka `src/data/portfolioData.ts` pada bagian **`CERTIFICATIONS_DATA`**:
- Anda dapat mengubah `title`, `issuer` (AWS, Google Cloud, Meta, dll), `credentialId`, masa berlaku, dan tautan verifikasi resmi (`verificationUrl`).

---

## 🎓 5. Cara Mengubah Pendidikan & Pengalaman

Buka `src/data/portfolioData.ts`:
- **Pendidikan**: Lihat array `EDUCATION_DATA` untuk mengubah gelar, nama universitas, IPK, mata kuliah inti, dan prestasi.
- **Pengalaman Kerja**: Lihat array `EXPERIENCE_DATA` untuk menambah atau mengubah riwayat posisi kerja, perusahaan, durasi, serta poin-poin capaian (*key contributions*).

---

## 📱 6. Cara Mengubah Kontak & Tautan Media Sosial

Buka `src/data/portfolioData.ts` pada bagian **`PROFILE_DATA`**:
- `email`: Ubah alamat email tujuan.
- `phone`: Ubah nomor kontak telepon.
- `whatsappUrl`: Ubah nomor WhatsApp pada tautan URL `https://wa.me/62...`.
- `socials.linkedin`: Tautan ke profil LinkedIn Anda.
- `socials.github`: Tautan ke profil GitHub Anda.

---

## 🚀 7. Menjalankan & Mempublikasikan Website

### Menjalankan secara Lokal:
```bash
npm install --legacy-peer-deps
npm run dev
```
Buka browser pada `http://localhost:3000`.

### Mengunggah ke GitHub Pages:
Setiap kali Anda mengubah data atau kode:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```
Pipeline GitHub Actions di `.github/workflows/deploy.yml` akan otomatis mengkompilasi dan mempublikasikan versi terbaru ke **`alberthugo17.github.io`** secara otomatis!
