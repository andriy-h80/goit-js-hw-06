const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ulRef = document.querySelector('#ingredients');

//   ingredients.forEach(ingredient => {
//     const ingrRef = document.createElement('li');
//     ingrRef.textContent = ingredient;
//     ingrRef.classList.add('item');
//     ulRef.append(ingrRef);
//   });

const ulRef = document.querySelector("#ingredients");

const addIngrToList = ingredients => {
  ingredients.map(ingredient => {
    const ingrRef = document.createElement("li");
    ingrRef.textContent = ingredient;
    ingrRef.classList.add("item");
    ulRef.append(ingrRef);
  });
};

addIngrToList(ingredients);

