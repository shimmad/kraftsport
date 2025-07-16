# 🚀 Sistema Web Full-Stack con Docker


-- Proyecto final: sistema de ejercicios para entrenar en casa--

Aplicación web para entrenamiento funcional que permite a los usuarios seguir desafíos mensuales (challenges), ver videos de ejercicios clasificados por tipo y ver productos de entrenamiento.

Los usuarios pueden registrarse y marcar los días que completaron un challenge. (funcion a agregar: que el perfil del usuario renderice en seguimientos ya creados, por ahora solo saluda)
Los administradores pueden crear desafíos, ejercicios, productos.
(faltan funciones como editar y eliminar en el FRONT.)

funciones:
/home --> descripcion gral, 
/challenges --> ver desafios
/chalengeEj --> accedes clickeando un desafio para ver su detalle, y si sos usuario podes marcar dia completado
/ejercicios --> galeria de video por tipo
/tienda --> ver productos
/perfil--> login de usaurio. segun rol (usuario o admin) renderiza de una forma espcifica 

-- entidades,

usuario: id, nombre, mail, contraseña, rol (admin,user)--> tiene muchos challenges, un admin puede gestionar todo

challenge: id, nombre, descripcion, fecha_inicio, fecha_fin --> tiene muchos ejercicios

Ejercicio: id, nombre, tipo (wp,ub,lb,fb,flex), video_url, descripcion --> un ejerrcicio puede estar en varios challenges

Seguimiento: id, usuario_id, challenge_id, dia, completado(bool) --> un usuario tien muchos seguimientos

Producto: id, nombre, descripcion, precio, img --> solo muestro productos.

Challengeejercicio: challenge id ejercicio id, dia, posicion --> seria el detalle de cada challenge

compra: prod id, usuario id, fecha, cant, precio total (sin uso)

# Proyecto Backend y Frontend de Tienda & Challenges

## Descripción

El backend usa el modelo MVC. tengo entidades js, controladores, que hablan con los modelos de persistencia. Uso middelware de validacion para la creacion o actualizacion de objetos. en los modelos de sequelize defino las relaciones de las tablas, de como se escriben. Uso migraciones para crear tablas enla base postgeree. uso seeders para datos de prueba.

en el frontend hay componentes factorizados para las plantillas de paginas, servicios q usan fetch para interactar con el backend, y diseño.
son 5 paginas principales mas 1 de detalle de deesafios, y 1 que renderiza segun usuario. uso cards y botones interactivos. uso formularios.
tiene logica de inicio de sesion con JWT:
usuarios creados con seeders:
jime@example.com --> admin
jime123

Pablo@example.com -->user (puede tener seguimientos)
pablo123

sigo trabajando en su correcto funcionamiento, y en cargar el minimo de datos necesarios para la visualizcion de las capacidades y funciones del programa. quedan algunas funciones a mejorar e implementar a futuro (todas las opeaciones crud) y mejorar el estilo visual para mejores transiciones.
---

# Endpoints principales
### Auth

- **POST** `/api/auth/login`

### Productos (Tienda)

- **GET** `/api/productos`  
  Lista todos los productos.

- **POST** `/api/productos`  
  Crea un nuevo producto (solo admin).

### Ejercicios

- **GET** `/api/ejercicios`  

- **POST** `/api/ejercicios`  
  Crea un nuevo ejercicio (solo admin).

### Challenges

- **GET** `/api/challenges/:id`  
  Trae info de un challenge específico.

- **GET** `/api/challenges/:id/dias`  
  Trae los días y videos de un challenge.

- **GET** `/api/challenges/:id/seguimiento/:userId`  
  Trae el seguimiento (progreso) de un usuario.

- **POST** `/api/challenges/:id/completar`  
  Marca un día como completo.

- **POST** `/api/challenges/:id/descompletar`  
  Desmarca un día como completo.




## TODO

