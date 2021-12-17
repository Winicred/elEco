// Chart draw
import { todayDataArray } from "./fetchData.js";
import { tommorowDataArray } from "./fetchData.js";

let pathname = window.location.pathname.replace("/", "").replace(".html", "");

let todayLabel = "";
let tommorowLabel = "";

if (pathname == "" || pathname == "index") {
    todayLabel = "Täna"
    tommorowLabel = "Homme"
} else if (pathname == "index-RU") {
    todayLabel = "Сегодня"
    tommorowLabel = "Завтра"
} else if (pathname == "index-ENG") {
    todayLabel = "Today"
    tommorowLabel = "Tommorow"
} 

const ctx = document.getElementById("myChart").getContext("2d")

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00:00 - 01:00', '01:00 - 02:00', '02:00 - 03:00', '03:00 - 04:00', '04:00 - 05:00', '06:00 - 07:00', '08:00 - 09:00', '10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00', '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00', '17:00 - 18:00', '18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00', '21:00 - 22:00', '22:00 - 23:00'],
        datasets: [
            {
                label: todayLabel,
                data: todayDataArray,
                borderColor: "#02897A",
                backgroundColor: "#02897A",
            },
            {
                label: tommorowLabel,
                data: tommorowDataArray,
                borderColor: '#4D8DFF',
                backgroundColor: '#4D8DFF',
            },
        ]
    },
    options: {
        responsive: true,
        display: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Hours',
              color: '#02897A',
              font: {
                family: 'Poppins',
                size: 20,
                weight: 'normal',
                lineHeight: 1.2,
              },
              padding: {top: 20, left: 0, right: 0, bottom: 0}
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'KWh/cent',
              color: '#02897A',
              font: {
                family: 'Poppins',
                size: 20,
                style: 'normal',
                lineHeight: 1.2
              },
              padding: {top: 30, left: 0, right: 0, bottom: 0}
            }
          }
        }
      },
});
setInterval(function () {
    myChart.update()
}, 1000);

