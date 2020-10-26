import React from 'react'
import CountryLatestCount from './CountryLatestCount'
import CountryTodayCount from "./CountryTodayCount"

const CountryCount = () => {
    return (
        <>
            <h2>Overview by Country</h2>
            <input placeholder="Choose Country..."></input>
            <section>
                <CountryLatestCount />
                <CountryTodayCount />
            </section>   
        </>
    )
}

export default CountryCount
