document.addEventListener("DOMContentLoaded",function(){    //wait all index is loaded

  const topic = 'tuamamma'
  const broker = 'ws://broker.hivemq.com:8000/mqtt'

  Vue.use(VueMqtt.default, broker)

  new Vue({
    el: '#telemetry',      
    data: {           
      temperature: {},
      speed: {},
      latitude: {},
      longitude: {},
      direction: {},
      log: {}
            
    },
    mounted () {
      this.$mqtt.subscribe(topic)     
    },
    mqtt: {
      [topic]: function(message) {       
        
        let msg = JSON.parse(message)
        //console.log(msg)

        this.$data.temperature = msg.temperature
        this.$data.speed = msg.speed
        this.$data.latitude = msg.position.latitude
        this.$data.longitude = msg.position.longitude
        this.$data.direction = msg.direction
        this.$data.log = msg
      }
    }
  });

});