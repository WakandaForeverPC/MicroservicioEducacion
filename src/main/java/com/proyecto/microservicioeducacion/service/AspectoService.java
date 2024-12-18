package com.proyecto.microservicioeducacion.service;

import com.proyecto.microservicioeducacion.model.AspectoEducativo;
import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.List;

@Service
public class AspectoService {

    public List<AspectoEducativo> getCursosInformaticos() {
        return Arrays.asList(
                new AspectoEducativo("Cursos:", "Programación en Java, Desarrollo Web, Bases de Datos, Sping Boot, Ciberseguridad, Inteligencia Artificial, Machine Learning, Desarrollo de Apps, Cloud Computing, Big Data"),
                new AspectoEducativo("Centros:", "Universidad de Wakanda, Univeridad Politécnica de Wakanda, Universidad Mercante, Universidad Jabari, Universidad de Black Panther, Universidad de la Tierra, Universidad del Fuego, Universidad del Aire, Universidad del Agua, Universidad Minera"),
                new AspectoEducativo("Grados Univeritarios:", "Ingeniería Informática, Ingeniería de Software, Ingeniería de Telecomunicaciones, Ingeniería Electrónica, Ingeniería Mecánica, Ingeniería Civil, Ingeniería Química, Ingeniería Biomédica, Ingeniería Aeroespacial, Ingeniería Ambiental")
        );
    }
}