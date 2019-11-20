const express = require('express')
const axios = require('axios')

const app = express();

//the urls are for the starship section of swapi
let url1 = "https://swapi.co/api/starships/?page=1"
let url2 = "https://swapi.co/api/starships/?page=2"
let url3 = "https://swapi.co/api/starships/?page=3"
let url4 = "https://swapi.co/api/starships/?page=4"

function fetchURL(url) {
  return axios.get(url)
}

const promiseArray = [url1, url2, url3, url4].map(fetchURL)
//promiseArray is an array of promises

app.get('/starships', (request, response)=> {
  Promise.all(promiseArray) //PromiseAll waits for all the promises to return and then returns an array
  .then((data) => { //data is an array of responses
    shipsArray = []
    data.forEach(datum => {
      datum.data.results.forEach(ship => {
        shipsArray.push(ship)
      })
    })
    response.json(shipsArray)
  })
  .catch((err) => {
    });
})


const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
