var tod_text = document.getElementById("tod_text");

var todo_list = document.getElementById("todo_list");

function todo_sumbit() {
  console.log(tod_text.value);
  if (!tod_text.value) {
    return alert("tetx field is empty");
  }

  var li = `<li> <span>${tod_text.value}</span>
              
                <button onclick = "edit(this)">Edit</button>
                <button onclick = "del(this)"  >Delete</button> 
              
                 </li>`;
  todo_list.innerHTML += li;

  tod_text.value = "";
}

function del(element) {
  element.parentElement.remove();
}

function edit(element){

    var updatedValue = prompt("edit here")
    element.previousElementSibling.innerText = updatedValue
}
