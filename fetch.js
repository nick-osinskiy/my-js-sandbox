'use strict'

const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.json();
    });
}

sendRequest('GET', requestURL)
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })

const body = {
    name: 'Nick Ossinskiy',
    age: 30
}

// sendRequest('POST', requestURL, body)
//     .then(data => { console.log(data) })
//     .catch(err => { console.log(err) })