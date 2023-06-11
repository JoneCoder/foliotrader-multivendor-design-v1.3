tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
    },
  },
};
// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//     x.className.add = "menu-left-class";
//   } else {
//     x.style.display = "block";
//   }
// }

let toggle2 = true;
const solyman = (toggle2) => {
  if (toggle2 == false) {
    document.getElementById("myLinks").classList.add("menu-left-class-0");
  } else {
    document.getElementById("myLinks").classList.remove("menu-left-class-0");
    document.getElementById("myLinks").classList.add("menu-left-class");
  }
};

let toggle = true;

const sidebarToggle = (toggle) => {
  if (toggle == false) {
    document.getElementById("sidebar").classList.add("left-50-custom");
    document.getElementById("toggleBtn").classList.add("left-0-custom");
    document.getElementById("content").classList.add("margin-left-0-custom");
  } else {
    document.getElementById("sidebar").classList.remove("left-50-custom");
    document.getElementById("toggleBtn").classList.remove("left-0-custom");
    document.getElementById("content").classList.remove("margin-left-0-custom");

    document.getElementById("sidebar").classList.add("left-50-custom1");
    document.getElementById("toggleBtn").classList.add("left-0-custom1");
    document.getElementById("content").classList.add("margin-left-0-custom1");
  }
};

// dropdown
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});
