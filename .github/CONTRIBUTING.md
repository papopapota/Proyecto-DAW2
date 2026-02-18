# 🤝 Guía de Contribución a CINEMOON

¡Gracias por tu interés en contribuir a CINEMOON! Este documento te guiará en el proceso.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Configuración del entorno](#configuración-del-entorno)
- [Convenciones de código](#convenciones-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código.

- ✅ Usa lenguaje acogedor e inclusivo
- ✅ Respeta los diferentes puntos de vista
- ✅ Acepta críticas constructivas con gracia
- ❌ No uses lenguaje sexualizado ni imágenes inapropiadas
- ❌ No realices ataques personales o políticos

## 🚀 ¿Cómo puedo contribuir?

### Reportar Bugs

Si encuentras un bug, abre un issue incluyendo:
- **Descripción clara** del problema
- **Pasos para reproducir** el error
- **Comportamiento esperado** vs. comportamiento actual
- **Screenshots** si es posible
- **Entorno**: OS, versión de Java/Node, navegador

### Sugerir Mejoras

¿Tienes una idea? Abre un issue con:
- **Caso de uso** claro
- **Beneficio** que aportaría
- **Posible implementación** (opcional)

### Contribuir con Código

1. **Fork** el repositorio
2. **Crea una rama** desde `main`:
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```
3. **Realiza tus cambios** siguiendo las convenciones
4. **Escribe tests** para tu código
5. **Asegúrate de que todos los tests pasen**
6. **Commit** con mensajes descriptivos
7. **Push** a tu fork
8. **Abre un Pull Request**

## 🛠️ Configuración del Entorno

### Backend (Spring Boot)

```bash
cd "Back end/cinemoon"
./mvnw clean install
./mvnw spring-boot:run
```

### Frontend (Angular)

```bash
cd "Front end/cinemoon"
npm install
npm start
```

### Base de Datos

```bash
mysql -u root -p < "Back end/cinemoon/src/main/resources/database.txt"
```

## 📏 Convenciones de Código

### Java (Backend)

```java
// ✅ CORRECTO: Nombres en camelCase
public class UsuarioService {
    private UsuarioRepository usuarioRepository;
    
    public Usuario buscarPorId(Integer id) {
        return usuarioRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
    }
}

// ❌ INCORRECTO: snake_case, sin manejo de errores
public class usuario_service {
    public usuario buscar_por_id(int id) {
        return usuario_repository.findById(id).get();
    }
}
```

**Convenciones:**
- Clases: `PascalCase`
- Métodos/Variables: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Usar `@Autowired` o inyección por constructor
- Manejo de excepciones con try-catch o `@ControllerAdvice`

### TypeScript (Frontend)

```typescript
// ✅ CORRECTO: Tipado fuerte, async/await
export class PeliculaService {
  constructor(private http: HttpClient) {}
  
  async obtenerPeliculas(): Promise<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${API_URL}/pelicula/lista`)
      .toPromise();
  }
}

// ❌ INCORRECTO: Sin tipado, callbacks anidados
getPeliculas() {
  this.http.get('http://localhost:8080/api/pelicula/lista').subscribe(data => {
    this.peliculas = data;
  });
}
```

**Convenciones:**
- Interfaces en archivo separado
- Componentes con selector en kebab-case: `<app-movie-list>`
- Usar RxJS operators (map, filter, switchMap)
- Evitar `any`, usar tipos específicos

### Git Commits

Usa **Conventional Commits**:

```bash
# Formato: <tipo>(<scope>): <mensaje>

feat(peliculas): agregar filtro por género
fix(boletos): corregir validación de asientos ocupados
docs(readme): actualizar instrucciones de instalación
refactor(usuarios): extraer lógica de autenticación a servicio
test(funciones): agregar tests unitarios para FuncionService
```

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Documentación
- `style`: Formato (sin cambios de lógica)
- `refactor`: Refactorización
- `test`: Tests
- `chore`: Tareas de mantenimiento

## 🔄 Proceso de Pull Request

### Antes de enviar

- [ ] El código compila sin errores
- [ ] Todos los tests pasan
- [ ] Se agregaron tests para nuevas funcionalidades
- [ ] La documentación está actualizada
- [ ] El código sigue las convenciones del proyecto

### Durante la revisión

- Espera feedback del equipo
- Responde a comentarios de manera constructiva
- Realiza cambios solicitados en la misma rama

### Después de la aprobación

¡Tu código será merged! 🎉

## 🧪 Testing

### Backend (JUnit)

```java
@SpringBootTest
class PeliculaServiceTest {
    
    @Autowired
    private PeliculaService peliculaService;
    
    @Test
    void deberiaRetornarTodasLasPeliculas() {
        List<Pelicula> peliculas = peliculaService.listarPeliculas();
        assertThat(peliculas).isNotEmpty();
    }
}
```

### Frontend (Jasmine)

```typescript
describe('PeliculaService', () => {
  let service: PeliculaService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeliculaService]
    });
    service = TestBed.inject(PeliculaService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  it('debería obtener lista de películas', () => {
    service.obtenerPeliculas().subscribe(peliculas => {
      expect(peliculas.length).toBeGreaterThan(0);
    });
  });
});
```

## 🎯 Áreas Prioritarias

Actualmente buscamos contribuciones en:

1. **Testing**: Aumentar cobertura de tests
2. **Documentación**: Mejorar JavaDocs y TSDoc
3. **Accesibilidad**: ARIA labels, navegación por teclado
4. **Performance**: Optimización de queries, lazy loading
5. **Internacionalización**: Agregar soporte multi-idioma

## 📞 ¿Necesitas ayuda?

- Abre un issue con la etiqueta `question`
- Revisa issues existentes con la etiqueta `good first issue`

---

¡Gracias por hacer CINEMOON mejor! 🎬✨
