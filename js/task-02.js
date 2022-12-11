const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {  
  const newElementLi = document.createElement("li");
  newElementLi.textContent = element;
  newElementLi.classList.add("item");
  console.log(newElementLi); 
 
  list.append(newElementLi);
   
});

console.log(list);
