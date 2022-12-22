function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const newCollection = document.querySelector("#boxes");
const numberInput = document.querySelector("input");
const creatBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

numberInput.addEventListener("input", (event) => {
  const value = event.currentTarget.value;

  creatBtn.addEventListener("click", () => {
    createBoxes(value);
  });
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 20;

  for (let i = 0; i < amount; i += 1) {
    size += 10;

    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    newCollection.append(divEl);
  }
}

function destroyBoxes() {
  newCollection.innerHTML = "";
}
