# Registro Canino - Opciones de Estilo para BusquedaPerdidos.vue

## Opción 1 (Azul)
Estilo azul institucional. Hero con gradiente `from-blue-600 to-blue-500`, botones con bordes `border-blue-300`, badges en `bg-blue-500`, tags en `bg-blue-600` para REPORTADO, empty state en `border-blue-200`.

## Opción 2 (Alcaldía de Pereira)
Estilo institucional con colores de la alcaldía.
- **primary**: `#C20E1A` (Títulos, botones estado HOVER)
- **secondary**: `#E20613` (Llamados de acción, botones, texto seleccionado)
- Hero: `from-primary to-secondary`
- Botones de acción: bordes `primary/20` y `secondary/20`, fondos `primary/10` y `secondary/10`
- Tags REPORTADO: `bg-secondary`
- Botones buscar: gradiente `from-primary to-secondary`
- Empty state: `border-primary/20`, fondo `from-primary/5`
- Filtros: focus `ring-primary/30`, `border-primary`
- Chips activos: `bg-primary/10 text-primary`

## Opción 3 (Moderno con desvanecido vistoso)
Más moderno y dinámico, conservando la institucionalidad.
- **vibrante**: `#ED1C24` (rojo vivo - títulos, botones, acentos)
- **dorado**: `#FFBA00` (dorado/amarillo - acentos, botones secundarios)
- Hero: `from-vibrante to-dorado` (gradiente rojo-dorado vibrante)
- Tarjetas de acción: bordes `vibrante/20` / `dorado/20`, fondos `vibrante/5` / `dorado/5`
- Sidebar header: `bg-gradient-to-r from-gray-50 to-white`
- Inputs/selects: `bg-white/50` con `border-vibrante/50` y focus `ring-vibrante/20`
- Tarjetas de resultados: `border-gray-100` con overlay gradiente `from-vibrante/5 to-transparent` en la foto
- Botones buscar y detalle: gradiente `from-vibrante to-dorado` con hover `from-vibrante/90 hover:to-dorado/90`
- Empty state: `border-vibrante/10`, fondo `from-vibrante/5 via-white to-white`
- Chips activos: `bg-vibrante/10 text-vibrante`
- Tags PERDIDO/REPORTADO: sin cambios (se mantienen originales)