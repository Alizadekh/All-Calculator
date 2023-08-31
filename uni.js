document.getElementById("addButton").addEventListener("click", function () {
  let numberInput = document.querySelector(".number");
  let inputBoxes = document.querySelector(".input-boxes");

  let ksqCount = parseInt(numberInput.value);

  if (isNaN(ksqCount) || ksqCount <= 0) {
    alert("Xahis edirik musbet eded girin");
    return;
  } else if (ksqCount > 8) {
    alert("Maksimum say 8 ola bilər!");
    return;
  }

  var boxTemplate = inputBoxes.querySelector(".box-1");
  var boxEndTemplate = inputBoxes.querySelector(".box-end");

  for (var i = 1; i < ksqCount; i++) {
    var klon = boxTemplate.cloneNode(true);
    klon.classList.remove("box-1");
    klon.classList.add("box-" + (i + 1));
    inputBoxes.insertBefore(klon, inputBoxes.querySelector(".finish"));
    klon.classList.add("fade-slide-in"); // Add animastion
    inputBoxes.insertBefore(klon, inputBoxes.querySelector(".finish"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var finishButton = document.querySelector(".finish");
  finishButton.addEventListener("click", calculateResult);
});

function calculateResult() {
  var boxes = document.querySelectorAll(".box");
  var totalProduct = 1;

  for (var i = 0; i < boxes.length; i++) {
    var leftInput = boxes[i].querySelector(".examscore");
    var rightInput = boxes[i].querySelector(".credits");

    var leftValue = parseFloat(leftInput.value);
    var rightValue = parseFloat(rightInput.value);

    if (!isNaN(leftValue) && !isNaN(rightValue)) {
      totalProduct += leftValue * rightValue;
    }
  }

  var totalSum = 0;
  var rightInputs = document.querySelectorAll(".credits");

  for (var j = 0; j < rightInputs.length; j++) {
    var inputValue = parseFloat(rightInputs[j].value);
    if (!isNaN(inputValue)) {
      totalSum += inputValue;
    }
  }

  if (totalSum !== 0) {
    var result = totalProduct / totalSum;
    var finalResultSpan = document.querySelector(".score span");
    finalResultSpan.textContent = result;
  }
}

// Make Mobile Navbar events
const burgerMenu = document.querySelector(".burger-menu");
const menuContent = document.querySelector(".container");
const closeMenuBtn = document.getElementById("closeBtn");

const openMenu = function () {
  menuContent.style.transform = "translateX(0px)";
  burgerMenu.style.display = "none";
};
const closeMenu = () => {
  menuContent.style.transform = "translateX(-500px)";
  burgerMenu.style.display = "block";
};

burgerMenu.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
