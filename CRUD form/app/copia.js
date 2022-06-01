let copia;

class Copia {
  nombre = "";
  apellido = "";
  edad = 0;
  fechaDeNacimiento = "";

  constructor(nombre, apellido, edad, fechaDeNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fechaDeNacimiento = fechaDeNacimiento;
    // luego de crearse la instancia Copia se agrega a la variable copia
    copia = this;
  }
}
