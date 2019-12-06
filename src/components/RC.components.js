import React from 'react'

//Takes in the data returned from the query. we want all this to be inline blocks

const RC = ({ highway }) => (
  <div className="card">
    <div>{highway}</div>
  </div>
);