let today = (new Date().toLocaleString( "en-EN", {weekday: "short"}).toLowerCase());

const jsonFile = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

let labels = [];
let data = [];

for(obj of jsonFile){
    labels.push(obj.day);
}

for(obj of jsonFile){
    data.push(obj.amount);
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: color => {
                let barIndex = color.index;
                let weekDayIndex = labels.findIndex(n => n == today); 
                let colors = barIndex === weekDayIndex ? "#76B5BC" : 'rgb(236, 119, 95)'
                return colors;
            },           
            hoverBackgroundColor: ['#76B5BC'],
            borderRadius: 3,
            borderSkipped: false //<-- not working for radius bottom 😑
        }]
    },
    options: {
          plugins:{
            tooltip:{
                enabled:true,
                titleAlign: "center",
                titleColor: "black",
                titleDisplay: false,
                yAlign: "bottom",
                backgroundColor: "black",
                displayColors: false,
                displayLabel: false, 
                callbacks:{
                    title: function (){
                        return "";
                    },
                    label: function (tooltipItem){
                        return "$ " +tooltipItem.formattedValue;

                    }
                }
            },
            legend:{
                display: false
            },
        },
        scales: {
            y: {
                display: false,
                beginAtZero: false,
            }, 
            x: {
                ticks:{
                    color: "rgb(156,156,156)"                    
                },
                grid: {
                    lineWidth: 0, 
                    drawBorder: false,
                    stacked: true,
                    
                }
            }
        }
    }

});
