const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});


function bookRoom() {
  // Show success modal
  showModal("Room Booked");
}


function showModal(message) {
  document.getElementById("modal-message").textContent = message;
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function bookRoom() {
  // Get all input and select elements
  const inputs = document.querySelectorAll(".input__group input");
  const select = document.getElementById("room");
  let allFilled = true;

  // Check if all inputs have values
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  // Check if a room is selected
  if (select.value === "") {
    allFilled = false;
  }

  // Show modal if all inputs are filled, otherwise alert the user
  if (allFilled) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = "Room booked successfully!";
    modal.style.display = "flex";

    // Clear all input fields
    inputs.forEach((input) => {
      input.value = "";
    });

    // Reset the dropdown
    select.value = "";
  } else {
    alert("Please fill in all fields before booking.");
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

