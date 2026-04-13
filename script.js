const tours = [
  {
    id: "tour-a",
    name: "Tour A",
    price: 630,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    description: "A classic day tour for travelers who want to explore famous spots in northern Taiwan.",
    included: ["Transportation", "English-speaking guide"],
    notIncluded: ["Food", "Personal expenses", "Entrance tickets"]
  },
  {
    id: "tour-b",
    name: "Tour B",
    price: 680,
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
    description: "A full-day tour with extra scenic stops and a more complete route.",
    included: ["Transportation", "English-speaking guide"],
    notIncluded: ["Food", "Personal expenses", "Lantern fee"]
  },
  {
    id: "tour-c",
    name: "Tour C",
    price: 900,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "A longer route with more stops, ideal for travelers who want a richer experience.",
    included: ["Transportation", "English-speaking guide"],
    notIncluded: ["Food", "Personal expenses"]
  }
];

renderCart();
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsEl = document.getElementById("products");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

function formatPrice(amount) {
  return "NT$" + amount.toLocaleString("en-US");
}

function renderProducts() {
  productsEl.innerHTML = "";

  tours.forEach(function (tour) {
    const card = document.createElement("div");
    card.className = "product-card";

    const includedHtml = tour.included.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    const notIncludedHtml = tour.notIncluded.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.name}">
      <div class="product-content">
        <h3>${tour.name}</h3>
        <p class="price">${formatPrice(tour.price)} / person</p>
        <p class="description">${tour.description}</p>

        <div class="details-box">
          <h4>Included</h4>
          <ul>${includedHtml}</ul>
        </div>

        <div class="details-box">
          <h4>Not Included</h4>
          <ul>${notIncludedHtml}</ul>
        </div>

        <div class="booking-controls">
          <div>
            <label for="date-${tour.id}">Travel Date</label>
            <input type="date" id="date-${tour.id}">
          </div>

          <div>
            <label for="people-${tour.id}">Number of People</label>
            <input type="number" id="people-${tour.id}" min="1" value="1">
          </div>
        </div>

        <button class="add-btn" data-id="${tour.id}">Add to Cart</button>
      </div>
    `;

    productsEl.appendChild(card);
  });

  const addButtons = document.querySelectorAll(".add-btn");
  addButtons.forEach(function (button) {
    button.addEventListener("click", handleAddToCart);
  });
}

function handleAddToCart(event) {
  const tourId = event.target.dataset.id;
  const tour = tours.find(function (item) {
    return item.id === tourId;
  });

  const dateInput = document.getElementById("date-" + tourId);
  const peopleInput = document.getElementById("people-" + tourId);

  const selectedDate = dateInput.value;
  const people = Number(peopleInput.value);

  if (!selectedDate) {
    alert("Please select a travel date.");
    return;
  }

  if (!people || people < 1) {
    alert("Please enter a valid number of people.");
    return;
  }

  const subtotal = tour.price * people;

  const cartItem = {
    cartId: Date.now() + Math.random().toString(16).slice(2),
    id: tour.id,
    name: tour.name,
    price: tour.price,
    date: selectedDate,
    people: people,
    subtotal: subtotal
  };

  cart.push(cartItem);
saveCart();
renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotalEl.textContent = "NT$0";
    checkoutBtn.disabled = true;
    return;
  }

  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach(function (item) {
    total += item.subtotal;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div class="cart-item-title">${item.name}</div>
      <div class="cart-item-text">Date: ${item.date}</div>
      <div class="cart-item-text">Price: ${formatPrice(item.price)} / person</div>
      <div class="cart-item-text">People: ${item.people}</div>
      <div class="cart-item-text">Subtotal: ${formatPrice(item.subtotal)}</div>
      <button class="remove-btn" data-cart-id="${item.cartId}">Remove</button>
    `;

    cartItemsEl.appendChild(div);
  });

  cartTotalEl.textContent = formatPrice(total);
  checkoutBtn.disabled = false;

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach(function (button) {
    button.addEventListener("click", handleRemoveFromCart);
  });
}

function handleRemoveFromCart(event) {
  const cartId = event.target.dataset.cartId;
  cart = cart.filter(function (item) {
  return item.cartId !== cartId;
});
saveCart();
renderCart();
}

checkoutBtn.addEventListener("click", function () {
  alert("Next step: connect this cart to Google Form.");
});

renderProducts();
renderCart();

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
