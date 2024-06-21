package com.proyecto_daw2.cinemoon.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto_daw2.cinemoon.Model.Usuario;

public interface IUsuarioRepository extends JpaRepository<Usuario, Integer>{
    
}
