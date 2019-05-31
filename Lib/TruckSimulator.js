


let Generator;
function TruckGenerator(numberOfTrucks){
  //  console.log('generating')
    let _generateTruck=function(i){
        let randomInt=function(min, max) {
            return parseInt(Math.random() * (max - min) + min);
        }
        
        let latStart=37.813
        let lonStart=144.9631
        
        let gpsRandom=function(start,positions){
            let lastValue=randomInt(1,9)
            lastValue=lastValue/positions
            return parseFloat(start+lastValue).toFixed(4)
            
        }
    
        let data={
            id:'Linfox_'+i,
            time:Date.now(),
            temperature:randomInt(20,23),
            pressure:randomInt(30,35),
            humidity:randomInt(60,70),
            location:{
                lat:-Math.abs(gpsRandom(latStart,1000)),
                lon:Math.abs(gpsRandom(lonStart,1000))
            }
        }
       // console.log(data)
        return data

    }
       
    
    let trucks=[];
  //  console.log('before loop')
    for(let i=0;i<numberOfTrucks;i++){
        let truck=_generateTruck(i)
        trucks.push(truck)
    }

    //console.log('truck',trucks)


    return trucks

}

function StartSimulator(){
    setInterval(function(){
        process.emit("emitTrucks",TruckGenerator(4))
    },4000)
}




module.exports={TruckGenerator:TruckGenerator,
    StartSimulator:StartSimulator

}