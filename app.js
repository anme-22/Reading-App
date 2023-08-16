const list = document.querySelector("#book-list ul");

//delete books
list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// add books
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elments
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  //add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // apend to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});
