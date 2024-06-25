package com.proyecto_daw2.cinemoon.Service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Sala;
import com.proyecto_daw2.cinemoon.Repository.ISalaRepository;

@Service
public class SalaService implements  ISalaService {
	private final ISalaRepository salaRepository;

    public SalaService(ISalaRepository salaRepository) {
        this.salaRepository = salaRepository;
    }

    @Override
	public List<Sala> findAll() {
		// TODO Auto-generated method stub

		return salaRepository.findAll();
	}

	@Override
	public Sala findById(Integer id) {
		// TODO Auto-generated method stub
		return salaRepository.findById(id).get();
	}

	@Override
	public Sala save(Sala sala) {
		// TODO Auto-generated method stub
		return salaRepository.save(sala);
	}

	@Override
	public void deleteById(Integer id) {
		// TODO Auto-generated method stub
		
	}
	
}
