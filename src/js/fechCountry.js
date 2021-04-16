import warningNotice from './warningNotice.js';

export const country = (name) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(err => {
            warningNotice();
            return
        });
}