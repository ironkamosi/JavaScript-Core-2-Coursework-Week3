// Write your code here
let index = 0;

let forwardBtn = document.getElementById("forward");
forwardBtn.innerHTML = "forward";

let autoForwardBtn = document.getElementById("auto-forward");
autoForwardBtn.innerHTML = "auto-forward";

let backwardBtn = document.getElementById("backward");
backwardBtn.innerHTML = "backward";

let autoBackwardBtn = document.getElementById("auto-backward");
autoBackwardBtn.innerHTML = "auto-backward";

let stopBtn = document.getElementById("stop");
stopBtn.innerHTML = "stop";

function forwardSlide() {
  index++;
  if (index < photoURLs.length) {
  } else {
    index = 0;
  }
  getImages(index);
}

function backwardSlide() {
  index--;
  if (index >= 0) {
  } else {
    index = photoURLs.length - 1; // or 4
  }
  getImages(index);
}

let timer = 1100; // amount of seconds


let forwardImage;
let backwardImage;




//Image sources
const photoURLs = [
  {
    src:
      "https://images.unsplash.com/photo-1580832945253-9a8f87b606f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
    alt: "neon jazz sign",
  },
  {
    src:
      "https://images.unsplash.com/photo-1552847340-1e26a6af19d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    alt: "Jazz record shop",
  },
  {
    src:
      "https://images.unsplash.com/photo-1559752067-010e928b21f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80",
    alt: "Woman playing the clarinet",
  },
  {
    src:
      "https://images.unsplash.com/photo-1552847530-392e0156956f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    alt: "Jazz record shop in day",
  },
  {
    src:
      "https://images.unsplash.com/photo-1567872307384-439191a6e112?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    alt: "man playing the cello",
  },
];


// function maps array of img objects
function getImages(index) {
  let photos = document.getElementById("photos");
  let image0 = document.getElementById("photo0");
  image0.src = photoURLs[index].src;
 
}
getImages(index);


// Control buttons for the slideshow
forwardBtn.addEventListener("click",forwardSlide);

backwardBtn.addEventListener("click",backwardSlide);

autoBackwardBtn.addEventListener("click", function () {
  backwardImage = setInterval(backwardSlide, timer);
  clearInterval(() => {
    backwardImage;
  }, timer);
});

autoForwardBtn.addEventListener("click", function () {
  forwardImage = setInterval(forwardSlide, timer);
  clearInterval(() => {
    forwardImage;
  }, timer);
});

stopBtn.addEventListener("click", () => {
  clearInterval(forwardImage);
  clearInterval(backwardImage);
});
