const axios = require('axios');
const fs = require('fs');
require('dotenv').config()

/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */

axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
    fs.writeFileSync('users.json', JSON.stringify(data));

}).catch(e => {
    console.log(e)
})

/**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script.
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
 */

if (process.env.ENV === 'PRODUCTION') {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(({data}) => {
        fs.writeFileSync('todos.json', JSON.stringify(data));

    }).catch(e => {
        console.log(e)
    })
} else if (process.env.ENV === 'DEV') {
    axios.get('https://jsonplaceholder.typicode.com/albums').then(({data}) => {
        fs.writeFileSync('albums.json', JSON.stringify(data));

    }).catch(e => {
        console.log(e)
    })
}