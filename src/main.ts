import "./style.css";

document.getElementById("menu-button")?.addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  const isHidden = sidebar?.classList.toggle("translate-x-[-100%]");

  if (sidebar) {
    if (isHidden) {
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
    } else {
      sidebar.removeAttribute("aria-hidden");
      sidebar.removeAttribute("inert");
    }
  }
});

const container = document.getElementById("zoom-target");
const magnifier = document.getElementById("magnifier");

if (container && magnifier) {
  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    magnifier.style.display = "block";
    magnifier.style.left = `${x}px`;
    magnifier.style.top = `${y}px`;
  });

  container.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
  });
}
