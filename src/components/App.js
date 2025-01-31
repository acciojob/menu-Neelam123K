<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React, { useState } from "react";

const menuItems = [
  { id: 1, title: "Buttermilk Pancakes", category: "breakfast", price: 15.99, img: "./images/item-1.jpeg", desc: "Delicious pancakes with syrup and butter." },
  { id: 2, title: "Diner Double", category: "lunch", price: 13.99, img: "./images/item-2.jpeg", desc: "Classic double cheeseburger with fries." },
  { id: 3, title: "Godzilla Milkshake", category: "shakes", price: 6.99, img: "./images/item-3.jpeg", desc: "Huge milkshake with whipped cream and toppings." },
  { id: 4, title: "Country Delight", category: "breakfast", price: 20.99, img: "./images/item-4.jpeg", desc: "Traditional breakfast with eggs, bacon, and toast." },
  { id: 5, title: "Egg Attack", category: "lunch", price: 22.99, img: "./images/item-5.jpeg", desc: "Loaded egg sandwich with melted cheese." },
  { id: 6, title: "Oreo Dream", category: "shakes", price: 18.99, img: "./images/item-6.jpeg", desc: "Oreo milkshake with crushed cookies." },
  { id: 7, title: "Bacon Overflow", category: "breakfast", price: 8.99, img: "./images/item-7.jpeg", desc: "Crispy bacon with scrambled eggs." },
  { id: 8, title: "American Classic", category: "lunch", price: 12.99, img: "./images/item-8.jpeg", desc: "Classic American meal with steak and mashed potatoes." },
  { id: 9, title: "Quarantine Buddy", category: "shakes", price: 16.99, img: "./images/item-9.jpeg", desc: "Special quarantine shake with protein boost." }
];

const categories = ["all", "breakfast", "lunch", "shakes"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = selectedCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h1>Our Menu</h1>

      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            id={`filter-btn-${index}`}
            className={`px-4 py-2 rounded-md text-white ${selectedCategory === category ? "bg-blue-600" : "bg-gray-500"} transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div id="main">
        {filteredItems.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title}  />
            <div>
              <h2 >{item.title}</h2>
              <p >${item.price}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
