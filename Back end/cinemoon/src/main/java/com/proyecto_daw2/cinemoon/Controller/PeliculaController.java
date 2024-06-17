package com.proyecto_daw2.cinemoon.Controller;



import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.proyecto_daw2.cinemoon.Model.Pelicula;
import com.proyecto_daw2.cinemoon.Service.IPeliculaService;
import java.util.List;

@AllArgsConstructor
@Controller
@RequestMapping("/pelicula")
public class PeliculaController {

    private IPeliculaService peliculaService;

    @GetMapping("")
    public String listarPeliculas(Model model){
        model.addAttribute("listarpeliculas" ,
        		peliculaService.listarPeliculas());
        return "backoffice/pelicula/formpelicula";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Pelicula> listPeliculas(){
        return peliculaService.listarPeliculas();
    }

    @PostMapping("/registrar")
    @ResponseBody
    public Pelicula registrarPelicula(@RequestBody Pelicula pelicula , Model model){

        return peliculaService.regitrarPelicula(pelicula);

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

}
