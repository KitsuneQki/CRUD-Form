let estudiantes = [];

let currentIndex = 0;

class Estudiante {
  nombre = "";
  apellido = "";
  edad = 0;
  fechaDeNacimiento = "";

  constructor(nombre, apellido, edad, fechaDeNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fechaDeNacimiento = fechaDeNacimiento;

    // Una vez que se cree la instancia de un estudiante podemos guardarla en la lista inmediatamente
    estudiantes.push(this);
    console.log(
      `[Estudiante] el estudiante ${this.nombre} ${this.apellido} ha sido creado y agregado a la lista`,
      estudiantes
    );
  }

  static obtenerTodos() {
    return estudiantes;
  }
}
