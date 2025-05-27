export const setupMagnifier = () => {
  const container = document.getElementById("zoom-target");
  const magnifier = document.getElementById("magnifier");

  if (!container || !magnifier) return;

  const updatePosition = (x: number, y: number) => {
    magnifier.style.display = "block";
    magnifier.style.left = `${x}px`;
    magnifier.style.top = `${y}px`;
  };

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    updatePosition(e.clientX - rect.left, e.clientY - rect.top);
  });

  container.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
  });

  container.addEventListener(
    "touchmove",
    (e) => {
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      updatePosition(touch.clientX - rect.left, touch.clientY - rect.top);
      e.preventDefault();
    },
    { passive: false }
  );

  ["touchend", "touchcancel"].forEach((event) =>
    container.addEventListener(event, () => {
      magnifier.style.display = "none";
    })
  );
};
