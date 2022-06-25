/* <div class="chart">
<div class="title">7878</div>
<div class="column"></div>
<div class="days">mon</div>
</div> */
import data from './data.json' assert{ type: "json"};

window.onload = () => {
   
  //get reference from chartstick
  let chartStick = document.querySelector('.chart-stick');
  let index = 0;
  let max = 0;
  data.forEach((item, idx) => {

    if(item.amount > max){
      max = item.amount;
      index = idx;
    }

    let chart = document.createElement('div');
    let title = document.createElement('div');
    let column = document.createElement('div');
    let days = document.createElement('div');

    chart.classList = 'chart';
    title.classList = 'title';
    column.classList = 'column';
    days.classList = 'days';

    title.innerHTML = "$" + item.amount;
    column.style.height = `${item.amount}` * 2.5 + 'px';
    days.innerHTML = item.day;
    
    chart.append(title, column, days);
    chartStick.appendChild(chart);
  })

  let activeChart = document.querySelectorAll('.chart')[index];
  activeChart.classList.add('active');



} 