/*
Kalkulator Sederhana

Buat program kalkulator interaktif dengan menu
pilih operasi :
1. penjumlahan
2. penguragan
3. perkalian
4. pembagian


✅ Minta pengguna memilih operasi (1–4)
✅ Minta dua angka
✅ Tampilkan hasil perhitungan
✅ Contoh Output:

Operasi: Penjumlahan
Angka 1 : 10
Angka 2 : 5
Hasil : 15

💡 Ketentuan Teknis:
- Gunakan switch-case untuk menentukan operasi
- Gunakan function untuk melakukan operasi matematika.
- Konversi input ke number (parseInt / parseFloat).

*/

// code

// panggil package prompt
const prompt = require('prompt-sync')();

// 1. Membuat fungsi untuk setiap operasi
function tambah(a, b) {
    return a + b;
  }
  
  function kurang(a, b) {
    return a - b;
  }
  
  function kali(a, b) {
    return a * b;
  }
  
  function bagi(a, b) {
    return a / b;
  }
  
  // 2. Tampilkan menu operasi di console
  console.log("=== Kalkulator Sederhana ===");
  console.log("Pilih operasi:");
  console.log("1. Penjumlahan");
  console.log("2. Pengurangan");
  console.log("3. Perkalian");
  console.log("4. Pembagian");

  // 3. Minta user untuk pilih salah satu jenis operasi
  const operasi = prompt(
    "Masukkan pilihan operasi (1/2/3/4): "
  );
  
  // 4. Minta 2 angka dari user
  const angka1 = parseFloat(prompt("Masukkan angka pertama:"));
  const angka2 = parseFloat(prompt("Masukkan angka kedua:"));
  
  // 5. buat switch-case untuk nentuin operasi berdasarkan pilihan
  let hasil;
  switch (operasi) {
    case "1":
      hasil = tambah(angka1, angka2);
      console.log("Operasi: Penjumlahan");
      break;
    case "2":
      hasil = kurang(angka1, angka2);
      console.log("Operasi: Pengurangan");
      break;
    case "3":
      hasil = kali(angka1, angka2);
      console.log("Operasi: Perkalian");
      break;
    case "4":
      hasil = bagi(angka1, angka2);
      console.log("Operasi: Pembagian");
      break;
    default:
      console.log("Pilihan operasi tidak valid.");
      break;
  }
  
  // 5. Menampilkan hasil jika operasi valid
  if (hasil !== undefined) {
    console.log(`Angka 1 : ${angka1}`);
    console.log(`Angka 2 : ${angka2}`);
    console.log(`Hasil : ${hasil}`);
  }



