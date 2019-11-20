const express = require('express')
const axios = require('axios')

const app = express();

let url1 = "https://swapi.co/api/starships/?page=2"
let url2 = "https://swapi.co/api/starships/?page=3"

const fetchURL = (url) => axios.get(url)
const promiseArray = [url1, url2].map(fetchURL)

console.log(promiseArray)