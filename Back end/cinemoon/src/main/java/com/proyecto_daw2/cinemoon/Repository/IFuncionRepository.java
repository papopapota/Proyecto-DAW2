package com.proyecto_daw2.cinemoon.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto_daw2.cinemoon.Model.Funcion;

import java.util.List;
@Repository
public interface IFuncionRepository extends JpaRepository<Funcion, Integer> {

    List<Funcion> findByPeliculaIdpelicula(int id );
}
