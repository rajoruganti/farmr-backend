'use strict';
module.exports = function(app) {
  var farmr = require('../controllers/farmrController');
  //var auth = require('../../')

  // farmr Routes
  app.route('/plots')
    .get(farmr.list_all_plots)
    .post(farmr.create_a_plot);


  app.route('/plots/:plotId')
    .get(farmr.read_a_plot)
    .put(farmr.update_a_plot)
    .delete(farmr.delete_a_plot);
};
