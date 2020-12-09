import { header } from '../modules/header';
import { footer } from '../modules/footer';
import { body } from '../modules/body';
import { lunchgenerator } from '../modules/lunch-generator';

class App {
  constructor(){
    this.renderTemplate();
  }

  renderTemplate() {
    const template =
    <h1>${header.title}</h1>
    <p>${body.bodyContent}</p>
    ;

    document.body.innerHTML = template;
  }
}

let bread = [
    ['Rye', 'images/rye.jpg'], 
    ['Sourdough', 'images/sourdough.jpg'], 
    ['White', 'images/white.jpg'], 
    ['Wheat', 'images/wheat.jpg'],
    ['Baguette', 'images/baguette.jpg']
];

let topping1 = [
  ['Tomato', 'images/tomato.jpg'],
  ['Avocado', 'images/avocado.jpg'],
  ['Lettuce', 'images/lettuce.jpg'],
  ['Peppers', 'images/peppers.jpg']
];

let topping2 = [
  ['Onions', 'images/onion.jpg'],
  ['Olives', 'images/olive.jpg'],
  ['Cucumber', 'images/cucumber.jpg'],
  ['Jalapenos', 'images/jalapeno.jpg']
];

let protein = [
  ['Steak', 'images/steak.jpg'],
  ['Chicken', 'images/chicken.jpg'],
  ['Veggie Patty', 'images/veggie-patty.jpg']
];

let condiment = [
  ['Ketchup', 'images/ketchup.jpg'],
  ['Oil & Vinegar', 'images/oil-and-vinegar.jpg'],
  ['Mustard', 'images/mustard.jpg'],
  ['Relish', 'images/relish.jpg']
];

let side = [
  ['Fries', 'images/fries.jpg'],
  ['Chips', 'images/chips.jpg'],
  ['Salad', 'images/salad.jpg']
];

let drinks = [
  ['Lemonade', 'images/lemonade.jpg'],
  ['Water', 'images/water.jpg'],
  ['Coke', 'images/coke.jpg']
];

//Bread//
document.getElementById("lunchbutton").addEventListener("click", randomBread);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomBread() {
    const i = randomIndex(bread);
    document.getElementById("bread").innerHTML = bread[i][0];
    document.getElementById("breadimg").src = bread[i][1];
};

//Topping1//
document.getElementById("lunchbutton").addEventListener("click", randomTopping1);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomTopping1() {
    const i = randomIndex(topping1);
    document.getElementById("topping1").innerHTML = topping1[i][0];
    document.getElementById("topping1img").src = topping1[i][1];
};

//Topping2//
document.getElementById("lunchbutton").addEventListener("click", randomTopping2);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomTopping2() {
    const i = randomIndex(topping2);
    document.getElementById("topping2").innerHTML = topping2[i][0];
    document.getElementById("topping2img").src = topping2[i][1];
};

//Protein//
document.getElementById("lunchbutton").addEventListener("click", randomProtein);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomProtein() {
    const i = randomIndex(protein);
    document.getElementById("protein").innerHTML = protein[i][0];
    document.getElementById("proteinimg").src = protein[i][1];
};

//Condiment//
document.getElementById("lunchbutton").addEventListener("click", randomCondiment);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomCondiment() {
    const i = randomIndex(condiment);
    document.getElementById("condiment").innerHTML = condiment[i][0];
    document.getElementById("condimentimg").src = condiment[i][1];
};

//Side//
document.getElementById("lunchbutton").addEventListener("click", randomSide);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomSide() {
    const i = randomIndex(side);
    document.getElementById("side").innerHTML = side[i][0];
    document.getElementById("sideimg").src = side[i][1];
};

//Drink//
document.getElementById("lunchbutton").addEventListener("click", randomDrink);
function randomIndex(myArray) {
  return Math.floor(Math.random()*myArray.length);
}

function randomDrink() {
    const i = randomIndex(drinks);
    document.getElementById("drink").innerHTML = drinks[i][0];
    document.getElementById("drinkimg").src = drinks[i][1];
};