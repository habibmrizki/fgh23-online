// Array untuk menyimpan nilai
const scores = [];

// Fungsi untuk menambahkan nilai
function addScore(score) {
  if (typeof score === "number" && score >= 0 && score <= 100) {
    scores.push(score);
    console.log(`Nilai ${score} berhasil ditambahkan.`);
  } else {
    console.log("Masukkan nilai yang valid (0-100).");
  }
}

// Fungsi untuk menampilkan semua nilai
function viewScores() {
  if (scores.length === 0) {
    console.log("Belum ada nilai yang ditambahkan.");
  } else {
    console.log("Daftar Nilai:", scores.join(", "));
  }
}

// Fungsi untuk menghitung rata-rata nilai
function calculateAverage() {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  const average = total / scores.length;
  console.log(`Rata-rata nilai: ${average}`);
}

addScore(85);
addScore(90);
addScore(78);
viewScores();
calculateAverage();
