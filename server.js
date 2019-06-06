var liveServer = require("live-server");
var mqtt = require('mqtt');
var msg;

var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "127.0.0.1", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};


//var client  = mqtt.connect('tcp://test.mosquitto.org');
var client = mqtt.connect('tcp://broker.hivemq.com');
var topic = "tuamamma"
liveServer.start(params);


client.on('connect', function () {                              
    client.subscribe(topic, function (err) {        
        if (err) {
            console.log(err);
            //log(err);
        }
        if (!err) {
            console.log("sottoscritto al topic:  "+ topic + " con successo");
            //log("sottoscritto al topic con successo");
        }
    })
})

client.on('message', function (topic, message) {                //MQTT

    //upload(topic, message)
    msg = JSON.parse(message)
    //module.exports.msg = msg;


    console.log("client-on:")
    console.log(msg)
    console.log("############")
    
})

module.exports.msg = msg;

/*
function upload(topic, message) {

    msg = JSON.parse(message);
    var targa = topic.split("/")[1];
    
    /*
    top.innerText = topic;
    plate.innerText = targa;
    temperature.innerText = msg.temperature;
    speed.innerText = msg.speed;
    latitude.innerText = msg.position.latitude;
    longitude.innerText = msg.position.longitude;
    direction.innerText = msg.direction;
    */
    //log("temperature "+msg.temperature);


    /*console.log('Targa: ' + targa);
    console.log("temperature "+msg.temperature);
    console.log("speed "+msg.speed);
    console.log("latitude "+msg.latitude);
    console.log("longitude "+msg.longitude);
    console.log("direction "+msg.direction);
    console.log("#####################################");
    
    return msg;
}

*/
