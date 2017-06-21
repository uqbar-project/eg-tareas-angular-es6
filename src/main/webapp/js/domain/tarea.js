class Tarea {

  constructor() {
    this.asignadoA = null
    this.fecha = new Date()
    this.descripcion = ''
    this.porcentajeCumplimiento = 0
  }

  cumplir() {
    this.porcentajeCumplimiento = 100
  }

  estaPendiente() {
    return this.porcentajeCumplimiento != 100
  }

  sePuedeCumplir() {
    return this.estaPendiente() && this.estaAsignada()
  }

  estaAsignada() {
    return this.asignadoA != null && this.asignadoA !== ''
  }

  static asTarea(jsonTarea) {
    return angular.extend(new Tarea(), jsonTarea)
  }

}
