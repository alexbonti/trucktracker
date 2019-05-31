/**
 * Created by Alessio
 */
var UniversalFunctions = require("../../Utils/UniversalFunctions");
var async = require("async");
var ERROR = UniversalFunctions.CONFIG.APP_CONSTANTS.STATUS_MSG.ERROR;

var emitSocketData = function(payload,callback) {
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


module.exports = {
    emitSocketData: emitSocketData
};
