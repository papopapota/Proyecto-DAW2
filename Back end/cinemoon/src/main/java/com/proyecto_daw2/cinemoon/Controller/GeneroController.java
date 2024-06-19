package com.proyecto_daw2.cinemoon.Controller;



import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.proyecto_daw2.cinemoon.Model.Genero;
import com.proyecto_daw2.cinemoon.Model.Pelicula;
import com.proyecto_daw2.cinemoon.Service.IGeneroService;
import com.proyecto_daw2.cinemoon.Service.IPeliculaService;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/Genero")
@CrossOrigin(origins = "http://localhost:4200/")
public class GeneroController {

    private IGeneroService GeneroService;

 
    
    @GetMapping("/lista")
    @ResponseBody
    public List<Genero> listPeliculas(){
        return GeneroService.listarGenero();
    }
   /* 
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
    	peliculaService.regitrarPelicula(pelicula);
        return ResponseEntity.ok(pelicula) ;

    }
    @DeleteMapping("/eliminar/{id}")
    @ResponseBody
    public void eliminarPelicula(@PathVariable("id") Integer id) {
        String mensaje = "Pelicula eliminada correctamente";
        boolean respuesta = true;
        try {
        	peliculaService.eliminarPelicula(id);
        } catch (Exception ex) {
            mensaje = "Error al eliminar la película";
            respuesta = false;
        }
        
    }
*/
}
