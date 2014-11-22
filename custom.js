function domLoaded(){
	alert("dom loaded");

document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
 
alert(navigator.camera);

}

