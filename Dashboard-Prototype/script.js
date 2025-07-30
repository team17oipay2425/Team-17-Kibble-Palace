// Visitor Trends Line Chart
const trendCtx = document.getElementById("trendChart").getContext("2d");
const trendData = [120, 190, 300, 150, 260, 380, 420];
const trendTotal = trendData.reduce((a, b) => a + b, 0);

new Chart(trendCtx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Visitors",
      data: trendData,
      borderColor: "#1d3557",
      backgroundColor: "rgba(29, 53, 87, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#1d3557"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: 'end',
        align: 'top',
        offset: 6,
        color: '#000',
        font: { weight: 'bold', size: 12 },
        formatter: value => `${((value / trendTotal) * 100).toFixed(1)}%`
      }
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 100 }, grid: { color: "#eee" } },
      x: { grid: { display: false } }
    }
  },
  plugins: [ChartDataLabels]
});

// Country of Origin Pie Chart
const countryCtx = document.getElementById("countryChart").getContext("2d");
const countryData = [40, 25, 15, 10, 10];
const countryLabels = ["UK", "USA", "Germany", "France", "Others"];
const countryTotal = countryData.reduce((a, b) => a + b, 0);

new Chart(countryCtx, {
  type: "pie",
  data: {
    labels: countryLabels,
    datasets: [{
      data: countryData,
      backgroundColor: ["#1d3557", "#457b9d", "#a8dadc", "#f4a261", "#e76f51"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 14 } },
      datalabels: {
        color: '#fff',
        font: { weight: 'bold', size: 14 },
        formatter: value => `${((value / countryTotal) * 100).toFixed(1)}%`
      },
      tooltip: {
        callbacks: {
          label: context => {
            const value = context.raw;
            const percent = ((value / countryTotal) * 100).toFixed(1);
            return `${context.label}: ${value} (${percent}%)`;
          }
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});

// Weather Impact Bar Chart
const weatherCtx = document.getElementById("weatherChart").getContext("2d");
const weatherData = [400, 300, 180];
const weatherLabels = ["Sunny", "Cloudy", "Rainy"];
const weatherTotal = weatherData.reduce((a, b) => a + b, 0);

new Chart(weatherCtx, {
  type: "bar",
  data: {
    labels: weatherLabels,
    datasets: [{
      label: "Avg Visitors",
      data: weatherData,
      backgroundColor: ["#fbc531", "#7f8fa6", "#00a8ff"],
      borderRadius: 10,
      barPercentage: 0.6
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: 'end',
        align: 'start',
        offset: 10,
        color: '#000',
        font: { weight: 'bold', size: 13 },
        formatter: value => `${((value / weatherTotal) * 100).toFixed(1)}%`
      },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.formattedValue}`
        }
      }
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 100 }, grid: { display: false } },
      x: { grid: { display: false } }
    }
  },
  plugins: [ChartDataLabels]
});

// Top 3 Events Horizontal Bar Chart
const eventsCtx = document.getElementById("eventsChart").getContext("2d");
const eventsData = [260, 200, 150];
const eventLabels = ["Garden Tour", "Art Workshop", "Evening Jazz"];

new Chart(eventsCtx, {
  type: "bar",
  data: {
    labels: eventLabels,
    datasets: [{
      label: "Attendees",
      data: eventsData,
      backgroundColor: ["#6a4c93", "#1982c4", "#ff595e"],
      borderRadius: 8,
      barPercentage: 0.6
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: 'center',
        align: 'center',
        color: '#fff',
        font: { weight: 'bold', size: 13 },
        formatter: value => `${value} visitors`
      },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.formattedValue}`
        }
      }
    },
    scales: {
      x: { beginAtZero: true, ticks: { stepSize: 50 }, grid: { display: false } },
      y: { grid: { display: false } }
    }
  },
  plugins: [ChartDataLabels]
});
