// URL: https://beta.observablehq.com/@as-garciav/gistemp-nos-ensena-sobre-el-calentamiento-global
// Title: GISTEMP nos enseña sobre el calentamiento global
// Author: as-garciav (@as-garciav)
// Version: 292
// Runtime version: 1

const m0 = {
  id: "a34a3adefc671214@292",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# GISTEMP nos enseña sobre el calentamiento global`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `# <img src ="https://www.sciencedaily.com/images/2018/07/180705110027_1_540x360.jpg" />`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `Una de las mayores controversias a nivel mundial es la existencia del cambio climático. Entre las razones por las cuales es difícil describir los cambios en la temperatura global a lo largo del tiempo, proviene de la dificultad de definir, obtener y analizar correctamente la temperatura de la superficie de la tierra. Por lo anterior el equipo de [GISTEMP (Goddard Institute Surface Temperature)](https://data.giss.nasa.gov/gistemp/history/) a lo largo de los años ha obtenido, depurado, estandarizado y analizado información de la temperatura de la superficie terrestre y de la superficie marina en diferentes lugares alrededor del mundo.

Los [datos](https://data.giss.nasa.gov/gistemp/) actualmente disponibles corresponden a las desviaciones de la temperatura promedio registrada en el periodo de 1951 a 1980, registradas en forma regular en periodo mensual, anual y trimestral. `
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `# La clásica visualización de los datos anuales en el periodo de 1880 a la actualidad se observa en el siguiente gráfico`
)})
    },
    {
      inputs: ["d3","DOM","width","height","xAxis","yAxis","data","x","y","margin"],
      value: (function(d3,DOM,width,height,xAxis,yAxis,data,x,y,margin)
{
  const svg = d3.select(DOM.svg(width, height));
  
  // Creando el eje x (linea y numeros)
  svg.append("g")
      .call(xAxis);
  
  // Creando el eje y (línea y números)
  svg.append("g")
      .call(yAxis);
  
  svg.append("g")
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.2)
    .selectAll("circle")
    .data(data)
    .enter().append("circle")
      .attr("cx", d => x(d.year))
      .attr("cy", d => y(d.anual))
  //    .attr("fill", d => z(d.value))
      .attr("r", 2.5);
  
    // Dando nombre al eje x
  svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 2) + ")")
      .style("text-anchor", "middle")
      .text("Año");
  
    // Dando nombre al eje y
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .text("Temperatura");      
  
  svg.append("text")
        .attr("fill", "#555")
        .attr("x", 5)
        .attr("y", margin.top)
        .attr("dy", "0.32em")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Cambio en la temperatura anual °C (ref: 1950-1980)");
  
  
  return svg.node()
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `El gráfico anterior muestra que a lo largo de los años la temperatura de la superficie de la tierra fluctua levemente con cambios que no superan 1°C de diferencia entre 1880 hasta el año 2017, teniendo en cuenta que previamente los científicos han pronosticado que un cambio dramático en la vida en la tierra sería como consecuencia de un aumento en la temperatura superior a 6°C [(documental NatGeo 6°C más cálido)](https://www.youtube.com/watch?v=O8qmaAMK4cM&list=PL513A1C0ACD1C5FD2&index=6), no parece una cifra alarmante, pero en realidad lo es [(documental NatGeo 1°C más cálido)](https://www.youtube.com/watch?v=2_ZQRIsn2pA&list=PL513A1C0ACD1C5FD2), ésto se debe a que los diferentes ecosistemas y patrones climáticos de la tierra son muy susceptibles, provocando extinsión masiva de muchas especies de plantas, animales y otros seres vivientes.` 
)})
    },
    {
      name: "data",
      inputs: ["d3"],
      value: (function(d3){return(
d3.csv("https://raw.githubusercontent.com/as-garciav/VA_bonus_parcial1/master/GLB.Ts%2BdSST%20(1).csv", function(d) {
  return {
    year: +d["Year"],
    anual: +d["J-D"]
  };
  })
)})
    },
    {
      name: "margin",
      value: (function(){return(
{top: 20, right: 30, bottom: 30, left: 40}
)})
    },
    {
      name: "height",
      value: (function(){return(
300
)})
    },
    {
      name: "x2",
      inputs: ["d3","data","margin","width"],
      value: (function(d3,data,margin,width){return(
d3.scaleTime()
    .domain(d3.extent(data, d => d.yr))
    .range([margin.left, width - margin.right])
)})
    },
    {
      name: "y",
      inputs: ["d3","data","height","margin"],
      value: (function(d3,data,height,margin){return(
d3.scaleLinear()
    .domain(d3.extent(data, d => d.anual))
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x","width"],
      value: (function(height,margin,d3,x,width){return(
g => g
  .attr("transform", `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x)
      .ticks(width / 80)
      .tickSizeOuter(0))
)})
    },
    {
      name: "yAxis",
      inputs: ["margin","d3","y","data"],
      value: (function(margin,d3,y,data){return(
g => g.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
//    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))
)})
    },
    {
      name: "curve",
      inputs: ["d3"],
      value: (function(d3){return(
d3.curveStep
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `# La temperatura global ha aumentado gradualmente en un periodo de tiempo muy corto`
)})
    },
    {
      name: "chart2",
      inputs: ["d3","DOM","width","plot_difchar","margin","x","yline","domain2","plot","min","max","plot_lat","fdata"],
      value: (function(d3,DOM,width,plot_difchar,margin,x,yline,domain2,plot,min,max,plot_lat,fdata)
{
  const svg = d3.select(DOM.svg(width, 400));
  
  // plot diferencias de la temperatura media calculada
 plot_difchar(svg, 1);
  
  svg.append("g")
      .attr("transform", "translate(0," + (250 - margin.bottom ) + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format(".0f")));
  
    //linea de los 0°C
  svg.append("g")
   .append("line")
   .attr("stroke", "#bbb")
   .attr("stroke-width", 1)
   .attr("stroke-dasharray", "3,5")
   .attr("x1", x(1880))
   .attr("y1", yline[1].y(0.0))
   .attr("x2", x(2017))
   .attr("y2", yline[1].y(0.0));
  
    // agregar yAxis
  svg.append("g")
      .attr("transform", "translate(" + margin.left +" , 0)")
      .call(d3.axisLeft(yline[1].y).tickFormat(d3.format(".2f")).tickValues([domain2[0], 0, domain2[1]]))
      .append("text")
        .attr("fill", "#555")
        .attr("x", 5)
        .attr("y", margin.top)
        .attr("dy", "0.32em")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Cambios en la Temperatura global de la superficie de la Tierra (°C), periodo anual y trimestral");
  
  svg.append("g")
    .append ("text")
         .attr("fill", "#555")
        .attr("x", 5)
        .attr("y", margin.bottom)
        .attr("dy", "20.32em")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Heatmap cambios en la temperatura trimestral (siglas de meses en inglés)");
      

    // dibujar lineas de las temperaturas por temporada
  ['DJF', 'MAM', 'JJA', 'SON'].forEach((n, i)  => plot(svg, n, 'lightgray', n, "1", 1)); 
 
    // Dinamica cuando mouse pasa sobre el heatmap
  let gpointer = svg.append("g")
     .classed("selector", true)
     .style("opacity", 0)
     .attr("transform", "translate(" + x(1970) + ",0");
  
  // Colorear la línea negra
    gpointer.append("g")
   .append("line")
   .attr("stroke", "black")
   .attr("stroke-width", 1)
   .attr("stroke-dasharray", "8,2")
   .attr("x1", 0)
   .attr("y1", yline[1].y(min))
   .attr("x2", 0)
   .attr("y2", yline[1].y(max - 0.6));
  
  // Crear un punto 
   gpointer.append("circle")
      .attr("cy", yline[1].y(0))
      .attr("r", 6)
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("fill", "darkgrey");
  
   gpointer.append("text")
        .classed("year", true)
        .attr("fill", "black")
        .attr("x", 0)
        .attr("y", yline[1].y(min))
        .attr("font-family", "Consolas, monospace")
        .attr("dy", "2em")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .text("xxx");
  
   gpointer.append("text")
        .classed("zone", true)
        .attr("fill", "black")
        .attr("x", 0)
        .attr("y", yline[1].y(min))
        .attr("font-family", "Consolas, monospace")
        .attr("dy", "-1em")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .text("xxx");
  
    gpointer.append("text")
        .classed("temp", true)
        .attr("fill", "black")
        .attr("x", 0)
        .attr("y", yline[1].y(max))
        .attr("font-family", "Consolas, monospace")
        .attr("dx", "0.5em")
        .attr("dy", "2em")
        .attr("font-size", "0.8em")
        .attr("text-anchor", "start")
        .attr("font-weight", "normal")
        .text("xxx");
  
    // draw heatmap
  let offsety = 270;
  ['DJF', 'MAM', 'JJA', 'SON'].forEach((n, i)  => plot_lat(svg, n, offsety + i*20));

  
  console.log(fdata('SON'));
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `En la gráfica anterior se puede observar que desde 1980 la temperatura global ha aumentado rápidamente con un pico de temperatura para el año 2016 donde se superó una diferencia del 1.2°C. Es curioso observar que en el periodo usado como referencia desde 1950 hasta 1980 los cambios en altas o bajas temperaturas globales varian cada 4 años, lo que es consistente con fenómenos climáticos como <span style="color:blue; font-weight: 600;">'La niña'</span> y <span style="color:orange; font-weight: 600;">'El niño'</span>, éstos fenómenos naturales sobre todo el fenómeno del Niño se puede percibir cada ocho años en algunos trimestres desde 1880 hasta 1950, coordinados con diferentes picos de baja temperatura también con patrones regulares que corresponden al fenómeno de la Niña.

De forma interesante aunque en las diferentes curvas se conserva esos aumentos o disminuciones de temperatura cada cuatro años la tendencia general es a un aumento de la temperatura de la superficie de la tierra.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `# Data`
)})
    },
    {
      name: "data2",
      inputs: ["d3"],
      value: (function(d3){return(
d3.csv("https://raw.githubusercontent.com/as-garciav/VA_bonus_parcial1/master/GLB.Ts%2BdSST%20(1).csv")
)})
    },
    {
      name: "fdata",
      inputs: ["data2"],
      value: (function(data2){return(
function fdata(col) {
  return data2.map(d => ({
    "yr": d.Year,
    "temp": d[col]
  }));
}
)})
    },
    {
      name: "ftemp",
      inputs: ["data2"],
      value: (function(data2){return(
function ftemp(col) {
  return data2.map(d => parseFloat(d[col]));
}
)})
    },
    {
      name: "season",
      value: (function(){return(
['DJF', 'MAM', 'JJA', 'SON']
)})
    },
    {
      name: "period",
      value: (function(){return(
[1880, 2017]
)})
    },
    {
      name: "domain2",
      inputs: ["min","max"],
      value: (function(min,max){return(
[min, max]
)})
    },
    {
      name: "_min",
      inputs: ["d3","ftemp"],
      value: (function(d3,ftemp){return(
function _min(cols) {
  let mins = cols.map( c => d3.min(ftemp(c)));
  return d3.min(mins);
}
)})
    },
    {
      name: "_max",
      inputs: ["d3","ftemp"],
      value: (function(d3,ftemp){return(
function _max(cols) {
  let maxs = cols.map( c => d3.max(ftemp(c)));
  return d3.max(maxs);
}
)})
    },
    {
      name: "min",
      inputs: ["_min","season"],
      value: (function(_min,season){return(
_min(season)
)})
    },
    {
      name: "max",
      inputs: ["_max","season"],
      value: (function(_max,season){return(
_max(season)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md `# Plots`
)})
    },
    {
      name: "plot_difchar",
      inputs: ["yline","DOM","d3","x","fdata"],
      value: (function(yline,DOM,d3,x,fdata){return(
function plot_difchar(svg, index){
  
  let y = yline[index].y;
  let clipuid = DOM.uid("clipuid-" + index);
  
  let area = d3.area()
    .x(d  =>  x(d.yr))
    .y0(d => y(0))
    .y1(d => y(d.temp));

  
  svg.append("clipPath")
      .attr("id", clipuid.id)
    .append("path")
   .data([fdata("J-D")])
      .attr("d", area);

  
   svg.append("rect") 
  .attr("fill", d3.interpolateBlues(0.8))
   .attr("clip-path", clipuid)
  //.style("opacity", 0.3)
  .attr("x", x(1880))
  .attr("y", y(0))
   .attr("width",x(2017) - x(1880))
  .attr("height", y(0));
  
     svg.append("rect") 
  .attr("fill", d3.interpolateOranges(0.6))
   .attr("clip-path", clipuid)
  //.style("opacity", 0.5)
  .attr("x", x(1880))
  .attr("y", 0)
   .attr("width",x(2017) - x(1880))
  .attr("height", y(0));

}
)})
    },
    {
      name: "plot",
      inputs: ["fdata","data2","yline","x"],
      value: (function(fdata,data2,yline,x){return(
function plot (svg, column, color, title, dasharray, index, showLabel){
  
  let data = fdata(column);
  let last = data2.slice(-1)[0];
                   
  svg.append("g")
    .append("path")
      .datum(data)
      .attr("class", "_" + column)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-dasharray",  dasharray ? dasharray : "1,2")
      .attr("stroke-width", 1)
      .attr("d", yline[index].line);
  
  if (showLabel) {
   svg.append("text")
    .attr("x", x(last.yr))
    .attr("y", yline[index].y(last.temp))
    .attr("class", "label _" + column)
    .attr("dx", "0.4em")
    .attr("fill", color)
    .attr("font-family", "Consolas, monospace")
    .attr("text-anchor", "left")
    .attr("font-size", "0.8em")
    .attr("font-weight", "normal")
    .text(title + " " + last.temp + "°C");
  }
   
}
)})
    },
    {
      name: "plot_lat",
      inputs: ["fdata","fcolor","x","yline"],
      value: (function(fdata,fcolor,x,yline){return(
function plot_lat (svg, column, h){
  
  let data = fdata(column);
  let last = data.slice(-1)[0];
                   
  let g = svg.append("g");
  
 
  
  g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .style("cursor", "pointer") 
    .attr("fill", d => fcolor(d.temp))
    .attr("stroke", d => fcolor(d.temp))
    .attr("stroke-width", 1)
    .attr("x", d => x(d.yr))
    .attr("y", h)
    .attr("width", 5)
    .attr("height", 20)
    .attr("class", d => "_" + d.yr + " _" + column)
    .on('mouseover', d => {
        let s = svg.select("g.selector")
           .style("opacity", 1)
           .attr("transform", "translate(" + x(d.yr) + ",0)");
         s.select("circle")
           .attr("cy", yline[1].y(d.temp))
           .attr("fill", fcolor(d.temp));
         s.select("text.year")
           .text("" + d.yr);
         s.select("text.zone")
           .text("" + column);
         s.select("text.temp")
           .text("" + d.temp + "°C");
         svg.select("text._" + column).attr("fill", "black");
         svg.select("path._" + column)
           .attr("stroke-width", 2)
           .attr("stroke", "black");
         g.select("rect._" + d.year + "._" + column).attr("stroke", "black");
    })
    .on('mouseout', d => {
       svg.select("g.selector").style("opacity", 0);
       svg.select("text._" + column).attr("fill", "lightgrey");
       svg.select("path._" + column)
        .attr("stroke-width", 1)
        .attr("stroke", "lightgrey");
       g.select("rect._" + d.yr + "._" + column).attr("stroke", fcolor(d.temp));
    });
  
  g.append("text")
    .attr("x", x(last.year) )
    .attr("y", h + 15)
    .attr("dx", "0.6em")
    .attr("fill", "#666")
    .attr("font-family", "Consolas, monospace")
    .attr("text-anchor", "left")
    .attr("font-size", "0.8em")
    .attr("font-weight", "normal")
    .text(column); 
  

}
)})
    },
    {
      name: "x",
      inputs: ["d3","period","margin","width"],
      value: (function(d3,period,margin,width){return(
d3.scaleLinear()
    .domain(period)
    .range([margin.left, width - 2 * margin.right])
)})
    },
    {
      name: "yline",
      inputs: ["d3","margin","x","domain2"],
      value: (function(d3,margin,x,domain2)
{

  let _y1 = d3.scaleLinear()
//    .domain(d3.extent(data2, d => d["J-D"])) #intento 1 cambiar domain
//    .domain([_min(['J-D']), _max(['J-D'])]) #intento 2 cambiar domain
    .domain([d3.min(function(d) {return d["J-D"]}), 
            d3.max(function(d) {return d["J-D"]})])
    .range([200 - margin.bottom, margin.top]);
  
  let _line1 =  d3.line()
    .curve(d3.curveMonotoneX)
    .x(d => x(d.yr))
    .y(d => _y1(d.temp))
  
  let _y2 = d3.scaleLinear()
    .domain(domain2)
    .range([250 - margin.bottom, margin.top]);
  
  let _line2 = d3.line()
    .curve(d3.curveMonotoneX)
    .x(d => x(d.yr))
    .y(d => _y2(d.temp));


return [
({
  y: _y1,
  line: _line1
}),
  ({
  y: _y2,
  line: _line2 
  })
];
  
  }
)
    },
    {
      name: "fcolor",
      inputs: ["oranges","blues"],
      value: (function(oranges,blues){return(
function fcolor(d) {
    if (d >= 0){
      return oranges(d);
    } else {
      return blues(d);
    }
}
)})
    },
    {
      name: "blues",
      inputs: ["d3","min"],
      value: (function(d3,min){return(
d3.scaleSequential(d3.interpolateBlues).domain([0, min])
)})
    },
    {
      name: "oranges",
      inputs: ["d3","max"],
      value: (function(d3,max){return(
d3.scaleSequential(d3.interpolateOranges).domain([0, max])
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    }
  ]
};

const notebook = {
  id: "a34a3adefc671214@292",
  modules: [m0]
};

export default notebook;
