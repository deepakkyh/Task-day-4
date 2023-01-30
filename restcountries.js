//const x = 10; // ---> declaration and initialization

// // const ---> keyword
// // x --> variable

 //function someFunc(element) {
   //return element;
 //}


// // function, return ----> keyword
// // someFunc, element ---> user defined 

 //const obj = {
  // name: 'sanjay'
 //}


 //console.log('Hello ', obj);

 //const a = 10;
 //const b = 100;
 //function sum(a, b) {
   //return a + b;
 //}

 //console.log(sum(a,b));



 const countriesRequest = new XMLHttpRequest();

countriesRequest.open('GET', 'https://restcountries.com/v3.1/all');

countriesRequest.send();

countriesRequest.onload = function() {
const countries = JSON.parse(countriesRequest.responseText);

function displayCountryInfo (country) {
    console.log(country.name.common, country.flag, country.region, country.subregion, country.population);
}
countries.forEach(displayCountryInfo);
}



