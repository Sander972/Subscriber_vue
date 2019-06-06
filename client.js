import mqtt from './server.js'

console.log("message: " + mqtt.msg)


new Vue({
    el: "#telemetry",
    data: {
  
      temperature: mqtt.msg.temperature,
      speed: mqtt.msg.speed,
      latitude: mqtt.msg.latitude,
      longitude: mqtt.msg.longitude,
      direction: mqtt.msg.direction
      
    },
    methods: {}
  });


/*
new Vue({
    el: '#temperature', 
    data: {
        temperature: mqtt.msg.temperature
    },
    methods: {}
});

new Vue({
    el: '#speed', 
    data: {
        speed: mqtt.msg.speed
    },
    methods: {}
});

new Vue({
    el: '#latitude', 
    data: {
        latitude: mqtt.msg.latitude
    },
    methods: {}
});

new Vue({
    el: '#longitude', 
    data: {
        longitude: mqtt.msg.longitude
    },
    methods: {}
});

new Vue({
    el: '#direction', 
    data: {
        direction: mqtt.msg.direction
    },
    methods: {}
});
*/




/*
var plate = document.getElementById("plate");
var top = document.getElementById("topic");
var text = document.getElementById("log");
*/
