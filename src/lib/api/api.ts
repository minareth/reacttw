import axios from 'axios';

export const getChars = () => axios.get(`http://localhost:8080/chars`);

export const postChars = (data) => axios.post(`http://localhost:8080/chars`, data)
.then(res => {
    console.log('post res', res);
})  
.catch(function (error) {
    // handle error
    console.log('post chars error', error);
});

export const newChar = () => axios.post(`http://localhost:8080/chars/new`);
