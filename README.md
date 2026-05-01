# GitHub Pages Package

Folder ini sudah siap untuk dipublish ke GitHub Pages.

## Isi folder

- `index.html` : beranda
- `pendidikan.html`
- `pengalaman.html`
- `kualifikasi.html`
- `publikasi.html`
- `mata-kuliah.html`
- `dokumen.html`
- `kontak.html`
- `site.css` : stylesheet bersama
- `site.js` : pengatur pilihan bahasa Indonesia / English
- `assets/` : gambar pendukung halaman
- `materials/` : materi mata kuliah yang sudah ditautkan
- `.nojekyll` : memastikan GitHub Pages melayani file apa adanya

## Cara publish paling cepat

1. Buat repository baru di GitHub, misalnya `riki-academic-profile`.
2. Upload semua isi folder `github-pages` ini ke root repository.
3. Buka repository di GitHub.
4. Masuk ke `Settings` > `Pages`.
5. Pada bagian `Build and deployment`:
   - `Source` = `Deploy from a branch`
   - `Branch` = `main`
   - `Folder` = `/ (root)`
6. Klik `Save`.
7. Tunggu sekitar 1-5 menit sampai GitHub memberi URL publik.

## Bentuk URL

- Jika repository biasa:
  `https://username.github.io/nama-repo/`
- Jika repository bernama `username.github.io`:
  `https://username.github.io/`

## Catatan

- Seluruh halaman sudah memakai path relatif, jadi aman untuk GitHub Pages.
- Struktur situs sekarang `multi-page`, bukan satu halaman panjang dengan anchor menu.
- Beranda sekarang memakai gaya dashboard ringan dengan grafik visual.
- Bahasa dapat dipilih antara `Indonesia` dan `English` dari header.
- Halaman `publikasi.html` sudah memakai format tabel kategoris.
- Referensi `DOCX` dan tautan `PDF` publik sudah dihilangkan dari tampilan halaman.
- Materi mata kuliah yang sudah masuk: `Audit SI`, `Enterprise Architecture`, `E-Bussiness`, `Knowledge Management`, dan `IT Budgeting`.
