import React from 'react'
import { useGlobalContext } from '../context'

function TableData() {
    const {tableData} = useGlobalContext()
    // console.log(tableData);
    return (
        <div className="table">
            {tableData.map(({country,cases},index)=>{
                return(
                    <tr key={index}>
                        <td>{country}</td>
                        <td>{cases}</td>
                    </tr>
                )
            })}
        </div>
    )
}

export default TableData
