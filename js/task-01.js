console.log("Number of categories:", categories.children.length);

const listWithClass = document.querySelectorAll(".item");

listWithClass.forEach((element) => {
  const firstChildItem = element.firstElementChild;
  console.log("Category:", firstChildItem.textContent);

  const lastChildItem = element.lastElementChild;
  console.log("Elements:", lastChildItem.children.length);
});
