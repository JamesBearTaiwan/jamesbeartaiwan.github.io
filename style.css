const tours = [
  {
    id: "tour-a-day",
    name: "Tour A — Classic Yehliu, Jiufen & Shifen Day Tour",
    shortLabel: "Most Popular",
    price: 630,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    description: "The most popular day trip from Taipei, covering all the classic highlights in one day.",
    mainStops: [
      "Yehliu Geopark",
      "Shifen Waterfall",
      "Shifen Old Street (Sky Lantern)",
      "Jiufen Old Street"
    ],
    duration: "08:15 – 17:30",
    bestFor: "First-time visitors who want the classic daytime experience.",
    included: [
      "Air-conditioned transportation",
      "English-speaking guide"
    ],
    notIncluded: [
      "Food & drinks",
      "Sky lantern fee",
      "Entrance tickets"
    ]
  },
  {
    id: "tour-a-night",
    name: "Tour A — Yehliu, Shifen & Jiufen Night View Tour",
    shortLabel: "Night View",
    price: 630,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "Same classic route as Tour A, but visit Jiufen in the evening for a unique night atmosphere.",
    mainStops: [
      "Yehliu Geopark",
      "Shifen Waterfall",
      "Shifen Old Street (Sky Lantern)",
      "Jiufen Old Street (Night View)"
    ],
    duration: "11:15 – 20:30",
    bestFor: "Travelers who want to see Jiufen at night.",
    included: [
      "Air-conditioned transportation",
      "English-speaking guide"
    ],
    notIncluded: [
      "Food & drinks",
      "Sky lantern fee",
      "Entrance tickets"
    ]
  },
  {
    id: "tour-b",
    name: "Tour B — Extended Yehliu, Jiufen & Shifen Scenic Tour",
    shortLabel: "More Scenic Stops",
    price: 750,
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
    description: "Includes all the classic stops plus extra scenic spots like Golden Waterfall and Yin-Yang Sea.",
    mainStops: [
      "Yehliu Geopark",
      "Shifen Old Street",
      "Shifen Waterfall",
      "Golden Waterfall",
      "Yin-Yang Sea",
      "Shuinandong",
      "Jiufen Old Street"
    ],
    duration: "09:45 – 19:30",
    bestFor: "Travelers who want more photo stops and scenic views.",
    included: [
      "Air-conditioned transportation",
      "English-speaking guide"
    ],
    notIncluded: [
      "Food & drinks",
      "Sky lantern fee",
      "Entrance tickets"
    ]
  },
  {
    id: "tour-c",
    name: "Tour C — Tiaoshi Coast Scenic Tour",
    shortLabel: "Instagram Spot",
    price: 1020,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "A scenic coastal route featuring the famous Tiaoshi Coast, a popular Instagram photo spot, plus Yehliu and Jiufen.",
    mainStops: [
      "Tiaoshi Coast (Instagram Spot)",
      "Yehliu Geopark",
      "Shifen Old Street",
      "Golden Waterfall",
      "Yin-Yang Sea",
      "Shuinandong",
      "Jiufen Old Street"
    ],
    duration: "10:30 – 20:30",
    bestFor: "Travelers who want unique coastal views and Instagram-worthy locations.",
    highlight: "Includes Tiaoshi Coast, a popular photo spot.",
    included: [
      "Air-conditioned transportation",
      "English-speaking guide"
    ],
    notIncluded: [
      "Food & drinks",
      "Sky lantern fee",
      "Entrance tickets"
    ]
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productsEl = document.getElementById("products");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");

function formatPrice(amount) {
  return "NT$" + amount.toLocaleString("en-US");
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts() {
  productsEl.innerHTML = "";

  tours.forEach(function (tour) {
    const card = document.createElement("div");
    card.className = "product-card";

    const mainStopsHtml = tour.mainStops.map(function (stop) {
      return "<li>" + stop + "</li>";
    }).join("");

    const includedHtml = tour.included.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    const notIncludedHtml = tour.notIncluded.map(function (item) {
      return "<li>" + item + "</li>";
    }).join("");

    const highlightHtml = tour.highlight
      ? `<p class="highlight-text">${tour.highlight}</p>`
      : "";

    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.name}">
      <div class="product-content">
        <div class="badge-row">
          <span class="badge">${tour.shortLabel}</span>
        </div>

        <h3>${tour.name}</h3>
        <p class="price">${formatPrice(tour.price)} / person</p>
        <p class="description">${tour.description}</p>

        <div class="info-box">
          <h4>Main Stops</h4>
          <ul>${mainStopsHtml}</ul>
        </div>

        <div class="info-box">
          <h4>Tour Info</h4>
          <p class="duration">Time: ${tour.duration}</p>
          <p class="best-for">Best for: ${tour.bestFor}</p>
          ${highlightHtml}
        </div>

        <div class="info-box">
          <h4>Included</h4>
          <ul>${includedHtml}</ul>
        </div>

        <div class="info-box">
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
    clearCartBtn.disabled = true;
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
  clearCartBtn.disabled = false;

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

clearCartBtn.addEventListener("click", function () {
  cart = [];
  saveCart();
  renderCart();
});

checkoutBtn.addEventListener("click", function () {
  alert("Next step: connect this cart to Google Form.");
});

renderProducts();
renderCart();
