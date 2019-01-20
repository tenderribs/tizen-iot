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


function sendRequestToEpicSchool(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://api.pumpipumpe.ch/api/v1/product", true);
    xhttp.send();
}
