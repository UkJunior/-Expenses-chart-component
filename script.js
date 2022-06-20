
//import the data.json file
import data from './data.json' assert{ type: "json"};

// console.log(data);


// const data = fetch('data.json')
// .then(response => response.json())
// .then(data =>  {
//     console.log(data);
//     return data
// }
// )
// .catch(error => console.log(error));
// console.log('texting');
//  console.log(objectToArray(data));
// convert data into array
  // let dataArray = Object.values(data);
  
let chartStick = document.querySelector('.chart-stick');
data.forEach(function(item){
    // console.log('item.day');
    let chart = document.createElement('div');
    let column = document.createElement('div');
    let days = document.createElement('div')
    chart.classList = 'chart';
    // let dollorsign = $;
    chart.innerHTML = 
    `<div class="">
    <div class=" title active"><span>$</span>${item.amount}</div>
    </div>`;
    // chart.style.backgroundColor = item.color;

    // divide multiply the amount by 2 and add px to make height
    let height = (item.amount)* 2.5 + "px";
    days.innerHTML = `${item.day}`;
    column.style.height = `${height}`;
    if(item.day === "wed"){
    
      column.setAttribute('class', 'active');
    } else{
        column.setAttribute('class', 'column');
      }
    chart.appendChild(column);
    chart.append(days);
    chartStick.appendChild(chart);
    // console.log(column.classList);
    // if()
    
  })
  
  


// function addTitle(){

//   let newColumn = column;
  
//   for(let x in newColumn){
//     console.log(x);
//   }
// }
// name(column)
      // console.log(column);