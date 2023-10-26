//initial array of freelancers
const freelancers = [
  { name: "Harry", occupation: "Writer", price: 45 },
  { name: "Hermione", occupation: "Teacher", price: 50 },
  { name: "Ron", occupation: "Programmer", price: 70 },
];
const maxFreelancers = 10;

//possible names and occupations
const names = ["Snape", "Dumbledore", "Voldemort", "Hagrid"];
const prices = [60, 55, 72];
const occupations = ["Teacher", "Programer", "Driver", "Gardener"];

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);
render();


//a function to render the initial freelancer data
function render() {
  // Render the freelancers
  const freeTable = document.querySelector("tbody");
  const freelancersTemplate = freelancers.map((freelancer) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.textContent = freelancer.name;
    td1.style.textAlign = "center";
    const td2 = document.createElement("td");
    td2.textContent = freelancer.occupation;
    td2.style.textAlign = "center";
    const td3 = document.createElement("td");
    td3.textContent = `$${freelancer.price}`;
    td3.style.textAlign = "center";
    tr.append(td1, td2, td3);
    return tr;
  });
  freeTable.replaceChildren(...freelancersTemplate);
}

//a function to calculate the average starting price of your freelancers' array
function getAverage(freelancers) {
    const initialValue = 0;
    const priceAverage = freelancers.reduce(
      (acc, item) => acc + item.price, 
      initialValue
    );
    return priceAverage/(freelancers.length);
  }
  const body = document.querySelector("#average-price");
  const phrase = document.createElement("p");
  phrase.textContent = `The average starting price is $${getAverage(freelancers)}.`;
  phrase.style.textAlign = "center";
  body.append(phrase);

  //a function to generate a new random freelancer
  function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const price = prices[Math.floor(Math.random() * prices.length)]
    freelancers.push({name, occupation, price});
    render();
 
      // TODO: Stop adding freelancers if we've reached the maximum number of freelancers
   if (freelancers.length === maxFreelancers) {
     clearInterval(addFreelancerIntervalId);
   }
   }

   console.log(freelancers);
