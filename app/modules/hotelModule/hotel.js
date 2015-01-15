var $ = require('jquery');
var bootstrap=require('bootstrap');
module.exports = function(selector) {
    console.log($);
    console.log(bootstrap);
    var bootstrap_enabled = (typeof $().modal == 'function');
    console.log(bootstrap_enabled);
};