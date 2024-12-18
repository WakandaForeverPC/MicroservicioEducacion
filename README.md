# Microservicio de Educación

## Descripción

Este microservicio de educación tiene como objetivo proporcionar información educativa a través de una interfaz web. La información se muestra en tarjetas que representan cursos informáticos, centros de aprendizaje avanzado y carreras universitarias relacionadas con las ingenierías y la tecnología. Los datos se generan en el servicio y se obtienen mediante una llamada `fetch` en el archivo JavaScript.

## Estructura del Proyecto

### Clases y Archivos

#### `MicroservicioEducacionApplication.java`
Clase principal que inicia la aplicación Spring Boot.

#### `AspectoEducativo.java`
Modelo que representa los datos educativos. Contiene los siguientes atributos:
- `tipo`: Tipo de aspecto educativo (e.g., Curso, Centro, Carrera).
- `descripcion`: Descripción del aspecto educativo.

#### `AspectoService.java`
Servicio que genera y proporciona los datos educativos. Contiene métodos para obtener listas de cursos informáticos, centros de aprendizaje y carreras universitarias.

#### `EducacionController.java`
Controlador que maneja las solicitudes HTTP y proporciona los datos educativos a través de endpoints. Contiene los siguientes métodos:
- `mostrarCentroEducacion(Model model)`: Muestra la página principal del centro de educación.
- `getAspectos()`: Proporciona los datos educativos en formato JSON.

#### `application.properties`
Archivo de configuración de la aplicación. Contiene configuraciones para el nombre de la aplicación, el puerto del servidor, la configuración de Eureka y Thymeleaf, entre otros.

#### `pom.xml`
Archivo de configuración de Maven. Define las dependencias y plugins necesarios para el proyecto.

#### `centro-educacion.html`
Archivo HTML que define la estructura de la página web del centro de educación. Incluye referencias a los archivos CSS y JavaScript.

#### `styles.css`
Archivo CSS que define los estilos de la página web, incluyendo el diseño de las tarjetas, estanterías y la pizarra.

#### `script.js`
Archivo JavaScript que maneja la lógica del lado del cliente. Realiza una llamada `fetch` para obtener los datos educativos y los muestra en las tarjetas. También maneja la lógica del reloj en la página.

## Instalación y Ejecución

1. Clonar el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```

2. Navegar al directorio del proyecto:
    ```sh
    cd MicroservicioEducacion
    ```

3. Compilar y ejecutar la aplicación:
    ```sh
    mvn spring-boot:run
    ```

4. Acceder a la aplicación en el navegador:
    ```
    http://localhost:8089/educacion
    ```

## Endpoints

- `GET /educacion`: Muestra la página principal del centro de educación.
- `GET /educacion/aspectos`: Proporciona los datos educativos en formato JSON.

## Dependencias

- Spring Boot
- Spring Cloud Netflix Eureka Client
- Spring Cloud Config
- Thymeleaf
- Micrometer Prometheus

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT.
