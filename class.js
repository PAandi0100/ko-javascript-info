///35.

//1.
class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

        if (hour < 10) hour = '0' + hour;
        if (min < 10) min = '0' + min;
        if (sec < 10) sec = '0' + sec;

        let output = this.template
            .replace('h', hour)
            .replace('m', min)
            .replace('s', sec);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(()=> this.render(),1000);
    }

}
let clock = new Clock({template: 'h:m:s'});
clock.start();
