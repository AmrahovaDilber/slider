const items = [
  {
    id: 1,
    image: "/assets/images/porschecarrera.jpg",
    name: "2022 Porsche 911 Carrera GTS",
    info: "The 2022 porsche 911 Carrera GTS is the 911 lineup's middle child, but that's no slight. Since the badge's arrival as a fixture in the range a little more than a decade ago, Porsche has positioned the GTS between the Carrera S and GT3 (and Turbo) in performance and price. The simplest way to think of it is as a Carrera S with every must-have performance option, for less money than you pay by adding them à la carte.",
  },
  {
    id: 2,
    image: "/assets/images/taycan2.jpeg",
    name: "2021 Porsche Taycan Turbo S",
    info: "The 2021 Taycan will be optionally offered with a color head-up display that can be configured to show a navigation display, power meter, and additional pre-sets selected by the driver. ",
  },
  {
    id: 3,
    image: "/assets/images/gt3.webp",
    name: "2019 Porsche 911 GT3 RS",
    info: "The Porsche 911 GT3 RS is a car that needs no introduction. Ever since the release of the 996.2, the GT3 RS has been known as the benchmark for a road-going, track-focused sports car.",
  },
  {
    id: 4,
    image: "/assets/images/cayenne.png",
    name: "2024 Porsche Cayenne",
    info: "The 2024 Porsche Cayenne unveils a complete design overhaul with upgrades inside and out. As your trusted dealership, the team at Porsche Ontario has your guide to this luxury SUV.The 2024 Porsche Cayenne offers a range of driver assistance features for optimal performance. Available safety features include: Active Speed Limit Assist, Adaptive Cruise Control, Evasion Assist, Turn Assist, and Active Lane Keep and Intersection Assist.",
  },
  {
    id: 5,
    image: "/assets/images/taycan25.jpg",
    name: "2025 Porsche Taycan",
    info: "We have been fans of the Porsche Taycan since it was launched back in 2019, but love has not blinded us to some of its faults. The most obvious of these has always been poor range when compared to luxury EV rivals. Although we proved the current Taycan is capable of beating its EPA rating, the revised 2025 version is going to boast significant improvements to both range and performance, alongside the usual design and technology tweaks.",
  },
  {
    id: 6,
    image: "/assets/images/taycan4s.jpeg",
    name: "Taycan 4S",
    info: "Breathtaking acceleration, tractive power typical of sports cars and outstanding continuously available power – the new model 4S also features these strengths of the Taycan. ",
  },
];

let currentIndex = 0;
const photoContent = document.querySelector("#photoContent");
const name = document.querySelector("#name");
const info = document.querySelector("#info");
const image = document.querySelector("#image");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

function showSlide(index) {
  image.src = items[index].image;
  name.textContent = items[index].name;
  info.textContent = items[index].info;
}

prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);

function handlePrev() {
  if (currentIndex === 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex--;
  }
  showSlide(currentIndex);
}

function handleNext() {
  if (currentIndex === items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showSlide(currentIndex);
}

let interval;

function startInterval() {
  interval = setInterval(handleNext, 3000);
}

function stopInterval() {
  clearInterval(interval);
}

showSlide(currentIndex); 
startInterval(); 

photoContent.addEventListener("mouseenter", () => {
  stopInterval();
});

photoContent.addEventListener("mouseleave", () => {
  startInterval();
});
