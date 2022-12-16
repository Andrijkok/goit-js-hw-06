const linearSlider = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");

linearSlider.addEventListener("input", (event) => {
  linearSlider.input = Number(event.target.value);
  textSpan.style.fontSize = `${linearSlider.input}px`;
});
