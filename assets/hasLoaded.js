document.addEventListener("DOMContentLoaded", function () {
  // Get all images inside the grid container
  const images = document.querySelectorAll(
    ".grid-container .box-container img",
  );

  // Loop through each image and add event listeners
  images.forEach((img) => {
    // If the image is already loaded from cache, handle it immediately
    if (img.complete) {
      imageLoaded(img);
    } else {
      // Otherwise, wait for the image to load
      img.addEventListener("load", function () {
        imageLoaded(img);
      });

      // In case of an error while loading the image
      img.addEventListener("error", function () {
        console.error("Image failed to load:", img.src);
      });
    }
  });
});

// Function to hide skeletons and show actual content once an image is loaded
function imageLoaded(img) {
  // Find the parent box container of the loaded image
  const parentBox = img.closest(".box");

  // Hide all skeleton elements (text and image)
  parentBox.querySelectorAll(".skeleton-text").forEach((skeleton) => {
    skeleton.style.display = "none";
    img.classList.remove("skeleton");
  });

  // Show the actual content (text and image)
  parentBox.querySelectorAll(".actual-text").forEach((text) => {
    text.style.display = "block";
  });
}
