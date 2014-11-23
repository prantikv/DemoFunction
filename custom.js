
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
  theFileSystem.root.getFile(theFileName, {create : true}, onGetFileSuccess, onFileError);
}

function onGetFileSuccess(theFile) {
  alert("onGetFileSuccess: " + theFile.name);
  theFile.createWriter(onCreateWriterSuccess, errorHandler);
}



function onCreateWriterSuccess(writer) {
  alert("onCreateWriterSuccess");

  writer.onwritestart = function(e) {
console.log("Write start");
  };

  writer.onwriteend = function(e) {
    console.log("Write end");
  };

  writer.onwrite = function(e) {
console.log("Write completed");
  };

  writer.onerror = function(e) {
    console.log("Write error: " + e.toString() + br);
  };
  writer.write("File created by Example 18-1: ");
  writer.write("This is another line of text ");
  writer.write(createRandomStory(25));
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