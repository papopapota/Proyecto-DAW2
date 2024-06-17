package com.proyecto_daw2.cinemoon.Service;



import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Pelicula;
import com.proyecto_daw2.cinemoon.Repository.IPeliculasRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class PeliculaService implements IPeliculaService{

    private IPeliculasRepository PeliculaRepository;
    @Override
    public List<Pelicula> listarPeliculas() {
        return PeliculaRepository.findAll();
    }

    @Override
    public Pelicula regitrarPelicula(Pelicula peliculas) {
        return PeliculaRepository.save(peliculas);
    }
    @Override
    public void eliminarPelicula(Integer id) {
        PeliculaRepository.deleteById(id);
    }

    @Override
    public Pelicula FindById(Integer id) {
       return PeliculaRepository.findById(id).get();
    }



}
