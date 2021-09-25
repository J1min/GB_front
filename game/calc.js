let numOne = "";
let numTwo = "";
let operator = "";
const $operator = document.getElementById("#operator");
const $result = document.getElementById("#result");
document.getElementById("#num-0").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "0";
  } else {
    numOne = numOne + "0";
  }
  $result.value = $result.value + "0";
});
document.getElementById("#num-1").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "1";
  } else {
    numOne = numOne + "1";
  }
  $result.value = $result.value + "1";
});
document.getElementById("#num-2").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "2";
  } else {
    numOne = numOne + "2";
  }
  $result.value = $result.value + "2";
});
document.getElementById("#num-3").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "3";
  } else {
    numOne = numOne + "3";
  }
  $result.value = $result.value + "3";
});
document.getElementById("#num-4").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "4";
  } else {
    numOne = numOne + "4";
  }
  $result.value = $result.value + "4";
});
document.getElementById("#num-5").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "5";
  } else {
    numOne = numOne + "5";
  }
  $result.value = $result.value + "5";
});
document.getElementById("#num-6").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "6";
  } else {
    numOne = numOne + "6";
  }
  $result.value = $result.value + "6";
});
document.getElementById("#num-7").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "7";
  } else {
    numOne = numOne + "7";
  }
  $result.value = $result.value + "7";
});
document.getElementById("#num-8").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "8";
  } else {
    numOne = numOne + "8";
  }
  $result.value = $result.value + "8";
});
document.getElementById("#num-9").addEventListener("click", function () {
  if (operator) {
    numTwo = numTwo + "9";
  } else {
    numOne = numOne + "9";
  }
  $result.value = $result.value + "9";
});
document.getElementById("#plus").addEventListener("click", function () {});
document.getElementById("#minus").addEventListener("click", function () {});
document.getElementById("#divide").addEventListener("click", function () {});
document.getElementById("#multiply").addEventListener("click", function () {});
document.getElementById("#calulate").addEventListener("click", function () {});
document.getElementById("#clear").addEventListener("click", function () {});
