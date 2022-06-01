//Cuando el boton dentro del elemento LI se presiona automaticamente busca coincidir el nombre y apellido
//dentro del objeto ubicado en el array estudiantes, guarda el index en la variable currentIndex
//y muestra los valores del objeto por editar en el formulario de edicion

const editarElemento = function (nombre) {
  const listaEstudiantes = Estudiante.obtenerTodos();
  console.log(nombre + " en proceso de ser editado");

  listaEstudiantes.forEach(function (estudiante, index) {
    if (estudiante.nombre + " " + estudiante.apellido === nombre) {
      document.getElementById("formulario-edit").style.display = "block";
      currentIndex = index;

      document.getElementById("nombre-estudiante-edit").value =
        estudiantes[currentIndex].nombre;
      document.getElementById("apellido-estudiante-edit").value =
        estudiantes[currentIndex].apellido;
      document.getElementById("edad-estudiante-edit").value =
        estudiantes[currentIndex].edad;
      document.getElementById("fecha-estudiante-edit").value =
        estudiantes[currentIndex].fechaDeNacimiento;
    }
  });
};

const eliminarElemento = function (nombre) {
  const listaEstudiantes = Estudiante.obtenerTodos();
  let indexArray;
  console.log(nombre + " en proceso de borrado");

  listaEstudiantes.forEach(function (estudiante, index) {
    if (estudiante.nombre + " " + estudiante.apellido === nombre) {
      indexArray = index;
      listaEstudiantes.splice(indexArray, 1);
      actualizarListaEstudiantesUI();
    }
  });
};
