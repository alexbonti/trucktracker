var SocketIO = require('socket.io');
var io;

exports.connectSocket = function (server) {
    console.log("socket server started");
    io = SocketIO.listen(server.listener);
    io.on('connection', function (socket) {
        console.log("connection established: ",socket.id);
        socket.emit('message', {message: {type:'connection',statusCode:200,statusMessage:'WELCOME TO DEAKIN NODE BOILERPLATE',data:""}});
    })
}
 process.on("emitMessage",function(message){
     console.log(message)
     io.emit('trucks',{message:message})
 })

 process.on("emitTrucks",function(trucks){
    console.log('trucks')
    io.emit('trucks',{trucks:trucks})
})