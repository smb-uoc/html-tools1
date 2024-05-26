# Actividad 1: Uso del Inspector de Firefox

## Documentación Revisada

- [Open the Inspector](https://firefox-source-docs.mozilla.org/devtools-user/inspector/open.html)
- [UI Tour](https://firefox-source-docs.mozilla.org/devtools-user/inspector/ui_tour.html)
- [Examine and Edit HTML](https://firefox-source-docs.mozilla.org/devtools-user/inspector/examine_and_edit_html.html)

## Actividades y Respuestas

### Selecciona un elemento HTML e inspecciónalo

Seleccioné un elemento del menú izquierdo de la página de documentación del inspector de Firefox.

### ¿Qué podemos ver en el panel de HTML?

En el panel de HTML podemos ver la estructura completa del documento HTML de la página. Esto incluye todas las etiquetas HTML y su contenido.

### ¿Qué representa cada línea?

Cada línea en el panel de HTML representa una etiqueta HTML y su contenido. Las líneas incluyen etiquetas de apertura y cierre, atributos de las etiquetas y el contenido textual de las mismas.

### ¿Qué nos muestra la indentación?

La indentación muestra la jerarquía y anidación de los elementos HTML. Los elementos que están más anidados dentro de otros elementos se muestran con una mayor indentación, lo que ayuda a visualizar la estructura del DOM (Document Object Model).

### ¿Para qué sirven las flechas al lado de algunas líneas?

Las flechas al lado de algunas líneas indican que esos elementos contienen elementos hijos. Hacer clic en una flecha expande o colapsa el contenido de esos elementos, permitiendo ver u ocultar los elementos hijos.

### ¿Qué muestra la barra inferior?

La barra inferior del Inspector de Firefox muestra información detallada sobre el elemento seleccionado, incluyendo sus dimensiones (ancho y alto), la posición en la página, márgenes, bordes, padding y más. También puede mostrar la lista de clases aplicadas al elemento y sus estilos CSS.

### Opciones al hacer clic con el botón derecho sobre un elemento en el inspector

Al hacer clic con el botón derecho sobre un elemento en el inspector, aparecen varias opciones, incluyendo:

- **Edit as HTML**: Permite editar el HTML del elemento seleccionado.
- **Copy**: Permite copiar el HTML, la ruta del CSS, la ruta XPath, entre otros.
- **Delete Node**: Elimina el elemento seleccionado del DOM.
- **Hide Element**: Oculta el elemento en la página.
- **Add Attribute**: Permite agregar un nuevo atributo al elemento.
- **Scroll into View**: Desplaza la página para que el elemento seleccionado esté a la vista.
- **Break on...**: Permite establecer puntos de interrupción en eventos como modificaciones, eliminaciones o adiciones de hijos.

### Editar el contenido de un elemento y activar un estado

#### Editar como HTML

Utilicé la opción "Edit as HTML" para cambiar el texto de un elemento del menú izquierdo.

- **Original**: `<a href="/devtools-user/inspector/open.html">Open the Inspector</a>`
- **Modificado**: `<a href="/devtools-user/inspector/open.html">Start the Inspector</a>`

#### Activar un estado (hover)

Activé el estado `:hover` en un enlace para ver cómo afecta a la renderización. Esto se puede hacer seleccionando el elemento, haciendo clic derecho, seleccionando "Force State" y luego eligiendo "Hover".

- **Efecto**: El enlace cambió de color, mostrando cómo se vería cuando un usuario pasa el cursor sobre él.

## Conclusión

El Inspector de Firefox es una herramienta poderosa para examinar y modificar el HTML y CSS de una página web. Permite a los desarrolladores ver la estructura del DOM, editar elementos en tiempo real y probar diferentes estados de estilo, mejorando así el proceso de desarrollo y depuración de sitios web.
