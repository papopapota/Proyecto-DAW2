package com.proyecto_daw2.cinemoon.Controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.proyecto_daw2.cinemoon.Model.Usuario;
import com.proyecto_daw2.cinemoon.Service.*;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;





@AllArgsConstructor
@RestController
@RequestMapping("api/login")
@CrossOrigin(origins = "http://localhost:4200/")
public class LoginController {

        @Autowired
        private IUsuarioService usuarioService;
        @Autowired
        private IPeliculaService peliculaService;


	
        /*@PostMapping("/loguear")
	public String login(@RequestParam String username, @RequestParam String password, HttpSession session , RedirectAttributes redirectAttributes) {
		Usuario usuario = new Usuario();
		try {
			 usuario = usuarioService.authenticate(username, password);
		}catch (Exception e ){
			return "Error " + e.getMessage();
		}
		if (usuario != null) {
			session.setAttribute("usuario", usuario);
			if (usuario.getObjTipoUsuario().getId_tipo_usuario() == 1) {

				redirectAttributes.addFlashAttribute("tipoUsuario",1);
				return "redirect:/Index";
			} else if (usuario.getObjTipoUsuario().getId_tipo_usuario() == 2) {
				redirectAttributes.addFlashAttribute("tipoUsuario",2);
				return "redirect:/Index";
			}
		}
		return "redirect:/login?error";
	}*/

        @PostMapping("/loguear/{correo}/{clave}")
        public ResponseEntity<?> loguearUsuario(@PathVariable("correo") String correo,@PathVariable("clave") String clave, HttpSession session, RedirectAttributes redirectAttributes) {
        Usuario user;
        System.out.println("correo :" + correo  + " Clave: " + clave);
        try{
                
            user = usuarioService.authenticate(correo, clave);
            session.setAttribute("usuario", user);
                if (user != null){
                        if (user.getObjTipoUsuario().getIdtipousuario() == 1) {
                                redirectAttributes.addFlashAttribute("tipoUsuario",1);
                                return ResponseEntity.ok(user);
                        } else if (user.getObjTipoUsuario().getIdtipousuario() == 2) {
                                redirectAttributes.addFlashAttribute("tipoUsuario",2);
                                return ResponseEntity.ok(user);
                        }
                }
            return ResponseEntity.ok("Usuario no encontrado");
        }catch (Exception e){
            return ResponseEntity.ok("Error " + e.getMessage());
        }

}
}
