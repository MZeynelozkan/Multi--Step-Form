"use strict";

const nextStepBtns = document.querySelectorAll(".next-stp");
const inputArea = document.querySelector(".input-box-area");
const inputs = document.querySelectorAll(".input");
const nameInp = document.querySelector("#nameinp");
const emailInp = document.querySelector("#emailinp");
const phoneInp = document.querySelector("#phoneinp");
const errorAreas = document.querySelectorAll(".error-message");
const step1 = document.querySelector(".step1");
const numbers = document.querySelectorAll(".number");

inputArea.addEventListener("click", function (e) {
  const curInp = e.target.closest(".input");
  if (!curInp) return;

  inputs.forEach((input) => {
    input.classList.toggle("active", input === curInp);
  });
});

const phone = phoneInp.value;
const email = emailInp.value;
const name = nameInp.value;

inputs.forEach((input) => {
  input.addEventListener("change", function () {
    input.classList.remove("error");
    input
      .closest(".input-top__input")
      .querySelector(".error-message")
      .classList.remove("error");
  });
});

nextStepBtns.forEach((cur) =>
  cur.addEventListener("click", function (e) {
    const phone = phoneInp.value;
    const email = emailInp.value;
    const name = nameInp.value;

    const currNextBtn = e.target;

    if (!currNextBtn) return;
    if (currNextBtn.classList.contains("next-stp1")) {
      if (phone !== "" && email !== "" && name !== "") {
        step1.classList.add("hidden");
        for (let i = 0; i < numbers.length; i++) {
          let mov = numbers[i];
          if (mov.textContent === "1" && mov.classList.contains("active")) {
            if (i + 1 < numbers.length) {
              changeActiveCircle(mov, numbers[i + 1]);
            }
          }
        }
      } else {
        if (phone === "") {
          phoneInp.classList.add("error");
          phoneInp
            .closest(".input-top__input")
            .querySelector(".error-message")
            .classList.add("error");
        }
        if (email === "") {
          emailInp.classList.add("error");
          emailInp
            .closest(".input-top__input")
            .querySelector(".error-message")
            .classList.add("error");
        }
        if (name === "") {
          nameInp.classList.add("error");
          nameInp
            .closest(".input-top__input")
            .querySelector(".error-message")
            .classList.add("error");
        }
      }
    }
  })
);

function changeActiveCircle(currStep, nextStep) {
  currStep.classList.remove("active");
  nextStep.classList.add("active");
}
