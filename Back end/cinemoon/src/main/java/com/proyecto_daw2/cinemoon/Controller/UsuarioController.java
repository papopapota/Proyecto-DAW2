package com.proyecto_daw2.cinemoon.Controller;

import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto_daw2.cinemoon.Model.Boleto;
import com.proyecto_daw2.cinemoon.Model.Usuario;
import com.proyecto_daw2.cinemoon.Service.IUsuarioService;

import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;


@AllArgsConstructor
@RestController
@RequestMapping("api/usuario")
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioController {

    @Autowired
    private IUsuarioService usuarioService;

    @GetMapping("/lista")
    @ResponseBody
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        return ResponseEntity.ok(usuarioService.listarUsuarios());
    }

    @PostMapping("/registrar")
    @ResponseBody
    public ResponseEntity<?> registrarUsuario(@RequestBody Usuario usuario) {
        HashMap<String, Object> salida = new HashMap<>();
        try {
            usuarioService.registrarUsuario(usuario);
            salida.put("mensaje", "Usuario registrado correctamente");
        } catch (Exception e) {
            salida.put("mensaje", e.getMessage());
        }
        return ResponseEntity.ok(salida);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuario(@PathVariable int id) {
        return ResponseEntity.ok(usuarioService.buscar(id));
    }

    @PutMapping("/actualizar")
    public ResponseEntity<?> actualizarUsuario(@RequestBody Usuario usuario) {
        HashMap<String, Object> salida = new HashMap<>();
        try {
            usuarioService.registrarUsuario(usuario);
            salida.put("mensaje", "Usuario actualizado correctamente");
        } catch (Exception e) {
            salida.put("mensaje", e.getMessage());
        }
        return ResponseEntity.ok(usuario);
    };

    @DeleteMapping("/eliminar/{id}")
    @ResponseBody
    public void eliminarUsuario(@PathVariable("id") int id) {
        usuarioService.eliminarUsuario(id);
    }

    @GetMapping("/obtenerUsuario")
    public ResponseEntity<?> obtenerUsuario(HttpSession session) {
        Usuario usuario = (Usuario) session.getAttribute("usuario");
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/obtenerTipoUsuario")
    public int getMethodName(HttpSession session) {
        int idtipoUsuario;
        idtipoUsuario = ((Usuario) session.getAttribute("usuario")).getObjTipoUsuario().getIdtipousuario();
        return idtipoUsuario;
    }
    
}
