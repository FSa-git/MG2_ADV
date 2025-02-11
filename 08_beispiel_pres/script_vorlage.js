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

  // Lade die Daten aus der csv-Datei

  // Sortiere die Daten nach der Spalte statistik

  // Skala für die x- und y-Achse definieren
  const x = 

  const y = 

  // x- und y-Achsen erstellen 
  const xAxis = d3.axisBottom(x)
    .ticks(5)

  const yAxis = d3.axisLeft(y)
    .tickSize(0)
    .tickPadding(10);

  // Erstelle die Balken für das Diagramm


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


  // Beschriftung für die Balken hinzufügen
  svg.selectAll(".label")
    .data(data)
    .enter().append("text")

    .attr("x", function (d) { return x(d.statistik) + 5; })
    .attr("y", function (d) { return y(d.pizza_adv) + y.bandwidth() / 2; })
    .attr("dy", ".35em")

    // Styles hinzufügen
    // ...

    .text(function (d) { return d.statistik; });


  // Titel für das Diagramm hinzufügen
  svg.append("text")
    .attr("x", margin.left - 335)
    .attr("y", margin.top - 110)

    // Style für den Titel hinzufügen

  // Datenquelle hinzufügen
  

});