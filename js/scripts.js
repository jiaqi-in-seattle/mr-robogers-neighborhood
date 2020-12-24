let functionNumbers = function(number) {
let numbers = [];
  for (index = 0; index <= number; index += 1) {
    if (index.toString().includes("3")) {
      numbers.push("Won't you be my neighbor?");
    } else if (index.toString().includes("2")) {
      numbers.push(" Boop!");
    } else if (index.toString().includes("1")) {
      numbers.push(" Beep!");
    } else {
      numbers.push(" " + index);
    }
  }
  return numbers;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    let number = parseInt($("input#number").val());
    let result = functionNumbers(number);

    $(".array").text(result);
    $("#result").show();

  });
});