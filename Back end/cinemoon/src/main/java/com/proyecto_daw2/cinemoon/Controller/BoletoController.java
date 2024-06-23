package com.proyecto_daw2.cinemoon.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto_daw2.cinemoon.Model.Boleto;
import com.proyecto_daw2.cinemoon.Service.IBoletoService;

import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("api/boleto")
@CrossOrigin(origins = "http://localhost:4200")
public class BoletoController {

    @Autowired
    private IBoletoService service;

    @GetMapping("/lista/{id_usuario}")
    public List<Boleto> listarBoletosByUsuario(@PathVariable int id_usuario){
        return service.listarBoletosByUsuario(id_usuario);
    }
    
}
