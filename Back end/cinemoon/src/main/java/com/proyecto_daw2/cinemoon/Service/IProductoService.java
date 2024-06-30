package com.proyecto_daw2.cinemoon.Service;


import java.util.List;

import com.proyecto_daw2.cinemoon.Model.Producto;


public interface IProductoService {
	
	//Lista
	List<Producto> listado();
	
	//Busqueda
    Producto buscarId(Integer id);
    
    //Guardar
    Producto guardar(Producto producto);
    
    //Eliminar
    void deleteById(Integer id);
}
