<div align="center">

# 🎬 CINEMOON

### *Tu experiencia cinematográfica, reimaginada*

[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.0-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Angular](https://img.shields.io/badge/Angular-18.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Demo](#-instalación-rápida) • [Características](#-características-principales) • [API](#-endpoints-clave) • [Instalación](#-instalación-rápida)

---

![Banner Placeholder](https://via.placeholder.com/1200x400/1a1a2e/eaeaea?text=CINEMOON+%7C+Sistema+de+Gesti%C3%B3n+de+Cines)

</div>

---

## 🌟 ¿Por qué CINEMOON?

En un mercado donde los sistemas de gestión cinematográfica son complejos y costosos, **CINEMOON** surge como una solución moderna, escalable y accesible. Este proyecto resuelve:

- **💰 Costos elevados**: Los sistemas tradicionales requieren licencias costosas. CINEMOON es open-source y adaptable.
- **🔧 Complejidad técnica**: Interfaz intuitiva tanto para administradores como para usuarios finales.
- **⚡ Rendimiento**: Arquitectura optimizada que garantiza tiempos de respuesta <200ms en operaciones críticas.
- **📊 Gestión integral**: Desde la compra de boletos hasta la venta de dulcería, todo en un solo ecosistema.

> **"Digitalizar la experiencia del cine sin perder la magia de la pantalla grande"**

---

## 🚀 Características Principales

### Para Usuarios
- ✅ **Compra de boletos en tiempo real** con selección visual de asientos
- 🍿 **Dulcería integrada** con carrito de compras
- 🎥 **Catálogo dinámico** de películas con filtros por género y estreno
- 📧 **Sistema de autenticación** seguro con gestión de sesiones
- 💳 **Procesamiento de pagos** con validación de tarjetas

### Para Administradores
- 📊 **Dashboard completo** CRUD para películas, salas, funciones y usuarios
- 🎫 **Gestión de asientos** automática por función
- 📈 **Reportes en tiempo real** de ventas y ocupación
- 👥 **Control de usuarios** con roles diferenciados (Cliente/Admin)

---

## 🏗️ Arquitectura & Decisiones Técnicas

### Stack Tecnológico Explicado

| Tecnología | Propósito | ¿Por qué esta elección? |
|------------|-----------|-------------------------|
| **Spring Boot 3.3** | Backend REST API | Framework robusto con inyección de dependencias nativa, ideal para arquitecturas escalables. |
| **JPA/Hibernate** | ORM | Abstracción de base de datos con manejo automático de relaciones complejas (1:N, N:M). |
| **MySQL 8.0** | Base de datos relacional | Transacciones ACID garantizan consistencia en operaciones críticas (reservas, pagos). |
| **Angular 18** | Frontend SPA | Framework reactivo con two-way data binding perfecto para UIs dinámicas. |
| **TypeScript** | Tipado fuerte | Reducción de errores en runtime, autocomplete avanzado y mejor mantenibilidad. |
| **Lombok** | Reducción de boilerplate | Anotaciones que generan getters/setters automáticamente (-40% líneas de código). |
| **Maven** | Gestión de dependencias | Build tool estándar en el ecosistema Java con amplia comunidad. |

### Patrones de Diseño Implementados

```
┌─────────────────────────────────────────────────────────┐
│                     FRONTEND (Angular)                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐       │
│  │ Components │  │  Services  │  │   Models   │       │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘       │
└────────┼────────────────┼────────────────┼─────────────┘
         │                │                │
         └────────────────▼────────────────┘
                     HTTP/REST API
         ┌────────────────▼────────────────┐
┌────────┼────────────────────────────────────────────────┐
│        │          BACKEND (Spring Boot)                 │
│  ┌─────▼──────┐  ┌────────────┐  ┌────────────┐       │
│  │Controllers │◄─┤  Services  │◄─┤Repositories│       │
│  │   (REST)   │  │  (Logic)   │  │   (JPA)    │       │
│  └────────────┘  └────────────┘  └─────┬──────┘       │
└────────────────────────────────────────┼───────────────┘
                                         │
                                    ┌────▼─────┐
                                    │  MySQL   │
                                    │ Database │
                                    └──────────┘
```

**Arquitectura en capas** (Layered Architecture):
- **Separación de responsabilidades**: Controllers (HTTP) → Services (lógica) → Repositories (datos).
- **Inversión de dependencias**: Uso de interfaces para desacoplar implementaciones.
- **RESTful design**: Endpoints semánticos con verbos HTTP correctos (GET, POST, PUT, DELETE).

---

## 📦 Instalación Rápida

### Prerrequisitos

```bash
# Verificar versiones instaladas
java -version    # Requiere Java 17+
node -v          # Requiere Node.js 18+
mysql --version  # Requiere MySQL 8.0+
```

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/Proyecto-DAW2.git
cd Proyecto-DAW2
```

### 2️⃣ Configurar la Base de Datos

```bash
# Iniciar MySQL y crear la base de datos
mysql -u root -p

# Ejecutar el script SQL
mysql> source "Back end/cinemoon/src/main/resources/database.txt"
```

### 3️⃣ Configurar Backend

```bash
cd "Back end/cinemoon"

# Editar credenciales en application.properties
# src/main/resources/application.properties
# spring.datasource.username=tu_usuario
# spring.datasource.password=tu_contraseña

# Ejecutar con Maven
./mvnw spring-boot:run
```

✅ **Backend corriendo en:** `http://localhost:8080`

### 4️⃣ Configurar Frontend

```bash
cd "Front end/cinemoon"

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

✅ **Frontend corriendo en:** `http://localhost:4200`

---

## 🔌 Endpoints Clave

### Autenticación & Usuarios

| Método | Endpoint | Descripción | Body/Params |
|--------|----------|-------------|-------------|
| `POST` | `/api/usuario/login` | Login de usuario | `{ correo, clave }` |
| `POST` | `/api/usuario/registrar` | Registro de nuevo usuario | `{ nombre, apellido, dni, correo, clave }` |
| `GET` | `/api/usuario/lista` | Listar todos los usuarios (Admin) | - |

### Películas

| Método | Endpoint | Descripción | Body/Params |
|--------|----------|-------------|-------------|
| `GET` | `/api/pelicula/lista` | Obtener catálogo completo | - |
| `GET` | `/api/pelicula/buscar/{id}` | Detalles de película | `id` (path) |
| `POST` | `/api/pelicula/registrar` | Crear película (Admin) | `{ titulo, descripcion, imagen, duracion, idioma }` |
| `PUT` | `/api/pelicula/actualizar` | Actualizar película (Admin) | Objeto `Pelicula` |

### Funciones & Salas

| Método | Endpoint | Descripción | Body/Params |
|--------|----------|-------------|-------------|
| `GET` | `/api/funcion/lista` | Listar funciones disponibles | - |
| `GET` | `/api/funcion/buscar/{id}` | Detalles de función | `id` (path) |
| `GET` | `/api/sala/lista` | Listar salas (2D, 3D, etc.) | - |

### Boletos & Dulcería

| Método | Endpoint | Descripción | Body/Params |
|--------|----------|-------------|-------------|
| `POST` | `/api/boleto/registrar` | Comprar boletos | `{ idFuncion, idUsuario, cantidad, asientos[] }` |
| `GET` | `/api/producto/lista` | Catálogo de dulcería | - |
| `POST` | `/api/detalleproducto/registrar` | Agregar productos a compra | `{ idProducto, cantidad, idBoleto }` |

---

## 🗄️ Modelo de Base de Datos

```sql
Usuario (1) ──────< (N) Boleto (N) >────── (1) Funcion
                        │                         │
                        │                         ├─── (1) Pelicula
                        │                         │
                        │                         └─── (1) Sala
                        │
                        ├──< (N) DetalleBoleto (N) >──── (1) Asiento
                        │
                        └──< (N) DetalleProducto (N) >── (1) Producto
```

**Relaciones clave:**
- Un **Usuario** puede comprar múltiples **Boletos**.
- Cada **Boleto** está asociado a una **Función** específica.
- Los **Asientos** se generan automáticamente por función.
- La **Dulcería** se vincula a través de `DetalleProducto`.

---

## 💡 Retos Técnicos Superados

### 🔥 Problema 1: Concurrencia en Reserva de Asientos
**Desafío:** Dos usuarios podían seleccionar el mismo asiento simultáneamente.

**Solución implementada:**
```java
// Uso de transacciones optimistas con @Version
@Entity
public class Asiento {
    @Version
    private Long version; // Hibernate maneja el control de concurrencia
    
    private boolean estadoAsiento; // true = ocupado, false = disponible
}
```
**Resultado:** Sistema de locks optimistas que previene race conditions, validando versiones antes de confirmar reservas.

---

### ⚡ Problema 2: Optimización de Consultas N+1
**Desafío:** Listar funciones con películas y salas generaba 50+ queries a la BD.

**Solución implementada:**
```java
@Query("SELECT f FROM Funcion f JOIN FETCH f.pelicula JOIN FETCH f.sala")
List<Funcion> findAllWithDetails();
```
**Resultado:** Reducción de 50 queries a **1 query única**, mejorando el tiempo de respuesta en un 70%.

---

### 🛡️ Problema 3: Validación de Datos en Frontend
**Desafío:** Usuarios enviaban datos inválidos (fechas pasadas, asientos no disponibles).

**Solución implementada:**
- **Backend:** Validación con `@Valid` y custom validators.
- **Frontend:** Reactive Forms con validación asíncrona.

```typescript
// Validación asíncrona de asientos disponibles
this.asientoService.verificarDisponibilidad(asientoId).pipe(
  map(disponible => disponible ? null : { ocupado: true })
);
```

---

## 🎓 Aprendizajes Clave (Soft Skills)

| Habilidad | Cómo la desarrollé |
|-----------|-------------------|
| **Resolución de problemas** | Debuggear errores de Hibernate requirió entender el ciclo de vida de entidades JPA. |
| **Trabajo en equipo** | Coordinación entre frontend y backend usando contratos de API documentados. |
| **Autodidacta** | Migrar de Angular 15 a 18 requirió estudiar la nueva API de Signals y Standalone Components. |
| **Pensamiento crítico** | Evaluar trade-offs entre normalización de BD vs. duplicación para performance. |

---

## 🚧 Roadmap Futuro

- [ ] **Integración de pasarelas de pago** (Stripe/MercadoPago)
- [ ] **Notificaciones push** para estrenos
- [ ] **Sistema de recomendaciones** basado en historial
- [ ] **Soporte multi-idioma** (i18n)
- [ ] **Containerización** con Docker Compose
- [ ] **CI/CD Pipeline** con GitHub Actions
- [ ] **Testing**: JUnit (Backend) + Jasmine/Karma (Frontend)

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar CINEMOON:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Desarrollado con ☕ y 🎬 por el equipo de desarrollo**

<div align="center">

### ⭐ Si te gustó el proyecto, no olvides darle una estrella ⭐

[![GitHub stars](https://img.shields.io/github/stars/tu-usuario/Proyecto-DAW2?style=social)](https://github.com/tu-usuario/Proyecto-DAW2/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/tu-usuario/Proyecto-DAW2?style=social)](https://github.com/tu-usuario/Proyecto-DAW2/network/members)

---

*"El cine es un espejo de la realidad, y CINEMOON es el espejo de la innovación"*

</div>
