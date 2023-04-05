let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "MONALISSA",
    artist: "Leonardo Da Vinci - 1503-19",
    image: "image1.jpg",
    price: 50,
  },
  {
    id: 2,
    name: "SAINT GEORGE AND THE DRAGON",
    image: "image10.jpg",
    price: 45,
  },
  {
    id: 3,
    name: "THE GARDEN OF EARTHY DELIGHTS",
    image: "image7.jpg",
    price: 40,
  },
  {
    id: 4,
    name: "GIRL WITH A PEAR EARING",
    image: "image2.jpg",
    price: 50,
  },
  {
    id: 5,
    name: "YOUNG WOMEN WITH A PEARL NECKLACE",
    image: "image11.jpg",
    price: 55,
  },
  {
    id: 6,
    name: "VIRGIN AND CHILD",

    image: "image12.jpg",
    price: 60,
  },
  {
    id: 7,
    name: "THE SWING",
    image: "image15.jpg",
    price: 60,
  },
  {
    id: 8,
    name: "THE DEATH OF MARAT",
    image: "image16.jpg",
    price: 60,
  },
  {
    id: 9,
    name: "THE MEETING(FROM THE LOVES OF THE SHEPHERDS",
    image: "image17.jpg",
    price: 60,
  },
  {
    id: 10,
    name: "THE WANDERE ABOVE THE SEA OF FOG",
    image: "image5.jpg",
    price: 40,
  },
  {
    id: 11,
    name: "CHALK CLIFFS ON RIIGEN",
    image: "image13.jpg",
    price: 45,
  },
  {
    id: 12,
    name: "CAFE TERRACE AT NIGHT",
    image: "image20.jpg",
    price: 65,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="../../images/student1/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">$${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price * value.quantity;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="../../images/student1/${value.image}"/></div>
                <div>${value.name}</div>
                <div>$${listCards[key].quantity * products[key].price}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${-1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${1})">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = "$ " + totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (listCards[key].quantity === 1 && quantity === -1) {
    delete listCards[key];
  } else {
    listCards[key].quantity += quantity;
  }
  reloadCard();
}
