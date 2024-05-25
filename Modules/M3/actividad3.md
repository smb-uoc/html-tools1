# Actividad 3: Identificación de Formatos de Imagen en una Página Web

## Observación Inicial

Primero, seleccioné una página web con diversas imágenes. Al observar las imágenes, intenté adivinar los formatos basándome en las siguientes características:

1. **Fotografías de alta calidad** (paisajes, retratos, etc.): Supuse que estarían en formato **JPG** debido a la popularidad de este formato para fotografías.
2. **Íconos y gráficos con transparencia**: Supuse que estarían en formato **PNG** debido a su soporte para transparencia.
3. **Animaciones**: Supuse que estarían en formato **GIF**, ya que es un formato clásico para imágenes animadas.

## Verificación con el Inspector de Firefox

Utilicé el Inspector de Firefox para verificar los formatos de las imágenes en la página web.

### Pasos:

1. Abrí la página web en Firefox.
2. Hice clic derecho sobre una imagen y seleccioné "Inspeccionar elemento".
3. En el panel del Inspector, observé la sección de HTML y CSS para encontrar la URL de la imagen.
4. Revisé la extensión del archivo de imagen en la URL para determinar su formato.

## Resultados

### Imagen 1: Fotografía de alta calidad
- **Suposición inicial**: **JPG**
- **Formato real**: **JPG**

### Imagen 2: Ícono con transparencia
- **Suposición inicial**: **PNG**
- **Formato real**: **PNG**

### Imagen 3: Gráfico sin transparencia
- **Suposición inicial**: **PNG**
- **Formato real**: **PNG**

### Imagen 4: Animación
- **Suposición inicial**: **GIF**
- **Formato real**: **GIF**

## Análisis y Mejora de Formatos

1. **Fotografía de alta calidad (JPG)**:
   - **Formato actual**: JPG
   - **Posible mejora**: **AVIF** o **WebP**
   - **Razón**: AVIF y WebP ofrecen mejor compresión y calidad superior a JPG, lo que podría reducir el tamaño del archivo sin sacrificar calidad.

2. **Ícono con transparencia (PNG)**:
   - **Formato actual**: PNG
   - **Posible mejora**: **WebP**
   - **Razón**: WebP soporta transparencia y ofrece una mejor compresión que PNG, reduciendo el tamaño del archivo sin pérdida significativa de calidad.

3. **Gráfico sin transparencia (PNG)**:
   - **Formato actual**: PNG
   - **Posible mejora**: **WebP**
   - **Razón**: Para gráficos sin transparencia, WebP puede ofrecer mejor compresión que PNG, reduciendo el tamaño del archivo manteniendo la calidad.

4. **Animación (GIF)**:
   - **Formato actual**: GIF
   - **Posible mejora**: **WebP**
   - **Razón**: WebP soporta animaciones y ofrece mejor compresión que GIF, lo que podría reducir el tamaño del archivo y mejorar la velocidad de carga.

## Conclusión

La mayoría de los formatos que supuse fueron correctos al verificar con el Inspector de Firefox. Sin embargo, en varios casos, se podrían usar formatos más modernos como AVIF y WebP para mejorar la compresión y la calidad de las imágenes en la web. Esto podría llevar a tiempos de carga más rápidos y un uso más eficiente del ancho de banda, mejorando así la experiencia del usuario.
