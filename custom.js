



function onInitFs(fs){
	 fileSystem = fs;
	 alert("got the file fileSystem" );
	   fs.root.getFile('prantik.txt', {create: true, exclusive: true}, function(fileEntry) {

    // fileEntry.isFile === true
    // fileEntry.name == 'log.txt'
    // fileEntry.fullPath == '/log.txt'

  }, errorHandler);

}


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