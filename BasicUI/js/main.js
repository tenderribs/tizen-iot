
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

    var lightbulb = document.querySelector('.contents');
    lightbulb.addEventListener("click", function(){
    	light = document.querySelector('#lightbulb');
    	light.innerHTML = light.innerHTML == "<img scr='lightoff.png'>" ? "<img scr='lighton.png'>" : "<img scr='lightoff.png'>";
    });
    
};
