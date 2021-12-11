const ctx = document.getElementById("myChart").getContext("2d");
// let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);
// let maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);

const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "active",
      "confirmed",
      "new confirmed",
      "new deaths",
      "deaths",
      "recovered",
      "critical",
    ],
    datasets: [
      {
        label: "covid",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 4,
        options: {
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 50000000,
            },
          },
        },
      },
    ],
  },
});

// Chart.js remove and add functions

// addData(myChart, data);
