/**
 * Created by Navit
 */
'use strict'

var DemoBaseRoute = require('./demoRoute/demoBaseRoute');
var TruckRoute = require('./truckRoute/truckRoute')
var APIs = [].concat(DemoBaseRoute,TruckRoute);
module.exports = APIs;