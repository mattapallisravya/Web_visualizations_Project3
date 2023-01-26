const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//     const data = {
//         labels: [
//         'Eating',
//         'Drinking',
//         'Sleeping',
//       'Designing',
//       'Coding',
//       'Cycling',
//       'Running'
//     ],
//     datasets: [{
//       label: 'My First Dataset',
//       data: [65, 59, 90, 81, 56, 55, 40],
//       fill: true,
//       backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       borderColor: 'rgb(255, 99, 132)',
//       pointBackgroundColor: 'rgb(255, 99, 132)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgb(255, 99, 132)'
//     }, {
//       label: 'My Second Dataset',
//       data: [28, 48, 40, 19, 96, 27, 100],
//       fill: true,
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgb(54, 162, 235)',
//       pointBackgroundColor: 'rgb(54, 162, 235)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgb(54, 162, 235)'
//     }]
//   };

//   const config = {
//     type: 'radar',
//     data: data,
//     options: {
//       elements: {
//         line: {
//           borderWidth: 3
//         }
//       }
//     },
//   };

  


