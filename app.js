// Get DOM Elements

let notesInput = document.getElementById("notes-input").value; //   getting value from text area;
console.log(notesInput);
let note = document.getElementsByClassName("notes-area")[0];
let addBtn = document.getElementsByClassName("addBtn")[0];
let title = document.getElementsByClassName("title-input")[0].value; //getting title value from the input
let notesContainer = document.getElementsByClassName("notes-cont")[0];

function createNote() {
  // create element
  let eDiv = document.createElement("div");
  let eHeading = document.createElement("h2");
  let notePara = document.createElement("p");

  //   give class name
  eDiv.classList.add("notes");
  eHeading.classList.add("heading");
  notePara.classList.add("notePara");

  //   append elements
  notesContainer.append(eDiv);
  eDiv.append(eHeading);
  eDiv.append(notePara);

  notePara.innerHTML = notesInput;
  eHeading.innerHTML = title;
}
