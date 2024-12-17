package com.proyecto.microservicioeducacion.controller;

import com.proyecto.microservicioeducacion.model.AspectoEducativo;
import com.proyecto.microservicioeducacion.service.AspectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.List;

@Controller
public class EducacionController {

    @Autowired
    private AspectoService aspectoService;

    @GetMapping("/educacion")
    public String mostrarCentroEducacion(Model model) {
        return "centro-educacion";
    }

    @GetMapping("/educacion/aspectos")
    @ResponseBody
    public List<AspectoEducativo> getAspectos() {
        return aspectoService.getCursosInformaticos();
    }
}