class UsuarioService {
    constructor($http) {
        this.$http = $http
    }

    findAll(callback, errorHandler) {
        this.$http.get('/usuarios').then(callback, errorHandler)
    }

}