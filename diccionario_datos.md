# Diccionario de Datos - Catálogo de Servicios de la Alcaldía de Pereira

## Introducción

Este documento describe el diccionario de datos para el sistema de catálogo de servicios de la Alcaldía de Pereira, basado en los modelos del proyecto de registro canino. El sistema incluye módulos para registro de usuarios, caninos, certificados, novedades y otros servicios municipales.

## Tablas y Campos

### 1. users

**Descripción**: Tabla de usuarios del sistema. Gestiona la autenticación y roles de usuarios.

| Campo             | Tipo            | Descripción                     | Restricciones               | Valores Posibles             |
| ----------------- | --------------- | ------------------------------- | --------------------------- | ---------------------------- |
| id                | bigint unsigned | Identificador único del usuario | PRIMARY KEY, AUTO_INCREMENT | -                            |
| name              | varchar(255)    | Nombre de usuario               | NOT NULL                    | -                            |
| email             | varchar(255)    | Correo electrónico del usuario  | UNIQUE, NOT NULL            | -                            |
| estado            | varchar(255)    | Estado del usuario              | NOT NULL                    | activo, inactivo, suspendido |
| password          | varchar(255)    | Contraseña encriptada           | NOT NULL                    | -                            |
| email_verified_at | timestamp       | Fecha de verificación del email | NULL                        | -                            |
| remember_token    | varchar(100)    | Token para recordar sesión      | NULL                        | -                            |
| created_at        | timestamp       | Fecha de creación               | NULL                        | -                            |
| updated_at        | timestamp       | Fecha de actualización          | NULL                        | -                            |

### 2. informacion_usuario

**Descripción**: Información adicional de los usuarios del sistema.

| Campo            | Tipo            | Descripción                    | Restricciones                     | Valores Posibles |
| ---------------- | --------------- | ------------------------------ | --------------------------------- | ---------------- |
| id               | bigint unsigned | Identificador único            | PRIMARY KEY, AUTO_INCREMENT       | -                |
| user_id          | bigint unsigned | Referencia al usuario          | NOT NULL, FOREIGN KEY -> users.id | -                |
| nombre_completo  | varchar(255)    | Nombre completo del usuario    | NOT NULL                          | -                |
| tipo_documento   | varchar(255)    | Tipo de documento de identidad | NOT NULL                          | CC, CE, TI, PAS  |
| numero_documento | varchar(255)    | Número de documento            | NOT NULL, UNIQUE                  | -                |
| direccion        | varchar(255)    | Dirección de residencia        | NOT NULL                          | -                |
| zona             | varchar(255)    | Zona de residencia             | NOT NULL                          | -                |
| comuna           | varchar(255)    | Comuna de residencia           | NOT NULL                          | -                |
| edad             | int             | Edad del usuario               | NOT NULL                          | -                |
| celular          | varchar(255)    | Número de celular              | NOT NULL                          | -                |
| telefono         | varchar(255)    | Número de teléfono fijo        | NULL                              | -                |
| created_at       | timestamp       | Fecha de creación              | NULL                              | -                |
| updated_at       | timestamp       | Fecha de actualización         | NULL                              | -                |

### 3. caninos

**Descripción**: Registro de caninos (perros) en el sistema municipal.