.
- Agregar tests automáticos.
- Mejorar manejo de errores.
- Completar el CRUD de productos y ejercicios para admin.
- Mejorar documentación interna de las rutas.
- Deberia mejorar el uso de carpetas que tuve






































## 📋 Componentes Principales

### 🎯 Arquitectura General
```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Nginx     │    │   React     │    │   Express   │
│  (Proxy)    │◄──►│ (Frontend)  │◄──►│  (Backend)  │
│   :80       │    │   :3000     │    │   :3001     │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
                   ┌─────────────┐    ┌─────────────┐
                   │    Redis    │    │ PostgreSQL  │
                   │  (Cache)    │    │    (DB)     │
                   │   :6379     │    │   :5432     │
                   └─────────────┘    └─────────────┘
```

### 🔧 Servicios del Sistema

| Servicio | Tecnología | Puerto | Función |
|----------|------------|--------|---------|
| **Frontend** | React 18 | 3000 | Interfaz de usuario |
| **Backend** | Express + Sequelize | 3001 | API REST |
| **Database** | PostgreSQL 15 | 5432 | Base de datos principal |
| **Cache** | Redis 7 | 6379 | Cache y sesiones |
| **Proxy** | Nginx | 80 | Reverse proxy |
| **pgAdmin** | pgAdmin 4 | 5050 | Administración de BD |

---

## 🏗️ Construcción Inicial

### 1️⃣ Preparación del Entorno
```bash
# Crear estructura de proyecto
./setup-directories.sh mi-proyecto

# Navegar al proyecto
cd mi-proyecto

# Crear archivos de configuración
cp .env.example .env
```

### 2️⃣ Configuración de Variables
```bash
# Editar .env con tus valores
nano .env
```

Contenido del archivo `.env` para desarrollo (opcional, por si surge algún problema):
```env
# ===========================================
# BASE DE DATOS POSTGRESQL
# ===========================================
POSTGRES_DB=app_database
POSTGRES_USER=app_user
POSTGRES_PASSWORD=app_password

# ===========================================
# BACKEND (EXPRESS)
# ===========================================
NODE_ENV=development
PORT=3001

# Configuración de base de datos para Sequelize
DB_HOST=database
DB_PORT=5432
DB_NAME=app_database
DB_USER=app_user
DB_PASSWORD=app_password

# JWT para autenticación
JWT_SECRET=mi_jwt_secret_super_seguro_para_desarrollo_2024

# CORS - Permitir requests desde el frontend
CORS_ORIGIN=http://localhost:3000

# ===========================================
# FRONTEND (REACT)
# ===========================================
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_ENV=development

# Hot reload optimizado para Docker
CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true
FAST_REFRESH=true

# WebSocket para hot reload
WDS_SOCKET_HOST=localhost
WDS_SOCKET_PORT=3000
WDS_SOCKET_PATH=/ws

# ESLint en desarrollo
ESLINT_NO_DEV_ERRORS=true
GENERATE_SOURCEMAP=true

# ===========================================
# REDIS
# ===========================================
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_URL=redis://redis:6379

# ===========================================
# PGADMIN 4
# ===========================================
PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin123
PGADMIN_CONFIG_SERVER_MODE=False
PGADMIN_CONFIG_MASTER_PASSWORD_REQUIRED=False

# ===========================================
# CONFIGURACIÓN DE DESARROLLO
# ===========================================
DEBUG=true
LOG_LEVEL=debug
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10MB

# Email para desarrollo (Mailtrap)
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=tu_usuario_mailtrap
EMAIL_PASS=tu_password_mailtrap
EMAIL_FROM=noreply@tuapp.com

# ===========================================
# SEGURIDAD (DESARROLLO)
# ===========================================
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
SESSION_SECRET=mi_session_secret_para_desarrollo
COOKIE_SECURE=false
COOKIE_HTTP_ONLY=true
COOKIE_SAME_SITE=lax
```

