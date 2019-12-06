import React, {Component} from 'react'
import RC from './RC.components'

// export default class results extends Component {
//   constructor(props){
//     super(props)

//     this.state ={

//     }
//   }

//   render(){
//     return(
//       <div>
//         <p> This is where we will be once we run our query. :)  </p>
//       </div>

//     )
//   }
// }


//we need some mapping to another component to make these results look nice and boxy.
const results = data =>{
  return(
  <div>
    <ul className="list-group">
      {data.map((data) => (
        <li>
          <RC {...data} />
        </li>
      ))}
    </ul>
    {data[0]}
    
  </div>
  )
}

export default results;