'use strict';

let router = require('express').Router();
/**
 * @description get the consumerConplaints data
 * @type  {Object[]}
 */
let consumerConplaints = require('../data/consumer-data-finance-views.json');

router.route('/complaints').get((request, respond) => {
  /**
   * @description number of items to display per page
   * @type {Number}
   */
  let perPage = (+request.query.limit || 9); // Number of items to return per api calls
  /**
   * @description Page number
   * @type {Number}
   */
  let page = request.query.skip && +request.query.skip > 0 ? +request.query.skip : 0;
  /**
   * @description Slice the data
   * @type {Object[]} the data to be returned
   */
  let data = consumerConplaints.slice(page, perPage);

  respond.send({
    complaints: data
  });
});


router.route('/complaints/:index').get((request, respond) => {
  let data = consumerConplaints[+request.params.index] || {};
  respond.send(data);
});

module.exports = router;
