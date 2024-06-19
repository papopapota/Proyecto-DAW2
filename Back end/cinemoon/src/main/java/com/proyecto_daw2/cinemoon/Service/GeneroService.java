package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Genero;
import com.proyecto_daw2.cinemoon.Repository.IGeneroRepository;
@Service
public class GeneroService implements IGeneroService {

	@Autowired
	IGeneroRepository repository;
	
	@Override
	public List<Genero> listarGenero() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

}
