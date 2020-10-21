class Product {
  constructor(name, price, category, quantity, isBio = false) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
    this.isBio = isBio;
  }
  render() {
    return `
        <p>Name: ${this.name}</p>
        <p>Price: ${this.price}</p>
        <p>Category: ${this.category}</p>
        <p>Bio: ${this.isBio ? "Yes" : "No"}</p>
    `;
  }

  display() {
    // take the html and display in in the container
    const productDiv = document.createElement("div");
    productDiv.innerHTML = this.render();
    productDiv.classList.add("productContainer");

    const heading = document.createElement("style");
    heading.innerHTML = `#grocery{
      background: #effad3;
      text-align:center;
      padding:2px auto;
    }`;

    // only if fruit or veggi
    if (this.category === "Fruit" || this.category === "Vegetable") {
      productDiv.style.backgroundColor = "#b8de6f";
    } else {
      productDiv.style.backgroundColor = "#2d6187";
    }

    document.getElementById("products").appendChild(productDiv);
    document.head.appendChild(heading);
  }
}

class BioFruit extends Product {
  constructor(name, price, quantity) {
    super(name,price, "Fruit",quantity,true);
  }
}
const bioOrange = new BioFruit("Orange", 1, 4)
const orange = new Product("Orange", 5, "Fruit", 50);
const muffin = new Product("Muffin", 2, "Sweets", 5);
const tomato = new Product("Tomato", 1.5, "Vegetable", 3, "bio");
const cheese = new Product("Cheese", 3.5, "Dairy", 2);
const banana = new Product("Banana", 1, "Fruit", 2);
const avocado = new Product("Avocado", 3, "Fruit", 15);
const blueberry = new Product("Blueberry", 2, "Fruit", 10);
const lettuce = new Product("Lettuce", 1, "Vegetable", 4);
const olives = new Product("Olives", 3, "Vegetable", 20);
const mango = new Product("Mango", 2, "Fruit", 6);
const mushroom = new Product("Mushrrom", 4, "Vegetable", 13);
const tofu = new Product("Tofu", 4, "Dairy", 2);
const churro = new Product("Churros", 1, "Sweets", 7);
const carrot = new Product("Carrot", 1, "Vegetable", 6);
const beans = new Product("Chea-peas", 2, "Vegetable", 2);
const bioMilk = new Product("Soy", 5, "Dairy", 6, true);
const milk = new Product("Milk", 2, "Dairy", 6, false);
const seed = new Product("Chai-seeds", 6, "Seed", 5);

const listProducts = [
  bioOrange,
  orange,
  avocado,
  muffin,
  tomato,
  cheese,
  blueberry,
  olives,
  lettuce,
  tofu,
  mushroom,
  mango,
  beans,
  carrot,
  milk,
  seed,
  churro,
  banana,
];

function displayProducts(categoryFilter) {
  // clean up
  document.getElementById("products").innerHTML = "";


  // bfore show prodcuts
  listProducts
    .sort((a, b) => {
      return b.price - a.price; // TODO: Make a parameter to also sort desc / asc by price
    })
    .filter((element) => {
      if (categoryFilter && categoryFilter !== "") {
        // filter logic
        if (element.category === categoryFilter) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
    .forEach((element) => {
      element.display();
    });
}


// create some html to disply it
// add the html to our page

// TODO:
// add 10 more products -DONE.
// add your own style to the shop page -Done
// add a header and a footer-Done
// add if the product is bio or not ?

// TODO:
// Create a bio-fruit class based on the product one: This will always eb bio and fruit at the same time

// Advanbced
// filter: add a button that filter the fruits
