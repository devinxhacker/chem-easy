function generateGraph() {
    var xValues = [];
    var yValues = [];

    // Loop through table rows and collect input values
    var tableRows = document.querySelectorAll('#dataInput tr');
    tableRows.forEach(function(row, index) {
        if (index !== 0) { // Skip header row
            var xInput = row.querySelector('.x-input').value;
            var yInput = row.querySelector('.y-input').value;
            xValues.push(parseFloat(xInput));
            yValues.push(parseFloat(yInput));
        }
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'Y Values',
                data: yValues,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {}
    });
}


function calculateConductometry(){
   var c1 = document.getElementById("con1").value;
   var c2 = document.getElementById("con2").value;
   var v1 = document.getElementById("vol1").value;
   var v2 = document.getElementById("vol2").value;
   var k1 = 0.0221;
   var mytable = "<tr><td>Volume</td><td>Conductance</td></tr><tr>";

   for (var i = 0; i <= v1 ; i+=0.2) {
     mytable += "</tr><tr>";
     mytable += "<td><input type="number" class = "x-input" value=" + i.toFixed(1) + "></td><td><input type="number" class="y-input"></td>";
   }
   mytable += "</tr><tr>";
   mytable += "<td><input type="number" class = "x-input" value=" + i.toFixed(1) + "></td><td><input type="number" class="y-input"></td>";

   mytable += "</tr>";

   document.getElementById("dataInput").innerHTML = mytable;
}
