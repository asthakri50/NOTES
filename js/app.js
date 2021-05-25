console.log("Welcome to app.js!");
showNotes();

//If user adds a note, add it to localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  let notesArr;
  if (notes == null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }

  notesArr.push(addTxt.value);
  //update localStorage
  localStorage.setItem("notes", JSON.stringify(notesArr));
  addTxt.value = "";
  showNotes();
});

//Function to show elements from local Storage
function showNotes() {
  let notesArr;
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }

  let html = "";
  notesArr.forEach(function (element, index) {
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary">Delete Node</button>
          </div>
        </div>`;
  });

  let notesElem = document.getElementById("notes");
  if (html !== "") {
    notesElem.innerHTML = html;
  }
    else{
       notesElem.innerHTML = `<b>Nothing to show! Use <span style="color: blue">"Add a Note" </span>section above to add notes.</b>` ;
       console.log("hello");
    }
}
