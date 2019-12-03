import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default class classproject extends Component{
  constructor(props) {
    super(props)
    //If adding more changes create more of these
    this.onChangeLocationText = this.onChangeLocationText.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)

    this.state = {
      _id: '',
      highwayname: '',
      detectorid: 0,
      milepost: 0,
      stationid: 0,
      detectorclass: 0,
      lanenumber: 0,
      upstream: 0,
      downstream: 0,
      stationclass: 0,
      numberlanes: 0,
      length: 0,
      locationtext: '',
      latlon: '',
      shortdirection: '',
      direction: '',
      date: new Date(),
    }
  }

  componentDidMount(){
    //This is the default values that I'm placing, need to connect to database
    this.setState({
      _id: ['5db'],
      highwayname: '205-North',
      lanenumber: 1,
      numberlanes: 3, 
      length: .97,
      locationtext: 'Sunnyside',
      date: new Date()
      //Keep adding more code for each of the fields
    })
  }
  
  //Copy and paste this for all the things that we want to change wtih a text box
  onChangeLocationText(e){
    this.setState({
      locationtext: e.target.value
    })
  }
  onChangeId(e){
    this.setState({
      _id: e.target.value
    })
  }
  onChangeDate(date){
    this.setState({
      date: date
    })
  }

  onSubmit(e){
    e.preventDefault();

    const freeway ={
      highway: this.state.highwayname,
      locationtext: this.state.locationtext,
      date: this.state.date,
      //If we are changing more suff add here.
    }
    console.log(freeway)
    window.location = '/'
  }
  render(){
    return(//The copy pasta is https://github.com/beaucarnes/mern-exercise-tracker-mongodb/blob/master/src/components/create-exercise.component.js
      //Create inputs for each value that is important to create a query. 
      //input
      <div>
      <h3>Create Query of Highway database</h3>
      <p> We want to be able to build basic queries and get results here. </p>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Highway Name </label>
          <input type="text"
            required
            className="form-control"
            value={this.state.highwayname}
            onChange={this.onChangeLocationText} /> {/*This is the wrong onChange method. Change later */}
        </div>
        <div className="form-group"> 
          <label>Date: </label>
          <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
        </div>
        <div className="form-group">
          <input type="submit" value="Get results" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}


/*
          <select ref="userInput"
              required
              className="form-control"
              value={this.state._id}
              onChange={this.onChangeId}>
              {
                this.state.users.map(function(_id) {
                  return <option 
                    key={_id}
                    value={_id}>{_id}
                    </option>;
                })
              }
          </select>
<div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>



                <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>

*/