package com.proyecto_daw2.cinemoon.Controller;



import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.proyecto_daw2.cinemoon.Model.Pelicula;
import com.proyecto_daw2.cinemoon.Service.IPeliculaService;

import java.util.HashMap;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/pelicula")
@CrossOrigin(origins = "http://localhost:4200/")
public class PeliculaController {

    private IPeliculaService peliculaService;

 
    
    @GetMapping("/lista")
    @ResponseBody
    public ResponseEntity<List<Pelicula>> listPeliculas(){
        return ResponseEntity.ok(peliculaService.listarPeliculas());
    }
    
    @GetMapping("/buscar/{id}")
    public Pelicula buscarPelicula(@PathVariable int   id ) {
    	
    	return peliculaService.buscar(id);
    }
    
    @PutMapping("/actualizar")
    public ResponseEntity<?> actualizarPelicula(@RequestBody Pelicula pelicula) {
    	peliculaService.regitrarPelicula(pelicula);
    	return ResponseEntity.ok(pelicula);
    };

    @PostMapping("/registrar")
    @ResponseBody
    public ResponseEntity<?> registrarPelicula(@RequestBody Pelicula pelicula ){
    	HashMap<String, Object> salida = new HashMap<>();
    	try {
    		peliculaService.regitrarPelicula(pelicula);
    		
    		
    		
		} catch (Exception e) {
			// TODO: handle exception
			salida.put("mensaje", e.getMessage());
		}
    	
        return ResponseEntity.ok(salida) ;

    }
    @DeleteMapping("/eliminar/{id}")
    @ResponseBody
    public String eliminarPelicula(@PathVariable("id") Integer id) {
        String mensaje = "Pelicula eliminada correctamente";
        boolean respuesta = true;
        try {
        	peliculaService.eliminarPelicula(id);
        	mensaje = "Se elimino correctamente";
        } catch (Exception ex) {
            mensaje = "Error al eliminar la película: " + ex.getMessage();
            respuesta = false;
        }
        
        return mensaje ;
    }

}
