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
import com.proyecto_daw2.cinemoon.Model.Sala;
import com.proyecto_daw2.cinemoon.Service.IFuncionService;
import com.proyecto_daw2.cinemoon.Service.ISalaService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping ("api/sala")
@CrossOrigin (origins = "http://localhost:4200")
public class SalaController {
	
	@Autowired
	private ISalaService serviceSala;
	
	@GetMapping("/lista")
	public List<Sala> listar(){
		return serviceSala.findAll();
	}
	
	@GetMapping("/buscar/{id}")
	public Sala buscar(@PathVariable int  id ){
		return serviceSala.findById(id);
	}
	
	@PostMapping("/guardar")
	@ResponseBody
	public ResponseEntity<?> guardarSala(@RequestBody Sala sala ){
		HashMap<String, Object> salida = new HashMap<>();
    	try {
    		serviceSala.save(sala);
    		salida.put("mensaje", "Se guardo la funcion n° "+ sala.getIdSala());
    		
		} catch (Exception e) {
			// TODO: handle exception
			salida.put("mensaje", e.getMessage());
		}
    	
        return ResponseEntity.ok(salida) ;

    }
	
	@DeleteMapping("/eliminar/{id}")
    @ResponseBody
    public ResponseEntity<?>  eliminarSala(@PathVariable("id") Integer id) {
        String mensaje = "Sala eliminada correctamente";
        HashMap<String, Object> salida = new HashMap<>();
        try {
        	serviceSala.deleteById(id);
        	mensaje = "Se elimino correctamente";
        } catch (Exception ex) {
            mensaje = "Error al eliminar la sala: " + ex.getMessage();
        }
        salida.put("mensaje", mensaje);
        return ResponseEntity.ok(salida) ;
    }
	
	
}
