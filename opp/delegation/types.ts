interface ControlPanel {
    startAlarm(message: string): any;
}

interface Sensor {
    check(): any;
}

export class MasterControlPanel {
    private sensors: Sensor[] = [];

    constructor() {
        // Instantiating the delegate HEatSensor
        this.sensors.push(new HeatSensor(this))
    }

    start(){
        for(let i=0 ; i < this.sensors.length; i++)
        {
            // Calling the delegate
            this.sensors[i].check();
        }
        setTimeout(()=> this.start(), 1000);
    }

    startAlarm(message: string) {
        console.log('Alarm ' + message);
    }
}

class HeatSensor {
    private upperLimit = 38;
    private sensor = {
        read: function(){ return Math.floor(Math.random() * 100)}
    }

    constructor(private controlPanel: ControlPanel) {
    }

    check() {
        if (this.sensor.read() > this.upperLimit){
            // Calling back the wrapper
            this.controlPanel.startAlarm('Overheating');
        }
    }
}