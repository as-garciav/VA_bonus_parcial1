# El calentamiento global es una realidad

Una de las mayores controversias a nivel mundial es la existencia del cambio climático. Entre las razones por las cuales es difícil describir los cambios en la temperatura global a lo largo del tiempo, proviene de la dificultad de definir, obtener y analizar correctamente la temperatura de la superficie de la tierra. Por lo anterior el equipo de GISTEMP (Goddard Institute Surface Temperature) a lo largo de los años ha obtenido, depurado, estandarizado y analizado información de la temperatura en diferentes lugares alrededor del mundo. 
Los datos (https://data.giss.nasa.gov/gistemp/) actualmente disponibles corresponden a las desviaciones de la temperatura promedio registrada en el periodo de 1951 a 1980, registradas mensualmente desde 1880 hasta 2017, el set de datos describe también las variaciones de temperatura en un periodo mensual, anual y trimestral, descrito por las siglas de los meses del año en inglés.  

## What?
Dataset type  table of time varying data, with 138 Items and 19 attributes
Se observan dos tipos principales de atributos:

Para la variable año se trata de un dato con información temporal de tipo ordenado-cuantitativo- secuencial, sin datos perdidos desde el año 1880 hasta 2017 

Los demás atributos describen la temperatura registrada en el año correspondiente (ítem) de forma mensual, anula o trimestral. El tipo de dato es ordenado-cuantitativo-divergente

Para representar la información trimestral se deriva la variable de trimestres por año, donde se tienen 4 categorías o factores cuyos nombres conservan los meses del año. El tipo de dato es ordenado-cualitativo-ciclico

Entre los atributos descritos el “key attribute” para la tarea de mostrar el cambio global en las temperaturas de la superficie de la tierra, tiene como nombre J-D en el set de datos original, contiene la información del promedio de las temperaturas registradas en todos los meses del año para cada item correspondiente

## Why?

/Tarea principal: Observar en la visualización que la temperatura de la superficie de la tierra ha aumentado, como evidencia del calentamiento global (Tamara = Identify: trends)


Tareas secundarias: 

A. Observar la distribución de los cambios en la temperatura de la superficie de la tierra a lo largo de los años (Tamara = Summarize: Distribution)

B. Buscar dentro del gráfico datos extremos (Tamara = Search. Locate:Extremes)

C. Mostrar diferencias en la forma tradicional de describir los datos y una forma dinámica de hacerlo (Tamara = Compare, Similarity)

D. Observar diferencias en el comportamiento de la temperatura en los diferentes trimestres de cada año (Tamara = Compare: Features)

## How?

dos Idiom diferentes

1. Line chart
	Encode: 
-Eje x separa y ordena los datos del “año” (key attribute) (Arrange, separate/order). 
-Eje y asigna los valores de las temperaturas correspondientes a su item en la tabla original. (Arrange, Express)

Canales:
-Ejex: Posición en el eje x
-Ejey: Posición en el eje y

Marcas:
-Línea que conecta las diferentes parejas de puntos creados por los canales en x y y. La línea adquiere una forma curva a medida que van cambiando los datos
-Linea que marca el dato de 0°C a lo largo de toda la gráfica
-Color, usado de forma complementaria para describir la divergencia en los datos de temperatura se usa el canal de color azul para datos inferiores a 0 y naranjas para los datos superiores a 0.

2. Heatmap

Filter: Datos trimestrales de temperatura. Matriz de 2D de las categorías de los trimestres, con los valores de temperatura para cada uno de los años (1880 - 2017)

Encode
-Usar la matriz 2D de las categorías de los trimestres para cada uno de los años, transformando la temperaruda a 2 dimensiones como frío o caliente basado en valores por debajo o por encima de 0°C respectivamente y los alinea de forma correspondiente 
-Trimestres (Arrange. Order/Separate, Map. Shape cuadrado)
-Año (Arrange Order/Separate)
-Temperatura (Map Color-saturation)

Select: dato trimestral por cada año

Marcas: 
-Áreas

Canales:
-Año: posición en eje x
-Trimestres: Posición en eje y
-Temperatura: saturación de color con dos colores diferentes para detallar su tipo de dato divergente

## Insights:

PRINCIPAL: Si existe el calentamiento global y la tendencia global es al aumento de la temperatura, de forma preocupante ya estamos superando una aumento de 1°C con respecto a los años de la temperatura de referencia

A. Es posible observar en la visualización por los camibios en el color y por cada uno de los años el dato de la diferencia en la tempeartura de la superficie de la tierra con respecto a la temperatura registrada en los años de referencia

B. Se ovserva claramente en el heatmap que el y en los la línea de la temperatura global máxima y mínima que la máxima temperatura máxima de los últimos 138 años fue en el primer trimestre del año 2016 mientras la mínima temperatura fue registrada también en el primer trimestre del año 1917

C. Se tienen la gráfica de scatterplot y la visualización dinámica en la página web, también es posible observar diferencias e información complementaria en la forma que se observan las temperaturas entre el linechart y el heatmap

D. Los diferentes trimestres del año muestran cambios en la temperatura que no tienen patrones claros para afirmar que un trimestre sea por lo general más cálido o más frío que otro, sin embargo por los diferentes colores obtenidos se anualmente es posible ver tendencias cada 4 o 8 años en patrones que por lo general se pueden asociar a fenómenos climáticos como el fenómeno del Niño o de la Niña



