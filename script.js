const quantityInput = document.getElementById("quantity");

quantityInput.addEventListener("input", () => {
  const value = quantityInput.value.trim();
  if (value) {
    showItem(value);
  }
});

async function showItem(dataid) {
  if (document.getElementById("item-container")) {
    document.getElementById("item-container").remove();
  }

  const res = await fetch(`https://pokeapi.co/api/v2/item/${dataid}/`);
  const data = await res.json();

  const container = document.createElement("div");
  container.id = "item-container";

  const title = document.createElement("h3");
  title.textContent = data.name;

  const img = document.createElement("img");
  img.src = data.sprites.default;
  img.style.width = "100px";

  container.appendChild(title);
  container.appendChild(img);

  document.body.appendChild(container);
}