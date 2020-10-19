class Product {
  constructor(name, price, category, quantity) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }
  render() {
    return `
        <p>Name: ${this.name}</p>
        <p>Price: ${this.price}</p>
        <p>Category: ${this.category}</p>
    `;
  }

  display() {
    // take the html and display in in the container
    const productDiv = document.createElement("div");
    productDiv.innerHTML = this.render();
    productDiv.classList.add("productContainer");
    // only if fruit or veggi
    if (this.category === "Fruit" || this.category === "Vegetable") {
      productDiv.style.backgroundColor = "#b8de6f";
    }

    document.getElementById("products").appendChild(productDiv);
  }
}

class Bio extends Product {
  filtered(listProducts) {
    listProducts = listProducts.filter((list) => {
      return list.category === "fruits";
    });
  }
}

const muffin = new Product("Muffin", 2, "Sweets", 5);
const tomato = new Product("Tomato", 1.5, "Vegetable", 3);
const cheese = new Product("Cheese", 3.5, "Dairy", 2);
const banana = new Product("Banana", 1, "Fruit", 2);
const orange = new Product("Orange", 5, "Fruit", 50);
const avocado = new Product("Avocado", 3, "Fruit", 15);
const blueberry = new Product("Blueberry", 2, "Fruit", 10);
const lettuce = new Product("Lettuce", 1, "Vegetable", 4);
const olives = new Product("Olives", 3, "Vegetable", 20);
const mango = new Product("Mango", 2, "Fruit", 6);
const mushroom = new Product("Mushrrom", 4, "Vegetable", 13);
const tofu = new Product("Tofu", 4, "Dairy", 2);
const churro = new Product("Churros", 1, "Dessert", 7);
const carrot = new Product("Carrot", 1, "Vegetable", 6);
const beans = new Product("Chea-peas", 2, "Vegetable", 2);
const milk = new Product("Soy", 5, "Dairy", 6);
const seed = new Product("Chai-seeds", 6, "Seed", 5);

const listProducts = [
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

listProducts
  .sort((a, b) => {
    return b.price - a.price;
  })
  .forEach((element) => {
    element.display();
  });

// create some html to disply it
// add the html to our page

// TODO:
// add 10 more products -DONE.
// add your own style to the shop page
// add a header and a footer
// add if the product is bio or not

// TODO:
// Create a bio-fruit class based on the product one: This will always eb bio and fruit at the same time

// Advanbced
// filter: add a button that filter the fruits
