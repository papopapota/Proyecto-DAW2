package com.proyecto_daw2.cinemoon.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto_daw2.cinemoon.Model.Asiento;

import java.util.List;

@Repository
public interface IAsientoRepository extends JpaRepository<Asiento, Integer> {
    List<Asiento> findByFuncionIdFuncion(int id);
}
