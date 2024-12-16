package com.proyecto.microservicioeducacion.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class EducacionController {

    @GetMapping("/educacion")
    public String mostrarCentroEducacion() {
        return "centro-educacion";
    }
}