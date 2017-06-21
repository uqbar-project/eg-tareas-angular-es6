class TareaService {
    constructor($http) {
        this.$http = $http
    }

    findAll(callback, errorHandler) {
        this.$http.get('/tareas').then(callback, errorHandler)
    }

    update(tarea, callback, errorHandler) {
        this.$http.put('/tareas/' + tarea.id, tarea).then(callback, errorHandler)
    }

}


