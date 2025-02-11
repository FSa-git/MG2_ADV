// Ränder für das Diagramm definieren
const margin = { top: 70, right: 40, bottom: 60, left: 175 }
const width = 660 - margin.left - margin.right
const height = 400 - margin.top - margin.bottom

// Erstelle das SVG-Element für das Diagramm
const svg = d3.select("#pizza-chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//TODO - 1. Lade die Daten aus der Datei csv-Datei 
//          und konvertiere die Werte in Zahlen
d3.csv("pizza.csv").then(data => {
  data.forEach(d => {
    d.statistik = +d.statistik; // hier wird der Wert in eine Zahl umgewandelt
  });

  //TODO - 2. Sortiere die Daten nach der Spalte statistik
  data.sort(function (a, b) { 
    return d3.ascending(a.statistik, b.statistik); // das bedeutet, dass die Daten aufsteigend sortiert werden
  });

  // Definiere die Skalen für die x- und y-Achse
  const x = d3.scaleLinear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) { return d.statistik; })]);

  const y = d3.scaleBand()
    .range([height, 0])
    .padding(0.1)
    .domain(data.map(function (d) { return d.pizza_adv; }));

  // x- und y-Achsen erstellen
  const xAxis = d3.axisBottom(x)
    .ticks(5)

  const yAxis = d3.axisLeft(y)
    .tickSize(0)
    .tickPadding(10);


  //TODO - 3. Erstelle die Balken für das Diagramm
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("y", function (d) { return y(d.pizza_adv); }) // das bedeutet, dass die Balken bei 0 anfangen
    .attr("height", y.bandwidth()) // bandwith() gibt die Breite der Balken zurück
    .attr("x", 0) // das bedeutet, dass die Balken bei 0 anfangen
    .attr("width", function (d) { return x(d.statistik); }) // das bedeutet, dass die Balken bei 0 anfangen
    .attr('fill', 'orange')

  // X- und Y-Achsen hinzufügen
  svg.append("g")
    .attr("class", "x axis")
    .style("font-size", "10px")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .call(g => g.select(".domain").remove());

  svg.append("g")
    .attr("class", "y axis")
    .style("font-size", "8px")
    .call(yAxis)
    .selectAll('path')
    .style('stroke-width', '1.75px');

  svg.selectAll(".y.axis .tick text")
    .text(function (d) {
      return d.toUpperCase();
    });


  // Beschriftung der Balken hinzufügen 
  // Zahl am Ende
  svg.selectAll(".label")
    .data(data)
    .enter().append("text")

    .attr("x", function (d) { return x(d.statistik) + 5; })
    .attr("y", function (d) { return y(d.pizza_adv) + y.bandwidth() / 2; })
    .attr("dy", ".35em")

    //TODO - 4. Füge Styles hinzu
    .style("font-family", "sans-serif")
    .style("font-size", "10px")
    .style("font-weight", "bold")
    .style('fill', 'green')

    .text(function (d) { return d.statistik; });

  // Add statistik label (Unten Titel mittig / optional)
//   svg.append("text")
//     .attr("transform", "translate(" + width / 2 + "," + (height + margin.bottom / 2) + ")")
//     .style("text-anchor", "middle")
//     .style("font-size", "10px")
//     .style("fill", "black")
//     .style("font-family", "sans-serif")
//     .attr("dy", "1em")
//     .text("statistik");

  // Add the chart title
  svg.append("text")
    .attr("x", margin.left - 335)
    .attr("y", margin.top - 110)

    .style("font-size", "14px")
    .style("font-weight", "bold")
    .style("font-family", "sans-serif")

    // TODO - 10. Füge den Titel hinzu
    .text("Beliebteste Pizza an der ADV");

  
  svg.append("text")
    .attr("transform", "translate(" + (margin.left - 335) + "," + (height + margin.bottom - 10) + ")")
    // TODO - 9. Füge Quelle hinzu
    .style("text-anchor", "start")
    .style("font-size", "8px")
    .style("fill", "lightgray")
    .style("font-family", "sans-serif")
    .html("<a href='https://www.tageskarte.io/gastronomie/detail/die-beliebteste-pizza-der-deutschen.html'>Source: blabla.de</a>");

});