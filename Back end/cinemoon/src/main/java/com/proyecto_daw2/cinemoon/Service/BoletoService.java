package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Boleto;
import com.proyecto_daw2.cinemoon.Repository.IBoletoRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class BoletoService implements IBoletoService{
    
    @Autowired
    private IBoletoRepository repository;

    @Override
    public List<Boleto> listarBoletosByUsuario(int id_usuario) {
        return repository.findByUsuarioIdusuario(id_usuario);
    }

    @Override
    public void save(Boleto boletos){
    	repository.save(boletos);
    }

    @Override
    public Boleto findById(Integer id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Boleto> listaBoletosByIdUsuario(int id_usuario) {
        return  repository.findByUsuarioIdusuario(id_usuario);
    }
    
}
