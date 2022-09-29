function barGraph(val) {
    document.getElementById("graphingLocation").innerHTML ="";
    if(val=='contributingFactorsV1'){
        var margin = {
            top: 30,
            right: -200,
              bottom: 70,
            left: 100
        },
            width = 500,
            height = 400;
        var svg = d3.select("#graphingLocation")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 10300)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion_AccidentCount.csv", function (data) {
            var x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(function (d) {
                    return d.contributing_factor_vehicle_1;
                }))
                .padding(0.4);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");
            var y = d3.scaleLinear()
                .domain([0, 20000])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));
            svg.selectAll("bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function (d) {
                    return x(d.contributing_factor_vehicle_1);
                })
                .attr("y", function (d) {
                    return y(d.factorCount);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d) {
                    return height - y(d.factorCount);
                })
                .attr("fill", "#990000")
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width - 200)
                .attr("y", height + 150)
                .text("Contributing Factors");
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", 6)
                .attr("dy", "-4em")
                .attr("transform", "rotate(-90)")
                .text("Occurances of Accident Type");

        })
    }
    if(val=='contributingFactorsV2'){
        var margin = {
            top: 30,
            right: -200,
            bottom: 70,
            left: 100
        },
            width = 500,
            height = 400;
        var svg = d3.select("#graphingLocation")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 10300)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion%20Count.csv", function (data) {
            var x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(function (d) {
                    return d.contributing_factor_vehicle_2;
                }))
                .padding(0.4);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");
            var y = d3.scaleLinear()
                .domain([0, 40000])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));
            svg.selectAll("bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function (d) {
                    return x(d.contributing_factor_vehicle_2);
                })
                .attr("y", function (d) {
                    return y(d.factorCount);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d) {
                    return height - y(d.factorCount);
                })
                .attr("fill", "#990000")
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width - 200)
                .attr("y", height + 150)
                .text("Contributing Factors");
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", 6)
                .attr("dy", "-4em")
                .attr("transform", "rotate(-90)")
                .text("Occurances of Accident Type (Second Vehicle Involved)");

        })
    }
    if(val=='signCode'){
        var margin = {
            top: 30,
            right: -200,
            bottom: 70,
            left: 100
        },
            width = 500,
            height = 400;
        var svg = d3.select("#graphingLocation")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 10300)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion_SignCount.csv", function (data) {
            var x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(function (d) {
                    return d.sign_code;
                }))
                .padding(0.4);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");
            var y = d3.scaleLinear()
                .domain([0, 4000])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));
            svg.selectAll("bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function (d) {
                    return x(d.sign_code);
                })
                .attr("y", function (d) {
                    return y(d.signCount);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d) {
                    return height - y(d.signCount);
                })
                .attr("fill", "#990000")
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width - 200)
                .attr("y", height + 50)
                .text("Sign Types");
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", 6)
                .attr("dy", "-4em")
                .attr("transform", "rotate(-90)")
                .text("Number of Signs in Work Order");

        })

    }
    if(val=='orderType'){
        var margin = {
            top: 30,
            right: -200,
            bottom: 70,
            left: 100
        },
            width = 500,
            height = 400;
        var svg = d3.select("#graphingLocation")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 10300)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion%20OrderCount.csv", function (data) {
            var x = d3.scaleBand()
                .range([0, width])
                .domain(data.map(function (d) {
                    return d.order_type;
                }))
                .padding(0.4);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");
            var y = d3.scaleLinear()
                .domain([0, 40000])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));
            svg.selectAll("bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function (d) {
                    return x(d.order_type);
                })
                .attr("y", function (d) {
                    return y(d.orderCount);
                })
                .attr("width", x.bandwidth())
                .attr("height", function (d) {
                    return height - y(d.orderCount);
                })
                .attr("fill", "#990000")
            svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width - 200)
                .attr("y", height + 80)
                .text("Order Types");
            svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", 6)
                .attr("dy", "-4em")
                .attr("transform", "rotate(-90)")
                .text("Number of Orders in Work Order");

        })
        
    }
}


