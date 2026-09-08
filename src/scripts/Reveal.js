document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
});
