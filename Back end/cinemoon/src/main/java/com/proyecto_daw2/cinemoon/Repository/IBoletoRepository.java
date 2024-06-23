package com.proyecto_daw2.cinemoon.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.proyecto_daw2.cinemoon.Model.Boleto;

public interface IBoletoRepository extends JpaRepository<Boleto, Integer>{

    List<Boleto> findByUsuarioIdusuario(int id_usuario);
}
