let isDebug = false;

mapGame(20, 10);

function mapGame(height, width) {
  const gridArray = Array.from({length: height}, (_,i) => new Array(width))
  const container = document.getElementById("gridMap");
  container.innerHTML = ""; // Clear previous grid if any
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

  for (let i = 0; i < height; i++) {
    for (let q = 0; q < width; q++) {
      let tile = document.createElement("div");
      tile.id = `${i}_${q}`;
      tile.classList.add("grid-cell");

      // Store coordinates for later access
      tile.dataset.row = i;
      tile.dataset.col = q;

      container.appendChild(tile);
    }
  }

  updateDebugView(); // Show or hide text based on current isDebug value
}

function updateDebugView() {
  document.querySelectorAll(".grid-cell").forEach(tile => {
    const row = tile.dataset.row;
    const col = tile.dataset.col;
    tile.textContent = isDebug ? `${row},${col}` : "";
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "!") {
    isDebug = !isDebug;
    updateDebugView();
  }
});

//Select Cordnate
document.getElementById("1_8").classList.add('selected')

//create 2d array for grid real time
//create js object for each cell