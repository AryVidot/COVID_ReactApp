import React from 'react'

const WorldLatestCount = () => {

    fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":  "6840c31cf6msh04a65edb601a36cp1684efjsn24791a4303f6"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

    return (
        <>
        <label htmlFor=""><h3>Latest World Total</h3></label>
            <p>Confirmed Cases: XXXX</p>
            <p>recovered: XXXX</p>
            <p>Deaths: XXXX</p>
        </>
    )
}

export default WorldLatestCount;
 