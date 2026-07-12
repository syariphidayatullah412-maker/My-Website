const pengumuman = {

judul: "📢 Jadwal Ujian Akhir Semester (UAS)",

tanggal: "20 Juli 2026",

isi: `
Pelaksanaan Ujian Akhir Semester Mata Kuliah
Fiqih & Ushul Fiqih akan dilaksanakan pada
hari Senin, 20 Juli 2026 pukul 08.00 WITA.

Mahasiswa diwajibkan:

✔ Hadir 15 menit sebelum ujian dimulai.

✔ Membawa KTM.

✔ Berpakaian rapi dan sopan sesuai ketentuan kampus.

✔ Tidak diperkenankan mengikuti ujian apabila terlambat lebih dari 30 menit.
`,

update: "12 Juli 2026"

};

document.getElementById("judul").innerHTML = pengumuman.judul;
document.getElementById("tanggal").innerHTML = pengumuman.tanggal;
document.getElementById("isi").innerHTML = pengumuman.isi;
document.getElementById("update").innerHTML = pengumuman.update;
