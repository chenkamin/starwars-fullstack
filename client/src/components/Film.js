import React, { useState, useEffect } from "react";
import makeApiCall from "../utils/apiService";
import Pagination from "./Pagination";
function Film({characters}) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage =10;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = characters.slice(indexOfFirstRecord, 
      indexOfLastRecord);
  const nPages = Math.ceil(characters.length / recordsPerPage)

  
  const renderUsers = () => {
      return currentRecords.map(({ id, name, age, hobby },i) => {
      return <tr key={id} >
      <td style={{ padding: '10px', border: '1px solid black' }}>{i+1}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
    </tr>
    })
  }

  const renderTable = () => {
    return (
      <table>
        <tbody>
          {renderUsers()}
        </tbody>
      </table>
    )
  }

  return ( 
  <div> 
     {renderTable()}
    <Pagination 
    nPages={nPages} 
    currentPage={currentPage} 
    setCurrentPage={setCurrentPage} 
    />
  </div>
  )
  }

export default Film;
