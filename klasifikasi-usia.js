/*
✅ Menentukan kategori usia :
- Anak-anak : 0 - 12 tahun
- Remaja    : 13 - 17 tahun
- Dewasa    : 18 - 59 tahun
- Lansia    : 60+ tahun

✅ Menampilkan jumlah orang per kategori :
✅ Expect / output
    Anak-anak : 2 orang
    Remaja    : 1 orang
    Dewasa    : 3 orang
    Lansia    : 1 orang

💡 Ketentuan tugas
    - Gunakan function untuk menentukan kategori.
    - Gunakan loop untuk mengumpulkan data.
    - Gunakan if-else atau switch-case untuk klasifikasi.
*/

const prompt = require('prompt-sync')();

// Function untuk nentuin kategori berdasarkan usia
function tentukanKategori(usia) {
    if (usia >= 0 && usia <= 12) {
        return "Anak-anak";
    } else if (usia >=13 && usia <= 17) {
        return "Remaja";
    } else if (usia >= 18 && usia <= 59) {
        return "Dewasa";
    } else {
        return "Lansia";
    }
}

// Menyimpan jumlah per kategori
let anakAnak = 0;
let remaja = 0;
let dewasa = 0;
let lansia = 0;

// Meminta user input jumlah anggota
const jumlahOrang = parseInt(prompt("Masukkan jumlah anggota : "));

for (let i = 1; i <= jumlahOrang; i++) {
    let usia = parseInt(prompt(`Masukkan usia orang ke-${i} : `));

    if (usia < 0 || isNaN(usia)) {
        alert("Umur tidak valid! Diabaikan.");
        continue; // skip ke input berikutnya
    }

    let kategori = tentukanKategori(usia);

    if (kategori === "Anak-anak") {
        anakAnak++;
    } else if (kategori === "Remaja") {
        remaja++;
    } else if (kategori === "Dewasa") {
        dewasa++;
    } else if (kategori === "Lansia") {
        lansia++;
    }
}

// Tampilkan hasil
console.log("==========================");
console.log("===== Hasil Output ========");
console.log(`Anak-anak : ${anakAnak} orang`);
console.log(`Remaja    : ${remaja} orang`);
console.log(`Dewasa    : ${dewasa} orang`);
console.log(`Lansia    : ${lansia} orang`);