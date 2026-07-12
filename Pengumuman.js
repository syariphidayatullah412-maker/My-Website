const pengumuman = {
judul: "Ujian Akhir Semester (UAS)",

tanggal: "20 Juli 2026",

isi: `Pelaksanaan Ujian Akhir Semester
Fiqih & Ushul Fiqih akan dilaksanakan
secara tatap muka di ruang kelas.`,

update: "12 Juli 2026"
};

document.getElementById("judul").innerHTML = pengumuman.judul;
document.getElementById("tanggal").innerHTML = pengumuman.tanggal;
document.getElementById("isi").innerHTML = pengumuman.isi;
document.getElementById("update").innerHTML = pengumuman.update;
