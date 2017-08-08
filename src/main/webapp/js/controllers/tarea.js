class TareasController {
  
  constructor(tareaService, $timeout) {
      this.tareaService = tareaService
      this.$timeout = $timeout
      this.errors = []
      this.tareas = []
      this.tareaSeleccionada = null
      this.getTareas()
  }

  transformarATarea(jsonTarea) {
    return Tarea.asTarea(jsonTarea)
  }

  // TRAER LAS TAREAS
  getTareas() {
    this.tareaService.findAll((response) => {
      this.tareas = _.map(response.data, this.transformarATarea)
    }, (message) => { notificarError(this, message) })
  }

  // CUMPLIR TAREA
  cumplir(tarea) {
    tarea.cumplir()
    this.tareaService.update(tarea, 
      () => {
        this.getTareas()
      }, 
      (message) => { 
        notificarError(this, message) 
        this.getTareas()
      }
    )
  }

  // FUNCIONES PARA ASIGNAR
  // Llamamos al popup de Tareas
  beginAsignar(tarea) {
    this.tareaSeleccionada = tarea
  }

  // Se produce la asignación propiamente dicha
  asignar(asignatario) {
	  this.tareaSeleccionada.asignadoA = asignatario
    this.tareaService.update(
      this.tareaSeleccionada, 
      () => { }, 
      (message) => { notificarError(this, message) }
    )
  }


}
