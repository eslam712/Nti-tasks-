const images = [
  { value: 1, source: "imaged/one.svg" },
  { value: 2, source: "imaged/two.svg" },
  { value: 3, source: "imaged/three.svg" },
  { value: 4, source: "imaged/four.svg" },
  { value: 5, source: "imaged/five.png" },
  { value: 6, source: "imaged/six.svg" },
];

const firstNumber = document.querySelector("#firstNumber");
const secondNumber = document.querySelector("#secondNumber");
const totalValue = document.querySelector("#totalValue");
const changeButton = document.querySelector("#changeButton");

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function changeNumbers() {
  const first = getRandomImage();
  const second = getRandomImage();

  firstNumber.src = first.source;
  firstNumber.alt = `الرقم ${first.value}`;
  secondNumber.src = second.source;
  secondNumber.alt = `الرقم ${second.value}`;
  totalValue.textContent = first.value + second.value;
}

changeButton.addEventListener("click", changeNumbers);
