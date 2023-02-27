var ctx1 = document.getElementById("graphic1").getContext("2d")
var ctx2 = document.getElementById("graphic2").getContext("2d")

var graph = new Chart(ctx1, {
    type: "bar",
    data:{
        labels: ["JavaScript", "Python", "Java", "C/C++", "PHP", "C#"],
        datasets: [{
            label: "Porcentagem de popularidade entre tecnologias em 2005",
            data: [8.39, 2.78, 30.54, 9.85, 19.92, 5.42],
            borderWidth: 6,
            borderColor: 'rgb(0, 100, 255)',
            backgroundColor: 'rgba(0, 100, 255, 0.5)'
        },
        {
            label: "Porcentagem de popularidade entre tecnologias em 2021",
            data: [8.51, 30.24, 17.36, 6.7, 6.22, 6.89],
            borderWidth: 6,
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgba(155, 0, 0, 0.5)'
        }]},
    options: {
        responsive: true
    }})

var graph2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["JavaScript", "Python", "Java", "C/C++", "PHP", "C#"],
        datasets: [{
            backgroundColor: [
                "#00ff00", "#ffff00", "#ff0000", "#0022ff", "#6a0dad", "#00ffff"],
                data: [8.51, 30.24, 17.36, 6.7, 6.22, 6.89],
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Média atual em gráfico de pizza'
        },
        responsive: true
    }
})