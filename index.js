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
        <li>Name: ${this.name}</li>
        <li>Price: ${this.price}</li>
        <li>Category: ${this.category}</li>
        <li>Bio: ${this.isBio ? "Yes" : "No"}</li>
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
    super(name, price, "Fruit", quantity, true);
  }
}
const bioOrange = new BioFruit("Orange", 1, 4);
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

// .sort((a,b) => (a.price - b.price))

function displayPrice(order = "asc") {
  document.getElementById("products").innerHTML = "";

  if (order === "desc") {
    listProducts.sort((a, b) => a.price - b.price);
  } else {
    listProducts.sort((a, b) => b.price - a.price);
  }

  listProducts.forEach((prod) => prod.display());
}

function displayProducts(categoryFilter) {
  // clean up
  document.getElementById("products").innerHTML = "";

  // bfore show prodcuts
  listProducts

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

// Logic for the Movies

function searchMovie() {
  document.getElementById("movies").innerHTML = "";

  const movieTitle = document.getElementById("movie-search").value;

  // http://www.omdbapi.com/?t=Avengers

  // send a request ot the Movie API -- async - not at the same time

  const response = fetch(
    `http://www.omdbapi.com/?t=${movieTitle}&apikey=8c73ddeb`
  ) // returns a Promise object
    .then((res) => res.json()) // returns a Promise object
    .then((data) => {
      // display the movie
      const movieDiv = document.createElement("div");
      console.log(data);
      movieDiv.innerHTML = `
        <ul>
        <li><b>Title:</b>  <span>${data.Title}</span></li>
        <li><b>Released:</b> <span> ${data.Released}</li>
        <li><b>Rated:</b>  <span>${data.Rated}</li>
        <li><b>Runtime:</b>  <span>${data.Runtime}</li>
        <li><b>Genre:</b> <span>${data.Genre}</li>
        <li><b>Directors:</b> <span>${data.Directors}</li>
        <li><b>Language:</b> <span>${data.Language}</li>
        <li><b>Country:</b> <span>${data.Country}</li>
        <li><b>Ratings:</><span>${data.imdbRating}</li>
        </ul>
        

      `;

      document.getElementById("movies").appendChild(movieDiv);
    });

  // TODO: When a new search happens --> clean up- Done
  // Complete the movie display -Done
  // Add css to make it more beautiful- In progress!!

  // Fetch API
  // Promise --> it will return somehing in the future
  // Promise().then()
  // Await / Async
}

async function searchMovieAsync() {
  document.getElementById("movies").innerHTML = "";

  const movieTitle = document.getElementById("movie-search").value;

  // http://www.omdbapi.com/?t=Avengers

  // send a request ot the Movie API -- async - not at the same time

  const response = await fetch(
    `http://www.omdbapi.com/?t=${movieTitle}&apikey=8c73ddeb`
  ); // returns the response

  const data = await response.json();

  console.log(data);


  const movieDiv = document.createElement("div");
  movieDiv.innerHTML = `
        <ul>
        <li><b>Title:</b>  <span>${data.Title}</span></li>
        <li><b>Released:</b> <span> ${data.Released}</li>
        <li><b>Rated:</b>  <span>${data.Rated}</li>
        <li><b>Runtime:</b>  <span>${data.Runtime}</li>
        <li><b>Genre:</b> <span>${data.Genre}</li>
        <li><b>Directors:</b> <span>${data.Directors}</li>
        <li><b>Language:</b> <span>${data.Language}</li>
        <li><b>Country:</b> <span>${data.Country}</li>
        <li><b>Ratings:</><span>${data.imdbRating}</li>
        </ul>
      `;

  document.getElementById("movies").appendChild(movieDiv);

  // TODO: When a new search happens --> clean up- Done
  // Complete the movie display -Done
  // Add css to make it more beautiful- In progress!!

  // Fetch API
  // Promise --> it will return somehing in the future
  // Promise().then()
  // Await / Async
}
