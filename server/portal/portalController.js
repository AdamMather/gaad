const portalService = require('./portalService');

var exports = module.exports = {};

exports.getProducts = function (req, res) {

  var filter = req.query.searchStr ? req.query.prodnum : null;

  portalService.getProducts(filter)
  .then(data => res.status(200).send(data));
}

exports.getProjectCommissionByMonth = function (req, res) {

    var searchStrFilter = req.query.searchStr ? req.query.searchStr : null;

    portalService.getProjectCommissionsByMonth(searchStrFilter)
      .then(data => res.status(200).send(data));
};

