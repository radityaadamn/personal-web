document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animatedText");
  const text = textElement.innerHTML;
  textElement.innerHTML = ""; // Kosongkan elemen

  // Membagi teks menjadi huruf
  for (let char of text) {
    const span = document.createElement("span");
    span.classList.add("letter"); // Menambahkan kelas 'letter' ke setiap huruf
    span.textContent = char; // Menetapkan karakter ke elemen span
    textElement.appendChild(span); // Menambahkan span ke elemen h2
  }

  // Menambahkan efek muncul
  const letters = document.querySelectorAll(".letter");
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.opacity = 1; // Menampilkan huruf
      letter.style.transform = "translateX(0)"; // Mengembalikan posisi huruf
    }, index * 100); // Delay berdasarkan urutan huruf
  });
});
