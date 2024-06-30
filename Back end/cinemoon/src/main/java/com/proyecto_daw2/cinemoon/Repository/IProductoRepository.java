package com.proyecto_daw2.cinemoon.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto_daw2.cinemoon.Model.Producto;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Integer> {

}
