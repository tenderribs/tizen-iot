window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    var lightbulb = document.querySelector('#lightbulb');
    
    console.log('before adding click listener to lightbob');
    
    var isLightbulbOn = false;

    lightbulb.addEventListener("click", function() {
        console.log('lightbob clicked');
        light = document.querySelector('#lightbulbImage');
        
        if (isLightbulbOn) {
            console.log('lightbob turning off');
            light.innerHTML = "<img src='lightoff.png'>"
            isLightbulbOn = false;

        } else {
            console.log('lightbob turning on');
            isLightbulbOn = true;
            sendRequestToEpicSchool();
            light.innerHTML = "<img src='lighton.png'>"
        }
    });
    
};

var toggleCommand = '{ "5CCF7FA0B34D": { "action": "toggle", "color": "fff7e299" } }';

function sendRequestToEpicSchool(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };

    xhttp.open("POST", "http://192.168.4.186/api/v1/device/");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
    let data = JSON.stringify(toggleCommand);
    
    console.log(toggleCommand);

    xhttp.send(toggleCommand);

    // xhttp.open("POST", "http://192.168.4.186/api/v1/device/", true,);
    // xhttp.open("POST", "https://lumy.epicschool.io/api/v1/commands/newCommands?device_id=1", true,);
    // xhttp.setRequestHeader('Authorization', 'Bearer d3232f2c5e2275e49100fd9454e0f71abb6d6b26da15d5fc66124f6eaecfbeeb6a70f6c07ce970cee8eb49ed569c21d9e23f9e36aa1b75607d90e49b1de78271');
    console.log("set request headers");
    // xhttp.send(toggleCommand);
    console.log("sent toggle request");

}
