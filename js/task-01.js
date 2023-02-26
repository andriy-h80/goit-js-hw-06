const quantityOfCategories = document.querySelectorAll(".item");
console.log(`Quantity of categories: ${quantityOfCategories.length}`);

quantityOfCategories.forEach(item => {
  const articleText = item.querySelector('h2').textContent;
  console.log(`Article: ${articleText}`);
  
  const quantityOfElements = item.querySelectorAll('li').length;
  console.log(`Elements: ${quantityOfElements}`);
});