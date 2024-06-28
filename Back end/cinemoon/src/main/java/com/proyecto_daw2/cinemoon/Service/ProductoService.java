package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Producto;
import com.proyecto_daw2.cinemoon.Repository.IProductoRepository;
import com.proyecto_daw2.cinemoon.Repository.IUsuarioRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class ProductoService implements IProductoService {

	@Autowired
	private IProductoRepository repoProd;
	
	@Override
	public List<Producto> listado() {
		return repoProd.findAll();
	}

	@Override
	public Producto buscarId(Integer id) {
		// TODO Auto-generated method stub
		return repoProd.findById(id).get();
	}

	@Override
	public Producto guardar(Producto producto) {
		// TODO Auto-generated method stub
		return repoProd.save(producto);
	}

	@Override
	public void deleteById(Integer id) {
		repoProd.deleteById(id);
	}

}