### 3️⃣ Primera Construcción
```bash
# Construir todas las imágenes
docker-compose build

# Inicializar base de datos y servicios
docker-compose up -d
```

---

## 🚀 Ejecución del Sistema

### Comandos Principales
```bash
# Iniciar todos los servicios
docker-compose up

# Iniciar en background
docker-compose up -d

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend

# Detener servicios
docker-compose down

# Detener y limpiar volúmenes
docker-compose down -v
```

### URLs de Acceso
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001/api
- **Health Check:** http://localhost:3001/health
- **Nginx Proxy:** http://localhost
- **pgAdmin 4:** http://localhost:5050
- **Base de datos:** localhost:5432

---

## 🔄 Desarrollo con Hot Reload

### Funcionamiento Automático
- ✅ **React**: Cambios en `.js`, `.jsx`, `.css` → Recarga automática
- ✅ **Express**: Cambios en `.js` → Reinicio con nodemon
- ✅ **Base de datos**: Persistencia con volúmenes Docker

### Workflow de Desarrollo
1. Modifica archivos en `frontend/src/` o `backend/`
2. Los cambios se detectan automáticamente
3. El servicio correspondiente se actualiza
4. Verifica cambios en el navegador

---

## ⚠️ Problemas Comunes y Soluciones

### 🔴 Error: "Cannot find module './models'"
**Problema:** Faltan archivos básicos del backend
```bash
# Solución
mkdir -p backend/models backend/routes
# Crear archivos básicos con los scripts proporcionados
```

### 🔴 Error: "Could not find index.html"
**Problema:** React no encuentra archivos básicos
```bash
# Solución
mkdir -p frontend/public frontend/src
# Crear archivos básicos de React
```

### 🔴 Error: "psql: Is a directory"
**Problema:** `init.sql` es carpeta en lugar de archivo
```bash
# Solución
rm -rf database/init.sql
touch database/init.sql
# Agregar contenido SQL al archivo
```

### 🔴 Error de credenciales Docker Desktop
**Problema:** `error getting credentials - err: exec: "docker-credential-desktop.exe": executable file not found`
```bash
# Solución: Reset de configuración Docker
# Hacer backup de la configuración actual
cp ~/.docker/config.json ~/.docker/config.json.backup

# Crear configuración limpia
echo '{}' > ~/.docker/config.json

# Intentar build nuevamente
docker compose build
```

### 🔴 Puerto ya en uso
**Problema:** Servicios corriendo en puertos ocupados
```bash
# Verificar puertos ocupados
netstat -4 -tln | grep :3000

# Solución: Cambiar puertos en docker-compose.yml
ports:
  - "3002:3000"  # Cambia puerto externo
```

### 🔴 Error de permisos en Docker
**Problema:** Permisos de archivos en contenedores
```bash
# Solución
sudo chown -R $USER:$USER .
chmod -R 755 .
```

### 🔴 Hot reload no funciona
**Problema:** Cambios no se detectan automáticamente
```bash
# Verificar variables de entorno
CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true

# Reiniciar servicio específico
docker-compose restart frontend
```

### 🔴 Base de datos no conecta
**Problema:** Backend no puede conectar a PostgreSQL
```bash
# Verificar salud de la base de datos
docker-compose ps database

# Ver logs de PostgreSQL
docker-compose logs database

# Reiniciar con volúmenes limpios
docker-compose down -v
docker-compose up --build
```

---

## 🛠️ Comandos de Mantenimiento

### Limpieza del Sistema
```bash
# Limpiar contenedores parados
docker container prune

# Limpiar imágenes sin uso
docker image prune

# Limpiar todo el sistema Docker
docker system prune -a

# Reconstruir desde cero
docker-compose down -v --rmi all
docker-compose build --no-cache
docker-compose up
```

