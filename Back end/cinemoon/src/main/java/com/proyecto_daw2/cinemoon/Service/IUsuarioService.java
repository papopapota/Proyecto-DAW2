package com.proyecto_daw2.cinemoon.Service;

import java.util.List;
import com.proyecto_daw2.cinemoon.Model.Usuario;

public interface IUsuarioService {
    
    public abstract List<Usuario> listarUsuarios();
    public abstract Usuario registrarUsuario(Usuario usuario);
    public abstract void eliminarUsuario(int id);
    public abstract Usuario buscar(int id);
}
