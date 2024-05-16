"use strict";

const nextStepBtns = document.querySelectorAll(".next-stp");
const inputArea = document.querySelector(".input-box-area");
const inputs = document.querySelectorAll(".input");
const nameInp = document.querySelector("#nameinp");
const emailInp = document.querySelector("#emailinp");
const phoneInp = document.querySelector("#phoneinp");
const errorAreas = document.querySelectorAll(".error-message");
const step1 = document.querySelector(".step1");

inputArea.addEventListener("click", function (e) {
  const curInp = e.target.closest(".input");
  if (!curInp) return;

  inputs.forEach((input) => {
    input.classList.toggle("active", input === curInp);
  });
});

////////////////////////////////////////
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
