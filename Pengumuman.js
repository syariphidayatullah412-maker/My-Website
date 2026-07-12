const pengumuman = {

judul: "📢 Jadwal Ujian Akhir Semester (UAS)",

tanggal: "20 Juli 2026",

isi: `
<p>Pelaksanaan Ujian Akhir Semester Mata Kuliah
<strong>Fiqih & Ushul Fiqih</strong> akan dilaksanakan pada
hari <strong>Senin, 20 Juli 2026</strong> pukul <strong>08.00 WITA</strong>.</p>

<p><strong>Mahasiswa diwajibkan:</strong></p>

<ul>
<li>✔ Hadir 15 menit sebelum ujian dimulai.</li>
<li>✔ Membawa KTM.</li>
<li>✔ Berpakaian rapi dan sopan sesuai ketentuan kampus.</li>
<li>✔ Tidak diperkenankan mengikuti ujian apabila terlambat lebih dari 30 menit.</li>
</ul>
`,`,

update: "12 Juli 2026"

};

document.getElementById("judul").innerHTML = pengumuman.judul;
document.getElementById("tanggal").innerHTML = pengumuman.tanggal;
document.getElementById("isi").innerHTML = pengumuman.isi;
document.getElementById("update").innerHTML = pengumuman.update;
