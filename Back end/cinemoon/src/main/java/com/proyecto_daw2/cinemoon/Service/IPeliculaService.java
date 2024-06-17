package com.proyecto_daw2.cinemoon.Service;



import java.util.List;

import com.proyecto_daw2.cinemoon.Model.Pelicula;

public interface IPeliculaService {
    List<Pelicula> listarPeliculas();

    Pelicula regitrarPelicula(Pelicula peliculas);
    void eliminarPelicula(Integer id);


    Pelicula FindById(Integer id);
}
