let bread = [
    ['Rye', 'images/rye.jpg'] 
    ['Sourdough', 'images/sourdough.jpg'] 
    ['White', 'images/white.jpg'] 
    ['Wheat', 'images/wheat.jpg']
    ['Baguette', 'images/baguette.jpg']
]

let topping1 = [
    ['Tomato', 'images/tomato.jpg']
    ['Avocado', 'images/avocado.jpg']
    ['Lettuce', 'images/lettuce.jpg']
    ['Peppers', 'images/peppers/jpg']
]

let topping2 = [
    ['Onions', 'images/onion.jpg']
    ['Olives', 'images/olive.jpg']
    ['Cucumber', 'images/cucumber.jpg']
    ['Jalapenos', 'images/jalapeno/jpg']
]

let protein = [
    ['Steak', 'images/steak.jpg']
    ['Chicken', 'images/chicken.jpg']
    ['Veggie Patty', 'images/veggie-patty.jpg']
]

let condiment = [
    ['Ketchup', 'images/ketchup.jpg']
    ['Oil & Vinegar', 'images/oil-and-vinegar.jpg']
    ['Mustard', 'images/mustard.jpg']
    ['Relish', 'images/relish/jpg']
]

let drinks = [
    ['Lemonado', 'images/lemonade.jpg']
    ['Water', 'images/water.jpg']
    ['Coke', 'images/coke.jpg']
]

document.getElementById("breadsection").addEventListener("load", randomBread);


function randomBread() {
  var i, j, k;
    for (i = cheese.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * i)
      k = cheese[i]
      cheese[i] = cheese[j]
      cheese[j] = k
    }
    document.getElementById("cheesetext").innerHTML = cheese[0];
};

= myArray [1][0]
= myArray [1][1]