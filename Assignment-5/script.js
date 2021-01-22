let columns = 2;
let selectedColor = "";

function addRow() {
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);

  let allCells = document.querySelectorAll(".cell");
  let totalNumberOfCells = allCells.length;

  for (let i = 0; i < columns; i++) {
    let cell = document.createElement("td");
    cell.classList.add("cell");

    let cellId = totalNumberOfCells + i + 1;
    cell.setAttribute("id", cellId);

    cell.onclick = () => selectCell(cell.id);

    cell.addEventListener("mousedown", function () {
      mouseHold = true;
    });

    cell.addEventListener("mousemove", function () {
      if (mouseHold === true) {
        cell.style.backgroundColor = selectedColor;
      }
    });

    cell.addEventListener("mouseup", function () {
      mouseHold = false;
    });
    row.appendChild(cell);
  }
}
function addColumn() {
  columns++;
  let rows = document.getElementsByClassName("row");

  let allCells = document.querySelectorAll(".cell");
  let totalNumberOfCells = allCells.length;

  for (let i=0; i < rows.length; i++) {
    let cell = document.createElement("td");
    cell.classList.add("cell");

    let cellId = totalNumberOfCells + i + 1;
    cell.setAttribute("id", cellId);

    cell.onclick = () => selectCell(cell.id);

    cell.addEventListener("mousedown", function () {
      mouseHold = true;
    });

    cell.addEventListener("mousemove", function () {
      if (mouseHold === true) {
        cell.style.backgroundColor = selectedColor;
      }
    });

    cell.addEventListener("mouseup", function () {
      mouseHold = false;
    });

    rows[i].appendChild(cell);
  }
}

function removeRow() {
  let rows = document.getElementsByClassName("row");
  let lastRow = rows[rows.length - 1];
  lastRow.remove();
}

function removeColumn() {
  columns--;
  let rows = document.getElementsByClassName("row");

  for (let i = 0; i < rows.length; i++) {
    rows[i].removeChild(rows[i].lastElementChild);
  }
}

function selectColor(color) {
  selectedColor = color;
}

function selectCell(id) {
  let selectedCell = document.getElementById(id);
  selectedCell.style.backgroundColor = selectedColor;
}

function colorAllUncoloredCells() {
  let allCells = document.getElementsByClassName("cell");
  for (let i = 0; i < allCells.length; i++) {
    let currentCell = allCells[i];

    if (currentCell.style.backgroundColor == "") {
      currentCell.style.backgroundColor = selectedColor;
    }
  }
}

function fillAllCells() {
  let allCells = document.getElementsByClassName("cell");
  for (let i = 0; i < allCells.length; i++) {
    let currentCell = allCells[i];
    currentCell.style.backgroundColor = selectedColor;
  }
}

function clearAllCells() {
  let allCells = document.getElementsByClassName("cell");
  for (let i = 0; i < allCells.length; i++) {
    let currentCell = allCells[i];
    currentCell.style.backgroundColor = "";
  }
}

function cellMouseDown(id) {
  mouseHold = true;
}

function cellMouseMove(id) {
  if (mouseHold == true) {
    let currCell = getElementById(id);
    currCell.style.backgroundColor = selectedColor;
  }
}

function cellMouseUp() {
  mouseHold = false;
}
