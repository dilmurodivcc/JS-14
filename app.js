function m1() {
  const input = document.getElementById("inputValue").value;
  const start = +document.getElementById("start").value;
  const end = +document.getElementById("end").value;
  const arr = input.trim().split(" ");
  Array.prototype.customSlice = function (start, end) {
    const result = [];
    start = start || 0;
    end = end || this.length;
    for (let i = start; i < end; i++) {
      result.push(this[i]);
    }
    return result;
  };
  document.getElementById("output").innerHTML = `
  Custom: ${arr.customSlice(start, end)}
   <br>
  Original: ${arr.slice(start, end)}`;
}

function m2() {
  const input = document.getElementById("inputValue2").value;
  const arr = input.trim().split(" ").map(Number);
  Array.prototype.even = function () {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        result.push(this[i]);
      }
    }
    return result;
  };
  document.getElementById("output2").innerHTML = `
    Juft sonlar: [${arr.even()}]
`;
}

function m3() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    job: "Developer",
    country: "USA",
    get info() {
      return `Name: ${this.firstName} ${this.lastName},
       <br> Age: ${this.age},
       <br> Job: ${this.job}, 
       <br> Country: ${this.country}`;
    },
    set change({ firstName, lastName, age }) {
      if (firstName) this.firstName = firstName;
      if (lastName) this.lastName = lastName;
      if (age) this.age = age;
    },
  };
  document.getElementById(
    "output3"
  ).innerHTML = `<span>GET:</span> ${person.info} <br> <br>`;
  person.change = { firstName: "Jane", lastName: "Smith", age: 30 };
  document.getElementById(
    "output3"
  ).innerHTML += `<span>SET:</span> ${person.info}`;
}

function m4() {
  const j1 = +document.getElementById("s1").value;
  const j2 = +document.getElementById("s2").value;
  const j3 = +document.getElementById("s3").value;
  const j4 = +document.getElementById("s4").value;
  const j5 = +document.getElementById("s5").value;
  let correctCount = 0;
  if (j1 === 132) correctCount++;
  if (j2 === 3) correctCount++;
  if (j3 === 0.3) correctCount++;
  if (j4 === 1995) correctCount++;
  if (j5 === 1993) correctCount++;
  document.getElementById(
    "output4"
  ).innerHTML = `Sizning javoblaringiz: ${correctCount}/5. Sizning baho: ${correctCount}.`;
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
