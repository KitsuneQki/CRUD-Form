function actualizarListaEstudiantesUI() {
  listaDeEstudiantes.innerHTML = "";
  const listaEstudiantes = Estudiante.obtenerTodos();
  listaEstudiantes.forEach(function (estudiante) {
    const elementoLI = document.createElement("li");
    const texto = document.createElement("p");
    texto.innerHTML = `${estudiante.nombre} ${estudiante.apellido}`;

    const elementoBtnUp = document.createElement("button");
    elementoBtnUp.setAttribute("id", `${estudiantes.length - 1}`);
    elementoBtnUp.innerHTML = "Update";
    elementoBtnUp.addEventListener("click", function (e) {
      e.preventDefault();
      editarElemento(texto.innerHTML);
    });

    const elementoBtnDel = document.createElement("button");
    elementoBtnDel.setAttribute("id", `${estudiantes.length - 1}-del`);
    elementoBtnDel.innerHTML = "Delete";

    elementoLI.appendChild(texto);
    elementoLI.appendChild(elementoBtnUp);
    elementoLI.appendChild(elementoBtnDel);
    listaDeEstudiantes.appendChild(elementoLI);
  });
}
