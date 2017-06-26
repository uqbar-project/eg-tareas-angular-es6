const asignarTarea = {
    bindings: {
        asignar : "&",
        tarea: "<"
    },
    controllerAs: "asignarTareaCtrl", 
    controller: class ComboUsuariosController {
        constructor(usuariosService) {
          this.asignatario = null
          this.asignatariosPosibles = []
          usuariosService.findAll((response) => {
            this.asignatariosPosibles = response.data
          }, (message) => {
            notificarError(this, message)
          })
        }
    },
    templateUrl: '/templates/asignarTarea.html'
}
