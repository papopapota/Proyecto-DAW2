package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import com.proyecto_daw2.cinemoon.Model.Boleto;

public interface IBoletoService {

    public abstract List<Boleto> listarBoletosByUsuario(int id_usuario);
    
}
