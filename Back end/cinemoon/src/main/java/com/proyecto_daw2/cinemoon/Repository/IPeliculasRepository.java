package com.proyecto_daw2.cinemoon.Repository ;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto_daw2.cinemoon.Model.Pelicula;



public interface IPeliculasRepository extends JpaRepository<Pelicula,Integer> {
	
	
}
