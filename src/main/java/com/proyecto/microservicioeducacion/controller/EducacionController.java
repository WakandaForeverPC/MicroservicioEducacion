package com.proyecto.microservicioeducacion.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/educacion")
public class EducacionController {

    @GetMapping
    public String obtenerEducacion() {
        // Lógica para obtener información de educación
        return "Información de educación";
    }

    @PostMapping
    public String crearEducacion(@RequestBody String nuevaEducacion) {
        // Lógica para crear nueva información de educación
        return "Nueva educación creada";
    }
}