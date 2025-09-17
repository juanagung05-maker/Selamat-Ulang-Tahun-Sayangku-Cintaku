const photos = ["foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg"];
const messages = [ 
  "Aku bersyukur bisa mengenalmu, kamu hadiah terindah 💗",
  "Kamu adalah alasan aku tersenyum setiap hari 🥰",
  "Semoga semua yang kamu semogakan tercapai, sayangku 💖",
  "Jangan nakal-nakal ya, kalau nakal sama aku aja oke 😘"
];

let index = 0;

const photoEl = document.getElementById("photo");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

function showContent(i) {
  // hilangkan dulu
  photoEl.classList.remove("show");
  messageEl.classList.remove("show");

  setTimeout(() => {
    photoEl.src = photos[i];
    messageEl.textContent = messages[i];

    // munculkan lagi dengan animasi
    photoEl.classList.add("show");
    messageEl.classList.add("show");
  }, 500);
}

// tampilkan pertama kali
showContent(index);

nextBtn.addEventListener("click", () => {
  index = (index + 1) % photos.length;
  showContent(index);
});
