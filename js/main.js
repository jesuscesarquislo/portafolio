// HERO mouse follow
const heroImage = document.getElementById("heroImage");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 30;
  const y = (window.innerHeight / 2 - e.clientY) / 30;
  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// MODAL
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    modalImage.src = card.dataset.image;
    modalVideo.src = card.dataset.video || "";
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.src = "";
  }
});