function pieChart(val) {
    document.getElementById("graphingLocation").innerHTML ="";
    if(val=='contributingFactorsV1'){
        var margin = {
            top: 200,
            right: -200,
            bottom: 70,
            left: 200
        },
        width = 500,
        height = 1000;
    var svg = d3.select("#graphingLocation")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 4000)
        radius = Math.min(400) / 2;
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var color = d3.scaleOrdinal(['#FF8066', '#FFCC66', '#E5FF66', '#66FFB3', '#66FFFF', '#6699FF', '#9966FF']);
    var pie = d3.pie().value(function(d) {
        return d.factorCount;
    });
    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 100);
    d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion_AccidentCount.csv", function(data) {
        var total = d3.sum(data, function(d) {
            return d.factorCount;
        });
        var arc = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d, i) {
                return color(i);
            });
        arc.selectAll("arc")
            .data(pie(data))
            .enter()
            .append('text')
            .text(function(d) {
                return "" +  (d.data.factorCount / total * 100).toFixed(2) + "%"
            })
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .style("text-anchor", "middle")
        var legend = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("transform", function(d,i) {
                return "translate(" + (margin.left) + "," + (margin.top-30) + ")";
            })
            .attr("class", "legend");
        legend.append("rect") 
            .attr("width", 10)
            .attr("height", 10)
            .attr("y", function(d,i){ return i*(30)-10}) 
            .attr("fill", function(d, i) {
                return color(i);
            });
        legend.append("text")
            .attr("y", function(d,i){ return i*(30)}) 
            .attr("x", 11)
            .text(function(d) {
                return "" + d.data.factorCount + " " + d.data.contributing_factor_vehicle_1 + " " + (d.data.factorCount / total * 100).toFixed(2) + "%";
            });
            
        });
    }
    if(val=='signCode'){
        var margin = {
            top: 200,
            right: -200,
            bottom: 70,
            left: 200
        },
        width = 500,
        height = 1000;
    var svg = d3.select("#graphingLocation")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 4000)
        radius = Math.min(400) / 2;
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var color = d3.scaleOrdinal(['#FF8066', '#FFCC66', '#E5FF66', '#66FFB3', '#66FFFF', '#6699FF', '#9966FF']);
    var pie = d3.pie().value(function(d) {
        return d.signCount;
    });
    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 100);
    d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion_SignCount.csv", function(data) {
        var total = d3.sum(data, function(d) {
            return d.signCount;
        });
        var arc = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d, i) {
                return color(i);
            });
        arc.selectAll("arc")
            .data(pie(data))
            .enter()
            .append('text')
            .text(function(d) {
                return ""  + (d.data.signCount / total * 100).toFixed(2) + "%"
            })
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .style("text-anchor", "middle")
        var legend = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("transform", function(d,i) {
                return "translate(" + (margin.left) + "," + (margin.top-30) + ")";
            })
            .attr("class", "legend");
        legend.append("rect") 
            .attr("width", 10)
            .attr("height", 10)
            .attr("y", function(d,i){ return i*(30)-10}) 
            .attr("fill", function(d, i) {
                return color(i);
            });
        legend.append("text")
            .attr("y", function(d,i){ return i*(30)}) 
            .attr("x", 11)
            .text(function(d) {
                return "" + d.data.signCount + " " + d.data.sign_code + " " + (d.data.signCount / total * 100).toFixed(2) + "%";
            });
            
        });

    }
    if(val=='orderType'){
        var margin = {
            top: 200,
            right: -200,
            bottom: 70,
            left: 200
        },
        width = 500,
        height = 1000;
    var svg = d3.select("#graphingLocation")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 4000)
        radius = Math.min(400) / 2;
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var color = d3.scaleOrdinal(['#FF8066', '#FFCC66', '#E5FF66', '#66FFB3', '#66FFFF', '#6699FF', '#9966FF']);
    var pie = d3.pie().value(function(d) {
        return d.orderCount;
    });
    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 100);
    d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion%20OrderCount.csv", function(data) {
        var total = d3.sum(data, function(d) {
            return d.orderCount;
        });
        var arc = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d, i) {
                return color(i);
            });
        arc.selectAll("arc")
            .data(pie(data))
            .enter()
            .append('text')
            .text(function(d) {
                return "" +  (d.data.orderCount / total * 100).toFixed(2) + "%"
            })
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .style("text-anchor", "middle")
        var legend = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("transform", function(d,i) {
                return "translate(" + (margin.left) + "," + (margin.top-30) + ")";
            })
            .attr("class", "legend");
        legend.append("rect") 
            .attr("width", 10)
            .attr("height", 10)
            .attr("y", function(d,i){ return i*(30)-10}) 
            .attr("fill", function(d, i) {
                return color(i);
            });
        legend.append("text")
            .attr("y", function(d,i){ return i*(30)}) 
            .attr("x", 11)
            .text(function(d) {
                return "" + d.data.orderCount + " " + d.data.order_type + " " + (d.data.orderCount / total * 100).toFixed(2) + "%";
            });
            
        });

    }
    if(val=='contributingFactorsV2'){
        var margin = {
            top: 200,
            right: -200,
            bottom: 70,
            left: 200
        },
        width = 500,
        height = 1000;
    var svg = d3.select("#graphingLocation")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 4000)
        radius = Math.min(400) / 2;
    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var color = d3.scaleOrdinal(['#FF8066', '#FFCC66', '#E5FF66', '#66FFB3', '#66FFFF', '#6699FF', '#9966FF']);
    var pie = d3.pie().value(function(d) {
        return d.factorCount;
    });
    var path = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);
    var label = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius - 100);
    d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVFusion%20Count.csv", function(data) {
        var total = d3.sum(data, function(d) {
            return d.factorCount;
        });
        var arc = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
        arc.append("path")
            .attr("d", path)
            .attr("fill", function(d, i) {
                return color(i);
            });
        arc.selectAll("arc")
            .data(pie(data))
            .enter()
            .append('text')
            .text(function(d) { 
                return ""  + (d.data.factorCount / total * 100).toFixed(2) + "%"
            })
            .attr("transform", function(d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .style("text-anchor", "middle")
        var legend = g.selectAll("arc")
            .data(pie(data))
            .enter().append("g")
            .attr("transform", function(d,i) {
                return "translate(" + (margin.left) + "," + (margin.top-30) + ")";
            })
            .attr("class", "legend");
        legend.append("rect") 
            .attr("width", 10)
            .attr("height", 10)
            .attr("y", function(d,i){ return i*(30)-10}) 
            .attr("fill", function(d, i) {
                return color(i);
            });
        legend.append("text")
            .attr("y", function(d,i){ return i*(30)}) 
            .attr("x", 11)
            .text(function(d) {
                return "" + d.data.factorCount + " "+ d.data.contributing_factor_vehicle_2 + " " + (d.data.factorCount / total * 100).toFixed(2) + "%";
            });
            
        });

    }
}
function generateScatter(xValue, yValue){
document.getElementById("graphingLocation").innerHTML ="";
var margin = {
            top: 30,
            right: -200,
              bottom: 70,
            left: 100
        },
            width = 500,
            height = 400;

var svg = d3.select("#graphingLocation")
            .append("svg")
            .attr("width", 1000)
            .attr("height", 1300)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
d3.csv("https://raw.githubusercontent.com/dudbas/Database-Visualization/main/DMVSmallTest.csv", function(data) {
var x = d3.scalePoint()
  .range([ 0, width ])
  .domain(data.map(function(d) {return eval(xValue); }))
  .padding(1);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(0,0)rotate(-45)")
    .style("font-size", "4px")
    .style("text-anchor", "end");
    

var y = d3.scalePoint()
  .range([height,0])
  .domain(data.map(function(d) {return eval(yValue);}))
  .padding(1);
svg.append("g")
  .attr("transform", "translate(0," + 0 + ")")
  .call(d3.axisLeft(y))
  .selectAll("text")
    .attr("transform", "translate(-0,0)rotate(45)")
    .style("font-size", "4px")
    .style("text-anchor", "end")

svg.append("text")
                .attr("class", "x label")
                .attr("text-anchor", "end")
                .attr("x", width - 200)
                .attr("y", height + 60)
                .text(xValue.substring(2).toUpperCase());
svg.append("text")
                .attr("class", "y label")
                .attr("text-anchor", "end")
                .attr("y", 6)
                .attr("dy", "-4em")
                .attr("transform", "rotate(-90)")
                .text(yValue.substring(2).toUpperCase());
svg.selectAll("scatter")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", function(d) { return x(eval(xValue)); })
    .attr("cy", function(d) { return y(eval(yValue)); })
    .attr("r", 2.5)
    .style("opacity", 0.2)
    .style("fill", "#990000");
})

}