// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
   
  //Precio
  let priceDOM = product.querySelector(".price span");
  //Cantidad
  let quantityDOM = product.querySelector(".quantity input");
  
  //precio * cantidad
  let calculateSubTotalDOM = Number(priceDOM.innerHTML) * Number(quantityDOM.value);
  
  
  //Esta es la casilla del 0
  let subTotalDOM = product.querySelector(".subtotal span");
  // 0 pasado a numero
  let subTotalNumDOM = Number(subTotalDOM.innerHTML);
  //sustituir cero y producto
  let totalSumDOM = subTotalNumDOM + calculateSubTotalDOM;

  subTotalDOM.innerHTML = totalSumDOM;
  return totalSumDOM;


  //... your code goes here
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

    // Incluyo todos los productos
    const allProducts = document.getElementsByClassName('product');

    let total = 0;
    // Itero por cada uno de ellos para acumular el subtotal
    for (let product of allProducts) {
      total += updateSubtotal(product);
    }
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  let totalElementDOM = document.querySelector("#total-value span");
  totalElementDOM.innerText = total.toFixed(2);
  
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  
  //... your code goes here
  let rowElement = target.parentNode.parentNode;
  //   console.log('row: ', row);
  let parent = row.parentNode;
    //console.log('parent: ', parent);
  
   parent.removeChild(rowElement);

   
}

// ITERATION 5

function createProduct() {
  //... your code goes here

  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  let removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }
});
