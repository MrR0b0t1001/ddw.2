const words = ["Union", "Wedding", "Special Day", "Event"];
let currentIndex = 0;
const textElement = document.querySelector(".text-4");

function changeWord() {
  textElement.textContent = words[currentIndex]; // Immediately update the word
  currentIndex = (currentIndex + 1) % words.length; // Move to the next word for the next cycle

  setTimeout(() => {
    // This will delay the next cycle, making the effect smoother
  }, 3500); // 3s delay to match halfway point of animation
}

setInterval(changeWord, 5000); // Change word every 5 seconds
