import React from 'react'
import WorldLatestCount from './WorldLatestCount';
import WorldTodayCount from "./WorldTodayCount";
// import REACT_APP_RAPIDAPI_KEY from "../.env";

// World Total results and Results
const WorldCount = () => {
    
    
    return (
        <>
        <section>
            <WorldLatestCount />
            <WorldTodayCount />
        </section>
            
        </>
    )
}

export default WorldCount
