//something
const mongoose = require('mongoose')

const Schema = mongoose.Schema
let directions = new Enumerator(['NORTH', 'SOUTH'])

const freewaySchema = new Schema({
  highwayname: { type: String, required: true},
  direction: {type: directions, required: true}

  
})


/*
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
      */