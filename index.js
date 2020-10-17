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

const muffin = new Product("Muffin", 2, "Sweets", 5);
const tomato = new Product("Tomato", 1.5, "Vegetable", 3);
const cheese = new Product("Cheese", 3.5, "Dairy", 2);
const banana = new Product("Banana", 1, "Fruit", 2);
const orange = new Product("Orange", 5, "Fruit", 50);
const avocado = new Product("Avogado", 3, "Fruit", 15);

const listProducts = [orange, avocado, muffin, tomato, cheese];

listProducts
    .sort((a,b)=>{
        return  b.price - a.price
    })
    .forEach((element) => {
  element.display();
});

// create some html to disply it
// add the html to our page

// TODO:
// add 10 more products
// add your own style to the shop page
// add a header and a footer
// add if the product is bio or not

// TODO:
// Create a bio-fruit class based on the product one: This will always eb bio and fruit at the same time

// Advanbced
// filter: add a button that filter the fruits 