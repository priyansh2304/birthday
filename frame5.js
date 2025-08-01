const envelope = document.getElementById('envelope');
const letterTextEl = document.getElementById('letterText');
const clickPrompt = document.getElementById('clickPrompt');
const nextBtn = document.getElementById('toFrame6');

// ✍️ Your letter goes here:
const letter = `
Dear [Bestie’s Name],

I just wanted to take a moment to say... you're one of the most special people in my life. 🥺💖
This little surprise is just a tiny piece of the happiness you deserve today.

So smile big — because this day is all about YOU. 🎉

With all my heart,
[Your Name]
`;

// Typing effect function
function typeLetter(text, i = 0) {
  if (i < text.length) {
    letterTextEl.innerHTML += text.charAt(i);
    setTimeout(() => typeLetter(text, i + 1), 50); // typing speed
  } else {
    nextBtn.style.display = 'inline-block'; // Show button after typing
  }
}

envelope.addEventListener('click', () => {
  envelope.style.display = 'none';      // Hide envelope
  clickPrompt.style.display = 'none';   // Hide prompt
  typeLetter(letter);                   // Start typing effect
});

// Navigate to frame 6
nextBtn.addEventListener('click', () => {
  window.location.href = "frame6.html"; // Change this if your frame6 is named differently
});
