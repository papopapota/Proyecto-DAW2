package com.proyecto_daw2.cinemoon.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto_daw2.cinemoon.Model.Pelicula;
import com.proyecto_daw2.cinemoon.Model.Producto;
import com.proyecto_daw2.cinemoon.Service.IProductoService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping ("api/producto")
@CrossOrigin (origins = "http://localhost:4200")
public class ProductoController {
	
	@Autowired
	private IProductoService serviceProduc;
	
	
	@GetMapping("/lista")
	public List<Producto> listarProducto(){
		return serviceProduc.listado();
	}
	
	@GetMapping("/buscar/{id}")
	public Producto buscarProducto(@PathVariable int  id ){
		return serviceProduc.buscarId(id);
	}
	
	@PostMapping("/guardar")
	@ResponseBody
	public ResponseEntity<?> guardarProductos(@RequestBody Producto producto ){
		HashMap<String, Object> salida = new HashMap<>();
    	try {
    		serviceProduc.guardar(producto);
    		salida.put("mensaje", "Se guardo el producto n° "+ producto.getIdproducto());
    		
		} catch (Exception e) {
			// TODO: handle exception
			salida.put("mensaje", e.getMessage());
		}
    	
        return ResponseEntity.ok(salida) ;

    }
	
}
	


