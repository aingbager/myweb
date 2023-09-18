var angka = 0;
const nilaiAngka = document.getElementById('nilai');

//fungsi
function increase() {
  angka++;
  nilaiAngka.innerHTML = angka;
}
function decrease() {
  angka--;
  nilaiAngka.innerHTML = angka;
}
