package com.proyecto_daw2.cinemoon.Service;

import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Asiento;

import java.util.List;


public interface IAsientoService  {
    void save(Asiento asiento);

    List<Asiento> listaAsientoByFuncion(int id);
}
