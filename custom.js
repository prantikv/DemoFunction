
function onInitFs(fs){
	 fileSystem = fs;
	 alert("fileSystem->"+fileSystem.name+" root  is->"+fileSystem.root );
	 console.log(fileSystem.root);

	// fileSystem.root.getFile('prantik.txt', {create: true, exclusive: true}, function(fileEntry) {

 //    fileEntry.isFile === true
 //     fileEntry.name == 'prantik.txt'
 //     fileEntry.fullPath == '/prantik.txt'
 //     alert("file created");
 //  }, errorHandler);

//}


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