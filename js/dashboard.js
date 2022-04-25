$(".counter-up").counterUp({
  delay: 10,
  time: 1000,
});

const go = function (url) {
  location.href = url;
};

const dateArr = [
  "jul 21",
  "jul 20",
  "jul 19",
  "jul 18",
  "jul 17",
  "jul 16",
  "jul 15",
  "jul 14",
  "jul 13",
  "jul 12",
  "jul 11",
];

const orderCount = [6, 4, 3, 5, 7, 8, 9, 6, 8, 5, 7];
const viewerCountArr = [3, 12, 16, 14, 21, 18, 20, 33, 14, 16, 20];

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dateArr,
    datasets: [
      {
        label: "Orders Count",
        data: orderCount,
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)"],
        borderWidth: 1,
        tension: 0.3,
        fill: true,
      },
      {
        label: "Viewers Count",
        data: viewerCountArr,
        backgroundColor: ["rgba(153, 102, 255, 0.2)"],
        borderColor: ["rgba(153, 102, 255, 1)"],
        borderWidth: 1,
        tension: 0.3,
        fill: true,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
});

const orderFromPlace = [5, 15, 4, 9, 7];
const place = ["YGN", "MDY", "NPT", "MLM", "MGW"];

const ovChart = document.getElementById("ovChart").getContext("2d");
const ov = new Chart(ovChart, {
  type: "doughnut",
  data: {
    labels: place,
    datasets: [
      {
        label: "Order Place",
        data: orderFromPlace,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
        position: "bottom",
      },
    },
  },
});
