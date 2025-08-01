const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
  "https://picsum.photos/600/400?random=4"
];

let index = 0;

function showImage() {
  document.getElementById("carouselImage").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

setInterval(nextImage, 3000); // Auto slide every 3s
