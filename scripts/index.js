//   const API_URL =
//     "https://intense-mesa-62220.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/asia";

// const continents = [{ Asia: 0 }, { Africa: 1 }, { Europe: 2 }, { Americas: 3 }, { Oceania: 4 }];
const API_COVID = "http://corona-api.com/countries";

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

  fetchcountries(countriesByCca2);
});

async function fetchcountries(countriesByCca2) {
  console.log(countriesByCca2);

  try {
    const response = await fetch(`${API_PROXY}${API_COVID}`);
    const eachCountry = await response.json();
    return eachCountry;
  } catch (err) {
    console.error(err);
  }
}

fetchcountries().then((eachCountry, countriesByCca2) => {
  const arrayCovidPerContinent = [];
  function findCommonElement(eachCountry, countriesByCca2) {
    // console.log(countriesByCca2);
    // Loop for array1
    for (let i = 0; i < eachCountry.length; i++) {
      // Loop for array2
      for (let j = 0; j < countriesByCca2.length; j++) {
        // Compare the element of each and
        // every element from both of the
        // arrays
        if (eachCountry[i] === countriesByCca2[j]) {
          // Return if common element found
          arrayCovidPerContinent.push(array1[i]);
        }
      }
    }

    return arrayCovidPerContinent;
  }
  console.log("this is from find common element", findCommonElement(eachCountry, countriesByCca2));

  // fetched countries
  //   console.log(eachCountry);
  //   if (Country.data.code === "AS")
  // Function definition with passing two arrays
  //   const arrayCovidPerContinent = [];
  //   function findCommonElement(eachCountry, countriesByCca2) {
  //     console.log(eachCountry);
  //     // Loop for array1
  //     for (let i = 0; i < eachCountry.length; i++) {
  //       // Loop for array2
  //       for (let j = 0; j < countriesByCca2.length; j++) {
  //         // Compare the element of each and
  //         // every element from both of the
  //         // arrays
  //         if (eachCountry[i] === countriesByCca2[j]) {
  //           // Return if common element found
  //           arrayCovidPerContinent.push(array1[i]);
  //         }
  //       }
  //     }
  //     // Return if no common element exist
  //     return arrayCovidPerContinent;
  //   }
  //   console.log(findCommonElement(eachCountry, countriesByCca2));
  //   console.log(eachCountry.data.name);
  //   console.log(eachCountry.data.timeline[0].active);
  //   console.log(eachCountry.data.timeline[0].confirmed);
  //   console.log(eachCountry.data.timeline[0].new_confirmed);
  //   console.log(eachCountry.data.timeline[0].new_deaths);
  //   console.log(eachCountry.data.timeline[0].deaths);
  //   console.log(eachCountry.data.timeline[0].recovered);
  //   console.log(eachCountry.data.timeline[0].recovered);
  //   console.log(eachCountry.data.latest_data.critical);
});
