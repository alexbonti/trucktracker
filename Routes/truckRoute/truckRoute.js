/**
 * Created by Navit on 15/11/16.
 */
var UniversalFunctions = require("../../Utils/UniversalFunctions");
var Joi = require("joi");
var Config = require("../../Config");
var Controller = require("../../Controllers");

var sensorApi = {
    method: "GET",
    path: "/api/sensor",
    config: {
      description: "sensor data api",
      tags: ["api", "sensor"],
      handler: function(request, h) {
        var payload=request.query;
        return new Promise((resolve, reject) => {
          Controller.DataController.emitSensorData(payload,function(
            err,
            data
          ) {
            if (err) reject(UniversalFunctions.sendError(err));
            else
              resolve(
                UniversalFunctions.sendSuccess(
                  Config.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,
                  data
                )
              );
          });
        });
      },
      validate: {
        query:{
          //id: Joi.string().required(),
          temperature:Joi.number().required(),
          pressure:Joi.number().required(),
          humidity:Joi.number().required()
          /*location:Joi.object().keys({
            lat:Joi.number().required(),
            lon:Joi.number().required()
          }),*/
        },
        failAction: UniversalFunctions.failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages:
            UniversalFunctions.CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };
  var boxApi = {
    method: "GET",
    path: "/api/box",
    config: {
      description: "box data api",
      tags: ["api", "sensor"],
      handler: function(request, h) {
        var payload=request.query;
        return new Promise((resolve, reject) => {
          Controller.DataController.emitBoxData(payload,function(
            err,
            data
          ) {
            if (err) reject(UniversalFunctions.sendError(err));
            else
              resolve(
                UniversalFunctions.sendSuccess(
                  Config.APP_CONSTANTS.STATUS_MSG.SUCCESS.DEFAULT,
                  data
                )
              );
          });
        });
      },
      validate: {
        query:{
          id: Joi.string().required(),
        },
        failAction: UniversalFunctions.failActionFunction
      },
      plugins: {
        "hapi-swagger": {
          responseMessages:
            UniversalFunctions.CONFIG.APP_CONSTANTS.swaggerDefaultResponseMessages
        }
      }
    }
  };

var TruckRoute = [sensorApi,boxApi];
module.exports = TruckRoute;