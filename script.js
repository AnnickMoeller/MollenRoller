document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", () => {
    card.style.transition = "transform 0.15s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transition = "all 0.25s ease";
  });
});
