'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlotSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the plot'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },
  location:{
    type: String,
    default: ['here']
  },
  description:{
    type: String,
    default: ['some plot']
  },
  price:{
	 type:Number,
   required: 'Kindly enter the price'

  }
});

module.exports = mongoose.model('Plots', PlotSchema);
