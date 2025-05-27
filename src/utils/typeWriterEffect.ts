export const typeWriterEffect = (id: string, speed = 100) => {
  const span = document.getElementById(id);
  if (!span) return;

  const text = span.textContent || "";
  span.textContent = "";

  let index = 0;

  const cursor = document.createElement("span");
  cursor.textContent = "_";
  cursor.style.animation = "blink 1s step-start 0s infinite";

  const style = document.createElement("style");
  style.textContent = `
    @keyframes blink {
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  function type() {
    if (!span) return;

    if (index < text.length) {
      span.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      span.appendChild(cursor);
    }
  }

  type();
};
