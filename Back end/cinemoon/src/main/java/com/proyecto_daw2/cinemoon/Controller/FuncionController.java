package com.proyecto_daw2.cinemoon.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto_daw2.cinemoon.Model.Funcion;
import com.proyecto_daw2.cinemoon.Service.IFuncionService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping ("api/funcion")
@CrossOrigin (origins = "http://localhost:4200")
public class FuncionController {
	
	@Autowired
	private IFuncionService serviceFuncion;
	
	@GetMapping("/lista")
	public List<Funcion> listarFuncion(){
		return serviceFuncion.findAll();
	}
	
	@GetMapping("/buscar/{id}")
	public Funcion buscarFuncion(@PathVariable int  id ){
		return serviceFuncion.findById(id);
	}
	
	@PostMapping("/guardar")
	@ResponseBody
	public ResponseEntity<?> guardarFuncion(@RequestBody Funcion funcion ){
		HashMap<String, Object> salida = new HashMap<>();
    	try {
    		System.out.println(funcion);
    		serviceFuncion.save(funcion);
    		salida.put("mensaje", "Se guardo la funcion n° "+ funcion.getIdFuncion());
    		
		} catch (Exception e) {
			// TODO: handle exception
			salida.put("mensaje", e.getMessage());
		}
    	
        return ResponseEntity.ok(salida) ;

    }
	
	@DeleteMapping("/eliminar/{id}")
    @ResponseBody
    public String eliminarFuncion(@PathVariable int id) {
        String mensaje = "Funcion eliminada correctamente";
        boolean respuesta = true;
        try {
        	serviceFuncion.deleteById(id);
        	mensaje = "Se elimino correctamente";
        } catch (Exception ex) {
            mensaje = "Error al eliminar la funcion: " + ex.getMessage();
            respuesta = false;
        }
        
        return mensaje ;
    }
	
	@GetMapping("/funcionpelicula/{id}")
	public List<Funcion> listarFuncionesPelicula(@PathVariable int id){
		return serviceFuncion.findByPeliculaIdPelicula(id);
	}
}
