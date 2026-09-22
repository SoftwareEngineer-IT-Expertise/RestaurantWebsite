window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navigation-wrap");

  if (window.scrollY > 100) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
});


const images = [
  "review-1.jpg",
  "review-2.jpg"
];

let currentIndex = 0;

const carouselImage = document.getElementById("img");

const prevBtn = document.getElementById("btn1");

const nextBtn = document.getElementById("btn2");

function showImage() {

  carouselImage.src = images[currentIndex];

}

nextBtn.addEventListener("click", function() {

  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  showImage();

});

prevBtn.addEventListener("click", function() {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  showImage();

});

