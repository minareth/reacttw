import axios from 'axios';

export const getChars = () => axios.get(`http://localhost:8080/chars`)
.then(res => {
    console.log('getChars res', res);
    return res;
})  
.catch(function (error) {
    // handle error
    console.log('getChars error', error);
});

export const getSingleChar = (id) => axios.get(`http://localhost:8080/char?id=${id}`)
.then(res => {
    console.log('getSingleChar res', res);
    return res;
})  
.catch(function (error) {
    // handle error
    console.log('getSingleChar error', error);
});

export const saveSecondary = (id, secondary) => axios.post(`http://localhost:8080/chars/secondary?id=${id}&secondary=${secondary}`)
.then(res => {
    console.log('saveSecondary res', res);
})  
.catch(function (error) {
    // handle error
    console.log('saveSecondary error', error);
});

export const newChar = () => axios.post(`http://localhost:8080/chars/new`)
.then(res => {
    console.log('newChar res', res);
})  
.catch(function (error) {
    // handle error
    console.log('newChar error', error);
});

export const deleteChar = (id) => axios.post(`http://localhost:8080/chars/delete?id=${id}`)
.then(res => {
    console.log('deleteChar res', res);
})  
.catch(function (error) {
    // handle error
    console.log('deleteChar error', error);
});

export const upgradeChar = (id, type, name) => axios.post(`http://localhost:8080/chars/upgrade?id=${id}&type=${type}&name=${name}`);

export const play = (id, char) => axios.post(`http://localhost:8080/play?id=${id}&char=${char}`)
.then(res => {
    console.log('play res', res);
    return res;
})  
.catch(function (error) {
    // handle error
    console.log('play error', error);
});