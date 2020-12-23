import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from '../context';

function InfoBox() {
    const {countryInfo:{todayCases, todayRecovered, todayDeaths, cases, recovered, deaths}} = useGlobalContext()
    // console.log(todayCases, todayRecovered, todayDeaths);
    const setUpCountryInfo = [
        {
            title: "Coronavirus Cases",
            cases:todayCases,
            total:cases
        },
        {
            title: "Recovered",
            cases:todayRecovered,
            total:recovered
        },
        {
            title: "Deaths",
            cases:todayDeaths,
            total:deaths
        }
    ]
    // console.log(setUpCountryInfo);
    return (
        <div className="infoContainer">
            {setUpCountryInfo.map((item, index)=>{
                const {title, cases, total} = item;
                return(
                    <Card className="infoBox" key={index}>
                        <CardContent>
                            <Typography className="infoTitle" color="textSecondary">
                                {title}
                            </Typography>
                            <h2 className="infoCases">{cases}</h2>
                            <Typography className="infoTotal" color="textSecondary">
                                {total} Total
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default InfoBox
