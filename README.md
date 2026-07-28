# SARQ Soluciones — Brief de Proyecto Web

Informe de referencia para el desarrollo del sitio web de **SARQ Soluciones**. Este documento resume el contexto, el branding y los requisitos visuales del proyecto. Úsalo como guía junto con la plantilla base y el prompt inicial ya entregados.

---

## 1. Contexto del proyecto

- **Tipo de proyecto:** Landing page.
- **Base de trabajo:** ya cuentas con una **plantilla base en HTML**. Todo el desarrollo parte de esa plantilla; no se debe reestructurar ni reordenar sus secciones.
- **Prompt inicial:** ya se te entregó por separado un prompt para adaptar la plantilla base al negocio. Este README complementa ese prompt, no lo reemplaza.
- **Estructura de secciones:** se mantiene la de la plantilla base. Este documento no define ni sugiere secciones nuevas.

---

## 2. Información del negocio

La única fuente de información del negocio en este proyecto es la red social oficial:

📘 **Facebook:** [https://www.facebook.com/sarqsoluciones](https://www.facebook.com/sarqsoluciones)

En la carpeta `imagenes/` **solo hay un archivo: el logo del negocio** (`logo.jpeg`). No hay fotos de trabajos, documentos, ni datos de contacto en esa carpeta. Por lo tanto:

> **Toda la información de contenido del sitio (nombre comercial, descripción del negocio, teléfono, dirección/zona de cobertura, servicios ofrecidos, horarios de atención, fotos de trabajos realizados, etc.) debe extraerse directamente de la página de Facebook indicada arriba.**

Instrucciones puntuales para esta extracción:

1. Entra a la página de Facebook con sesión iniciada (el acceso sin login está restringido y no muestra el contenido completo).
2. Revisa la sección **"Info" / "Acerca de"** para obtener: nombre del negocio, categoría/rubro, descripción, dirección, teléfono, correo y horario de atención (si está publicado).
3. Revisa las **publicaciones y álbumes de fotos** para identificar servicios, trabajos realizados y cualquier foto usable como contenido visual del sitio (además del logo).
4. Si algún dato (teléfono, dirección, horario, etc.) no aparece publicado en Facebook, **no lo inventes**: déjalo como campo pendiente y consúltalo con el cliente antes de publicar el sitio.
5. Verifica que el nombre comercial y los textos del sitio coincidan exactamente con lo publicado en la página (evita variaciones o traducciones libres).

---

## 3. Branding (a partir del logo)

Base: `imagenes/logo.jpeg`. Paleta extraída por muestreo de color directo sobre el logo (no son colores inventados).

### Paleta de colores

| Rol | Color | HEX |
|---|---|---|
| Primario — Azul Acero | ![#68858E](https://via.placeholder.com/15/68858E/68858E.png) | `#68858E` |
| Primario oscuro (texto, hover, headers) | ![#334247](https://via.placeholder.com/15/334247/334247.png) | `#334247` |
| Primario profundo (fondos oscuros / footer) | ![#1E2729](https://via.placeholder.com/15/1E2729/1E2729.png) | `#1E2729` |
| Primario claro (fondos suaves / secciones alternas) | ![#E9ECEC](https://via.placeholder.com/15/E9ECEC/E9ECEC.png) | `#E9ECEC` |
| Secundario — Madera/Terracota | ![#826547](https://via.placeholder.com/15/826547/826547.png) | `#826547` |
| Secundario oscuro | ![#5D4831](https://via.placeholder.com/15/5D4831/5D4831.png) | `#5D4831` |
| Neutro — Concreto | ![#9F9B8F](https://via.placeholder.com/15/9F9B8F/9F9B8F.png) | `#9F9B8F` |
| Fondo neutro claro | ![#F5F5F4](https://via.placeholder.com/15/F5F5F4/F5F5F4.png) | `#F5F5F4` |
| Texto principal (ink) | ![#1C2021](https://via.placeholder.com/15/1C2021/1C2021.png) | `#1C2021` |
| Blanco | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) | `#FFFFFF` |

- **Azul Acero** (`#68858E`) es el color de marca dominante: es el tono de las letras "SARQ" en el logo. Úsalo como color primario en botones, enlaces, íconos y acentos.
- **Madera/Terracota** (`#826547`) proviene de los elementos de madera del ícono del logo. Úsalo como acento secundario (detalles, hover alternativo, íconos de apoyo), no como color dominante.
- **Concreto** (`#9F9B8F`) proviene del cilindro/columna del ícono. Úsalo como neutro de apoyo (líneas, fondos sutiles, separadores).
- El fondo del sitio debe ser predominantemente blanco/neutro claro, dejando que el Azul Acero y el Terracota trabajen como acentos, replicando la lógica del logo (fondo blanco, ícono como acento de color).

### Tipografía sugerida

- El logo usa una tipografía de palo seco (sans-serif), gruesa y de alto impacto en "SARQ", con "Soluciones" en un peso más liviano como subtítulo. Replica esa jerarquía en el sitio:
  - **Títulos / marca:** una sans-serif geométrica o grotesca de peso bold/black (ej. Poppins, Montserrat o Inter en pesos 700–900).
  - **Textos y cuerpo:** la misma familia tipográfica o una sans-serif compañera en pesos 400–500, para mantener consistencia con el estilo del logo (ej. Inter o Montserrat en peso regular).
- Evita combinar con tipografías serif o manuscritas: no corresponden a la identidad visual del logo (industrial, técnica, corporativa).

### Identidad visual

- El ícono del logo (columna, viga de madera, anillo y pared de ladrillo) remite a construcción/arquitectura/ingeniería de soluciones. La identidad visual del sitio debe transmitir solidez, precisión técnica y profesionalismo, evitando elementos decorativos que no encajen con ese rubro.
- Mantén el logo como elemento de marca reconocible: mismos colores de marca en todo el sitio, mismo tratamiento tipográfico del nombre "SARQ Soluciones" en el header/hero.

---

## 4. Estilo visual obligatorio

El sitio debe manejar en todo momento:

- Estilo **premium, enterprise y corporativo de marca**.
- Nivel **big tech**: elegante y a la vez **minimalista**.
- Uso consistente de la paleta y tipografía definidas en la sección 3 en todas las secciones de la plantilla.

---

## 5. Efectos y animaciones requeridos

El sitio debe incluir:

- **Efectos visuales y animaciones de scroll** (elementos que aparecen/se transforman al hacer scroll).
- **Pantalla de carga (preloader)** al ingresar al sitio, compuesta por un **spinner + el logo del negocio**.
- **Animación en el título del hero**, con efectos tipográficos como:
  - Efecto máquina de escribir (typewriter), y/o
  - Cambio de color en las letras, y/o
  - Otros efectos tipográficos equivalentes que refuercen la sensación premium/big tech.

---

## 6. Instrucciones sobre assets

- El logo (`imagenes/logo.jpeg`) **viene con fondo**. Antes de usarlo en el sitio, **remueve el fondo** para obtener una versión con fondo transparente (PNG/SVG), especialmente para su uso en el header, favicon y preloader.
- El logo es el **único archivo visual disponible** en `imagenes/`. Cualquier otra imagen necesaria para el sitio (fotos de trabajos, equipo, instalaciones, etc.) debe obtenerse de la página de Facebook (ver sección 2) o solicitarse directamente al cliente si no está disponible ahí.
- No utilices imágenes de stock genéricas como reemplazo de contenido real sin antes intentar obtenerlas de Facebook o del cliente.

---

## 7. Nota para el desarrollador

Puedes **iterar sobre el proyecto usando Claude Code**, dándole instrucciones las veces que sea necesario hasta lograr el resultado deseado. No es necesario resolver todo en una sola pasada: ajusta, corrige y refina con Claude Code hasta que el sitio cumpla con lo especificado en este documento.

---

## 8. Checklist de trabajo

- [ ] Extraer de Facebook ([facebook.com/sarqsoluciones](https://www.facebook.com/sarqsoluciones)): nombre comercial, descripción, teléfono, dirección/zona, servicios y horarios.
- [ ] Recopilar fotos usables (trabajos, instalaciones, etc.) desde Facebook o solicitarlas al cliente si faltan.
- [ ] Remover el fondo del logo (`logo.jpeg`) y generar versión con fondo transparente.
- [ ] Aplicar la paleta de colores extraída del logo (sección 3) en toda la plantilla base.
- [ ] Aplicar la tipografía sugerida (sección 3) de forma consistente.
- [ ] Adaptar el contenido de la plantilla base al negocio usando el prompt inicial ya entregado, sin modificar su estructura de secciones.
- [ ] Implementar estilo visual premium/enterprise/big tech en todo el sitio.
- [ ] Implementar animaciones y efectos de scroll.
- [ ] Implementar pantalla de carga (preloader) con spinner + logo del negocio.
- [ ] Implementar animación tipográfica en el título del hero (typewriter, cambio de color u otro efecto equivalente).
- [ ] Revisar que todos los datos de contacto publicados coincidan exactamente con los de Facebook.
- [ ] Iterar con Claude Code hasta validar el resultado final.
