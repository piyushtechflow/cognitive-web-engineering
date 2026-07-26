// Fetch API basics

const api_key = "https://dummyjson.com/products";

const container = document.querySelector(".single-data");

async function getUser() {
  try {
    const response = await fetch(api_key);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status ${response.status}`);
    }
    const data = await response.json();

// getting some specific elements from the object and rendering it to the UI.

    for (let i = 0; i < data.products.length; i++) {

      const productCard = document.createElement("div");
      productCard.classList.add("product-card"); // optional yet
      productCard.style.border = "2px solid black";
      productCard.style.borderRadius = "8px";
      productCard.style.background = "#f9f9f9";
      productCard.style.padding = "2rem";
      productCard.style.margin = "2rem";

      const newEl = document.createElement("p");
      const newEl2 = document.createElement("p");
      const newEl3 = document.createElement("p");

      newEl.textContent = `${i + 1}: ${data.products[i].title}`;
      newEl.style.fontSize = `20px`;
      productCard.append(newEl);

      newEl2.textContent = `${data.products[i].availabilityStatus}`;
      newEl2.style.fontSize = `18px`;
      if (data.products[i].availabilityStatus === "In Stock") {
        newEl2.style.color = `lightgreen`;
      } else {
        newEl2.style.color = `red`;
      }
      productCard.append(newEl2);

      newEl3.textContent = `${data.products[i].description}`;
      newEl3.style.fontSize = `18px`;
      productCard.append(newEl3);

      container.append(productCard)
    }
    // console.log(data)
  } catch (err) {
    console.log(`Something went wrong! ${err}.`);
  }
}
getUser();
