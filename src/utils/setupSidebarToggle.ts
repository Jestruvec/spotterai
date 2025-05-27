export const setupSidebarToggle = () => {
  const menuButton = document.getElementById("menu-button");
  const sidebar = document.getElementById("sidebar");

  if (!menuButton || !sidebar) return;

  menuButton.addEventListener("click", () => {
    const isHidden = sidebar.classList.toggle("translate-x-[-100%]");

    if (isHidden) {
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
    } else {
      sidebar.removeAttribute("aria-hidden");
      sidebar.removeAttribute("inert");
    }
  });
};
