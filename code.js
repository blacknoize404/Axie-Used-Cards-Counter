const nodes = document.querySelectorAll('.grid-item')

function select(element) {

  var div = element.target
  // console.log(div.classList)
  if (div.classList.contains("selected")) {

    div.classList.remove("selected");
  }
  else {
    div.classList.add("selected");
  }
  // console.log('Hiciste click en el elemento ' + div.innerText);
}

function unselect_all() {
  for (let i = 0; i < nodes.length; i++) {
    var div = nodes[i]
    if (div.classList.contains("selected")) {

      div.classList.remove("selected");
    }
  }
  console.log('Se han deseleccionado todos');
}

// Añadiendo evento a todos los elementos
for (let i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener('click', select);
}

var button = document.querySelector("button");
// Añadiendo evento al botón de reinicio
button.addEventListener('click', unselect_all)