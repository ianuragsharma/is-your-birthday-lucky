const DOB = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const opMessage = document.querySelector("#output");

checkButton.addEventListener("click", checkIfBirthdateIsLucky);

function checkIfBirthdateIsLucky() {
  const bdate = DOB.value;
  console.log(bdate);
  const luckyNo = Number(luckyNumber.value);
  const sum = checkSum(bdate);

  if (sum && luckyNo) {
    if (sum % luckyNo === 0) {
      opMessage.innerText = "You have a lucky birthdate, congratsss";
    } else {
      opMessage.innerText = "Oops,Not a lucky birthdate. Sorry";
    }
  } else {
    opMessage.innerText =
      "Please fill both of the fields and lucky number should be greater than 1";
  }
}

function checkSum(bdate) {
  bdate = bdate.replaceAll("-", "");
  let sum = 0;

  for (let i = 0; i < bdate.length; i++) {
    sum = sum + Number(bdate.charAt(i));
  }

  return sum;
}
