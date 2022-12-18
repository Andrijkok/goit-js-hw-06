function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = getRandomHexColor();

const newCollection = document.querySelector("#boxes");

const elements = [];

for (let i = 0; i <= 5; i += 1) {}

const divEl = document.createElement("div");
divEl.style.width = "30px";
divEl.style.height = "30px";
divEl.style.backgroundColor = randomColor;

newCollection.append(divEl);

console.log(divEl);

console.log(newCollection);