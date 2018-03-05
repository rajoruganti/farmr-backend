'use strict';


var mongoose = require('mongoose'),
  Plot = mongoose.model('Plots');

exports.list_all_plots = function(req, res) {
  Plot.find({}, function(err, plot) {
    if (err)
      res.send(err);
      console.log(plot);
    res.json(plot);
  });
};




exports.create_a_plot = function(req, res) {
  console.log(req.body);
  var new_plot = new Plot(req.body);
  new_plot.save(function(err, plot) {
    if (err)
      res.send(err);
    res.json(plot);
  });
};


exports.read_a_plot = function(req, res) {
  Plot.findById(req.params.plotId, function(err, plot) {
    if (err)
      res.send(err);
    res.json(plot);
  });
};


exports.update_a_plot = function(req, res) {
  Plot.findOneAndUpdate({_id: req.params.plotId}, req.body, {new: true}, function(err, plot) {
    if (err)
      res.send(err);
    res.json(plot);
  });
};


exports.delete_a_plot = function(req, res) {


  Plot.remove({
    _id: req.params.plotId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Plot successfully deleted' });
  });
};
