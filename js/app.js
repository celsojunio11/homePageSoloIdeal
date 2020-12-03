//var ctx = document.getElementById("myChart");

//var chart = ctx.getContext('2d');

//chart.fillStyle = "red";
//chart.fillRect(0,0,100,200);

var ctx = document.getElementById("myChart");

// var chart = ctx.getContext('2d');

// chart.fillStyle = "red";
// chart.fillRect(0,0,100,200);

// chart.fillStyle = "blue";
// chart.fillRect(150, 50, 100, 200);


var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['pH', 'M.O', 'P', 'K', 'Ca', 'Mg', 'Al', 'S', 'B', 'Cu', 'Fe', 'Mn', 'Zn'],
        
        
        datasets: [{
            label: 'Gráfico',
            backgroundColor: ['green', '#B0E0E6', 'green', '#B0E0E6', 'green', '#B0E0E6', 'green', '#B0E0E6', 'green', '#B0E0E6', 'green', '#B0E0E6', 'green'],
            borderColor: 'rgb(255, 99, 132)',
            data: [4, 0.5, 1, 2, 0.9, 4.2, 3, 1.5, 8, 7, 6, 4, 10]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

