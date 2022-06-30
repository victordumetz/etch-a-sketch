const sketchpad = document.querySelector('.sketchpad');
const sketchpadSize = parseInt(getComputedStyle(sketchpad).height, 10);

const resolutionRange = document.querySelector('#resolution');
const resolutionRangeLabel = document.querySelector('#resolution + label');
resolutionRangeLabel.textContent = `${resolutionRange.value}x${resolutionRange.value}`;

function createGrid(size) {
  const tileSize = sketchpadSize / size;

  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.style.height = `${tileSize}px`;
      tile.style.width = `${tileSize}px`;

      sketchpad.appendChild(tile);
    }
  }
}

createGrid(resolutionRange.value);

// updates slider label
resolutionRange.addEventListener('input', () => {
  resolutionRangeLabel.textContent = `${resolutionRange.value}x${resolutionRange.value}`;
});

// resets and recreate grid when value changed
resolutionRange.addEventListener('change', () => {
  while (sketchpad.lastElementChild) {
    sketchpad.removeChild(sketchpad.lastElementChild);
  }

  createGrid(resolutionRange.value);
});
