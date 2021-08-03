"use strict";

const labels = document.querySelectorAll("label");
const groups = document.querySelectorAll(".form-input");
const inputs = document.querySelectorAll(".form-control");

inputs.forEach((input, i) => {
  input.addEventListener("focus", () => {
    let focus = input.addEventListener("click", () => {
      labels[i].classList.add("down");
    });

    //     if ((inputs[i].innerText = "")) {
    //       labels[i].classList.remove("down");
    //     } else {
    //       labels[i].classList.add("down");
    //     }

    if (input.textContent != "") {
      labels[i].classList.add("down");
    } else if ((input.innerText = "" || !focus)) {
      labels[i].classList.remove("down");
    } else if (focus) {
      return;
    } else {
      labels.forEach((label) => {
        label.classList.remove("down");
      });
    }
  });
});
