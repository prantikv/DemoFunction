



function onInitFs(fs){
	 fileSystem = fs;
	 alert("got the file fileSystem" );
}
function errorHandler(e){
	alert("Files system error"+e.code);

}

function onDeviceReady() {
 
 	alert(cordova.file.externalRootDirectory);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 5*1024*1024 /*5MB*/, onInitFs, errorHandler);

}

function domLoaded(){
	alert("dom loaded");

document.addEventListener("deviceready", onDeviceReady, false);

}