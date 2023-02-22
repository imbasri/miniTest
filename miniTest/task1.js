// Tolong print angka dari 1 sampai 100. Tetapi, Ada peraturan khusus:
// 1. Untuk setiap angka yang bisa dibagi dengan 3, jangan print angka nya, tapi print "Apa".
// 2. Kalau bisa dibagi dengan 5, print "Bole",
// 3. Kalau bisa dibagi oleh 3 dan 5, print "ApaBole".
// 4. Mohon format output disamakan dengan hasil terlampir (harus menyamping seperti yang dicontohkan, tidak dengan baris baru, ataupun yang lainnya)
// Berikut contoh hasil program "ApaBole" untuk angka 1 sampai 30 (* Yang kita harapkan dari kandidat adalah, 1 - 100):

console.log("-==task 1==-\n");
for (let i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      process.stdout.write("ApaBole, ");
   } else if (i % 3 === 0) {
      process.stdout.write("Apa, ");
   } else if (i % 5 === 0) {
      process.stdout.write("Bole, ");
   } else {
      process.stdout.write(`${i}, `);
   }
}
