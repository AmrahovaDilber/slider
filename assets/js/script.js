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
    info: "The Porsche 911 GT3 RS is a car that needs no introduction. Ever since the release of the 996.2, the GT3 RS has been known as the benchmark for a road-going, track-focused sports car.The 991 generation features a magnificent 4.0-litre flat-six with 490bhp and 469nm of torque, coupled with Porsche's ever-popular PDK transmission. This adds up to a 0-62mph time of 3.4 seconds and a top speed of 193mph.",
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
    info: "Breathtaking acceleration, tractive power typical of sports cars and outstanding continuously available power – the new model 4S also features these strengths of the Taycan. The permanently excited synchronous machine on the rear axle has an active length of 130 millimetres and is therefore exactly 80 millimetres shorter than the corresponding drive component on the Taycan Turbo S and Taycan Turbo. The pulse-controlled inverter used on the front axle in the Taycan 4S operates with up to 300 amps, and the inverter on the rear axle with up to 600 amps.",
  },
];

let currentIndex = 0;

function generateSliderHTML() {
  return `
    <div class="border p-6 border-gray-200 rounded-md relative bg-white shadow-lg w-[457px] h-[387px]">
      <div class="w-[457px] h-[387px] relative">
        <img
          src="${items[currentIndex].image}"
          alt="img"
          class="rounded-md object-cover w-full h-full"
          id="image"
        />
      </div>
      <div>
        <p class="font-bold text-[18px] text-[#141414] mt-5" id="name">
          ${items[currentIndex].name}
        </p>
        <p class="text-[#666666] text-[14px] font-bold opacity-60 mt-3" id="info">
          ${items[currentIndex].info}
        </p>
      </div>
      <div class="absolute inset-0 flex items-center justify-between px-4">
        <button id="prev"
          class="w-12 h-12 text-white text-xl rounded-full flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 shadow-md hover:from-gray-600 hover:to-gray-800"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button id="next"
          class="w-12 h-12 text-white text-xl rounded-full flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 shadow-md hover:from-gray-600 hover:to-gray-800"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  `;
}
const container = document.getElementById("slider-container");
function showSlide(index) {
  document.querySelector("#image").src = items[index].image;
  document.querySelector("#name").textContent = items[index].name;
  document.querySelector("#info").textContent = items[index].info;
}

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

document.getElementById("slider-container").innerHTML = generateSliderHTML();

document.getElementById("prev").addEventListener("click", handlePrev);
document.getElementById("next").addEventListener("click", handleNext);