| Campo                | Tipo            | Descripción                             | Restricciones                     | Valores Posibles            |
| -------------------- | --------------- | --------------------------------------- | --------------------------------- | --------------------------- |
| id                   | bigint unsigned | Identificador único del canino          | PRIMARY KEY, AUTO_INCREMENT       | -                           |
| user_id              | bigint unsigned | Propietario del canino                  | NOT NULL, FOREIGN KEY -> users.id | -                           |
| nombre               | varchar(255)    | Nombre del canino                       | NOT NULL                          | -                           |
| sexo                 | varchar(255)    | Sexo del canino                         | NOT NULL                          | macho, hembra               |
| fecha_nacimiento     | date            | Fecha de nacimiento                     | NULL                              | -                           |
| edad_canino          | int             | Edad aproximada en años                 | NULL                              | -                           |
| raza                 | varchar(255)    | Raza del canino                         | NOT NULL                          | -                           |
| caracteristicas      | text            | Características físicas                 | NULL                              | -                           |
| es_peligroso         | boolean         | Indica si el canino es peligroso        | NOT NULL                          | true, false                 |
| tiene_agresiones     | boolean         | Indica si tiene historial de agresiones | NOT NULL                          | true, false                 |
| entrenado_ataque     | boolean         | Entrenado para ataque                   | NOT NULL                          | true, false                 |
| entrenado_proteccion | boolean         | Entrenado para protección               | NOT NULL                          | true, false                 |
| esterilizado         | boolean         | Indica si está esterilizado             | NOT NULL                          | true, false                 |
| observaciones        | text            | Observaciones adicionales               | NULL                              | -                           |
| foto_url             | varchar(255)    | URL de la foto del canino               | NULL                              | -                           |
| vacunas              | text            | Información sobre vacunas               | NULL                              | -                           |
| poliza               | varchar(255)    | Número de póliza                        | NULL                              | -                           |
| vencimiento          | date            | Fecha de vencimiento                    | NULL                              | -                           |
| estado               | varchar(255)    | Estado del registro                     | NOT NULL                          | activo, inactivo, pendiente |
| motivo               | text            | Motivo de cambio de estado              | NULL                              | -                           |
| created_at           | timestamp       | Fecha de creación                       | NULL                              | -                           |
| updated_at           | timestamp       | Fecha de actualización                  | NULL                              | -                           |

### 4. certificados_caninos

**Descripción**: Certificados emitidos para caninos registrados.

| Campo             | Tipo            | Descripción                         | Restricciones                       | Valores Posibles           |
| ----------------- | --------------- | ----------------------------------- | ----------------------------------- | -------------------------- |
| id                | bigint unsigned | Identificador único del certificado | PRIMARY KEY, AUTO_INCREMENT         | -                          |
| canino_id         | bigint unsigned | Canino al que pertenece             | NOT NULL, FOREIGN KEY -> caninos.id | -                          |
| fecha_emision     | date            | Fecha de emisión del certificado    | NOT NULL                            | -                          |
| fecha_vencimiento | date            | Fecha de vencimiento                | NOT NULL                            | -                          |
| estado            | varchar(255)    | Estado del certificado              | NOT NULL                            | activo, expirado, revocado |
| created_at        | timestamp       | Fecha de creación                   | NULL                                | -                          |
| updated_at        | timestamp       | Fecha de actualización              | NULL                                | -                          |

### 5. delegado

**Descripción**: Información de delegados autorizados para emitir certificados.

| Campo      | Tipo            | Descripción                      | Restricciones               | Valores Posibles |
| ---------- | --------------- | -------------------------------- | --------------------------- | ---------------- |
| id         | bigint unsigned | Identificador único del delegado | PRIMARY KEY, AUTO_INCREMENT | -                |
| nombre     | varchar(255)    | Nombre completo del delegado     | NOT NULL                    | -                |
| cargo      | varchar(255)    | Cargo del delegado               | NOT NULL                    | -                |
| firma      | varchar(255)    | URL o path de la firma digital   | NULL                        | -                |
| estado     | varchar(255)    | Estado del delegado              | NOT NULL                    | activo, inactivo |
| created_at | timestamp       | Fecha de creación                | NULL                        | -                |
| updated_at | timestamp       | Fecha de actualización           | NULL                        | -                |

### 6. novedades

**Descripción**: Lista de tipos de novedades o reportes.

