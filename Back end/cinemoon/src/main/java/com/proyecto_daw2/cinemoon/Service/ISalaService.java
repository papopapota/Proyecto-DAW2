package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import com.proyecto_daw2.cinemoon.Model.Sala;


public interface ISalaService {
	List<Sala> findAll();
    Sala findById(Integer id);
    Sala save(Sala sala);
    void deleteById(Integer id);
}
