
# 📊 Pengukuran 9 Karakteristik User — Interface Login

Repositori ini merupakan hasil kerja kelompok **SQ** dalam rangka tugas mata kuliah **Software Quality**. Fokus dari proyek ini adalah mengimplementasikan interface login sederhana serta melakukan pengukuran terhadap **9 Karakteristik User**, disertai dokumentasi kolaborasi dan pengujian kualitas.

---

## 👥 Kelompok SQ

| Nama Lengkap                       | NIM          | Peran                          |
|------------------------------------|--------------|-------------------------------|
| Arya Nugraha                      | 20221310064  | Frontend Developer            |
| Denita Alhamdina Putri Arisandi   | 20221310013  | Backend Developer             |
| Sri Purnama Royani Putri          | 20211310066  | Dokumentasi & QA Tester       |
| Melvin Chairul Azfa               | 20211310019  | Koordinator & Integrator      |

---

## ⚙️ Teknologi yang Digunakan

- HTML, CSS, JavaScript
- (Opsional) Framework: Bootstrap / Tailwind CSS
- (Opsional Backend) Firebase / Node.js / PHP
- Git & GitHub untuk kolaborasi dan dokumentasi

---

## 🎯 Tujuan Proyek

- Membangun interface login sederhana
- Mengukur 9 karakteristik user berdasarkan tabel pengukuran (9 User Characteristics):
  1. Understandability
  2. Learnability
  3. Operability
  4. Attractiveness
  5. Usability Compliance
  6. Time Behaviour
  7. Resource Utilization
  8. Capacity
  9. Availability

---

## 🔍 Proses Pengukuran

| Karakteristik        | Metode Pengujian                            | Tools/Observasi               | Status |
|----------------------|---------------------------------------------|-------------------------------|--------|
| Understandability     | Observasi deskripsi dan UI login            | Analisis interface login      | ✔️     |
| Learnability          | Tes pengguna baru mencoba login             | Feedback & catatan observer   | ✔️     |
| Operability           | Pengujian tombol & alur login               | Manual test                   | ✔️     |
| Attractiveness        | Penilaian visual antarmuka                  | Survey pengguna               | ✔️     |
| Usability Compliance  | Evaluasi kesesuaian desain dgn prinsip UX   | Heuristic evaluation          | ✔️     |
| Time Behaviour        | Pengukuran waktu respon login               | DevTools Performance tab      | ✔️     |
| Resource Utilization  | Analisis penggunaan memori/sumber daya      | Lighthouse, Chrome tools      | ✔️     |
| Capacity              | Uji coba beban dengan data dummy            | Simulasi input massal         | ✔️     |
| Availability          | Uji fungsi login di waktu berbeda           | Pengujian jam berbeda          | ✔️     |

---

## 🧪 Pengujian Kualitas

### 🔸 Unit Test
- Valid login (benar)
- Invalid login (salah)
- Field kosong

### 🔸 Usability Test
- Dilakukan oleh minimal 2 pengguna non-teknis
- Form feedback Google/Form offline

### 🔸 Dokumentasi Issue
- Menggunakan fitur **Issues** GitHub
- Setiap issue diberi label: bug, enhancement, testing

---

## 🤝 Kolaborasi di GitHub

- Branching: Setiap anggota mengerjakan branch masing-masing
- Pull Request: Semua update dilakukan melalui PR
- Tab **Projects**: Untuk tracking progres
- Tab **Wiki** (opsional): Untuk dokumentasi tambahan

---

## 📎 Referensi

- Panduan & Kriteria Pengukuran dari dosen
- Dokumentasi GitHub (https://docs.github.com/)
- Heuristic Evaluation Guide dari Nielsen Norman Group
