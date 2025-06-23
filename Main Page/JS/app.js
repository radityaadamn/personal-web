document.addEventListener("DOMContentLoaded", function () {
  const greetingText = "Hi! I'm Raditya Adam Nugraha";
  const h3Element = document.querySelector(".wrapper1 h3");

  // Clear existing content
  h3Element.innerHTML = "";

  // Split text into three parts for better colour handling
  const [beforeAdam, adam, afterAdam] = greetingText.split(/(Adam)/);

  // Create a container for typing effects
  const typingContainer = document.createElement("div");
  typingContainer.className = "typing-container";

  // Function for typing animation with Promise
  function typeText(element, text, speed, color = "#FFFFFF") {
    return new Promise((resolve) => {
      let i = 0;
      const span = document.createElement("span");
      span.style.color = color;

      function typeChar() {
        if (i < text.length) {
          span.textContent += text.charAt(i);
          i++;
          requestAnimationFrame(() => {
            setTimeout(typeChar, speed);
          });
        } else {
          resolve();
        }
      }

      typeChar();
      element.appendChild(span);
    });
  }

  // Sequential animation
  async function startTyping() {
    await typeText(typingContainer, beforeAdam, 50);
    await typeText(typingContainer, adam, 70, "#CC7942");
    await typeText(typingContainer, afterAdam, 50);

    // Add a blinking cursor when done
    typingContainer.style.borderRight = "2px solid #FFFFFF";
    typingContainer.classList.add("blink-cursor");
  }

  h3Element.appendChild(typingContainer);
  startTyping();
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.skill').forEach((el) => observer.observe(el));
document.querySelectorAll('.project').forEach((el) => observer.observe(el));
