function m1() {
  const input = document.getElementById("array").value;
  const arr = input.trim().split(" ").map(Number);
  const sum = +document.getElementById("sum").value;
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push(`[${arr[i]}, ${arr[j]}]`);
      }
    }
  }
  document.getElementById("output").innerHTML = ` ${pairs.join(" ")}`;
}

function m2() {
  const input = document.getElementById("inputValue2").value;
  const lowerCase = input.toLowerCase();
  if (lowerCase === lowerCase.split("").reverse().join("")) {
    document.getElementById("output2").innerHTML = "Palindrom";
  } else {
    document.getElementById("output2").innerHTML = "Palindrom emas";
  }
}
function m3() {
  const str1 = document.getElementById("inputValue3").value;
  const str2 = document.getElementById("inputValue3_2").value;

  const formatString = (str) => {
    return str
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  };

  if (formatString(str1) === formatString(str2)) {
    document.getElementById("output3").innerHTML = "Anagram";
  } else {
    document.getElementById("output3").innerHTML = "Anagram emas";
  }
}



function m4() {
  const num = +document.getElementById("inputValue4").value;
  function fibonacci(n) {
    if (n <= 0) return 0; 
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }

  document.getElementById("output4").innerHTML = fibonacci(num);
}



// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}
moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  mouseWheel: true,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  touchEventsTarget: "container",
  touchRatio: 1,
});
