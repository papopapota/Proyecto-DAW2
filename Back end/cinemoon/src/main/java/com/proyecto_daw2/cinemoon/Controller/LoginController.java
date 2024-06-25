package com.proyecto_daw2.cinemoon.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.proyecto_daw2.cinemoon.Model.Usuario;
import com.proyecto_daw2.cinemoon.Service.*;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;




@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class LoginController {

        private IUsuarioService usuarioService;
        private IPeliculaService peliculaService;
	
}
