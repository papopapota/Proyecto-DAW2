package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.DetalleProducto;
import com.proyecto_daw2.cinemoon.Repository.IDetalleProductoRepository;
import com.proyecto_daw2.cinemoon.Repository.IProductoRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class DetalleProductoService implements IDetalleProductoService {

	@Autowired
	private IDetalleProductoRepository repoDetalle;
	
	
	@Override
	public List<DetalleProducto> listadoDetalle() {
		// TODO Auto-generated method stub
		return repoDetalle.findAll();
	}

	@Override
	public DetalleProducto guardarDetalle(DetalleProducto detalleProducto) {
		// TODO Auto-generated method stub
		return repoDetalle.save(detalleProducto);
	}

}
