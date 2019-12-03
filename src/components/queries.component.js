import React, {Component} from 'react'


export default class queries extends Component {
  /*constructor(props){
    super(props)
    this.state={

    }
  }
*/
  render(){
    return(
      <div>
        <h1>This is where our queries will go</h1>
        <ul>
          <li>
            <h4>Querie 1: Number of High Speeds </h4>
            <p> We are looking for the count of speeds > 100mph throughout a day </p>
            <p>Show the query, and the output, maybe theres a JS library that can do the same graph as what we got in python</p>
          </li>
          <li>
            <h4>Querie 2: Total Volume Throughout the day of Sept 21, 2011 </h4>
            </li>
          <li>
            <h4>Querie 3: Travel Times at 5 minute intervals throughout the day </h4>
            </li>
          <li>
            <h4>Querie 4: Peak Travel Times during Rush Hour, 9/22/2011 </h4>
          </li>
          <li>
            <h4>Querie 5: Average Travel Times during Rush Hour, 9/22/2011 </h4>
          </li>
          <li>
            <h4>Querie 6: Route Finding </h4>
          </li>
        </ul>
      </div>
    )
  }
}