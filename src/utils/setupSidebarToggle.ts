export const setupSidebarToggle = () => {
  const menuButton = document.getElementById("menu-button");
  const sidebar = document.getElementById("sidebar");

  if (!menuButton || !sidebar) return;

  menuButton.addEventListener("click", () => {
    const isHidden = sidebar.classList.toggle("translate-x-[-100%]");

    if (isHidden) {
      document.body.classList.remove("overflow-hidden");
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
    } else {
      document.body.classList.add("overflow-hidden");
      sidebar.removeAttribute("aria-hidden");
      sidebar.removeAttribute("inert");
    }
  });
};
