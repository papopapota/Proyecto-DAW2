package com.proyecto_daw2.cinemoon.Service;


import java.util.List;

import com.proyecto_daw2.cinemoon.Model.Funcion;


public interface IFuncionService {
	List<Funcion> findAll();


    Funcion findById(Integer id);

    Funcion save(Funcion usuario);



    void deleteById(Integer id);



    List<Funcion> findByPeliculaIdPelicula(int id);
}
