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
    inputBoxes.insertBefore(klon, inputBoxes.querySelector(".box-end"));
    klon.classList.add("fade-slide-in"); // Add animastion
    inputBoxes.insertBefore(klon, inputBoxes.querySelector(".box-end"));
  }
});

document.querySelector(".finish").addEventListener("click", function () {
  var boxes = document.querySelectorAll(".box input");
  var boxEndInput = document.querySelector(".box-end input");
  var scoreSpan = document.querySelector(".score span");

  var total = 0;
  for (var i = 0; i < boxes.length; i++) {
    var value = parseFloat(boxes[i].value);
    if (!isNaN(value)) {
      total += value;
    }
  }
  const endValue = (total / i) * 0.4;
  const bsqValue = boxEndInput.value * 0.6;

  scoreSpan.textContent = endValue + bsqValue;
});
