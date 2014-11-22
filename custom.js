function domLoaded(){
	alert("dom loaded");

document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
 
 	alert(cordova.file.externalRootDirectory);
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, onError);

}

function onFSSuccess(fs){
	 fileSystem = fs;
	 alert("Name"+fileSystem.name+"Root name"+fileSystem.root.name  );
}