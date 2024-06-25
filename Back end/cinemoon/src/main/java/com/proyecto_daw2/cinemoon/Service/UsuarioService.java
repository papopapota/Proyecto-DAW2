package com.proyecto_daw2.cinemoon.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto_daw2.cinemoon.Model.Usuario;
import com.proyecto_daw2.cinemoon.Repository.IUsuarioRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UsuarioService implements IUsuarioService{
    
    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario registrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public void eliminarUsuario(int id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public Usuario buscar(int id) {
        return usuarioRepository.findById(id).get();
    }
    
    @Override
    public Usuario authenticate(String correo, String clave) {
        Usuario usuario = usuarioRepository.findByCorreoAndClave(correo, clave);
        if (usuario != null && usuario.getClave().equals(clave)) {
            return usuario;
        } else {
            return null;
        }
    }
}
