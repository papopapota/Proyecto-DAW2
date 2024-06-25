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
import org.springframework.web.bind.annotation.RequestBody;
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
import com.proyecto_daw2.cinemoon.Utils.RespuestaMensaje;
import com.proyecto_daw2.cinemoon.Utils.UtilCompraBoleto;
import com.proyecto_daw2.cinemoon.Utils.UtilsCompraBoletoRequest;
import com.proyecto_daw2.cinemoon.Service.*;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("api/boleto")
@CrossOrigin(origins = "http://localhost:4200")
public class BoletoController {

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

    @GetMapping("/lista/{id_usuario}")
    public List<Boleto> listarBoletosByUsuario(@PathVariable int id_usuario){
        return service.listarBoletosByUsuario(id_usuario);
    }
    
    
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
    public ResponseEntity<?> compraTikects(@PathVariable("id") Integer idPelicula, Model model , HttpSession httpSession) {
        //model.addAttribute("" );

        List<Asiento> listaAsiento = asientoService.listaAsientoByFuncion(1);


        if (listaAsiento.size() == 0){
            List<String> ListIdAsientos = ListaIds();

            //Peliculas pelicula = peliculaService.FindById(1);
            Funcion funcion = funcionService.findById(1);
            Asiento asiento = new Asiento();
            for (int i = 0; i < ListIdAsientos.size(); i++) {
                asiento = new Asiento();
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
        Usuario usuarupdate = UsuarioService.buscar(1);
        //Usuario usuarupdate = (Usuario) httpSession.getAttribute("usuario");
        Usuario usuarupdate2 = usuarupdate;

        //Usuario usuario = usuarioService.findById(usuarupdate2.getIdUsuario());
        String nombreApellido = usuarupdate2.getNombre_usuario()+ " " + usuarupdate2.getApellido_usuario();
        model.addAttribute("nombreUsuario",nombreApellido );
        model.addAttribute("listaFuncion",listaFuncion);
        model.addAttribute("listaAsiento",listaAsiento);
        model.addAttribute("precioSala",sala.getPrecio());
        
        UtilCompraBoleto utilCompraBoleto = new UtilCompraBoleto();
        utilCompraBoleto.setNombresApellidos(nombreApellido);
        utilCompraBoleto.setLstFuncion(listaFuncion);
        utilCompraBoleto.setLstAsiento(listaAsiento);
        utilCompraBoleto.setPrecioSala(sala.getPrecio());
        return ResponseEntity.ok(utilCompraBoleto);
    }

    @PostMapping("/comprarAction")
    public ResponseEntity<?> comprarAction(  @RequestBody UtilsCompraBoletoRequest request , HttpSession httpSession) {

        String butacasCodigo = request.getButacasCodigo(); 
    	Boleto boleto = new Boleto();
    	 Usuario usuarupdate = UsuarioService.buscar(1);
        //Usuario usuarupdate = (Usuario) httpSession.getAttribute("usuario");
        Usuario usuarupdate2 = usuarupdate;
        usuarupdate2.setIdusuario(usuarupdate.getIdusuario());

        Usuario usuario = UsuarioService.buscar(usuarupdate2.getIdusuario());
        Funcion funcion = funcionService.findById(request.getIdFuncion());

        //boleto.setIdBoleto(null);
        boleto.setId_usuario(usuario.getIdusuario());
        //boleto.setUsuario(usuario);
        //boleto.setFuncion(funcion);
        boleto.setId_funcion(funcion.getIdFuncion());
        boleto.setCantidad(  request.getCantidad());
        boleto.setTotal(request.getTotal());
        try {
            tikectService.save(boleto);
        }catch (Exception e){
            String mensaje = "Error guardando Boleto " + e.getMessage();
            //redirectAttributes.addFlashAttribute("failMessage",mensaje);
            return ResponseEntity.ok(mensaje);
        }
        if (butacasCodigo == ""){

            String mensaje = "Selecione una butaca";
            //redirectAttributes.addFlashAttribute("failMessage",mensaje);
            return ResponseEntity.ok(mensaje);
        }
        String[] boletos = butacasCodigo.split(",");




        List<Asiento> asientos = asientoService.listaAsientoByFuncion(request.getIdFuncion());


        for (int i = 0; i < boletos.length; i++) {
            String codigoBoleto = boletos[i];
            Asiento asiento = logicaAsiento(asientos , codigoBoleto);

            Boleto savedBoleto = tikectService.findById(boleto.getId_boleto());
            DetalleBoleto detalleBoleto = new DetalleBoleto();
            //detalleBoleto.setObjBoleto(boleto);
            detalleBoleto.setId_boleto(boleto.getId_boleto());
            //detalleBoleto.setObjAsiento(asiento);
            detalleBoleto.setId_asiento(asiento.getIdAsiento());
            if (asiento == null){
                String mensaje = "Selecione Funcion ";
                //redirectAttributes.addFlashAttribute("failMessage",mensaje);
                return ResponseEntity.ok(mensaje);
            }
            try {
                DetalleBoletorepo.save(detalleBoleto);
            }catch (Exception e){
                String mensaje = "error detalle boleto : " + e.getMessage();
                //redirectAttributes.addFlashAttribute("failMessage",mensaje);
                return ResponseEntity.ok(mensaje);
            }
        }

        String mensaje = "Se registro correctamente la compra" ;
        RespuestaMensaje respuesta = new RespuestaMensaje(mensaje);
        
        //redirectAttributes.addFlashAttribute("successMessage",mensaje);
        return ResponseEntity.ok(respuesta);
    }

    public Asiento logicaAsiento(List<Asiento> asientos , String codigoBoleto){

        //DetalleBoleto detalleBoleto = new DetalleBoleto();
        for (int j = 0; j < asientos.size(); j++) {
            Asiento asiento = asientos.get(j);
            String codigo = asiento.getCodigo();
            if ( codigoBoleto.equals( codigo)){

                return asiento ;

            }

        }

        return null;
    }
    
}
