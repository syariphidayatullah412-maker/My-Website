const pengumuman = {

judul: "📢 Jadwal Ujian Akhir Semester (UAS)",

status: "🟢 AKTIF",

tanggal: "20 Juli 2026",

dosen: "Syarip Hidayatullah, M.Pd.",

isi: `
<p>Pelaksanaan <strong>Ujian Akhir Semester (UAS)</strong> Mata Kuliah
<strong>Fiqih & Ushul Fiqih</strong> akan dilaksanakan pada hari
<strong>Senin, 20 Juli 2026</strong> pukul
<strong>08.00 WITA</strong>.</p>

<p><strong>Mahasiswa diwajibkan:</strong></p>

<ul>
<li>✔ Hadir 15 menit sebelum ujian dimulai.</li>
<li>✔ Membawa KTM.</li>
<li>✔ Berpakaian rapi dan sopan.</li>
<li>✔ Tidak terlambat lebih dari 30 menit.</li>
</ul>
`,

lampiran: "Jadwal_UAS.pdf",

link: "Jadwal_UAS.pdf",

update: "12 Juli 2026"

};

document.getElementById("judul").innerHTML = pengumuman.judul;
document.getElementById("status").innerHTML = pengumuman.status;
document.getElementById("tanggal").innerHTML = pengumuman.tanggal;
document.getElementById("dosen").innerHTML = pengumuman.dosen;
document.getElementById("isi").innerHTML = pengumuman.isi;
document.getElementById("lampiran").innerHTML = "📄 " + pengumuman.lampiran;
document.getElementById("lampiran").href = pengumuman.link;
document.getElementById("update").innerHTML = pengumuman.update;
