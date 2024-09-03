let on1 = document.querySelector(".on1");
let off1 = document.querySelector(".off1");
let on2 = document.querySelector(".on2");
let off2 = document.querySelector(".off2");
let on3 = document.querySelector(".on3");
let off3 = document.querySelector(".off3");

function onClickOn1() {
  bulb.src = "on.gif";
  on1.classList.add("on");
  off1.classList.remove("off");
}
function onClickOff1() {
  bulb.src = "off.gif";
  on1.classList.remove("on");
  off1.classList.add("off");
}

function onClickOn2() {
  fan.classList.add("spin");
  on2.classList.add("on");
  off2.classList.remove("off");
}
function onClickOff2() {
  fan.classList.remove("spin");
  on2.classList.remove("on");
  off2.classList.add("off");
}

function onClickOn3() {
  bulb1.src = "air-on.png";
  on3.classList.add("on");
  off3.classList.remove("off");
  
}
function onClickOff3() {
  bulb1.src = "air-off.png";
  on3.classList.remove("on");
  off3.classList.add("off");
}

// Dữ liệu giả lập
  function getData() {
    return {
      temperature: Math.random() * 30 + 20,
      humidity: Math.random() * 100,
      light: Math.random() * 1000
    };
    }

// Cập nhật giao diện
  function updateUI(data) {
    document.getElementById('temperature').textContent = data.temperature.toFixed(2);
    document.getElementById('humidity').textContent = data.humidity.toFixed(2);   
    document.getElementById('light').textContent = data.light.toFixed(2);
  }
   // Cập nhật dữ liệu định kỳ
setInterval(() => {
const data = getData();
updateUI(data);
}, 1000);
// -----------------------------------------Chart------------------------
const labels = [];
const temperatureData = [];
const humidityData = [];
const lightData = [];

for (let i = 0; i < 10; i++) {
  labels.push(`${i} phút`);
  temperatureData.push(Math.floor(Math.random() * 30) + 20); // Nhiệt độ từ 20 đến 50 độ C
  humidityData.push(Math.floor(Math.random() * 50) + 50); // Độ ẩm từ 50 đến 100%
  lightData.push(Math.floor(Math.random() * 1000)); // Ánh sáng từ 0 đến 1000 lux
}

// Cấu hình biểu đồ
const data = {
  labels: labels,
  datasets: [{
      label: 'Nhiệt độ',
      data: temperatureData,
      borderColor: 'red',
      fill: false
    },
    {
      label: 'Độ ẩm',
      data: humidityData,
      borderColor: 'blue',
      fill: false
    },
    {
      label: 'Ánh sáng',
      data: lightData,
      borderColor: 'green',
      fill: false
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

// Vẽ biểu đồ
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
