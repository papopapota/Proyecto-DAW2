package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import com.proyecto_daw2.cinemoon.Model.DetalleProducto;

public interface IDetalleProductoService {
	
	//Listado
	List<DetalleProducto> listadoDetalle();
	
	//Guardar
	DetalleProducto guardarDetalle(DetalleProducto detalleProducto);

}
