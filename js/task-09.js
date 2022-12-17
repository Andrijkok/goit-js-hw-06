function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const handleClick = () => {
  const newColor = getRandomHexColor();
  console.log(newColor);
  body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
};

button.addEventListener("click", handleClick);