| Campo      | Tipo            | Descripción                       | Restricciones               | Valores Posibles |
| ---------- | --------------- | --------------------------------- | --------------------------- | ---------------- |
| id         | bigint unsigned | Identificador único de la novedad | PRIMARY KEY, AUTO_INCREMENT | -                |
| nombre     | varchar(255)    | Nombre del tipo de novedad        | NOT NULL                    | -                |
| estado     | varchar(255)    | Estado de la novedad              | NOT NULL                    | activo, inactivo |
| created_at | timestamp       | Fecha de creación                 | NULL                        | -                |
| updated_at | timestamp       | Fecha de actualización            | NULL                        | -                |

### 7. hash_novedades

**Descripción**: Tabla de relación muchos a muchos entre caninos y novedades.

| Campo      | Tipo            | Descripción             | Restricciones                         | Valores Posibles |
| ---------- | --------------- | ----------------------- | ------------------------------------- | ---------------- |
| id         | bigint unsigned | Identificador único     | PRIMARY KEY, AUTO_INCREMENT           | -                |
| canino_id  | bigint unsigned | Referencia al canino    | NOT NULL, FOREIGN KEY -> caninos.id   | -                |
| novedad_id | bigint unsigned | Referencia a la novedad | NOT NULL, FOREIGN KEY -> novedades.id | -                |
| created_at | timestamp       | Fecha de creación       | NULL                                  | -                |
| updated_at | timestamp       | Fecha de actualización  | NULL                                  | -                |

### 8. perdidos

**Descripción**: Registro de animales perdidos y encontrados reportados en el sistema. Articula con ciudadanos, policía, Hospivet, clínicas y fundaciones.

| Campo             | Tipo            | Descripción                                               | Restricciones                 | Valores Posibles                                                            |
| ----------------- | --------------- | --------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------- |
| id                | bigint unsigned | Identificador único del reporte                           | PRIMARY KEY, AUTO_INCREMENT   | -                                                                           |
| user_id           | bigint unsigned | Usuario autenticado que reporta (policía, hospivet, etc.) | FOREIGN KEY -> users.id, NULL | -                                                                           |
| nombre_reportante | varchar(255)    | Nombre completo de quien reporta                          | NOT NULL                      | -                                                                           |
| contacto          | varchar(255)    | Número de celular de contacto                             | NOT NULL                      | -                                                                           |
| email             | varchar(255)    | Correo electrónico de contacto                            | NULL                          | -                                                                           |
| nombre            | varchar(255)    | Nombre del animal (opcional)                              | NULL                          | -                                                                           |
| raza              | varchar(255)    | Raza o parecido del animal                                | NULL                          | -                                                                           |
| color             | varchar(255)    | Color del pelaje                                          | NULL                          | -                                                                           |
| tamano            | enum            | Tamaño del animal                                         | NULL                          | pequeno, mediano, grande                                                    |
| particularidades  | text            | Señas particulares o distintivas                          | NULL                          | -                                                                           |
| descripcion       | text            | Descripción general del animal                            | NOT NULL                      | -                                                                           |
| estado_encuentra  | enum            | Estado físico en que se encuentra el animal               | NULL                          | bueno, regular, malo, herido                                                |
| lugar             | varchar(255)    | Lugar donde se perdió o encontró                          | NOT NULL                      | -                                                                           |
| fecha_hora        | datetime        | Fecha y hora del incidente                                | NOT NULL                      | -                                                                           |
| tipo              | enum            | Tipo de reporte                                           | NOT NULL                      | Propietario (dueño busca mascota), Canino perdido (alguien encontró animal) |
| fotos             | json            | Array de nombres de archivos de fotos (máx 6)             | NULL                          | ["foto1.jpg", "foto2.jpg"]                                                  |
| autorizacion      | boolean         | Consentimiento para publicar datos personales             | NOT NULL, DEFAULT false       | true, false                                                                 |
| origen            | enum            | Entidad que realiza el reporte                            | NOT NULL, DEFAULT 'ciudadano' | ciudadano, policia, hospivet, clinica, fundacion                            |
| estado            | enum            | Estado del reporte                                        | NOT NULL, DEFAULT 'activo'    | activo, pendiente, aprobado, rechazado, resuelto, no_encontrado             |
| motivo_rechazo    | text            | Motivo si el reporte fue rechazado                        | NULL                          | -                                                                           |
| aprobado_por      | bigint unsigned | Usuario que aprobó/rechazó el reporte                     | FOREIGN KEY -> users.id, NULL | -                                                                           |
| created_at        | timestamp       | Fecha de creación del reporte                             | NULL                          | -                                                                           |
| updated_at        | timestamp       | Fecha de última actualización                             | NULL                          | -                                                                           |

