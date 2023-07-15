// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let status = document.getElementById("flightStatus");
    let takeOffBtn = this.document.getElementById("takeoff");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let landBtn = this.document.getElementById("landing");
    let abortBtn = this.document.getElementById("missionAbort");
    let upBtn = this.document.getElementById('up');
    let downBtn = this.document.getElementById('down');
    let rightBtn = this.document.getElementById('right');
    let leftBtn = this.document.getElementById('left');
    let rocket = this.document.getElementById("rocket");
    let movement = 0;
    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    takeOffBtn.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(result){
            status.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10,000";
        }

    });

    landBtn.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });

    abortBtn.addEventListener("click", function()   {
        let result = window.confirm("Confirm that you want to abort the mission.");
        
        if (result){
            status.innerHTML = "Misson aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });

    upBtn.addEventListener("click", function(){ 
        movement = parseInt(rocket.style.bottom) + 10 + 'px';
        console.log(movement);
        rocket.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000
    });

    downBtn.addEventListener("click", function(){
        movement = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000
    });

    rightBtn.addEventListener("click", function(){
        movement = parseInt(rocket.style.left) + 10 + "px";
        rocket.style.left = movement;
    });

    leftBtn.addEventListener("click", function(){
        movement = parseInt(rocket.style.left) - 10 + "px";
        rocket.style.left = movement;

    });

});

