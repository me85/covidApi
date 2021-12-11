// const continents = [{ Asia: 0 }, { Africa: 1 }, { Europe: 2 }, { Americas: 3 }, { Oceania: 4 }];
// import { myChart } from "./drewTable.js";
const AmericasButton = document.querySelector("#Americas");
const AmericasDiv = document.querySelector(".americasDiv");

const API_COVID = "http://corona-api.com/countries/";
const API_PROXY = "https://intense-mesa-62220.herokuapp.com/";
let continents = ["Asia", "Africa", "Europe", "Americas", "Oceania"];

async function fetchContinents() {
  const response = await fetch(
    `${API_PROXY}https://restcountries.herokuapp.com/api/v1/region/${continents[3]}`
  );
  const countries = await response.json();
  return countries;
}

fetchContinents().then((countries) => {
  countries; // fetched countries
  countriesByCca2 = countries.map((country) => country.cca2);
  const urlCountryArray = creatCovidCountryURL(countriesByCca2);
  fetchCountries(urlCountryArray);
});

async function fetchCountries(urlCountryArray) {
  futchAllCovidCountry(urlCountryArray);
  try {
    const response = await fetch(urlCountryArray[1]);
    const eachCountry = await response.json();
  } catch (err) {
    console.error(err);
  }
}

function creatCovidCountryURL(continentCca2Array) {
  const map1 = continentCca2Array.map((cca2Element) => `${API_PROXY}${API_COVID}${cca2Element}`);
  return map1;
  //   console.log(map1);
}

async function futchAllCovidCountry(result) {
  for (let urlCovidCountry of result) {
    try {
      const response = await fetch(urlCovidCountry);
      //   console.log(urlCovidCountry);
      const eachCountry = await response.json();
      //   console.log(eachCountry);
      const americaDivElement = document.createElement("div");
      americaDivElement.dataset.type = eachCountry.data.name;
      americaDivElement.classList.add("americaDiv");
      americaDivElement.innerText = eachCountry.data.name;
      AmericasDiv.appendChild(americaDivElement);

      // return eachCountry;
      americaDivElement.addEventListener("click", () => {
        const data = eachCountryCovidInformation(eachCountry);

        function addData(chart, data) {
          // chart.data.labels.push(label);
          chart.data.datasets.forEach((dataset) => {
            dataset.data.push(
              //   data.active,
              data.confirmed,
              data.new_confirmed,
              data.new_deaths,
              data.deaths,
              data.recovered,
              data.critical
            );
          });
          console.log(chart.data.datasets);
          chart.update();
        }

        addData(myChart, data);

        function removeData(chart) {
          //   chart.data.labels.pop(label);
          chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
          });
          chart.update();
        }

        removeData(myChart);
      });
    } catch (err) {
      console.error(err);
    }
    // console.log(urlCovidCountry);
  }
}

// futchAllCovidCountry().then((eachCountry) => {
//   eachCountry;
// });

function eachCountryCovidInformation(eachCountry) {
  let countryCovidObject = {
    name: eachCountry.data.name,
    active: eachCountry.data.timeline[0].active,
    confirmed: eachCountry.data.timeline[0].confirmed,
    new_confirmed: eachCountry.data.timeline[0].new_confirmed,
    new_deaths: eachCountry.data.timeline[0].new_deaths,
    deaths: eachCountry.data.timeline[0].deaths,
    recovered: eachCountry.data.timeline[0].recovered,
    critical: eachCountry.data.latest_data.critical,
  };
  //   console.log(countryCovidObject);
  return countryCovidObject;
}
