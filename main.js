function errorMessage() {
  let inputs = [
    { id: "name", errorId: "error1", validation: validateText },
    { id: "email", errorId: "error", validation: validateText },
    { id: "subject", errorId: "error2", validation: validateText },
  ];

  let hasError = false;

  for (let i = 0; i < inputs.length; i++) {
    let inputElement = document.getElementById(inputs[i].id);
    let errorElement = document.getElementById(inputs[i].errorId);
    let value = inputElement.value;

    let errorMessage = inputs[i].validation(value);
    if (errorMessage) {
      errorElement.textContent = errorMessage;
      errorElement.style.color = "#abacae";
      hasError = true;
      console.log(errorElement.textContent);
    } else {
      errorElement.textContent = "";
    }
  }
}

function validateText(value) {
  if (value === "") {
    return "Field cannot be empty";
  }
  return "";
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("submitBtn");
var span = document.getElementsByClassName("close")[0];

function showModal() {
  modal.style.display = "block";
  setTimeout(closeModal, 3000); // Set timer to close the modal after 30 seconds
}

function closeModal() {
  modal.style.display = "none";
}
span.onclick = function () {
  closeModal();
};

function openModal(event) {
  // var clearForm = document.getElementById("myForm"); // Clear form data
  event.preventDefault();

  const form = document.getElementById("myForm"); // Reference the form element
  const formData = new FormData(event.target);
  const data = Object.values(Object.fromEntries(formData.entries()));
  hasError = data.some((x) => x === "");
  // console.log(isEmpty);
  if (!hasError) {
    showModal();
    form.reset();
    // clearForm.clear();
  }
}
document.getElementById("myForm").addEventListener("submit", openModal);

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");

  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
