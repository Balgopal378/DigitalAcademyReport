var app = angular.module("MyApp",['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
app.controller("BarCtrl",function ($scope) {
$scope.init = false;
$scope.chartPrint = function (id) {
  console.log(id);
var ctx = document.getElementById(id);
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Delhi", "Bangalore", "Bhubaneswar", "Hyderabad", "Pune", "Chennai"],
        datasets: [{
            label: '# of candidates',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
$scope.init = true;
console.log('print chart');
};
});

app.controller("doughnutCtrl",function ($scope) {
$scope.init = false;
$scope.chartPrint = function (id) {
  console.log(id);
var ctx = document.getElementById(id);
var data = {
    labels: [
        "MEAN",
        "NERM",
        "MERN"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#3333cc",
                "#00b8e6",
                "#ff80bf"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
});
$scope.init = true;
console.log('print chart');
};
});

app.controller("pieCtrl",function ($scope) {
$scope.init = false;
$scope.chartPrint = function (id) {
  console.log(id);
var ctx = document.getElementById(id);
var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var myChart = new Chart(ctx, {
    type: 'pie',
    data: data
});
$scope.init = true;
console.log('print chart');
};
});
