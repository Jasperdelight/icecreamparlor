
const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: .25,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .25,
  quantity: 0
}, {
  name: 'Gummy Worms',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .75,
  quantity: 0
}
]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
},
{
  name: 'Dipped Cone',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 5,
  quantity: 0
}]
const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0
}]

function addCookieDoughToCart() {

  let cookieDough = iceCream.find(iceCreamItem => iceCreamItem.name == 'Cookie Dough')
  cookieDough.quantity++
  drawIceCream();
  drawTotal();
}

function addIcecreamToCart(itemName) {
  let desert = iceCream.find(iceCreamItem => iceCreamItem.name == itemName)
  desert.quantity++

  drawIceCream();
  drawTotal();
}

function addToppingsToCart(itemName) {
  let dessert = toppings.find(toppingItem => toppingItem.name == itemName)
  dessert.quantity++
  drawToppings();
  drawTotal();
}

function addContainersToCart(itemName) {
  let dessert = containers.find(containerItem => containerItem.name == itemName)
  dessert.quantity == 1

  drawContainers();
  drawTotal();
}

function drawIceCream() {

  let stringOfMenuHTML = ''

  iceCream.forEach(iceCreamItem => {
    if (iceCreamItem.quantity > 0) {
      stringOfMenuHTML += `
<li>
<div class="row justify-content-between">
  <span class= "col-3">${iceCreamItem.name} </span>
  <span class= "col-3">${iceCreamItem.quantity}</span>
  <span class= "col-3">$${iceCreamItem.price.toFixed(2)}</span>
  <span class= "col-3">$${iceCreamItem.quantity * iceCreamItem.price.toFixed(2)} </span>
</div>
</li>
`
    }
  })

  const cartElement = document.getElementById('cart')
  cartElement.innerHTML = stringOfMenuHTML

}

function drawToppings() {

  let stringOfMenuHTML = ''

  toppings.forEach(toppingItem => {
    if (toppingItem.quantity > 0) {
      stringOfMenuHTML += `
<li>
<div class="row justify-content-between">
  <span class= "col-3">${toppingItem.name}</span>
  <span class= "col-3">${toppingItem.quantity}</span>
  <span class= "col-3">$${toppingItem.price.toFixed(2)}</span>
  <span class= "col-3">$${toppingItem.quantity * toppingItem.price.toFixed(2)} </span>
</div>
</li>
`
    }
  })

  const cartElement = document.getElementById('toppingCart')
  cartElement.innerHTML = stringOfMenuHTML

}

function drawContainers() {

  let stringOfMenuHTML = ''

  containers.forEach(containerItem => {
    if (containerItem.quantity > 0) {
      stringOfMenuHTML += `
<li>
<div class="row justify-content-between">
<span class="col-3">${containerItem.name} </span>
<span class="col-2">${containerItem.quantity}</span>
  <span class="col-2">$${containerItem.price.toFixed(2)}</span>
  <span class="col-2">$${containerItem.quantity * containerItem.price.toFixed(2)} </span>
</div>
</li>
`
    }
  })
  const cartElement = document.getElementById('containerCart')
  cartElement.innerHTML = stringOfMenuHTML
}

function drawTotal() {

  // SECTION  PRICE TOTAL
  let cartTotal = document.getElementById('cartTotal')

  let cartSum = 0
  iceCream.forEach(iceCreamItem => {
    cartSum += iceCreamItem.quantity * iceCreamItem.price
  })
  toppings.forEach(toppingItem => {
    cartSum += toppingItem.quantity * toppingItem.price
  })
  containers.forEach(containerItem => {
    cartSum += containerItem.quantity * containerItem.price
  })
  // SECTION  QUANTITY TOTAL

  let numberTotal = document.getElementById('numberTotal')
  let numberSum = 0

  iceCream.forEach(iceCreamQuantity => {
    numberSum += iceCreamQuantity.quantity
    console.log(numberSum)
  })
  toppings.forEach(toppingsQuantity => {
    numberSum += toppingsQuantity.quantity
  })
  containers.forEach(containerItem => {
    numberSum += containerItem.quantity
  })


  // SECTION DRAW BOTH TO THE PAGE
  numberTotal.innerText = numberSum.toString()
  cartTotal.innerText = cartSum.toString()

}

// function itemTotal() {
//   let numberTotal = document.getElementById('numberTotal')
//   let numberSum = 0

//   iceCream.forEach(iceCreamQuantity => {
//     numberSum += iceCreamQuantity.quantity
//     console.log(numberSum)
//   })

//   numberTotal.innerText = numberSum.toString()
// }


