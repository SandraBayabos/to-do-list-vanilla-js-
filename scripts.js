// GLOBAL VARIABLES //
let addItemButton = document.getElementById("addButton");
let todoList = document.getElementById("unordered-list");

// ADD ITEM TO LIST //
function addToList() {
  let enteredItem = document.getElementById("list-item").value;
  console.log(enteredItem);
  if (enteredItem === "") {
    alert("Wow. Nothing to do. Must be nice.");
  }

  if (enteredItem.length > 3) {
    addItemButton.disabled = false;
    const listElement = document.createElement("LI");
    let enteredElement = document.createTextNode(enteredItem);
    console.log(enteredElement);
    listElement.appendChild(enteredElement);
    todoList.appendChild(listElement);
    document.getElementById("list-item").value = "";
    listElement.setAttribute("id", "list");

    // DELETE ITEM FROM LIST //
    // FOR LOOP TO GET EACH LIST ITEM //
    let listItems = document.getElementsByTagName("LI");
    for (
      let i = 0;
      i < listItems.length;
      i++ // ONCLICK OF EACH ITEM REMOVECHILD //
    ) {
      listItems[i].onclick = function(e) {
        let target = e.target;
        if (target.tagName.toUpperCase() == "LI") {
          target.parentNode.removeChild(target);
        }
      };
    }
  } else {
    alert("That's a little short. Expand.");
  }
}
