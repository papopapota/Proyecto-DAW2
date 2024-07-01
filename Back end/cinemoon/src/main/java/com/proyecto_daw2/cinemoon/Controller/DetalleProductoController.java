package com.proyecto_daw2.cinemoon.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto_daw2.cinemoon.Model.DetalleProducto;
import com.proyecto_daw2.cinemoon.Model.Producto;
import com.proyecto_daw2.cinemoon.Service.IDetalleProductoService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("api/detalleproducto")
@CrossOrigin(origins = "http://localhost:4200/")
public class DetalleProductoController {
	
	@Autowired
	private IDetalleProductoService serviceDetalle;
	
	
	@GetMapping("/lista")
	public List<DetalleProducto> listarDetalle(){
		return serviceDetalle.listadoDetalle();
	}
	
	@PostMapping("/guardar")
	@ResponseBody
	public ResponseEntity<?> guardarDetalle(@RequestBody DetalleProducto detalle ){
		HashMap<String, Object> salida = new HashMap<>();
    	try {
    		serviceDetalle.guardarDetalle(detalle);
    		salida.put("mensaje", "Se guardo el producto n° "+ detalle.getIddetalle());
    		
		} catch (Exception e) {
			// TODO: handle exception
			salida.put("mensaje", e.getMessage());
		}
    	
        return ResponseEntity.ok(salida) ;

    }
}
