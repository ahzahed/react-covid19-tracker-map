import { FormControl, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Header() {
    const {countries, country, onCountryChange} =useGlobalContext();
    // console.log(countries);
    // const [country, setCountry] = useState('worldwide');
    
    // const onCountryChange = (e)=>{
    //     const countryCode = e.target.value;
    //     setCountry(countryCode);
    //     // const url = country === 'worldwide'?''
    // }

    return (
        <React.Fragment>
        <div className="header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl className="dropdown">
                <Select variant="outlined" value={country} onChange={onCountryChange}>
                    <MenuItem value="worldwide">Worldwide</MenuItem>
                    {countries.map((item,index)=>{
                        // console.log(item);
                        return <MenuItem value={item.value} key={index}>{item.name}</MenuItem>
                    })}
            
                </Select>
            </FormControl>
        </div>
        </React.Fragment>
    )
}

export default Header