### 9. page_views

**Descripción**: Contador de vistas de páginas del sistema.

| Campo | Tipo            | Descripción                | Restricciones               | Valores Posibles |
| ----- | --------------- | -------------------------- | --------------------------- | ---------------- |
| id    | bigint unsigned | Identificador único        | PRIMARY KEY, AUTO_INCREMENT | -                |
| page  | varchar(255)    | Nombre o ruta de la página | NOT NULL                    | -                |
| views | int             | Número de vistas           | NOT NULL, DEFAULT 0         | -                |

## Relaciones entre Tablas

-   **users** 1:N **informacion_usuario** (un usuario tiene una información adicional)
-   **users** 1:N **caninos** (un usuario puede tener múltiples caninos)
-   **caninos** 1:1 **certificados_caninos** (un canino puede tener un certificado)
-   **caninos** N:N **novedades** (vía hash_novedades - un canino puede tener múltiples novedades)

## Metadatos del Conjunto de Datos

**Fuente de datos**: Sistema de Registro Canino - Alcaldía de Pereira

**Nombre del conjunto de datos**: Registro de Caninos y Servicios Municipales de Control Animal (Alcaldía de Pereira)

**Terminología, identificadores**: En el registro se identifica como Id único autoincrementable en cada tabla (id). Se tiene user_id para identificar usuarios, canino_id para caninos, y referencias cruzadas como novedad_id, certificado_id. En informacion_usuario se cuenta con numero_documento como identificador único por persona. En caninos se tiene nombre y otros atributos para identificación.

**Documentación**: Incluye los datos generales de los propietarios que registran caninos, información detallada de cada canino (raza, edad, características), certificados emitidos, reportes de animales perdidos, novedades asociadas, y estadísticas de uso del sistema. Se cuenta con tabla de usuarios con registro único, tabla de información adicional de usuarios, tabla de caninos con estado y motivos, tabla de certificados con fechas de emisión y vencimiento, tabla de delegados autorizados, tabla de novedades y su relación con caninos.

**Descripción**: Datos de registro de propietarios y sus caninos para control municipal, incluyendo certificados de registro, reportes de animales perdidos, seguimiento de novedades y métricas de uso del portal web.

**Dependencia responsable**: Secretaria TIC. Área de Infraestructura Tecnológica.

**Idioma**: Español

**Frecuencia de actualización**: Sincronización en tiempo real (actualizaciones inmediatas al registrar o modificar datos)

**Última actualización**: N/A (depende del último registro en la base de datos)

**Fecha emisión**: 18 de noviembre de 2025

**Dato georreferenciado**: No

**Clasificación**: Pública (con restricciones de privacidad según normativas de datos personales)

**Flujo de información**: Interno, Apache, PHP-Laravel, MySQL, API REST

**Interoperabilidad**: API para integración con otros sistemas municipales (ej. consultas de certificados)

**Servicios soportados**: Registro y consulta de caninos, emisión de certificados, reportes de animales perdidos, control de asistencia y estadísticas de uso

**Aplicativo generador**: Sistema de Registro Canino Web (Laravel-based)

## Notas Adicionales

-   Los tipos de datos están basados en convenciones de Laravel y MySQL.
-   Las claves foráneas están definidas en los modelos de Eloquent.
-   Los campos `created_at` y `updated_at` son manejados automáticamente por Laravel.
-   Los valores posibles para campos enum-like son inferidos del contexto del negocio.
