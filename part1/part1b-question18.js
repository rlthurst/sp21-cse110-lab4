function getTime(){
		let d = new Date();
    let time =d.toLocaleTimeString();
    console.log(time);
}
var interval = window.setInterval(getTime, 1000);
