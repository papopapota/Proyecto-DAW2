package com.proyecto_daw2.cinemoon.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.proyecto_daw2.cinemoon.Model.Asiento;
import com.proyecto_daw2.cinemoon.Model.Boleto;
import com.proyecto_daw2.cinemoon.Model.DetalleBoleto;
import com.proyecto_daw2.cinemoon.Model.Funcion;
import com.proyecto_daw2.cinemoon.Model.Sala;
import com.proyecto_daw2.cinemoon.Model.Usuario;
import com.proyecto_daw2.cinemoon.Repository.IDetalleBoletoRepository;
import com.proyecto_daw2.cinemoon.Service.AsientoService;
import com.proyecto_daw2.cinemoon.Service.BoletoService;
import com.proyecto_daw2.cinemoon.Service.FuncionService;
import com.proyecto_daw2.cinemoon.Service.IBoletoService;
import com.proyecto_daw2.cinemoon.Service.PeliculaService;

import com.proyecto_daw2.cinemoon.Service.*;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("api/Asiento")
@CrossOrigin(origins = "http://localhost:4200")
public class AsientoController {

    @Autowired
    private IBoletoService service;
    
    
    
    private final BoletoService tikectService;
    private  final  PeliculaService peliculaService;
    private final AsientoService asientoService;
    private final FuncionService funcionService;
    private final SalaService salaService;
    private final UsuarioService UsuarioService;
    private  final IDetalleBoletoRepository DetalleBoletorepo;
    private  final  UsuarioService usuarioService;
   
    
    List<String> ListaIds (){
        List<String> ListIdAsientos = new ArrayList<>();

        for (int i = 0; i < 3; i++) {

            String firstLetter = "";
            switch (i){
                case 0:
                    firstLetter = "A";
                    break;
                case 1:
                    firstLetter = "B";
                    break;
                case 2:
                    firstLetter = "C";
                    break;
            }
            for (int j = 1; j <= 10; j++) {
                String numeroText = j + "" ;
                String idAsiento = "";
                if (numeroText.length() == 1 ){
                     idAsiento = firstLetter + "0" + j ;
                }else {
                    idAsiento = firstLetter  + j ;
                }

                ListIdAsientos.add(idAsiento);
            }
        }
        return ListIdAsientos;
    }

    @GetMapping("/listarAsientosPorPelicula/{id}")
    public ResponseEntity<?> listarAsientosPorPelicula(@PathVariable("id") Integer idPelicula, Model model , HttpSession httpSession) {
    	List<Asiento> listaAsiento = null;
    	try {
    		 listaAsiento = asientoService.listaAsientoByFuncion(1);


    	        if (listaAsiento.size() == 0){
    	            List<String> ListIdAsientos = ListaIds();

    	            //Peliculas pelicula = peliculaService.FindById(1);
    	            Funcion funcion = funcionService.findById(1);
    	            Asiento asiento = new Asiento();
    	            for (int i = 0; i < ListIdAsientos.size(); i++) {
    	                asiento = new Asiento();
    	                asiento.setIdFuncion(funcion.getIdFuncion());
    	                asiento.setFuncion(funcion);
    	                asiento.setCodigo(ListIdAsientos.get(i));
    	                asiento.setEstadoAsiento(false);
    	                try {
    	                    asientoService.save(asiento);
    	                }catch (Exception e){
    	                    model.addAttribute("failMessage","Error de Regitro: " + e.getMessage());

    	                }

    	            }
    	            listaAsiento = asientoService.listaAsientoByFuncion(1);
    	        }

    	        List<Funcion> listaFuncion = funcionService.findByPeliculaIdPelicula(idPelicula);

    	        Sala sala = salaService.findById(1);

    	        //Usuario usuarupdate = (Usuario) httpSession.getAttribute("usuario");
    	        //Usuario usuarupdate2 = usuarupdate;

    	        //Usuario usuario = usuarioService.findById(usuarupdate2.getIdUsuario());
    	        //String nombreApellido = usuarupdate2.getNombre_usuario()+ " " + usuarupdate2.getApellido_usuario();
    	        //model.addAttribute("nombreUsuario",nombreApellido );
    	        model.addAttribute("listaFuncion",listaFuncion);
    	        model.addAttribute("listaAsiento",listaAsiento);
    	        model.addAttribute("precioSala",sala.getPrecio());
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}

       
        return ResponseEntity.ok(listaAsiento);
    }

   

    
}
