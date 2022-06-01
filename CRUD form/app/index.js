const root = document.getElementById("root");
console.log("elemento raiz", root);

// Este es el formulario que el usuario va a rellenar para crear un estudiante
// por lo tanto debe iniciar vacio y cada vez que se genere un registro, hay que reiniciarlo.
const formulario = new FormularioEstudiante();

formulario.agregar.addEventListener("click", function (evento) {
  formulario.agregarEstudiante(evento);
  formulario.reiniciar();
  actualizarListaEstudiantesUI();
});

//boton para eliminar
listaDeEstudiantes.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.innerHTML === "Delete") {
    eliminarElemento(e.path[1].childNodes[0].innerHTML);
  }
});

const objetoCopia = new Editar();

objetoCopia.BtnActualizar.addEventListener("click", function () {
  objetoCopia.editarObjeto();

  Object.assign(estudiantes[currentIndex], copia);

  actualizarListaEstudiantesUI();

  document.getElementById("formulario-edit").style.display = "none";
});

objetoCopia.BtnCancelar.addEventListener("click", function () {
  document.getElementById("formulario-edit").style.display = "none";
});
