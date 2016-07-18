angular.module("MyApp",['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller("doughnutCtrl",function ($scope) {
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
