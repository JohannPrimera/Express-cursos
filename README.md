# 📚 Express Cursos — API REST CRUD

API REST construida con **Express.js** para gestionar cursos de **Programación** y **Matemáticas**. Implementa las operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar).

## 🚀 Tecnologías

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/) v5
- [Nodemon](https://nodemon.io/) — recarga automática en desarrollo

## 📁 Estructura del Proyecto

```
Express-cursos/
├── app.js                  # Punto de entrada del servidor
├── datos/
│   └── cursos.js           # Datos de los cursos (programación y matemáticas)
├── routers/
│   ├── programacion.js     # Rutas CRUD para cursos de programación
│   └── matematicas.js      # Rutas CRUD para cursos de matemáticas
├── index.http              # Peticiones HTTP de ejemplo (REST Client)
├── package.json
└── README.md
```

## ⚙️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/Express-cursos.git

# Entrar al directorio
cd Express-cursos

# Instalar dependencias
npm install
```

## ▶️ Uso

```bash
# Iniciar el servidor
node app.js

# Iniciar con recarga automática (nodemon)
npx nodemon app.js
```

El servidor se ejecuta en `http://localhost:3000`.

## 📌 Endpoints

### General

| Método | Ruta             | Descripción                  |
|--------|------------------|------------------------------|
| GET    | `/`              | Mensaje de bienvenida        |
| GET    | `/api/cursos`    | Obtener todos los cursos     |

### Programación — `/api/cursos/programacion`

| Método | Ruta                          | Descripción                                        |
|--------|-------------------------------|----------------------------------------------------|
| GET    | `/`                           | Obtener todos los cursos de programación            |
| GET    | `/:lenguaje`                  | Filtrar cursos por lenguaje (`python`, `javascript`)|
| GET    | `/:lenguaje?ordenar=vistas`   | Filtrar por lenguaje y ordenar por vistas           |
| GET    | `/:lenguaje/:nivel`           | Filtrar por lenguaje y nivel (`basico`, `intermedio`)|
| POST   | `/`                           | Crear un nuevo curso                                |
| PUT    | `/:id`                        | Actualizar un curso completo por ID                 |
| PATCH  | `/:id`                        | Actualizar parcialmente un curso por ID             |
| DELETE | `/:id`                        | Eliminar un curso por ID                            |

### Matemáticas — `/api/cursos/matematicas`

| Método | Ruta        | Descripción                                      |
|--------|-------------|--------------------------------------------------|
| GET    | `/`         | Obtener todos los cursos de matemáticas           |
| GET    | `/:tema`    | Filtrar cursos por tema (`calculo`, `algebra`)    |
| POST   | `/`         | Crear un nuevo curso                              |

## 📝 Ejemplos de Peticiones

### Crear un curso de programación

```http
POST http://localhost:3000/api/cursos/programacion
Content-Type: application/json

{
    "id": 4,
    "titulo": "Aprende Node.js",
    "lenguaje": "javascript",
    "vistas": 456756,
    "nivel": "basico"
}
```

### Actualizar un curso completo (PUT)

```http
PUT http://localhost:3000/api/cursos/programacion/2
Content-Type: application/json

{
    "id": 2,
    "titulo": "Python intermedio con proyectos",
    "lenguaje": "python",
    "vistas": 456756,
    "nivel": "intermedio"
}
```

### Actualizar parcialmente un curso (PATCH)

```http
PATCH http://localhost:3000/api/cursos/programacion/2
Content-Type: application/json

{
    "titulo": "Python intermedio con proyectos",
    "vistas": 456756
}
```

### Eliminar un curso

```http
DELETE http://localhost:3000/api/cursos/programacion/1
```

## 📦 Modelo de Datos

### Curso de Programación

```json
{
    "id": 1,
    "titulo": "Aprende Python",
    "lenguaje": "python",
    "vistas": 15000,
    "nivel": "basico"
}
```

### Curso de Matemáticas

```json
{
    "id": 1,
    "titulo": "Aprende Calculo",
    "tema": "calculo",
    "vistas": 12427,
    "nivel": "basico"
}
```

## 📄 Licencia

ISC
