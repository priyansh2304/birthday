const messages = [
  "You are the most beautiful, sweetest and cutest person i've ever known 💖",
  "Every time i talk to you i feel like i'm the luckiest person in the world because i've you ✨",
  "You always take away my sadness and makes me the happiest person 🌈",
  "Thank you for being my bestest friend and making my life so muchhhhh better 🥰"
];

let current = 0;
const messageText = document.getElementById("message-text");
const nextBtn = document.getElementById("nextBtn");

nextBtn.textContent = "Tap to Read";

nextBtn.addEventListener("click", () => {
  const box = document.querySelector(".message-box");

  // Slide effect
  box.style.transform = current % 2 === 0 ? "translateX(20px)" : "translateX(-20px)";
  setTimeout(() => (box.style.transform = "translateX(0)"), 400);

  if (current < messages.length) {
    messageText.textContent = messages[current];

    // Update button text
    const remaining = messages.length - current - 1;
    if (remaining > 0) {
      nextBtn.textContent = `${remaining} more`;
    } else {
      nextBtn.textContent = "Want to read again?";
    }

    current++;
  } else {
    // Restart everything
    current = 0;
    messageText.textContent = messages[current];
    nextBtn.textContent = `${messages.length - 1} more`;
    current++;
  }
});

/* Falling confetti */
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 6 + 2,
  d: Math.random() * 50 + 10,
  color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  tilt: Math.random() * 10 - 10,
  tiltAngle: 0
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let c of confetti) {
    ctx.beginPath();
    ctx.lineWidth = c.r / 2;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
    ctx.stroke();
  }

  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  for (let c of confetti) {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.x += Math.sin(0.01);
    c.tiltAngle += 0.1;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  }
}

drawConfetti();

// Frame navigation function
function goTonextFrame() {
  window.location.href = "frame5.html";
}