
var theEntry;
var fileSystem;


function onInitFs(fs){
	 fileSystem = fs;
	 alert("fileSystem->"+fileSystem.name+" root  is->"+fileSystem.root );
	 console.log(fileSystem.root);
}

function writeFile() {
  //Get a file name for the file
  var theFileName = createRandomString(8) + '.txt';
  alert("writeFile: " + theFileName);
  //fileSystem.root.getFile(theFileName, {create : true}, onGetFileSuccess, onFileError);
}

function onGetFileSuccess(theFile) {
  alert("onGetFileSuccess: " + theFile.name);
  theFile.createWriter(onCreateWriterSuccess, errorHandler);
}



function onCreateWriterSuccess(writer) {
  alert("onCreateWriterSuccess");
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