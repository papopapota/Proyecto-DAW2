package com.proyecto_daw2.cinemoon.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Asiento;
import com.proyecto_daw2.cinemoon.Repository.IAsientoRepository;

import java.util.List;

@Service
public class AsientoService implements  IAsientoService {
    @Autowired

    private IAsientoRepository asientoRepository;

    @Override
    public void save(Asiento asiento){
        asientoRepository.save(asiento);
    }

    @Override
    public List<Asiento> listaAsientoByFuncion(int id){
      return  asientoRepository.findByFuncionIdFuncion(id);
    }
}