### Base de Datos y Administración
```bash
# Ejecutar migraciones
docker-compose exec backend npm run migrate

# Ejecutar seeders
docker-compose exec backend npm run seed

# Acceder a PostgreSQL via CLI
docker-compose exec database psql -U app_user -d app_database

# Acceder a pgAdmin 4 (Interfaz Web)
# URL: http://localhost:5050
# Email: admin@example.com
# Password: admin123

# Backup de base de datos
docker-compose exec database pg_dump -U app_user app_database > backup.sql

# Restaurar backup
docker-compose exec -T database psql -U app_user -d app_database < backup.sql
```

### Backend - Migraciones y Sequelize
```bash
# Acceder al shell del contenedor backend
docker-compose exec backend sh

# Una vez dentro del contenedor backend:
npx sequelize-cli migration:generate --name create-users
npx sequelize-cli migration:generate --name add-email-to-users
npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli seed:generate --name demo-users
npx sequelize-cli db:seed:all

# Ver estado de migraciones
npx sequelize-cli db:migrate:status

# Salir del contenedor
exit
```

### Frontend - Comandos de Desarrollo
```bash
# Acceder al shell del contenedor frontend
docker-compose exec frontend sh

# Una vez dentro del contenedor:
npm install axios react-router-dom
npm run build
npm run test
npm run eject

# Linting y formateo
npm run lint (si está configurado)

# Salir del contenedor
exit
```

### Debugging
```bash
# Acceder al contenedor del backend
docker-compose exec backend sh

# Acceder al contenedor del frontend
docker-compose exec frontend sh

# Ver variables de entorno
docker-compose exec backend env

# Monitorear recursos
docker stats
```

---

## 📈 Escalabilidad y Producción

### Optimizaciones Recomendadas
- **Multi-stage builds** para imágenes más pequeñas
- **Health checks** más robustos
- **Límites de recursos** en contenedores
- **SSL/TLS** con Let's Encrypt
- **Load balancing** con múltiples instancias

### Variables de Entorno de Producción
```env
NODE_ENV=production
POSTGRES_PASSWORD=contraseña_super_segura
JWT_SECRET=jwt_secret_muy_complejo
```

---

## 📚 Estructura de Archivos Importantes

```
proyecto/
├── docker-compose.yml          # Orquestación de servicios
├── .env                        # Variables de entorno
├── .gitignore                  # Archivos a ignorar en Git
│
├── frontend/
│   ├── Dockerfile.dev          # Imagen Docker para desarrollo
│   ├── package.json            # Dependencies de React
│   └── src/                    # Código fuente React
│
├── backend/
│   ├── Dockerfile.dev          # Imagen Docker para desarrollo
│   ├── package.json            # Dependencies de Express
│   ├── server.js               # Servidor principal
│   ├── models/                 # Modelos de Sequelize
│   └── routes/                 # Rutas del API
│
├── database/
│   └── init.sql                # Script de inicialización
│
└── nginx/
    └── nginx.conf              # Configuración del proxy
```

### Debugging
```bash
# Acceder al contenedor del backend
docker-compose exec backend sh

# Acceder al contenedor del frontend
docker-compose exec frontend sh

# Ver variables de entorno
docker-compose exec backend env
docker-compose exec frontend env

# Monitorear recursos
docker stats

# Ver logs en tiempo real de todos los servicios
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f database
docker-compose logs -f pgadmin
```

---

## 📈 Escalabilidad y Producción

### Optimizaciones Recomendadas
- **Multi-stage builds** para imágenes más pequeñas
- **Health checks** más robustos para todos los servicios
- **Límites de recursos** en contenedores (CPU, memoria)
- **SSL/TLS** con certificados Let's Encrypt
- **Load balancing** con múltiples instancias del backend
- **Separación de entornos** (desarrollo, staging, producción)

### Consideraciones de Seguridad
- **Cambiar contraseñas por defecto** antes de producción
- **Usar HTTPS** para todas las comunicaciones
- **Configurar firewall** para limitar acceso a puertos
- **Actualizar imágenes** regularmente por seguridad
- **Usar secrets de Docker** para datos sensibles

