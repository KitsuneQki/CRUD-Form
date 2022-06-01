class FormularioEstudiante {
  constructor() {
    this.nombre = document.getElementById("nombre-estudiante");
    this.apellido = document.getElementById("apellido-estudiante");
    this.edad = document.getElementById("edad-estudiante");
    this.fecha = document.getElementById("fecha-estudiante");
    this.agregar = document.getElementById("agregar-estudiante");
  }

  agregarEstudiante(evento) {
    console.log(
      "[FormularioEstudiante] un estudiante se agregará por el siguiente evento",
      evento
    );

    new Estudiante(
      this.nombre.value,
      this.apellido.value,
      this.edad.value,
      this.fecha.value
    );
  }

  reiniciar() {
    this.nombre.value = "";
    this.apellido.value = "";
    this.edad.value = "";
    this.fecha.value = "";
  }
}

class Editar {
  constructor() {
    this.nombre = document.getElementById("nombre-estudiante-edit");
    this.apellido = document.getElementById("apellido-estudiante-edit");
    this.edad = document.getElementById("edad-estudiante-edit");
    this.fecha = document.getElementById("fecha-estudiante-edit");
    this.BtnActualizar = document.getElementById("actualizar-estudiante-edit");
    this.BtnCancelar = document.getElementById("cancelar-estudiante-edit");
  }

  editarObjeto() {
    new Copia(
      this.nombre.value,
      this.apellido.value,
      this.edad.value,
      this.fecha.value
    );
  }

  reiniciar() {
    this.nombre.value = "";
    this.apellido.value = "";
    this.edad.value = "";
    this.fecha.value = "";
  }
}
