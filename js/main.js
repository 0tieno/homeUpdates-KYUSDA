// Define an array of image URLs for your slideshow
const imageUrls = [
    "images/hero-1.JPG",
    "images/hero-2.JPG",
    "images/hero-3.JPG",
    // Add more image URLs as needed
  ];
  
  const imgElement = document.getElementById("slideshow-img");
  let currentIndex = 0;
  
  // Function to update the image source
  function updateImage() {
    imgElement.src = imageUrls[currentIndex];
  }
  
  // Function to advance to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
  }
  
  // Function to go back to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateImage();
  }
  
  // Set an interval to automatically advance the slideshow
  const intervalId = setInterval(nextImage, 3000); // Change images every 3 seconds (3000 milliseconds)
  
  // Optionally, you can add event listeners for next and previous buttons
  document.getElementById("next-button").addEventListener("click", nextImage);
  document.getElementById("prev-button").addEventListener("click", prevImage);
  