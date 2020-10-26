import React from 'react'

const WorldTodayCount = () => {

    fetch("https://covid-19-data.p.rapidapi.com/report/totals?format=json&date=2020-07-21", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "6840c31cf6msh04a65edb601a36cp1684efjsn24791a4303f6"
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
        <label htmlFor=""><h3>Today in the World</h3></label>
            <p>Confirmed Cases: XXXX</p>
            <p>recovered: XXXX</p>
            <p>Deaths: XXXX</p>
        </>
)
}

export default WorldTodayCount
