const div = document.querySelector("div");
div.style.backgroundColor = "lightGray";
const title1 = document.createElement("h1");
title1.textContent = "Freelancer Forum", "Available Freelancers";
title1.style.textAlign = "center";
const title2 = document.createElement("h2");
title2.textContent = "Available Freelancers";
title2.style.textAlign = "center";
div.append(title1, title2);

let myTable = document.querySelector('#table');
/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
const maxFreelancers = 10;
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Prof. Possibility", price: 43, occupation: "driver" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
  ];

const names = ["Prof. Snape", "Dr. Dumbledore", "Prof. Mcgonagall", "Dr. Hagrid"];
const prices = [43, 51, 76, 47];
const occupations = ["teacher", "programer", "driver", "gardener"];

console.table(freelancers);

let headers = ['Name', 'Price', 'Occupation'];

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);
render();

function render() {
let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.map(headerText => {
    let header = document.createElement('th');
    let textNode =document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});
table.appendChild(headerRow);

freelancers.map(free => {
    let row = document.createElement('tr');

    Object.values(free).map(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })
    table.appendChild(row);
});

myTable.appendChild(table);
}

//Add a random freelancer to the freelancers array
function addFreelancer() {
   const name = names[Math.floor(Math.random() * names.length)]
   const price = prices[Math.floor(Math.random() * prices.length)]
   const occupation = occupations[Math.floor(Math.random() * occupations.length)]
   freelancers.push({name, price, occupation});
   render();

     // TODO: Stop adding freelancers if we've reached the maximum number of freelancers
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
  }



