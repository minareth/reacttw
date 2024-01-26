import axios from 'axios';

// GET request for remote image in node.js
axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
        console.log('res', res);
    })  
    .catch(function (error) {
        // handle error
        console.log(error);
    });
