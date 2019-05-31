/**
 * Created by Alessio
 */
var UniversalFunctions = require("../../Utils/UniversalFunctions");
var async = require("async");
var ERROR = UniversalFunctions.CONFIG.APP_CONSTANTS.STATUS_MSG.ERROR;

var emitSensorData = function(payload,callback) {
  payload.time=Date.now()
  payload.id='linfox1',
  payload.location={
    lat:-37.8098,
    lon:144.9698

  }
  console.log(payload)
  let trucks=[payload];
  //console.log(trucks)

  process.emit("emitTrucks",trucks)
  return callback(null,{});
};

var emitBoxData = function(payload,callback) {
  payload.time=Date.now()
  payload.truck='linfox1'
  payload.delivered=false


  console.log(payload)
  let boxes=[payload];
  //console.log(trucks)

  process.emit("emitBoxes",boxes)
  return callback(null,{});
};


module.exports = {
    emitSensorData: emitSensorData,
    emitBoxData:emitBoxData
};
