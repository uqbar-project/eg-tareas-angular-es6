package ar.edu.tareas.controller

import ar.edu.tareas.domain.Tarea
import ar.edu.tareas.repos.RepoTareas
import org.uqbar.commons.model.exceptions.UserException
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils

@Controller
class TareasController {

	extension JSONUtils = new JSONUtils

	@Get("/tareas")
	def Result tareas() {
		val tareas = RepoTareas.instance.allInstances //tareasPendientes
		response.contentType = ContentType.APPLICATION_JSON
		ok(tareas.toJson)
	}

	@Get('/tareas/:id')
	def Result tarea() {
		response.contentType = ContentType.APPLICATION_JSON
		val iId = Integer.valueOf(id)
		try {
			ok(RepoTareas.instance.searchById(iId).toJson)
		} catch (UserException e) {
			notFound("No existe la tarea con id " + id + "");
		}
	}

	@Get('/tareas/search')
	def Result buscar(String descripcion) {
		response.contentType = ContentType.APPLICATION_JSON
		val tareaBusqueda = new Tarea
		tareaBusqueda.descripcion = descripcion
		ok(RepoTareas.instance.searchByExample(tareaBusqueda).toJson)
	}

	def static void main(String[] args) {
		XTRest.start(9000, TareasController)
	}

}
