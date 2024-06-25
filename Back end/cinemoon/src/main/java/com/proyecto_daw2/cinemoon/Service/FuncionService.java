package com.proyecto_daw2.cinemoon.Service;


import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Funcion;
import com.proyecto_daw2.cinemoon.Repository.IFuncionRepository;

@AllArgsConstructor
@Service
public class FuncionService implements IFuncionService {
    @Autowired

    private IFuncionRepository funcionRepository;
	@Override
	public List<Funcion> findAll() {
		return funcionRepository.findAll();
	}



	@Override
	public Funcion findById(Integer id) {
		return funcionRepository.findById(id).orElse(null);
	}
	
	@Override
	public Funcion save(Funcion funcion) {
		return funcionRepository.save(funcion);
	}



	@Override
	public void deleteById(Integer id) {
		funcionRepository.deleteById(id);
	}





    @Override
    public List<Funcion> findByPeliculaIdPelicula(int id){
        return funcionRepository.findByPeliculaIdpelicula(id);

    }
}