---

## 📚 Estructura de Archivos Importantes

```
proyecto/
├── docker-compose.yml          # Orquestación de servicios
├── .env                        # Variables de entorno
├── .env.example               # Plantilla de variables
├── .gitignore                 # Archivos a ignorar en Git
├── README.md                  # Documentación del proyecto
│
├── frontend/
│   ├── Dockerfile.dev         # Imagen Docker para desarrollo
│   ├── package.json           # Dependencies de React
│   ├── public/
│   │   ├── index.html         # Página HTML principal
│   │   └── manifest.json      # Configuración PWA
│   └── src/
│       ├── App.js             # Componente principal
│       ├── index.js           # Punto de entrada
│       ├── components/        # Componentes reutilizables
│       ├── pages/             # Páginas de la aplicación
│       ├── services/          # Servicios API
│       └── utils/             # Utilidades
│
├── backend/
│   ├── Dockerfile.dev         # Imagen Docker para desarrollo
│   ├── package.json           # Dependencies de Express
│   ├── server.js              # Servidor principal
│   ├── config/
│   │   └── database.js        # Configuración de Sequelize
│   ├── models/
│   │   └── index.js           # Modelos de Sequelize
│   ├── controllers/           # Lógica de negocio
│   ├── routes/                # Rutas del API
│   │   └── index.js           # Rutas principales
│   ├── middleware/            # Middlewares personalizados
│   ├── migrations/            # Migraciones de BD
│   └── seeders/               # Datos de prueba
│
├── database/
│   └── init.sql               # Script de inicialización
│
├── nginx/
│   └── nginx.conf             # Configuración del proxy
│
├── pgadmin/
│   ├── servers.json           # Configuración de servidores
│   └── pgpass                 # Credenciales de BD
│
└── scripts/
    └── setup-directories.sh   # Script de inicialización
```

---

## 🎯 Tips y Mejores Prácticas

### Desarrollo Eficiente
- **Usa hot reload** para ver cambios instantáneamente
- **Consulta logs** regularmente para detectar errores temprano
- **Usa pgAdmin** para explorar y modificar datos visualmente
- **Ejecuta migraciones** cada vez que cambies modelos
- **Haz backups** antes de cambios importantes en BD

### Gestión de Dependencias
- **Actualiza package.json** cuando agregues nuevas dependencias
- **Reconstruye imágenes** después de cambios en dependencies
- **Usa volúmenes** para node_modules para mejorar rendimiento
- **Sincroniza versiones** entre desarrollo y producción

### Resolución de Problemas
1. **Verifica logs** primero: `docker-compose logs -f`
2. **Comprueba estado** de contenedores: `docker-compose ps`
3. **Reinicia servicios** específicos si es necesario
4. **Limpia volúmenes** si hay problemas de datos
5. **Reconstruye imágenes** como último recurso

### Comandos de Emergencia
```bash
# Reiniciar todo el sistema
docker-compose restart

# Limpiar y empezar desde cero
docker-compose down -v --rmi all
docker-compose build --no-cache
docker-compose up

# Liberar espacio en Docker
docker system prune -a --volumes
```

---

## 🆘 Soporte y Recursos

### Documentación Oficial
- **Docker Compose**: https://docs.docker.com/compose/
- **React**: https://react.dev/
- **Express**: https://expressjs.com/
- **Sequelize**: https://sequelize.org/
- **PostgreSQL**: https://www.postgresql.org/docs/
- **pgAdmin**: https://www.pgadmin.org/docs/

### Comunidades y Ayuda
- **Stack Overflow** para problemas específicos
- **GitHub Issues** de cada proyecto
- **Discord/Slack** de las comunidades
- **Reddit** r/docker, r/reactjs, r/node

¡Sistema completo y listo para desarrollo! 🚀