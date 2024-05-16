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

nextStepBtns.forEach((cur) =>
  cur.addEventListener("click", function (e) {
    const currNextBtn = e.target;
    if (currNextBtn.classList.contains("next-stp1")) {
      const fields = [
        { input: nameInp, value: nameInp.value },
        { input: emailInp, value: emailInp.value },
        { input: phoneInp, value: phoneInp.value },
      ];
      if (!currNextBtn) return;

      let anyFieldNotEmpty = false;

      fields.forEach((field) => {
        const { input, value } = field;
        const parentDiv = input.closest(".input-top__input");
        const errorElement = parentDiv.querySelector(".error-message");
        if (value !== "") {
          input.classList.remove("error");
          if (errorElement) {
            errorElement.classList.remove("error");
          }
          anyFieldNotEmpty = true;
        } else {
          input.classList.add("error");
          if (errorElement) {
            errorElement.classList.add("error");
          }
        }
      });
    }
  })
);
