// GLOBAL VARIABLES //
let addItemButton = document.getElementById("addButton");
let todoList = document.getElementById("unordered-list");

// ADD ITEM TO LIST //
function addToList() {
  // GET VALUE OF THE ITEM I ENTER INTO MY INPUT //
  let enteredItem = document.getElementById("list-item").value;
  if (enteredItem === "") {
    alert("Wow. Nothing to do. Must be nice.");
  }

  if (enteredItem.length > 3) {
    addItemButton.disabled = false;
    const listElement = document.createElement("LI");
    let enteredElement = document.createTextNode(enteredItem);
    listElement.appendChild(enteredElement);
    todoList.appendChild(listElement);
    document.getElementById("list-item").value = "";
    listElement.setAttribute("id", "list");

    // DELETE ITEM FROM LIST //
    // FOR LOOP TO GET EACH LIST ITEM //
    let listItems = document.getElementsByTagName("LI");

    for (i = 0; i < listItems.length; i++) {
      listItems[i].onclick = function(e) {
        let target = e.target;
        if (target.tagName == "LI") {
          target.parentNode.removeChild(target);
        }
      };
    }
  } else {
    alert("Please be more specific");
  }
}
