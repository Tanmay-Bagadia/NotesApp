// Get DOM Elements

let notesInput = document.getElementById("notes-input"); //   getting value from text area;
console.log(notesInput.value);
let note = document.getElementsByClassName("notes-area")[0];
let addBtn = document.getElementsByClassName("addBtn")[0];
let title = document.getElementsByClassName("title-input")[0]; //getting title value from the input
let notesContainer = document.getElementsByClassName("notes-cont")[0];

function createNote() {
  // create element
  let eDiv = document.createElement("div");
  let eHeading = document.createElement("h2");
  let notePara = document.createElement("p");
  let delBtn = document.createElement("button");

  //   give class name
  eDiv.classList.add("notes");
  eHeading.classList.add("heading");
  notePara.classList.add("notePara");
  delBtn.classList.add("delBtn");

  //   append elements
  notesContainer.append(eDiv);
  eDiv.append(eHeading);
  eDiv.append(notePara);
  eDiv.append(delBtn);

  notePara.innerHTML = `Note: ${notesInput.value}`;
  notesInput.value = "";

  eHeading.innerHTML = `Title: ${title.value}`;
  title.value = "";

  delBtn.innerHTML = "Delete";
  delBtn.addEventListener("click", () => {
    eDiv.remove();
    alert("Your note had been deleted.");
  });
}
