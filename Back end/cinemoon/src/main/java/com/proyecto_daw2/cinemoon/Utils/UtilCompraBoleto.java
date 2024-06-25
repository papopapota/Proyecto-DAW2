package com.proyecto_daw2.cinemoon.Utils;

import java.util.List;

import com.proyecto_daw2.cinemoon.Model.Asiento;
import com.proyecto_daw2.cinemoon.Model.Funcion;

import lombok.Data;

@Data
public class UtilCompraBoleto {

	private String nombresApellidos ;
	private List<Funcion> lstFuncion;
	private List<Asiento> lstAsiento;
	private double precioSala;
}
