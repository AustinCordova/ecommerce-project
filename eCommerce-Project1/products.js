  var selectElement = document.querySelector('.products');

selectElement.addEventListener('change', (event) => {
  var result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});